# Design Orchard LLC

> The legal and operating root for a creative-technology ecosystem built around research, software, design, preservation, and deliberate release.

**Public company surface** · **Evidence before claims** · **Private machinery stays private**

## Company map

| Surface | Role |
| --- | --- |
| `Design Orchard LLC` | Legal and operating company |
| `🌴 Design Orchard™` | Public ecosystem brand |
| `🏝️ Design Orchard℠` | Service surface |
| `DrMarchand’s Laboratory` | Research, software, experimentation, and technical operations |
| `KEJ Studio` | Creative production, design, media, and client work |

DrMarchand’s Laboratory and KEJ Studio are sibling operating lanes under Design Orchard LLC. Their tools and records may connect without collapsing into one namespace.

## Operating model

```mermaid
flowchart LR
    DO[Design Orchard LLC] --> LAB[DrMarchand’s Laboratory]
    DO --> KEJ[KEJ Studio]
    LAB --> ENG[Engine execution]
    LAB --> OS[OS presentation and routing]
    KEJ --> CANVAS[Creative production surfaces]
```

The execution system and the presentation system are deliberately separate: **DrMarchand’s ⚙︎ Nɛuro-Forge Engine** executes within delegated permission; **DrMarchand’s OS™** presents, navigates, and routes state.

## Public boundary

This repository is the company-level public documentation surface. It should contain company structure, published relationships, and release-safe documentation - not credentials, private device identities, Vault topology, private storage locators, unpublished production markers, or working secrets.

Internal operating doctrine belongs in private repositories or controlled storage. Public history may preserve older material as provenance, but current documentation must not present superseded internal detail as live architecture.

## Repository guide

- [`ARCHITECTURE.md`](ARCHITECTURE.md) - current public ecosystem relationships.
- [`BUSINESS-STRUCTURE.md`](BUSINESS-STRUCTURE.md) - legal root and sibling operating lanes.
- [`NOTICE`](NOTICE) - attribution and repository notices.
- [`LICENSE`](LICENSE) - repository license terms.

## Release rule

```text
WORK -> TEST -> VALIDATE -> REDACT -> PUBLISH
```

A file, schema, commit, screenshot, or checksum proves only what it directly demonstrates. Public visibility does not by itself establish deployment, completion, ownership, licensing, or commercial availability.

## Authority

**Legal and operating company:** Design Orchard LLC

Work-specific authorship, copyright, licensing, and publication records control the rights attached to individual artifacts. Brand marks and machine identifiers remain separate from the legal entity name.

---

**Design; From the Ground, Up.**

## Brand display

Use [BRAND_DISPLAY_STANDARD.md](BRAND_DISPLAY_STANDARD.md) for current ™ / ℠ placement, legal-name formatting, and internal-system naming.

The proposed [type-agnostic identity display contract](Registry/Identity/dynamic-identity-display-v0.0.1.md) keeps classifications such as programming language, service, and product separate from names and copyright; it is a draft and does not override the current brand or rights rules.

The proposed [file-level rights notice standard](Registry/Rights/file-level-notice-standard-v0.0.1.md) specifies where a file itself displays a verified holder—or a clearly labeled pending work-specific rights status—without overriding existing licenses.

The proposed [code-version and creative-proof lifecycle correction](Registry/Versioning/code-and-creative-lifecycle-correction-20261106.md) separates the `0.0.0` core anchor, `1.0.0` official core, and `1.0.1` usable milestone from per-project creative drafts beginning at `PROOF-0`. Its [Nana proof and software custody correction](Registry/Creative/nana-proof-system-and-code-custody-20261107.md) assigns creative proof records to KEJ Studio, current working code to 🔬 DrMarchand’s Lab⚛︎ratory™, and superseded code versions/history to 📚 DrMarchand’s ⚛︎ Library™. These documents remain draft proposals; they do not retroactively promote versions or approve client work.

The proposed [software license recommendation gate](Registry/Licensing/README.md) compares `Apache-2.0` and `MIT` by software purpose, contributor/patent considerations, existing licenses and rights. It flags work-specific risks and requires a separate authorized-human decision; it never edits an existing `LICENSE` file automatically.
