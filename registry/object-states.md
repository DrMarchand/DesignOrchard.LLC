# Object State Registry Mirror

**Authority:** Design Orchard LLC  
**System:** DrMarchand’s ∞ OS™  
**Mirror State:** Synced  
**Effective Date:** 2026-06-20

## Purpose

This file defines the public-safe object state language used by DrMarchand’s ∞ OS™ to describe synchronization state across connected layers.

GitHub is not the canonical registry. This file mirrors approved state definitions for traceability.

## Allowed Object Mirror States

| State | Meaning |
|---|---|
| Synced | The object is reflected in the expected system or systems. |
| Pending | The object is known and queued for synchronization. |
| Drifted | The object differs across systems and requires reconciliation. |
| Blocked | Synchronization cannot proceed until a dependency is resolved. |
| Intentionally Unmirrored | The object is deliberately not mirrored and the reason is documented. |

## Operating States

Object mirror states should not be confused with operating states.

Operating states describe runtime or project motion:

- Inactive
- Ignited
- Syncing
- Verified
- Released

## Rule

Every object must have a state.

No object exists outside observation.
