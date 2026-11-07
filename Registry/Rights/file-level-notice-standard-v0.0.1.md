# File-Level Rights Notice Standard — Proposed v0.0.1

**Authority root:** Design Orchard LLC  
**Status:** Proposed, not adopted; work-specific rights and publication remain pending authorized-human review  
**Recorded:** 2026-11-06  
**Scope:** Future authored files and targeted reviewed updates, not a blanket rewrite of historical, third-party, or licensed files

## Purpose

A reader opening a file should be able to find its identity, rights attribution or explicit pending status, relevant license, and source of authority **in the file or a reliably linked sidecar**. The copyright owner of a particular qualifying work can differ from the legal company, the creator, the publisher, the maintainer, and the operating division.

**Proposed display template**, for *verified qualifying work only*:

```text
ALT IDENTITY.NAME — FILE.NAME © FIRST_PUBLICATION_YEAR COPYRIGHT_OWNER
```

The ALT symbol, product/service/language **classification**, and copyright notice are independent fields. Do not infer an owner's legal name, work-made-for-hire status, brand-mark registration, copyrightability, or permission from a project name or a GitHub username.

For **pending** work, use a conspicuous factual line instead of an unsupported © claim:

```text
{⚛︎} JHSPR — file.mjs
Copyright holder: pending work-specific verification
Rights record: JHSPR/RIGHTS.md
License: check the destination repository and any work-specific notices
```

This is a template; the chosen ALT form does not itself establish legal or technical rights.

## File-format placement

| Format | Where the notice goes | Structural constraint |
| --- | --- | --- |
| JavaScript, TypeScript, CSS, C-family | Leading block comment before functional code | Preserve required directives, syntax, shebangs, and existing headers |
| Python, Ruby, Bash, PHP | Language-valid leading comment after any required shebang, encoding line, or PHP opening tag | Avoid executing a textual header, changing imports, or breaking syntax |
| Markdown, text documentation | Immediately below the main title, or a clearly linked rights section near the top | Do not obscure the document's subject; preserve historical authorship |
| HTML, XML, SVG | Valid comment or metadata in a position permitted by that format | Preserve XML declaration, doctype, sanitizer and render behavior |
| JSON, JSON Schema | Supported metadata field, or a schema `$comment` if appropriate | **No JS-style comments in JSON**; use a rights sidecar where foreign keys are forbidden |
| YAML, TOML, config | Format-supported comment or permitted metadata | Respect parsers, schemas, generators, and signatures |
| PNG, JPEG, PDF, AI, binary, generated artifacts | Companion rights sidecar and original-source provenance, optional compatible embedded metadata | Never corrupt the binary; don't overwrite creator or license metadata |

For schema-locked files that permit no extra metadata, record the precise path, file hash, version, and ownership status in a sidecar. When the actual copyright holder is known, append `© YEAR OWNER` as a notice; **do not substitute a disclaimer for genuine legal review.**

## Lifecycle metadata: code vs. creative proofs

Use the [proposed code and creative lifecycle correction](../Versioning/code-and-creative-lifecycle-correction-20261106.md) to distinguish:

- **Code:** a version record such as `0.0.0` (core anchor), `0.0.1` (first purposeful change), `1.0.0` (official core), or `1.0.1` (usable only after evidence and required steps). A documentation file at `v0.0.1-initializing` must not imply a production JHSPR runtime.
- **Creative work:** a project-specific first recorded draft `PROOF-0`, followed by `PROOF-1`, `PROOF-2`, etc., and independent delivery/selection events and an evidenced disposition such as `APPROVED`, `REFUNDED`, or `CANCELLED`. KEJ Studio holds proof records; a sent email does not renumber a proof or establish approval.
- **Copyright:** identity, owner, rights evidence and first-publication year remain independently determined; version, proof number and client disposition do **not** change copyright title or licensing.

Prefer displaying a concise lifecycle field adjacent to the file's identity and rights notice. Store immutable predecessor links, approved proof references and decision receipts in machine-readable sidecars. Do not retrofit file headers, rename versions, or relabel client work without evidence and review.

## Rights record (separate from rendered file notice)

Minimum per-work fields: identity, file path, version, work type, human creative contribution, creator attestation and evidence, actual legal owner and basis (including any employment or assignment), first-publication year if used, existing license(s), third-party notices, redistribution scope, review status, approving human and evidence reference. Distinguish `pending`, `verified`, `not_applicable`, and `disputed` without silently promoting any status.

Creation date is **not automatically** the year of first publication. Do not place a blanket © notice on abstract language ideas, methods, names, or content without qualifying human expression.

## Rights and licensing priority

1. Preserve each file's existing valid rights and third-party notices and any applicable repository license.
2. A shared JHSPR package mirrored across repositories may have **identical file bytes** yet be subject to different destination-repository license scopes. Byte parity is not parity of legal rights.
3. Record Joseph Kyle Marchand as a creator **when supported**, without automatically declaring that every AI-assisted file's copyright belongs to him.
4. `Design Orchard LLC` may govern operations or publish when authorized; this does not establish it as the copyright holder of all files.
5. If a repository's LICENSE is missing, ambiguous, or incomplete, flag it rather than silently substituting a standard form.
6. Do not modify or remove existing licenses, third-party attributions, or pre-existing grants through bulk header automation.

## Apache/MIT license decision gate

For new and changed **software** files, use the draft [purpose-first Apache/MIT licensing gate](../Licensing/README.md) to recommend between `Apache-2.0` and `MIT` based on software purpose, contributor/patent considerations, verified rights, third-party dependencies and existing grants. This system only advises; it does **not** create a license, assign copyright, approve release or overwrite a file's current notice. A file's copyright holder and its outbound license must remain independently verified. Art proofs remain KEJ Studio records and are outside this software-only selector.

## JHSPR reference and observed blockers

The draft [JHSPR rights record](../../JHSPR/RIGHTS.md) and [file-rights ledger](../../JHSPR/_versions/v0.0.1-initializing/file-rights.json) show per-file status for the proposed `0.0.1-initializing` mirror. The JHSPR program and artwork should be separately documented.

During review, repositories exposed differing LICENSE contexts, including an MIT license, an Apache-style text with abbreviated sections, an MMS document at a LICENSE path, and missing LICENSE paths. Those require an authorized file-by-file licensing decision; the draft JHSPR rights file neither replaces nor reconciles them.

## Validation and promotion

For each proposed change, check: valid parser/syntax, test outcomes, maintained behavior, fixed third-party notices, checksum/parity, linked source revision, ownership evidence, current file status, and **appropriate custody** (KEJ Studio for creative proof records; Laboratory for current code; Library for superseded software versions). A verified owner must be backed by a **work-specific evidence record**. Promotion and public distribution require final authorized-human review.

**Current disposition:** Proposed policy for review, not a legal determination or automatically enforced cross-ecosystem rule.
