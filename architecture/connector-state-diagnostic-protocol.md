# Connector State Diagnostic Protocol

Authority: Design Orchard LLC  
System: Neuro-Forge Engine / DrMarchand Infinity OS  
Purpose: Define a safe diagnostic model for connector states, bridge health, and standby behavior.

## Core Principle

A connector state should not be trusted only because it appears green. A healthy diagnostic protocol can include controlled negative checks. When safe, briefly test a known-off or red condition to confirm the monitoring layer can detect failure, then return the connector to its proper state.

Do not run destructive tests on production data. Do not revoke permissions, delete credentials, delete files, or break live workflows unless a rollback path is known.

## State Palette

| State | Meaning |
|---|---|
| Green | Connected, verified, current, behaving as expected. |
| Yellow | Warning, pending, degraded, or uncertain; requires investigation. |
| Blue | Standby; powered or available, intentionally waiting or inactive. Can be healthy. |
| Amber | Stale standby; power exists, but no live connection or handshake. Not healthy standby. |
| Red | Offline, blocked, failed, intentionally disconnected for testing, or unsafe to proceed. |
| Orange | Intermittent degraded state caused by red/yellow flicker; unstable, not merely pending. |
| Gray | Unknown, unobserved, or not instrumented. |

## Negative-Control Test

If a connector is believed to be green, and testing is safe:

1. Record the current green state.
2. Trigger or observe a known-safe red/off condition.
3. Confirm Big Brother detects red.
4. Restore the connector.
5. Confirm return to green or document blue/amber/yellow if it does not return.

## Diagnostic Transitions

| Transition | Interpretation |
|---|---|
| Green -> Red -> Green | Healthy monitor; failure detection works. |
| Green -> Red -> Blue | Connector entered standby after reset; inspect whether intentional. |
| Green -> Red -> Yellow | Connector returned but needs verification. |
| Yellow -> Blue | Pending item may actually be healthy standby. |
| Yellow/Red flicker | Classify as Orange/Amber until stabilized. |
| Blue persists unexpectedly | Possible hidden green or stale standby; verify handshake. |
| Amber persists | Powered but disconnected; repair required. |
| Red persists | Blocked/offline/failure; escalate. |

## Role Responsibilities

### Big Brother
Observe state changes, report drift, and distinguish standby from stale standby. Do not assume silence means health.

### Phoenix
Classify failures and choose recovery paths: reset, reconnect, document, or escalate.

### Lionheart
Validate whether the final state is true green, intentional blue, documented amber, or unresolved red.

## Validation Checklist

- Can the system detect a known-off condition?
- Can it return to green after a safe reset?
- Is blue intentional or accidental?
- Is amber documented as stale standby?
- Is red persistent, temporary, or test-induced?
- Are yellow states explained or converted to green, blue, amber, orange, or red?
- Are connector states reflected in the registry or explained in drift reports?

## Canonical Decision

Add **Amber** and **Orange** to the diagnostic palette.

- Amber means stale standby: powered but not connected.
- Orange means unstable degraded flicker between red and yellow.
- Blue means standby, not failure.

Every connector state must be reflected or explained. No silent drift.
