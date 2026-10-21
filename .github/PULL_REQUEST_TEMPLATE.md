<!--
IntelliAttend standard PR template — identical in all 8 repositories.

Source of truth : IntelliAttend/.github/PULL_REQUEST_TEMPLATE.md
Deploy to       : <repo>/.github/PULL_REQUEST_TEMPLATE.md   (8/8 repos)

⚠️ Why a per-repo copy and not only the org fallback:
   GitHub requires the `.github` defaults repository to be PUBLIC, and
   IntelliAttend/.github is private — so the org-level template currently
   applies to ZERO repositories. Verified:
     GET /repos/IntelliAttend/IntelliAttend-BusUnit/community/profile
       → "pull_request_template": null
   Make the org repo public AND copy this file per repo. BusUnit and
   Parent-Mobile-App have no template at all today.
-->

## Summary
<!-- What does this change, and why? One or two lines. -->

## Jira
<!-- e.g. Closes IA-123. The `Commit Convention` CI job enforces this. -->
Closes IA-

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Refactor / optimisation
- [ ] Infrastructure / CI / tooling
- [ ] Documentation

## What changed
-

## How it was tested
<!-- CI evidence is mandatory: paste the check names + result, or state that CI
     does not yet cover this area and describe what you did instead. -->

## Evidence
<!-- Test output, screenshots, logs, recording link.
     A PR without evidence is a hypothesis. -->

## Risk & rollback
<!-- What breaks if this is wrong? How do you undo it? -->

## Checklist
- [ ] Acceptance criteria in the Jira issue are met
- [ ] Tests added/updated and passing
- [ ] No secrets, student records, or production data included
- [ ] Docs updated if behaviour changed
- [ ] Branch name contains a Jira key (`feature/IA-123-…`)
- [ ] Commit subjects follow `<type>(<scope>): <summary> (IA-123)`
- [ ] **Reviewed by someone other than the author** (name the reviewer)

<!--
═══════════════════════════════════════════════════════════════════════════
Promote PRs and hotfix PRs use the blocks below INSTEAD of the sections above.
Uncomment the one that matches; delete the other.
-->

<!--
## (For school-dev → school-main promote PRs)
### Promotion checklist
- [ ] CI green on `school-dev` at merge SHA `<sha>`
- [ ] Every commit in this promotion references a Jira key
- [ ] No schema migrations in this batch (migrations are MANUAL)
- [ ] Staging verified (URL / evidence link)
- [ ] Rollback plan: `git revert -m 1 <sha>` on `school-main`
-->

<!--
## (For hotfix/IA-* → school-main hotfix PRs)
### Hotfix contract — SEV-1 valve
- [ ] Incident channel informed & linked: <link>
- [ ] Merge commit (2 parents) — never squash
- [ ] If a direct `(#hotfix)` push was used: the subject contains `(#hotfix)`
- [ ] `hotfix-backport` reconciliation PR opened (auto) — merge within **24h**
-->
