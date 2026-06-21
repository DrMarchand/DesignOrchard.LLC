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
| Purple | High-confidence verified green. The source has passed repeated safe red/blue recovery cycles and has a strong evidence trail within the observed system boundary. |
| Green | Connected, verified, current, behaving as expected. |
| Yellow | Warning, pending, degraded, or uncertain; requires investigation. |
| Blue | Standby; powered or available, intentionally waiting or inactive. Can be healthy. |
| Amber | Stale standby; power exists, but no live connection or handshake. Not healthy standby. |
| Red | Offline, blocked, failed, intentionally disconnected for testing, or unsafe to proceed. |
| Orange | Intermittent degraded state caused by red/yellow flicker; unstable, not merely pending. |
| Gray | Unknown, unobserved, or not instrumented. |

## Purple State

Purple is not ordinary green. Purple means a source of green has been through enough red and blue diagnostic cycles that its operational health is strongly evidenced rather than merely assumed.

Purple means: high-confidence operational fact within the observed system boundary.

It does not mean universal certainty outside the evidence trail. It means the system has enough repeated internal evidence to treat the state as durable until superseded by a documented contradiction.

### Purple Entry Criteria

- The object has an identified source of truth.
- The source of truth is stable and traceable.
- The system has experienced or simulated safe red/off conditions.
- The system has passed through blue or standby conditions without losing traceability.
- The system repeatedly returns to green.
- Registry, canon, mirror, and execution trail agree or have documented exceptions.
- Big Brother can observe the state.
- Lionheart can verify the state.

## Negative-Control Test

If a connector is believed to be green, and testing is safe:

1. Record the current green state.
2. Trigger or observe a known-safe red/off condition.
3. Confirm Big Brother detects red.
4. Restore the connector.
5. Confirm return to green or document blue/amber/yellow if it does not return.
6. Only promote toward Purple after repeated successful cycles with traceable evidence.

## Diagnostic Transitions

| Transition | Interpretation |
|---|---|
| Green -> Red -> Green | Healthy monitor; failure detection works. |
| Green -> Red -> Blue | Connector entered standby after reset; inspect whether intentional. |
| Green -> Red -> Yellow | Connector returned but needs verification. |
| Green -> Red -> Blue -> Green repeated | Candidate for Purple after evidence review. |
| Purple -> Red | Major contradiction; document and investigate immediately. |
| Purple -> Blue | Possible maintenance or standby; preserve evidence chain and verify. |
| Yellow -> Blue | Pending item may actually be healthy standby. |
| Yellow/Red flicker | Classify as Orange/Amber until stabilized. |
| Blue persists unexpectedly | Possible hidden green or stale standby; verify handshake. |
| Amber persists | Powered but disconnected; repair required. |
| Red persists | Blocked/offline/failure; escalate. |

## Role Responsibilities

### Big Brother
Observe state changes, report drift, and distinguish standby from stale standby. Do not assume silence means health. Purple cannot be claimed unless Big Brother has observed repeated recovery patterns or the evidence trail supports them.

### Phoenix
Classify failures and choose recovery paths: reset, reconnect, document, or escalate.

### Lionheart
Validate whether the final state is true green, intentional blue, documented amber, unresolved red, or Purple. Purple requires evidence, not confidence alone.

## Validation Checklist

- Can the system detect a known-off condition?
- Can it return to green after a safe reset?
- Has the state passed repeated red/blue/green cycles?
- Is the evidence trail strong enough for Purple?
- Is blue intentional or accidental?
- Is amber documented as stale standby?
- Is red persistent, temporary, or test-induced?
- Are yellow states explained or converted to green, blue, amber, orange, red, or Purple?
- Are connector states reflected in the registry or explained in drift reports?

## Canonical Decision

Add **Purple**, **Amber**, and **Orange** to the diagnostic palette.

- Purple means high-confidence verified green after repeated red/blue recovery cycles.
- Amber means stale standby: powered but not connected.
- Orange means unstable degraded flicker between red and yellow.
- Blue means standby, not failure.

Every connector state must be reflected or explained. No silent drift.
