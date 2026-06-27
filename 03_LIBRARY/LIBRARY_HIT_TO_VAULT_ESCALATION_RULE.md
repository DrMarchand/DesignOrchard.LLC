# Library Hit to Vault Escalation Rule

Status: TEST_RULE
Authority: Design Orchard LLC
Google Drive Mirror: https://docs.google.com/document/d/1_SRx7UCcsOLzpHxPrCv8L05gCYeNAOYTlHT4PrlQoAY

## Test Rule

If an object repeatedly hits the Library, it should be reviewed for Vault storage.

A Library Hit means the object is repeatedly referenced, reused, searched, cited, validated, or needed to understand what happened in a Workspace.

## Layer Roles

Library = resolved record layer.
Vault = protected preservation layer for records that become durable, repeatedly useful, authority-bearing, or proof-critical.

## Routing Test

1 Library Hit = keep in Library.
2 Library Hits = mark as WATCHED_RECORD.
3 Library Hits = mark as VAULT_CANDIDATE.
4 or more Library Hits = review for VAULT_STORAGE.

## Escalation Conditions

- repeated reference
- repeated reuse
- repeated citation
- repeated validation dependency
- authority or proof value
- needed for audit, origin, ownership, or reconstruction
- required to understand repeated Workspace outcomes

## Boundary Rule

Vault storage should not receive every Library item.
Only Library items with repeated value, proof value, authority value, or long-term reconstruction value should be escalated.

## Validation Results

LIBRARY_ONLY
WATCHED_RECORD
VAULT_CANDIDATE
VAULT_APPROVED
VAULT_REJECTED
NEEDS_MORE_HITS

## Conclusion

If it keeps hitting the Library, it probably belongs in the Vault, but only after Atlas confirms repeated value and preservation purpose.
