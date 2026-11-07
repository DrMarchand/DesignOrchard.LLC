# Design Orchard — Software License Selection Gate

> **File rights:** Copyright holder pending work-specific verification; the draft code and policy are not automatically licensed under Apache-2.0 or MIT by appearing here.

**Owner of the governing decision:** Design Orchard LLC and its authorized human  
**Working software lane:** 🔬 DrMarchand’s Lab⚛︎ratory™  
**Superseded software versions and license-history custody:** 📚 DrMarchand’s ⚛︎ Library™  
**Creative artwork and Nana proof records:** 🎥 KEJ Studio℠  
**Stage:** `0.0.1-initializing` **proposal**, not deployed, released, or automatically enforced

## Decision the system is allowed to recommend

For **qualifying, appropriately owned software proposed for release**, present only:

| License | When it may fit | Principal duties and limits |
| --- | --- | --- |
| [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0.html) (`Apache-2.0`) | Language runtimes, shared engines, SDKs, collaborative infrastructure, patent-sensitive software | Express contributor patent grant/termination provisions; preserve license/third-party notices, mark modified files, and carry required NOTICE information |
| [MIT License](https://opensource.org/license/mit) (`MIT`) | Smaller utilities, minimal libraries, straightforward redistribution | Short permission and warranty text; preserve copyright/permission notice; no equivalent express patent license or patent retaliation wording |

**Verified Apache catalog status as of November 7, 2026:** Apache License **2.0** is the current general Apache Software Foundation license. Do not automatically choose a hypothetical future version. If Apache publishes a successor, verify its authenticity, SPDX identity, terms, compatibility, suitability, migration consequences and human approval before adding it to a revised catalog.

Both are permissive: commercial use, modification, distribution and closed-source derivatives are permitted subject to applicable conditions. **Neither grants exclusivity, bans commercial reuse, or prohibits derivatives.** A proprietary/client-only objective cannot be met merely by selecting one. Choosing a license does not clear patents, transfer ownership, or entitle publication.

## Review sequence

1. **Purpose** — what is the software and what does it do? Language, Engine, SDK/API, utility, library, or other?
2. **Offering intent** — internal only, outbound public release, or client delivery? Internal development alone does not require an outbound public license grant. Inspect any existing license and distributions separately.
3. **Work scope** — separate source code from creative art, assets, client proofs, trademarks, secrets and third-party packages. The code-license selector does **not** grant rights in KEJ Studio artwork.
4. **Rights and contributors** — identify the human legal copyright owners, applicable assignments, contributor permissions, third-party notices and any AI-assisted authorship questions. Employer, publisher and file location are not automatically rights owner.
5. **Dependencies, existing grants, and patent exposure** — perform dependency bill-of-materials and rights audit. Existing public grants cannot simply be erased by rewriting `LICENSE`. Assess patent considerations rather than using an automatic legal conclusion.
6. **Explain recommendation** — the advisory module scores explicit project facts and displays both the favored license and all flags. A recommendation can exist while application is **blocked**.
7. **Human selection** — the authorized owner chooses `Apache-2.0` or `MIT`, including a documented rationale for overrides.
8. **Controlled application** — only after real rights review and release approval may a separately authorized implementation create the complete unmodified authoritative license text, correct copyright attribution, required NOTICE and source-file SPDX headers, and a release-specific approval receipt. **The current prototype cannot execute that step.**
9. **Preserve history** — current working source stays with the Laboratory; the Library receives verified historical versions and their applicable licenses. Never silently retroactively relicense old versions.
10. **Validate and publish** — exact source revision, license hash, dependencies, permitted distribution, tests, security review, human authorization, archival receipt and approved publication route are all distinct requirements.

## Automated flags, not accusations

`NON_SOFTWARE_SCOPE`: art or mixed assets require separate work-level rights; `PRIVATE_RELEASE_NOT_DECIDED`: avoid an unneeded public license decision; `NEITHER_LICENSE_MATCHES_RESTRICTIONS`: business intent calls for more restrictive terms; `RIGHTS_PENDING` / `RIGHTS_DISPUTED`: ownership cannot be presumed; `DEPENDENCIES_UNREVIEWED` / `DEPENDENCY_CONFLICT`: inventory/compatibility needed; `EXISTING_LICENSE_UNVERIFIED` / `EXISTING_LICENSE_OUTSIDE_POLICY` / `RELICENSING_REQUIRES_REVIEW`: do not overwrite existing grants; `PATENT_REVIEW_NEEDED` and `MIT_NO_EXPRESS_PATENT_GRANT`: material patent questions; `CLIENT_CONTRACT_REVIEW`: work-for-hire and deliverable promises; `CONTRIBUTION_PROVENANCE`: verify incoming rights; `OVERRIDE_REQUIRES_RATIONALE`: keep explicit human reasons.

Missing information stays **unknown/pending**, not an assertion of misconduct.

## Repository audit observations (read-only evidence snapshot, November 7, 2026)

| Repository | Observed `LICENSE` content | Proposed disposition |
| --- | --- | --- |
| `DrMarchand/DesignOrchard.LLC` | An Apache 2.0-looking document with literal `4–9. [Same as standard Apache 2.0 license text]` placeholder | **BLOCK** confident full-text compliance claim; compare official license and obtain reviewed replacement if appropriate |
| `DrMarchand/drmarchandslibrary.org` | Same abbreviated Apache-style text | Same completeness review |
| `DrMarchand/api` | MMS documentation under `LICENSE` path rather than an identified standard license | **BLOCK** ungrounded Apache/MIT inference; inspect repository-specific rights, distribution and history |
| `DrMarchand-Library/api` | MIT text with repository-specific asset-boundary paragraph | Preserve existing MIT grant and inspect rights of additions |
| `DrMarchand/drmarchandslaboratory.com` | No root `LICENSE` found in review; proposed `RIGHTS.md` available | Neither public-license choice can be claimed as already in force |
| `DrMarchand/NFE` | No root `LICENSE` found in review; `RIGHTS.md` contains draft attribution | Resolve implementation rights before public licensing claims |

The audit observes **file content**, not a legal compliance ruling, distribution history, full legal audit, or proof of copyright ownership. Do not overwrite or replace any existing license automatically.

## Pure JavaScript demonstration

- [Recommendation module](_versions/v0.0.1-initializing/recommend-license.mjs) (no file write, network, mutation, licensing, or human approval capability).
- [Automated tests](_versions/v0.0.1-initializing/recommend-license.test.mjs) — run from this directory using `node --test recommend-license.test.mjs` in an isolated local test environment.
- [Two-option license catalog](_versions/v0.0.1-initializing/license-options-v0.0.1.json) — evidence-source links and obligations.
- [Input JSON Schema](_versions/v0.0.1-initializing/license-review-input-v0.0.1.schema.json) — structural validation only.
- [Illustrative cases](_versions/v0.0.1-initializing/license-decision.examples.json) — no actual license approvals.
- [Isolated validation receipt](_versions/v0.0.1-initializing/validation-receipt-20261107.md).

A score is a **reproducible heuristic**, not a legal opinion. The module returns an optional recommendation, explanatory reasons, risk flags, blockers, and `applicationAllowed:false` / `releaseAuthorized:false` regardless of inputs. No GitHub App, agent, or tool may self-authorize legal licensing.

## Unresolved decisions before production

Confirm exact package boundaries; verified ownership of each source contribution; patent posture; distribution intent and client contracts; complete third-party component inventory; license-file completeness and compatibility; permitted notice and copyright holder; approved Apache-catalog update policy; human authority; release/rollback procedure; and tested current-versus-historical version custody.

**Current disposition:** `review_pending`. This document describes a proposed policy and tested advisory code, not a deployed legal approval system.
