# ⚛︎ System Doctrine: DrMarchand’s OS™

## 🗺️ Map → 🧠 Remember → 🔍 Compare → 🛠️ Create → 🧪 Prove → 🗄️ Preserve

**🏢 Owning business context:** Design Orchard LLC d/b/a DrMarchand’s Laboratory  
**📜 Doctrine type:** System Operating Doctrine  
**🎯 Purpose:** Preserve continuity, provenance, lineage, evidence, identity, and human authority across an evolving creative and computational system.

---

## I. 🎯 Purpose and Core Invariants

This doctrine governs behavior without prescribing a fixed implementation. Databases, filesystems, APIs, registries, programs, models, interfaces, and infrastructure may evolve while the doctrine remains stable.

The system shall:

1. **🗺️ Map before creating.** Determine what exists and how a proposed object relates to it before introducing new structure.
2. **🧠 Remember through evidence.** Recover prior work from durable records and present it for human judgment.
3. **🧬 Preserve identity and lineage.** Similarity, ancestry, connection, or shared infrastructure does not make distinct objects identical.
4. **🌱 Preserve origins.** Descendants, improvements, merges, and replacements shall not erase genuine working ancestors.
5. **⚖️ Separate evidence from authority.** Observation, execution, registration, similarity, connectivity, or successful operation does not establish ownership, permission, approval, or publication authority.
6. **🔐 Separate registration from execution.** A known or registered object is not automatically executable, deployable, publishable, or externally accessible.
7. **🧾 Resolve ownership explicitly.** Location, database membership, branch, authorship, possession, custody, business relationship, and publication describe different relationships.
8. **❔ Preserve uncertainty.** When evidence cannot distinguish aliases, duplicates, descendants, compositions, collisions, convergence, or independent creation, retain the competing possibilities.
9. **👤 Preserve the human decision point.** Automation may discover, compare, test, recommend, and preserve evidence; authorized humans decide matters requiring judgment or authority.

---

## II. 🔎 Discovery and Memory

Before creating an idea, word, expression, script, program, component, database object, API surface, artwork, identity, or structure, ask:

> **🔗 What is this related to?**

Search durable evidence for:

- exact matches, aliases, and previous names;
- ancestors, descendants, siblings, forks, branches, and compositions;
- expressive or functional similarities;
- conflicting identities and convergent development;
- superseded implementations, legacy states, and unresolved relationships.

A different name is not sufficient evidence of novelty. Creation may proceed when discovery establishes a meaningful distinction or deliberate new branch.

System memory may include **📚 DrMarchand’s ⚛︎ Library™**, Bookshelf structures, databases, files, repositories, infrastructure records, scripts, APIs, timestamps, registries, lineage records, source artifacts, checksums, execution evidence, and Atlas relationships.

```text
MEMORY =
    RECOVER prior states
  + PRESENT relevant evidence
  + PRESERVE historical continuity
```

Memory shall not rewrite history merely to make the current architecture appear cleaner.

---

## III. 🌱 Genesis and Lineage

A genuine first working state has historical value and should be preservable as genesis.

Subsequent development should use explicit relationships such as:

```text
version → descendant → branch → clone → composition → merge
```

Meaningful descendants should point backward, and a resulting artifact may have multiple parents:

```text
Parent A ──┐
           ├──→ Child C
Parent B ──┘
```

```text
MERGE ≠ DELETE
DESCENDANT ≠ ERASURE OF HISTORY
SUCCESSOR ≠ ERASURE OF ORIGIN
```

Lineage may describe ancestry, derivation, composition, inspiration, dependency, succession, migration, or another defined relationship.

---

## IV. 🪪 Identity, Ownership, and Authority

When relevant, distinguish:

```text
idea
method
name
expression
artifact
author
contributor
copyright owner
business entity
DBA
entity owner
publisher
custodian
runtime authority
publication authority
```

These relationships shall not be collapsed merely because they involve related people or entities.

Ownership must be established from provenance and applicable evidence.

```text
filesystem location ≠ copyright ownership
database presence ≠ copyright ownership
branch membership ≠ copyright ownership
business ownership ≠ automatic artifact ownership
custody ≠ authority
```

Runtime records may resolve fields such as:

```text
YEAR
AUTHOR
COPYRIGHT_OWNER
OWNER_TYPE
BUSINESS_ENTITY
DBA
ENTITY_OWNER
SOURCE
LIFECYCLE_STAGE
```

Where appropriate, notices should be rendered from resolved data:

```text
{YEAR} © {COPYRIGHT_OWNER}
```

