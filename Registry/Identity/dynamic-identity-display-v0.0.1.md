# Dynamic Identity Display — Proposed v0.0.1

**Authority root:** Design Orchard LLC  
**Record type:** Draft, cross-entity display contract  
**Recorded:** 2026-11-06  
**Disposition:** Proposed; not approved as a replacement for existing brand, rights, or registry rules

## Identity and classification

A named object may be a programming language, protocol, service, product, engine, library, asset, or another defined type. **Do not use `PRODUCT` as the universal class.**

Display an object from these independent fields:

```text
ALT IDENTITY.NAME [© YEAR OWNER when supported by a work-specific rights record]
```

- `identity.alt` — leading identity symbol, explicitly assigned (not an HTML accessibility `alt` attribute)
- `identity.name` — exact display name, including any separately approved mark appropriate to its context
- `identity.type` — open classification such as `programming_language`, `service`, `product`, `protocol`, or `library`; **not rendered as part of the name**
- `identity.record_id` — permanent machine/registry record identifier
- `rights.status` — `pending`, `verified`, or `not_applicable`
- `rights.copyright` — year, work-specific owner, work ID, evidence reference, and authorized-human decision (when applicable)

**Example, current JHSPR architecture record:**

- Rendered identity: `⚛︎ JHSPR`
- Class: `programming_language`
- Record ID: `DO.DML.JHSPR.1`
- Rights verification: pending; do **not** automatically append `© 2026 Joseph Kyle Marchand` or `© 2026 Design Orchard LLC`

A proposed future notice may use `⚛︎ JHSPR © 2026 Joseph Kyle Marchand` **only for specific qualifying work, once ownership, year, approval, and publication context have been established**. A copyright notice is not protection of the language name or abstract language method.

## Separate legal and functional layers

1. **Identity** supplies the name and optional ALT symbol.
2. **Classification** states what the object is. It is not an offering or proof of production readiness.
3. **Marks** (™ / ℠ / ®) follow the current [brand display standard](../../BRAND_DISPLAY_STANDARD.md) and work-specific evidence. They must not be guessed from `identity.type`.
4. **Copyright** concerns qualifying expression and a legitimate owner. It is not created by attaching © to a name.
5. **Legal authority** belongs to Design Orchard LLC and the authorized human. Sibling namespaces, a UI, a language loader, or a Bridge cannot create permission by their labels.
6. **Versioning** follows [autonomous versioning doctrine](../Versioning/autonomous-versioning-doctrine.json). Version, lifecycle, ownership, and identity are separate fields.
7. **Publishing** is a further authorization gate; copying a manifest or passing a formatter test is not proof of release permission.

## Implementation reference (not an adopted company runtime)

The proposed JHSPR `0.0.1-initializing` draft includes an [identity display contract](../../JHSPR/_versions/v0.0.1-initializing/identity-display-contract.md), [JSON schema](../../JHSPR/_versions/v0.0.1-initializing/identity-display.schema.json), [formatter demonstration](../../JHSPR/_versions/v0.0.1-initializing/format-identity.mjs), and [isolated validation receipt](../../JHSPR/_versions/v0.0.1-initializing/identity-display-validation-20261106.md).

The tests verify string formatting and schema acceptance/rejection only. This proposal does not establish a production identity registry, a JHSPR language implementation, legal clearance, a commercial offering, or an approved copyright owner.

## File-level notices

The proposed [file-level rights notice standard](../Rights/file-level-notice-standard-v0.0.1.md) governs **how an open file would show its own verified copyright holder or explicit pending status**. It is separate from the display-name format and never replaces destination-repository licenses, source provenance, or work-specific rights approval.

## Promotion gate

Before adopting this as the company-wide display standard, reconcile existing registry identities and marks, validate against actual owned work-specific rights records, test positive and negative cases across entity types, record custody in 📚 DrMarchand’s ⚛︎ Library™, and obtain an authorized-human decision. Keep the existing `BRAND_DISPLAY_STANDARD.md` controlling for previously approved name/mark display until superseded through a documented review.
