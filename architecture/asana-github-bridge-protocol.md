# Asana ↔ GitHub Bridge Protocol

This document defines the public-safe bridge between Asana execution tracking and the GitHub architecture mirror for Design Orchard LLC.

## Principle

What is done to one side must be reflected on the other side, or the difference must be explained.

The bridge does not require Asana or GitHub to always update first. It requires that every meaningful state change has a corresponding mirror state, or a documented exception.

## System Roles

| System | Role |
| --- | --- |
| Asana | Execution source: tasks, ownership, dates, status, blockers, review cycles |
| GitHub | Versioned mirror: architecture docs, issues, pull requests, changelog, release history |
| Google Sheets | Registry source: canonical IDs, connector maps, relationship tables |
| Google Drive | Canon source: official documentation and governance records |

## Bridge Object

Every mirrored item should have a shared bridge ID.

Format:

```text
DO-BRIDGE-YYYYMMDD-NNN
```

Example:

```text
DO-BRIDGE-20260620-001
```

## Required Mirror Fields

Each mirrored Asana task and GitHub issue/doc entry should track:

| Field | Meaning |
| --- | --- |
| Bridge ID | Shared identifier across systems |
| Asana URL | Link to execution task or project |
| GitHub URL | Link to issue, pull request, or markdown doc |
| Source System | Which system changed first |
| Mirror Status | Synced, Pending, Drifted, Blocked, Intentionally Unmirrored |
| Drift Reason | Required when systems differ |
| Last Verified | Date the mirror pair was checked |
| Owner | Person or system responsible for reconciliation |

## Mirror Status Definitions

| Status | Definition |
| --- | --- |
| Synced | Asana and GitHub represent the same state |
| Pending | One side changed and the other needs updating |
| Drifted | Both sides exist but disagree |
| Blocked | Sync cannot happen because of permission, missing data, or policy |
| Intentionally Unmirrored | Difference is deliberate and documented |

## Scientific Reconciliation Rule

For every meaningful action:

```text
Observe → Record → Mirror → Compare → Explain Difference → Resolve or Preserve Exception
```

If Asana changes first, GitHub must receive one of:

1. Matching issue update
2. Matching architecture doc update
3. Matching changelog entry
4. Documented reason why GitHub was not updated

If GitHub changes first, Asana must receive one of:

1. Matching task update
2. Matching execution task
3. Matching review task
4. Documented reason why Asana was not updated

## Drift Reasons

Allowed drift reasons:

- Private or sensitive content excluded from GitHub
- Draft work not ready for versioned mirror
- GitHub change is technical implementation only
- Asana change is scheduling/ownership only
- Permission failure
- Awaiting review
- Duplicate object pending merge
- Legacy object retained for historical continuity

## Minimum Implementation

1. Create a GitHub issue for each major Asana architecture initiative.
2. Add the GitHub issue URL to the Asana task notes.
3. Add the Asana task/project URL to the GitHub issue body.
4. Maintain a bridge ledger file in GitHub.
5. Review drift weekly or after major architecture changes.

## Bridge Ledger Location

```text
architecture/asana-github-bridge-ledger.md
```

## Current Anchor Project

Asana project:

```text
𐂷 Design Orchard LLC — Brand Architecture & Systems Registry
```

GitHub repository:

```text
DrMarchand/DesignOrchard.LLC
```

## Boundary

Do not mirror private credentials, private financial account details, confidential client data, or sensitive operational records into GitHub.

Public-safe architecture, registry structure, operating models, and execution metadata may be mirrored.
