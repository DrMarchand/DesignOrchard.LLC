# Vault Master Workflow 001

Status: ACTIVE_WORKFLOW
Authority: Design Orchard LLC
Google Drive Mirror: https://docs.google.com/document/d/1_SRx7UCcsOLzpHxPrCv8L05gCYeNAOYTlHT4PrlQoAY

## Required Master File Fields

master_id
master_name
master_type
authority_owner
source_workspace
current_vault_location
allowed_action
copy_destination_rules
version
checksum_or_hash
last_verified_at
restore_status
notes

## Allowed Actions

COPY_ALLOWED
READ_ALLOWED
DIRECT_EDIT_BLOCKED
MOVE_BLOCKED
DELETE_BLOCKED

## Workflow

1. Identify candidate template, schema, record, or core asset.
2. Confirm it is master-worthy.
3. Assign master_id.
4. Store protected Vault Master.
5. Create working copies only from the Vault Master.
6. Track every copy in Atlas.
7. Record copy movement in Journal.
8. Observe repeated use in Library.
9. Verify master integrity on a recurring basis.

## Warning

Do not rely on naming alone. A file named MASTER is not protected unless permissions, backups, versioning, or immutability controls enforce the rule.