or:

```text
{YEAR} © {BUSINESS_ENTITY} d/b/a {DBA}
```

Inapplicable fields shall be omitted rather than fabricated.

---

## V. 🧪 Lifecycle and Proof

The preferred controlled lifecycle is:

## ⚛︎ Template → 📝 Draft → 🔬 Proof → 🌳 Publication

These stages describe lifecycle state, not the existence of copyright itself. Applicable workflows may require the complete sequence.

Lifecycle advancement shall preserve prior provenance.

Proof is an evidence record, not an authorization record. It may establish that an artifact was observed, tested, executed, compared, or evaluated under defined conditions.

Every proof record should identify:

```text
PROOF_SUBJECT
PROOF_METHOD
PROOF_SCOPE
DEMONSTRATED
NOT_DEMONSTRATED
PROOF_STATUS
```

Valid proof may satisfy an eligibility requirement, but it does not bypass registry, permission, policy, publication, or human-approval gates.

```text
successful execution ≠ ownership
registration ≠ permission
similarity ≠ derivation
connectivity ≠ authority
observation ≠ control
valid proof ≠ automatic authorization
```

---

## VI. 🗄️ Custody, Registry, Permission, and Exposure

### A. 🗄️ Custody

**📚 DrMarchand’s ⚛︎ Library™** provides durable custody and discovery.

Custody may establish retention, integrity preservation, historical availability, discoverability, and retrieval. It does not establish ownership, authorship, execution, mutation, deployment, publication, disclosure, transfer, or external-exposure authority.

```text
CUSTODY ≠ OWNERSHIP
CUSTODY ≠ PERMISSION
CUSTODY ≠ EXECUTION
CUSTODY ≠ PUBLICATION
```

Preservation should occur even when execution, publication, or ownership remains unresolved.

### B. 🧾 Registry

A registry is an authoritative index within a defined scope. It may record:

```text
identity
type
location
genesis
version
parents
children
relationships
evidence
provenance
lifecycle state
capabilities
permission state
exposure state
custody state
```

Registration establishes that the system recognizes and can address a record. It does not establish ownership, permission, execution, deployment, publication, or external accessibility.

```text
if identity_sufficient and record_integrity_sufficient:
    register(artifact)
else:
    preserve_as_unregistered_record()
```

### C. 🔐 Permission Resolution

Permission is scoped to an identified actor, artifact, action, environment, and audience.

Relevant actions may include:

```text
READ
RETRIEVE
EXECUTE
MUTATE
DEPLOY
PUBLISH
DISCLOSE
TRANSFER
EXPOSE
ADMINISTER
```

Permission shall be explicit, authorized, evidence-supported, scoped, and revocable.

```text
permission_for_read ≠ permission_for_execute
permission_for_execute ≠ permission_for_mutate
permission_for_mutate ≠ permission_for_deploy
permission_for_deploy ≠ permission_for_publish
permission_for_publish ≠ permission_for_external_exposure
```

The default for unresolved permission is denial or non-exposure.

```text
if permission == GRANTED:
    action_may_proceed_within_scope()
elif permission == CONDITIONAL:
    enforce_conditions()
else:
    deny_or_hold_action()
```

### D. 🔌 API Exposure

API exposure is controlled publication of an eligible capability to a defined audience.

Required gates are sequential and non-substitutive:

```text
1. IDENTITY
2. INTEGRITY
3. PROOF
4. ELIGIBILITY
5. PERMISSION
6. SAFETY_AND_POLICY
7. PUBLICATION_APPROVAL, if required
8. CONTROLLED_EXPOSURE
```

```text
identity
   ↓
integrity
   ↓
proof
   ↓
eligibility
   ↓
permission
   ↓
safety_and_policy
   ↓
publication_approval
   ↓
controlled_exposure
```

Failure at any required gate shall prevent exposure while preserving the artifact and its evidence.

```text
REGISTERED + PROVEN ≠ EXPOSED
ELIGIBLE ≠ PERMITTED
PERMITTED ≠ PUBLISHED
PUBLISHED ≠ EXTERNALLY EXPOSED
```

The API shall ask:

> **🔌 What registered capability has passed the required gates for exposure here?**

It shall not expose an unrestricted representation of the registry.

---

## VII. 🔤 Language, 🗺️ MAP, and Branches

Language is an indexing system, not an authority system.

```text
WORD
  ↓
LETTER
  ↓
PREFIX / ROOT / SUFFIX
  ↓
MORPHOLOGY
  ↓
MEANING
  ↓
RELATIONSHIP
  ↓
ARTIFACT
```

