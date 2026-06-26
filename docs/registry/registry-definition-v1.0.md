# Registry Definition v1.0

## Registry Purpose

Registry is a DrMarchand certification layer verified by AI.

It is not a simple catalog.

A registry entry is only valid when the object has enough evidence, authority context, and verification status to be treated as a certified system object.

## Core Rule

Do not register unclear objects automatically.

Unclear, ambiguous, duplicated, speculative, or insufficiently sourced objects must remain outside the active registry until they are clarified, verified, or explicitly rejected.

## Required Registry Fields

Each registered object must include:

- Object name
- Object type
- Certified by DrMarchand
- AI verification status
- Source proof
- Authority boundary
- Public/internal status
- Trademark status
- Registry status

## Field Definitions

### Object name

The canonical name of the object as recognized by the DrMarchand ecosystem.

### Object type

The classification of the object, such as protocol, engine, workspace, brand, runtime component, registry object, blueprint, document, asset, or validation system.

### Certified by DrMarchand

Indicates whether the object has been explicitly approved by DrMarchand as a valid ecosystem object.

Allowed values:

- Yes
- No
- Pending

### AI verification status

Indicates whether AI has reviewed the object against available evidence and current architecture rules.

Allowed values:

- Verified
- Needs Review
- Rejected
- Insufficient Evidence

### Source proof

The evidence supporting the object registration.

Examples include:

- GitHub file path
- Asana task or project
- Google Drive canon document
- Registry record
- Conversation-derived architecture note
- Public filing or public artifact

### Authority boundary

Defines where the object is allowed to operate.

Examples:

- Design Orchard LLC
- DrMarchand's Laboratory
- KEJ Studio
- Neuro-Forge Engine
- Big Brother
- Public Artifact
- Internal Only

### Public/internal status

Defines whether the object is public, private, internal, experimental, or restricted.

Allowed values:

- Public
- Internal
- Private
- Experimental
- Restricted

### Trademark status

Tracks mark status or intended mark role.

Allowed values:

- TM
- SM
- Copyright
- Unmarked
- Pending Review
- Not Applicable

### Registry status

Defines the lifecycle state of the registered object.

Allowed values:

- Active
- Pending
- Deprecated
- Archived
- Quarantined
- Rejected

## Certification Rule

An object may only become Active when:

1. The object name is clear.
2. The object type is defined.
3. The authority boundary is known.
4. Source proof exists.
5. DrMarchand certification is Yes.
6. AI verification status is Verified.
7. Public/internal status is assigned.
8. Trademark status is assigned or marked Not Applicable.
9. Registry status is set intentionally.

## Drift Rule

If any required field is missing, uncertain, contradicted, or unsupported, the object must not be treated as Active.

It must instead be marked:

- Pending
- Needs Review
- Insufficient Evidence
- Quarantined
- Rejected

## Reflection Rule

Registry entries must be Reflected or Explained.

A registered object should connect back to at least one authoritative source proof. If the object cannot be reflected in GitHub, Asana, Canon, or another accepted proof layer, it must be explained before registration.

## Summary

The Registry is a certification layer, not a catalog.

It exists to protect architectural integrity by preventing unclear objects from entering the DrMarchand ecosystem as valid system objects.