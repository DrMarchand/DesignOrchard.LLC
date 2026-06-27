# Vault Master File Rule

Status: ACTIVE_RULE
Authority: Design Orchard LLC
Google Drive Mirror: https://docs.google.com/document/d/1_SRx7UCcsOLzpHxPrCv8L05gCYeNAOYTlHT4PrlQoAY

## Core Rule

A Vault Master File is the protected source-of-truth copy of a template, schema, record, or core asset.

The Vault Master is not the working file.
The Vault Master is not the distributed copy.
The Vault Master is not the editable duplicate.
The Vault Master is the copy-only authority file.

## Purpose

If a template is moved, copied, renamed, damaged, overwritten, or scattered into another Workspace, the system must still preserve a protected master copy somewhere else.

## Copy-Only Rule

Vault Master Files should be copy-only.
Users and Workspaces may create copies from the Vault Master.
Users and Workspaces should not directly edit, move, overwrite, or delete the Vault Master.

## Operational Meaning

Workspace copies may change.
Library records may observe usage.
Journal may record movement.
Atlas may track where copies went.
Vault preserves the protected master.

## Access Rule

Even the owner should treat the Vault Master as non-destructive.
The intended action is COPY, not EDIT or DELETE.

## Validation States

MASTER_SEEDED
MASTER_VERIFIED
COPY_ALLOWED
DIRECT_EDIT_BLOCKED
DELETE_BLOCKED
RESTORE_SOURCE_AVAILABLE

## Enforcement Note

This rule defines the operating model.
True technical enforcement requires storage permissions, version retention, backups, immutability controls, or another protection mechanism that prevents deletion or destructive edits.