Additional dimensions should be introduced only when they improve discovery, comparison, or relationship resolution.

```text
language → locates meaning
context  → resolves meaning
evidence → supports meaning
authority → governs action
```

**MAP** shall serve as the first experimental resolvable word-object.

```text
resolve(MAP, context, evidence, registry)
```

Its spelling remains stable while its active interpretation varies by context, relationships, and evidence.

```text
MAP → maps → MAP
```

Design Orchard LLC may serve as a legal/business root while distinct operating identities and branches remain separate.

```text
Design Orchard LLC
├── DrMarchand’s Laboratory
│   ├── software
│   ├── applications
│   ├── systems
│   └── computational artifacts
└── KEJ Studio
    ├── graphic design
    ├── visual identity
    ├── illustration
    └── creative artifacts
```

Branch membership does not automatically determine authorship, copyright ownership, artifact identity, execution permission, or publication authority.

---

## VIII. ⚙️ Operating Rules

Before introducing new architecture, perform the smallest useful read-only discovery operation.

```text
READ_ONLY = TRUE
CREATE_NEW_STRUCTURE = HOLD
```

Begin with two nodes when two nodes are sufficient:

```text
Node A ↔ Node B
```

For each node establish, as available:

```text
IDENTITY
LOCATION
OBJECTS
RELATIONSHIPS
PROVENANCE
EVIDENCE
DIFFERENCES
UNCERTAINTIES
```

Expand the graph only when evidence justifies it.

```text
if two_nodes_are_sufficient:
    inspect(two_nodes)
else:
    expand_graph()
```

Keep doctrine, runtime records, and evidence separate:

```text
SEED / DOCTRINE
    =
how the system behaves

RUNTIME RECORD
    =
what is asserted about the present work

EVIDENCE
    =
why those assertions may be trusted
```

Runtime changes update runtime records. The doctrine changes only when governing principles change.

---

## IX. 🔁 Operating Loop

The default recursive loop is:

## 🧠 Remember → 🔎 Discover → 🗺️ Map → 🔍 Compare → ⚖️ Distinguish → 🛠️ Create → 🧪 Test → ✅ Prove → 🧾 Register → 🗄️ Preserve → 🌳 Publish → 🗺️ Map Again

Publication does not terminate memory.

```text
PUBLISHED_ARTIFACT → FUTURE_EVIDENCE
```

---

## X. 👤 Human Authority

Automation may remember, search, discover, map, compare, measure, test, detect, present evidence, propose relationships, record provenance, and preserve records within applicable permissions.

Automation shall not silently convert evidence into authority.

```text
automation ≠ ownership
automation ≠ approval
automation ≠ publication authority
automation ≠ final judgment
```

```text
SYSTEM → presents evidence
HUMAN  → decides
RECORD → preserves decision
```

---

## XI. 🧭 Doctrinal Core

> **🗺️ Map before create.**
>
> **🧠 Remember through evidence.**
>
> **🌱 Preserve genesis and lineage.**
>
> **🪪 Keep identity, expression, authorship, ownership, custody, permission, and authority distinct.**
>
> **🧾 Registration creates addressability, not automatic execution.**
>
> **🔗 Connection does not require collapse.**
>
> **♻️ Evolution does not require erasure.**
>
> **⚖️ Evidence does not create authority.**
>
> **❔ Preserve uncertainty rather than conceal it.**
>
> **👤 The map remembers; the human decides.**

```text
MAP + MEMORY + LINEAGE + EVIDENCE
                    ↓
              HUMAN JUDGMENT
                    ↓
              AUTHORIZED ACTION
```

---

## XII. Runtime Binding

This doctrine does not hard-code ownership or lifecycle state. Those values belong to runtime and artifact records.

```yaml
SOURCE:
  - current system evidence
  - infrastructure
  - databases
  - files
  - scripts
  - prior records

COPYRIGHT_OWNER: "Design Orchard LLC"
BUSINESS_ENTITY: "Design Orchard LLC"
DBA: "DrMarchand’s Laboratory"
ENTITY_OWNER: "Joseph Kyle Marchand"
LIFECYCLE_STAGE: "Research → Validation"
NEXT_ACTION: "Two-node read-only MAP discovery"
NEW_STRUCTURE_CREATION: "HOLD pending discovery"
```

Changing these variables does not amend the doctrine.

```text
DOCTRINE = stable behavior
RUNTIME   = current state
EVIDENCE  = supporting basis
HUMAN     = final authority
```
