# Dedicated repository migration

Source: `cookiecodespy/cookiecodespy.github.io/ai-race-gazette`

Source commit: `5298a9141a9066a814ff881b6024a62f27658906`

The user portfolio and the source repository were not modified by this import. The new repository root holds the former `ai-race-gazette/` contents, and the four Gazette workflows were relocated to `.github/workflows/` and rebased to the new root.

GitHub Pages was enabled on 2026-10-10 from `main` / `(root)` and its public origin was verified. Eight later articles were reconciled from the original repository without changing the existing 104. The ChatGPT task cutover remains unconfirmed: do not remove the original site's Gazette files or merge cleanup PR #9 until the task is redirected and both main branches are reconciled again.

See the [engineering report](cutover-report-2026-10-10.md), [machine-readable evidence](cutover-evidence-2026-10-10.json), and [operations/rollback runbook](operations-and-recovery.md).
