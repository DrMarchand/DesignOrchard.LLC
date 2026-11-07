# Code Versions and Creative Proofs — Lifecycle Correction

**Context:** Design Orchard LLC  
**Recorded:** November 6, 2026  
**Source:** Explicit human architectural clarification  
**Record status:** Proposed correction on a draft GitHub review branch; not merged into the governing doctrine or approved as an automated production rule  
**Applies to:** Code version records and creative-artwork proof records, as distinct lifecycle classes

## Principle: separate lifecycles, shared evidence standard

**Code uses numeric versions. Art and creative work use numbered proofs.** A proof is a working draft. A client disposition is not a proof number or a code version. Both tracks preserve identity, history, file-level rights, and a human approval gate, but their numbers must never be conflated.

## 1. Code lifecycle — user-declared meanings

| Version or interval | Meaning | Required evidence |
| --- | --- | --- |
| `0.0.0` | Core-file anchor; earliest structural baseline | Exact file and immutable reference, source hash, reason for existence |
| `0.0.1` | First purposeful usable element or variable introduced against the core anchor | Defined purpose and actual change tied to the `0.0.0` anchor |
| `0.0.2` through `0.9.9` | Ordered development progression, **no required step skipped** | Traceable prior version, change, tests, and evidence for every required transition |
| `1.0.0` | **Official core version**, distinct from a usable release | Core promotion decision with tested source and receipts |
| `1.0.1` | **Usable version** only after the development route and core gate | Usability validation, actual executed behavior, authorized human decision |

User's wording: core files for the version anchor to `0.0.0`; `0.0.1` follows when the file has purpose and a variable added for use; `1.0.0` is officially core; `1.0.1` becomes usable after running through `0.0.1–0.9.9`, without missing a step.

**Do not silently reinterpret this as standard SemVer.** The labels above are project-specific lifecycle gates. The word *usable* is a milestone, not a claim that any current JHSPR runtime is usable.

### Sequence and transition checks

A valid progression needs: stable file/project ID, predecessor link, version, concrete changes, reason/purpose, tests (including failures as appropriate), source hash, evidence receipts, and the human promotion decision. Do **not** manufacture empty historic versions to fill a gap or declare an untested version successful. Missing artifacts are blockers to promotion, not proof of compliant history.

**One numeric detail remains unresolved for machine enforcement:** the exact rollover rule between patch/minor positions (e.g. `0.0.9 → 0.1.0` versus `0.0.10`). The old doctrine bounds numeric versions but does not make the precise step algorithm explicit. Preserve the user's no-skip requirement while marking the exact successor function **pending definition**. Until specified, do not run an automated bulk renumbering or imply that all intermediate versions already exist.

### JHSPR-specific guardrail

Existing `JHSPR/_versions/v0.0.1-initializing/` files are **architecture/documentation and a small identity formatter demonstration**, not a proven JHSPR language parser/loader/runtime. Their documentation version is not evidence that JHSPR's core source `0.0.0` has been located, or that the language itself reached `1.0.0` or `1.0.1`. Inventory the actual core source before migrating JHSPR's software-version ledger.

## 2. Art and client-work lifecycle — user-declared meanings

**PROOF means WORKING DRAFT.** Internal working stages may use `PROOF-x` and the supplied `xyz-ABC` identifier. Retain `xyz-ABC` as a literal proposed internal token; its exact grammar and meaning are not yet established by source.

- **Correction (2026-11-07):** The first **created and recorded** draft is `PROOF-0`. Later created proofs increment per project/product; a client-facing send does **not** renumber its proof.
- The first proof sent to a client may be `PROOF-0` or any later recorded proof. Each send must identify its exact proof/variant and independent transmission evidence. Count created proofs, sent proof IDs, and send events separately. Never consume another project's numbers or imply a fixed number of proofs.
- Record the exact artifact, creator, issue time, client/project identity, feedback, revisions, and approved delivery before claiming the next proof or a final disposition.
- Dispositions include `APPROVED`, `REFUNDED`, and `CANCELLED`. They are **project/engagement decisions** supported by evidence, not alternate names for `PROOF-1`, and they do not delete proof history.
- `APPROVED` requires a traceable authorized client/human decision and identifies which proof or derivative was accepted. It does not automatically authorize public publication or transfer copyright.
- `REFUNDED` is a recorded financial/customer-service outcome, **not** proof a transaction was executed. A refund requires separate transaction evidence and authorized accounting action.
- `CANCELLED` is a recorded cancellation outcome. It does not erase prior work, fees, grants, or rights.
- If a disposition changes, retain prior decisions and timestamps rather than overwriting them.

Creative original vector work, screenshots, art drafts, and final binaries preserve distinct artwork provenance and copyright/license records. A project disposition alone is not evidence of legal ownership.

## 3. Current doctrine conflict / migration plan

The existing [autonomous versioning doctrine](autonomous-versioning-doctrine.json) presently calls `0.0.0` a core structure exception, `0.0.1` initializing, `0.1.0` stable, and `1.0.0` formal release. This user clarification **adds an explicit distinction** between `1.0.0` as the official core and `1.0.1` as the usable milestone. The old doctrine's `1.0.0 = Formal release` wording is ambiguous: a formal **core** release could be compatible, but a claim that `1.0.0` is already usable would conflict with the new gate. The old `0.1.0 = Stable state` label may also be compatible as a development-quality state; it must not automatically be promoted to *usable*. The old document does not explicitly model `PROOF-n` or client dispositions.

**Proposed reconciliation:** retain the previous file as historical evidence; add the new lifecycle semantics and proof track in a reviewed, versioned replacement or amendment; migrate only after confirming numeric carry/step rules and verifying existing records. Do not retroactively assign version/proof numbers to historic files without source and customer evidence. This draft does not silently supersede repository licensing, copyright, or existing client agreements.

**Machine-readable proposal:** [version-and-proof-lifecycle-proposal.json](version-and-proof-lifecycle-proposal.json).

## 4. Required promotion gate

Before enforcing this as Design Orchard LLC policy: settle the rollover rule and the internal `xyz-ABC` stage grammar, examine historical code/proof sequences, prove tests and negative cases, preserve per-file copyright provenance, capture evidence in the correct operating lane, verify software-history custody in 📚 DrMarchand’s ⚛︎ Library™ where relevant, and obtain authorized human validation. **Creative proof records remain under 🎥 KEJ Studio℠; current working code remains in 🔬 DrMarchand’s Lab⚛︎ratory™.** See the [Nana proof and software custody correction](../Creative/nana-proof-system-and-code-custody-20261107.md).

**Disposition:** Proposed correction grounded in the human's stated intent. Implementation, migration, software readiness, client approval, refund execution, and publication are **not** asserted by this file.
