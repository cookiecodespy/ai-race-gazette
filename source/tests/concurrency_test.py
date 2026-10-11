"""Integration regression for atomic Newsroom vs Backfill publication.

Creates a disposable local Git repository: never contacts or alters the live
repository. Both writers start from the same SHA; stale CAS must fail, and a
reconciled retry must preserve both independent events and all five mirrors.
"""
import json
import subprocess
import tempfile
import unittest
import xml.etree.ElementTree as ET
from collections import Counter
from pathlib import Path

FILES = (
    "data/news.json",
    "source/public/data/news.json",
    "feed.xml",
    "source/public/feed.xml",
    "source/docs/history-coverage.json",
)


def git(where, *args, check=True):
    return subprocess.run(
        ["git", "-C", str(where), *args], check=check,
        text=True, capture_output=True,
    )


def story(id_, date_, event):
    return {"id": id_, "date": date_, "eventKey": event,
            "title": id_, "summary": "A confirmed event"}


def release(articles):
    ids = [a["id"] for a in articles]
    events = [a["eventKey"] for a in articles]
    if len(set(ids)) != len(ids) or len(set(events)) != len(events):
        raise ValueError("Duplicate id or eventKey; abort conflicting publication")
    counts = Counter(a["date"] for a in articles)
    days = sorted(counts)
    coverage = [{"date": day, "status": "partial",
                 "verifiedArticles": counts[day]} for day in days]
    archive = {"coverageStart": days[0], "articles": articles,
               "dailyCoverage": coverage}
    news = json.dumps(archive, ensure_ascii=False, indent=2) + "\n"
    channel = ET.Element("channel")
    for article in sorted(articles, key=lambda a: (a["date"], a["id"]), reverse=True):
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "guid").text = article["eventKey"]
        ET.SubElement(item, "title").text = article["title"]
    feed = ET.tostring(channel, encoding="unicode") + "\n"
    return {
        FILES[0]: news, FILES[1]: news,
        FILES[2]: feed, FILES[3]: feed,
        FILES[4]: json.dumps(coverage, ensure_ascii=False, indent=2) + "\n",
    }


def stage_and_commit(worktree, articles, message):
    for path, contents in release(articles).items():
        file = worktree / path
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_text(contents, encoding="utf-8")
    git(worktree, "add", "--", *FILES)
    git(worktree, "commit", "-m", message)
    return git(worktree, "rev-parse", "HEAD").stdout.strip()


def checked_ref(repo, new_sha, expected_old_sha):
    return git(repo, "update-ref", "refs/heads/main", new_sha, expected_old_sha,
               check=False)


class ConcurrentPublicationTests(unittest.TestCase):
    def test_stale_writer_aborts_then_merges_without_losing_events(self):
        with tempfile.TemporaryDirectory(prefix="gazette-cas-") as td:
            base_path = Path(td)
            repo = base_path / "repo"
            repo.mkdir()
            git(repo, "init", "-b", "main")
            git(repo, "config", "user.name", "Gazette CI")
            git(repo, "config", "user.email", "ci@example.invalid")
            seed = [story("existing", "2026-09-01", "base-event")]
            base = stage_and_commit(repo, seed, "seed")
            a = base_path / "newsroom"
            b = base_path / "backfill"
            git(repo, "worktree", "add", "--detach", str(a), base)
            git(repo, "worktree", "add", "--detach", str(b), base)

            # Two independent writers captured the same base SHA.
            live = seed + [story("new-today", "2026-10-11", "news-a")]
            historical = seed + [story("old-story", "2026-09-02", "hist-b")]
            sha_a = stage_and_commit(a, live, "newsroom update")
            sha_b = stage_and_commit(b, historical, "backfill update")
            self.assertEqual(checked_ref(repo, sha_a, base).returncode, 0)
            self.assertNotEqual(checked_ref(repo, sha_b, base).returncode, 0)
            self.assertEqual(git(repo, "rev-parse", "main").stdout.strip(), sha_a)

            # The losing writer must reread HEAD and reconcile both datasets.
            git(b, "reset", "--hard", sha_a)
            merged = live + [historical[-1]]
            sha_b2 = stage_and_commit(b, merged, "backfill rebased")
            self.assertEqual(checked_ref(repo, sha_b2, sha_a).returncode, 0)

            # One branch update publishes all five files; readers cannot see a
            # newer JSON paired with an older RSS from a partial commit.
            root = git(repo, "rev-parse", "main").stdout.strip()
            self.assertEqual(root, sha_b2)
            actual = {p: git(repo, "show", f"main:{p}").stdout for p in FILES}
            self.assertEqual(actual[FILES[0]], actual[FILES[1]])
            self.assertEqual(actual[FILES[2]], actual[FILES[3]])
            doc = json.loads(actual[FILES[0]])
            self.assertEqual({s["id"] for s in doc["articles"]},
                             {"existing", "new-today", "old-story"})
            self.assertEqual(len({s["eventKey"] for s in doc["articles"]}), 3)
            coverage = json.loads(actual[FILES[4]])
            self.assertEqual(coverage, doc["dailyCoverage"])
            self.assertEqual(sum(z["verifiedArticles"] for z in coverage), 3)
            rss_titles = [e.text for e in ET.fromstring(actual[FILES[2]]).findall("./item/title")]
            expected_titles = [z["title"] for z in sorted(
                doc["articles"], key=lambda z: (z["date"], z["id"]), reverse=True)]
            self.assertEqual(rss_titles, expected_titles)

    def test_collision_same_event_is_rejected_before_any_commit(self):
        original = [story("one", "2026-09-01", "same-event")]
        new = story("two", "2026-09-02", "same-event")
        with self.assertRaisesRegex(ValueError, "Duplicate id or eventKey"):
            release(original + [new])


if __name__ == "__main__":
    unittest.main()
