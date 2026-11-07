# Dynamic identity display contract — v0.0.1 (initializing)

**Record:** DO.DML.JHSPR.1  
**Scope:** Cross-type display model demonstrated in the JHSPR architecture folder; not proof of JHSPR language execution.  
**Proposed display:** **ALT IDENTITY.NAME [© YEAR OWNER when rights are independently verified]**

## The classification is metadata, not part of the name

- `identity.alt`: the explicit leading symbol (e.g. `⚛︎`); this is an identity token, **not** an HTML image alt attribute.
- `identity.name`: the exact name, without a product/service designation being inferred.
- `identity.type`: an open, machine-readable classification such as `programming_language`, `protocol`, `service`, or `product`. The renderer does **not** print or infer this field.
- `identity.record_id`: the stable ecosystem file identity; not a legal owner or copyright owner.
- `rights.status`: `pending`, `verified`, or `not_applicable`. A `pending` record does not print a © notice.
- `rights.copyright`: work-specific year, copyright owner, protected work identity, approval reference, and approving human, required only for a `verified` claim.

**JHSPR classification:** `programming_language`. Naming a language does not automatically classify it as a commercial product or a service. Commercial offerings and trademark claims require their own review.

## Rendering and authority

1. Read `identity.alt`, `identity.name`, and `identity.type` from a bounded data record.
2. Render the identity as `ALT NAME` without changing spelling or adding ™/℠.
3. Render ` © YEAR OWNER` **only** if `rights.status` is `verified`, all work-specific approval fields are present, and an authorized caller explicitly supplies `allowCopyrightNotice: true` after independently checking the referenced record.
4. If rights are `pending` or `not_applicable`, omit the © notice. A proposed owner may appear in a separately marked **draft** rights review, but not as a validated production notice.
5. This demonstration returns **plain text**, not HTML. A UI should insert it as text, not as executable markup.

The formatter's manual flag and schema checks are safety interlocks, **not an authentication system**. Anyone can falsify JSON. Proof of author, copyright owner, work scope, permitted publication, and release remains external and subject to human authorization. A name, abstract language syntax, method, system, or AI-only output is not automatically copyrightable; qualifying human-authored code and documentation may be.

## Versioning and validation

This contract is in `_versions/v0.0.1-initializing/` according to the Design Orchard versioning doctrine. The JSON schema describes the input shape. The JavaScript example and node tests demonstrate formatting only; they do not parse or run JHSPR.

Run the demonstration tests from this directory with `node --test format-identity.test.mjs`. This command requires only Node.js and reads no secrets. Validate the JSON fixtures against `identity-display.schema.json` with a Draft 2020-12 validator. Record tested revision and receipts before claiming any verification beyond this formatter.
