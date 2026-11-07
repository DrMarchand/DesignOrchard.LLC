# Apache/MIT Recommendation Gate — Isolated Validation Receipt

> **File rights:** Copyright holder pending work-specific verification. The code and this validation record are not an authorization to use, license, or distribute any particular work.

**Documented:** November 7, 2026  
**Proposal:** `Registry/Licensing/_versions/v0.0.1-initializing`  
**Authority root:** Design Orchard LLC  
**Runtime scope:** Plain JavaScript advisory-only function, no connections, no writes, no legal approvals  
**Status:** `review_pending` — isolated test pass only; cross-system integration, legal accuracy under all circumstances and production readiness not verified

## Exact source verification

| GitHub file | Git blob SHA-1 |
| --- | --- |
| `recommend-license.mjs` | `738fcf5e686de5d9426224d05e42931313886c08` |
| `recommend-license.test.mjs` | `0d2308f474f286abd0ec2d4471194591af8ced06` |
| `license-options-v0.0.1.json` | `3aac78c293e6648438939493230f323118b1ce78` |
| `license-review-input-v0.0.1.schema.json` | `e3b4b71534ead4e6a586bbddb3a23332f09afefc` |
| `license-decision.examples.json` | `aaec57fe3459adcb95c9d3a07d48032b031686b1` |

The two JavaScript blobs were independently hashed in an isolated local container with `git hash-object`; the digest values match the GitHub source and tests. The three JSON GitHub files were separately read back and checked for valid JSON and expected structural constraints. Git blob parity is a byte-integrity receipt, **not** a copyright or license authorization.

## Tests observed

- Node.js: v22.16.0.
- Test command: `node --test recommend-license.test.mjs`.
- **19/19 tests passed**, 0 failed. This tested the exact JavaScript source/test bytes confirmed above.
- Machine JSON checked from GitHub: **10/10 catalog and schema structural checks passed**; four sample inputs matched declared enums; six deliberately malformed samples were rejected by the basic shape/enum checker.
- An equivalent locally generated JSON Schema was checked using Python `jsonschema` Draft 2020-12 and the same 4 positive and 6 negative scenarios. The GitHub JSON files were reserialized independently and do **not** share the exact local file hashes; no exact-byte remote Draft 2020-12 validation is claimed.
- Tests cover: Apollo/Apache language-tooling preference, MIT utility preference, patent review, unresolved work-specific ownership, third-party dependency blockers, preexisting MIT preservation, excluded art/mixed assets, restrictive-terms mismatch, selected-license override flags, client-contract review, malformed inputs and no automated application.
- **No Github `LICENSE` file changed. No licensing transaction or public release executed.**

## Legal and integration boundaries

This is an explainable recommendation **heuristic**. It cannot scan dependency trees, distinguish third-party code from human or AI contributions, authenticate an ownership assignment, determine exact patent coverage, perform legal due diligence, or apply a new license. It returns `applicationAllowed: false` and `releaseAuthorized: false` for every input; an authorized human with work-specific evidence must approve any future application. The two candidate license choices do not include restrictive/proprietary licensing: if exclusivity is required, report **no matching choice**.

The main review flags from GitHub were two abbreviated Apache-style license texts, one MMS document stored at a `LICENSE` path, an existing MIT grant, and other repositories with missing top-level `LICENSE` files. These findings are file-observation flags requiring review, not legal non-compliance judgments.

**Not established:** production UI, current-release enforcement, complete dependency scanning, absolute patent clearance, verified copyright owner, license change authority, Library historical-version custody, or authorized human promotion.
