"""Validate the historical research ledger whenever it is deliberately updated.

This check is intentionally separate from the hourly editorial validation:
Newsroom updates five publication files and does not claim to re-audit research.
"""
import json
from collections import Counter
from datetime import date, timedelta
from pathlib import Path

source = Path(__file__).resolve().parents[1]
repo = source.parent

news = json.loads((repo / "data/news.json").read_text(encoding="utf-8"))
historical = json.loads((source / "docs/history-coverage.json").read_text(encoding="utf-8"))
research = json.loads((source / "research/coverage-audit.json").read_text(encoding="utf-8"))

rows = research["days"]
assert rows and research["periodStart"] == news["coverageStart"], "Incorrect audit period start"
assert len(rows) == len(historical), "Research ledger has different number of dates"
assert len({r["date"] for r in rows}) == len(rows), "Duplicate research dates"
counts = Counter(a["date"] for a in news["articles"])
hmap = {r["date"]: r for r in historical}
rmap = {r["date"]: r for r in rows}
assert set(hmap) == set(rmap), "Research and publication calendars have different dates"
last_day = max(hmap)
assert research["periodEnd"] == last_day, "Stale research audit periodEnd"
for day, row in rmap.items():
    valid = hmap[day]
    expected_count = counts[day]
    assert row["verifiedArticles"] == expected_count == valid["verifiedArticles"], f"Incorrect article count for {day}"
    assert row["archiveStatus"] == valid["status"], f"Incorrect publication status for {day}"
    assert row["candidateStats"]["published"] == expected_count, f"Incorrect published candidate count for {day}"
    if row["archiveStatus"] in {"complete", "reviewed-no-material-news"}:
        assert row["openDiscoveryPerformed"] and row["reversePassPerformed"], f"Uncertified audit closure on {day}"
        assert row["reviewedSourceIds"] and row["reviewedCategories"], f"Missing audit evidence on {day}"
        assert row["auditDocument"], f"Missing audit document on {day}"

print(f"Research ledger PASS: {len(rows)} dates, {len(news['articles'])} articles, research status verified.")
