# Design Orchard Nana Proof System — Creative and Software Custody Boundaries

**Authority root:** Design Orchard LLC  
**System name as supplied by the creator:** Design Orchard Nana proof system  
**Creative operating lane:** 🎥 KEJ Studio℠  
**Code development lane:** 🔬 DrMarchand’s Lab⚛︎ratory™  
**Historical software-version lane:** 📚 DrMarchand’s ⚛︎ Library™  
**Recorded:** 2026-11-07  
**Status:** Proposed architecture correction, not a deployed or approved production system

> **Newer human clarification controls:** Artwork that has proofs and its proof history belong under KEJ Studio. Active/current working code version(s) belong to the Laboratory. The Library maintains earlier/superseded software versions and the actual historical version records. Do **not** put active working source in the Library or treat creative client proofs as Library-owned software versions.

## Responsibility and custody

| Record | Assigned operational/custody lane | Does not imply |
| --- | --- | --- |
| Artistic project, source art, creative drafts `PROOF-0..N`, exact variants | KEJ Studio, with creative production through DrMarchand’s 🎨 Creative Canvas and appropriate restricted working storage | The client received or approved every draft |
| Proof sends, provider receipts, client selections, approval evidence, cancellation/refund references and creative billing scope | **Restricted KEJ Studio proof record**, with minimum necessary contact/payment references, not unrelated email contents | That a refund was executed, a client read an email, or copyright transferred |
| Currently worked-on software versions, source, test results and current-version working manifests | 🔬 DrMarchand’s Lab⚛︎ratory™ | That a current branch is a stable production release |
| Superseded/previous software versions, immutable source snapshots, provenance, receipts and historical version records | 📚 DrMarchand’s ⚛︎ Library™ | That archived software remains the active implementation |
| Company-wide governance and reference index | Design Orchard LLC | Physical possession of every creative file or active source tree |

**Important:** GitHub may hold code repositories, review branches, and documentation, but is not automatically the canonical operational storage for either creative proofs or Library custody. Exact buckets, paths, encryption/ACLs, retention, and connector status must be verified independently. The Laboratory's working platform and KEJ Studio's creative production lane remain distinct.

## Creative track — Design Orchard Nana proof system through KEJ Studio

1. `PROOF-0` is the first **recorded** creative draft within a project or product. Later recorded revisions increment `PROOF-1`, `PROOF-2`, etc., without changing their numbers because of an email.
2. The designer may create 22 drafts but transmit only five. Keep separate **created count**, **distinct sent proof count**, **send-event count**, and **included revision-round count**.
3. A sent proof must identify the exact frozen proof and variant, exported-file checksum, limited destination reference, event time, and independent provider receipt. A subject line or screenshot alone is not evidence of successful sending.
4. An `APPROVED` disposition references the specific proof **and variant** actually selected by the authorized client/approver, even if a newer unsent draft exists. For internal company artwork, an authorized internal approver may approve without client email.
5. A `CANCELLED` or `REFUNDED` project references the **latest verified sent proof as of the decision**, if any, and preserves unsent drafts as internal history. If no proof was sent, the project can still be cancelled and a payment may still be refunded; the last-sent proof pointer is **null**. `REFUNDED` as a completed financial claim needs its own payment/refund transaction evidence.
6. A restart should be considered within the first three drafts and reviewed no later than the fifth when the original creative concept is not working. **This is a suggested internal quality checkpoint, not a promise of free client revisions and not an automatic denial of service.**
7. Chargeable **new concepts** and material changes to the signed client brief require a clearly scoped new quote and informed client approval before proceeding. Minor included revisions, defect corrections, and out-of-scope redesigns need separate rules established in the agreement, not inferred from proof count.
8. Do not infer misconduct. A provider outage or missing event yields `VERIFICATION_UNAVAILABLE` and a minimally invasive reconciliation path, not an allegation against designer or client.

### Private approval without broad mailbox monitoring

Prefer a dedicated proof submission service and a purpose-specific email sender. The service records scoped proof IDs, exact artwork hash, provider event ID, limited recipient token and authenticated approval token/receipt. Use a secure client review portal where acceptance binds an authenticated client to the exact proof/variant/hash. Verify webhooks cryptographically and store enough evidence to check integrity. Do **not** read or archive a designer's unrelated mailbox, a client's private correspondence, unnecessary message bodies, contact lists, or tracking pixels.

A sent event is not a read/open event or an approval. A portal approval is not automatically a copyright assignment or a payment. Access to restricted KEJ Studio records must be scoped by role and engagement; the company owner can review evidence through a controlled, accountable process.

## Software track — active Laboratory, historical Library

1. **Core anchor `0.0.0`** starts the source lineage. **`0.0.1`** is its first purposeful addition. Continue the previously defined ordered development progression; **`1.0.0`** is the official core and **`1.0.1`** the usable milestone only when the full required history and validation are evidenced.
2. The Laboratory may have more than one **current** version because multiple active tracks/branches can exist. "Current" is an explicit active-state designation, never inferred from the highest numeric version alone.
3. When a version becomes superseded, produce an immutable history packet: stable code ID, exact version/source hash, predecessor and successor link, timestamp, purpose, test/negative test evidence, original rights/licensing, authorizations, and a receipt.
4. Archive that superseded version and its historical record to the Library. **Verify destination readback/checksum and custody pointer before treating the archival transition as complete.** Do not delete the last recoverable source copy merely because an upload was attempted.
5. Keep current working code and its active-state pointers in the Laboratory. The Library has the superseded source versions and their historical records. Cross-reference them without declaring that the same repository path proves both operational states.
6. No software version is treated as ready merely because documentation, a source archive, or a semantic number exists. Validate the exact code revision and obtain the authorized human decision.

## Correction to earlier proposals

Earlier draft language stated that the first **client-facing** proof must be `PROOF-1` and suggested universal permanent Library custody for all proof events. Both assumptions are **superseded** by the newer human statements.

- First recorded creative draft: `PROOF-0`; a first client transmission can refer to any existing `PROOF-N`.
- Creative proof data, customer evidence and project dispositions are **KEJ Studio records**.
- 📚 DrMarchand’s ⚛︎ Library™ is the archive of **past software versions**; 🔬 DrMarchand’s Lab⚛︎ratory™ maintains the **current working version(s)**.
- The Library may receive an index to other systems only by a separately authorized custody policy; no client/private proof payload is automatically copied there.

The initial `JHSPR/_versions/v0.0.1-initializing` in GitHub is a documentation package and prototype, **not verified current JHSPR program source or a historical software version archived into the Library**.

## Evidence and human gate

**Unverified:** physical storage locations, access controls, mail-provider integration, cryptographic receipt issuance, proof send detection, client authentication, retention durations, version archival automation, and production deployment. This public proposal contains no real client emails, addresses, artwork files, transaction data, source secrets, or live endpoints.

Before a production release: implement and test positive/negative transitions (including missing provider events, resend, alternate selected proof, failure to archive, null last-sent reference and attempted forged approval), verify rights and contractual scope, demonstrate storage and retrieval in the right lanes, then obtain authorized-human validation.

**Status:** Proposed and reviewable. No creative proof or code version was moved, archived, approved, cancelled, refunded or published by this document.
