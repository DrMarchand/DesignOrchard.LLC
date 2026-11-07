# JHSPR v0.0.1 — Identity display validation receipt

**Recorded:** 2026-11-06  
**Artifact scope:** Type-agnostic identity display demonstration only  
**Status:** Isolated local validation passed; integration/release not verified  
**Authorized release:** Not established  
**Permanent Library custody:** Not verified

## Input provenance and byte identity

Source files were read from the proposed Laboratory GitHub branch `docs/jhspr-architecture-20261106`. Exact content was reproduced in an isolated container; Git blob SHA-1 values computed with `git hash-object` matched GitHub's returned blob SHAs.

| File | Git blob SHA-1 |
| --- | --- |
| `format-identity.mjs` | `c79c86d2915a85193126c4a934e2390dd4e8dc3a` |
| `format-identity.test.mjs` | `30335dc51ef9f744d6da3c3b5f1fb7d03ed158bb` |
| `identity-display.schema.json` | `fa143ce6460b968312ac64258ea3d726b4914bf9` |
| `identity-display.examples.json` | `c7bddd2220d57904fe0ffd968c3f88dfce990e44` |

Git blob hashes identify Git objects and match source file bytes; they do not prove authorship, rights, provenance before GitHub, or runtime conformance.

## Isolated test results

- **Node.js:** `v22.16.0`
- **Command:** `node --test format-identity.test.mjs`
- **Result:** 6 test cases passed, 0 failed
- **Python:** `3.13.5`; **jsonschema:** `4.26.0`
- **Schema:** JSON Schema Draft 2020-12 checked with `Draft202012Validator.check_schema`
- **Fixtures:** 3 positive example records accepted; 8 negative records rejected
- **Code effects:** No JHSPR language host or external service executed. The demonstration produced strings and validation results only.

The tests show that `programming_language` remains distinct from `product` and `service`, pending rights omit © even when explicitly requested, verified-record fields are required before a notice can be considered, and blank/malformed entries and multiline identity/rights fields are rejected. A fabricated `verified` JSON record is not legal proof. Only the authorized caller can establish that the rights evidence and human approval are genuine.

## Not established by these tests

- No JHSPR grammar/parser/loader/interpreter or polyglot execution verified.
- No DOLSA conformance or Engine authorization integration verified.
- No production deployment, mark clearance, or work-specific copyright ownership verified.
- No permanent Library custody or authorized-human promotion established.

**Next gate:** Review source and rights evidence, confirm work-specific approval, synchronize draft mirrors, collect exact-revision receipts and Library custody, and obtain an authorized-human release decision.
