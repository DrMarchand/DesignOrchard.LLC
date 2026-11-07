# JHSPR — Copy-Forward Versions and Safe Numeric Tokens

**Authority context:** Design Orchard LLC  
**Working software:** 🔬 DrMarchand’s Lab⚛︎ratory™  
**Historical software custody:** 📚 DrMarchand’s ⚛︎ Library™  
**Human clarification date:** November 7, 2026  
**State:** Proposed versioning rule; not an executed JHSPR runtime, source migration, or permission to publish

## One version, two spellings

JHSPR has a **logical numeric version** and a **representation chosen for the destination**. Dots are allowed when the context understands dotted versions; underscores are preferred where dots would complicate naming, parsing, identifiers, or paths.

| Logical dotted version | Safe token | Lifecycle meaning |
| --- | --- | --- |
| `0.0.0` | `0_0_0` | Core anchor |
| `0.0.1` | `0_0_1` | First purposeful addition |
| `0.9.9` | `0_9_9` | Last pre-core development version |
| `1.0.0` | `1_0_0` | Official core gate |
| `1.0.1` | `1_0_1` | First usable version, only after test and human gate |
| `9.9.9` | `9_9_9` | Last bounded three-position version |

**Ranges:** `0_0_0` → `0_0_1` through `0_9_9` → `1_0_0` through `9_9_9`. Equivalent dotted ranges are `0.0.0`, `0.0.1–0.9.9`, `1.0.0–9.9.9`.

Example: `JHSPR/_versions/0_0_1/` is an extensionless directory token, while manifest metadata may contain `"version": "0.0.1"` and `"version_token": "0_0_1"`. These are **the same logical version**. Existing draft directories using `v0.0.1-initializing` are historical architecture documentation, not proof of a JHSPR language runtime; leave them unchanged unless a separately reviewed migration is authorized.

**Critical distinction:** Dots are usually legal in macOS/Unix filenames. The underscore rule is about compatibility where periods are inconvenient or ambiguous, **not** a claim that dot-separated paths are globally unsafe. Preserve real source extensions (`.js`, `.mjs`, `.json`, `.php`, etc.) and domain dots (`drmarchandslab.com`). Do not turn those dots into underscores.

For programming identifiers that cannot begin with a digit, prefix the token: e.g. `JHSPR_V0_0_1` rather than bare `0_0_1`. Do not replace identifier separators or file extensions indiscriminately.

## Version succession — copy, preserve, increment

1. Establish the actual source and its stable project/file identity. Do not assume `0.0.0` exists from an architecture folder alone.
2. When the current working source is ironed out, **freeze and verify its exact bytes**, purpose, provenance, test receipts, hash and authorized decision.
3. Preserve the frozen version intact. **Duplicate** those same bytes into the next working version; never rename the sole preserved original to achieve the new number.
4. Advance exactly one successor step after verification. A proposed three-digit carry rule maps `0_0_9 → 0_1_0`, `0_9_9 → 1_0_0`, and `1_0_0 → 1_0_1`. No `0_0_10` is implied by the bounded three-digit format.
5. Continue work **only on the new copy**. A failed or unverified new copy does not retroactively invalidate or replace the last accepted snapshot. Preserve failed-attempt receipts.
6. Keep the current working version(s) in the Laboratory. Once a successor is approved, place the predecessor into Library historical custody with verified retrieval, source hash, and receipt. Do not delete the only copy before archival verification.
7. At `9_9_9`, stop ordinary numeric succession; any extension/rollover requires a separately reviewed rule.

**No skipped versions** means no unrecorded transitions or fabricated historical approvals. It does *not* justify generating empty versions to satisfy numbering.

## Suggested mechanical invariants for an implementation

- Parse only three bounded decimal digits separated consistently by `.` or `_`; reject mixed or missing positions.
- Convert dotted to underscored and back without altering numeric identity. Invalid syntax should fail closed, not guess the intended version.
- Each accepted successor has the immediately preceding accepted version as its linked predecessor.
- An existing destination token must never be silently overwritten or reused.
- Core promotion (`1_0_0`), usable promotion (`1_0_1`), checksum validation, archive verification and authorized-human approval are distinct gates.
- Preserve the physical filenames and statuses of pre-existing JHSPR draft files until a proven source inventory and authorized migration exists.

## Verification still required

The real JHSPR source `0_0_0` has **not** been authenticated from the available draft documentation. No MacBook, server, or Google Drive filesystem action was performed by this proposal. Existing work-specific rights and license obligations must be reconciled before version promotion.

**Status:** Proposed policy in a draft branch, awaiting actual implementation and host-level tests.
