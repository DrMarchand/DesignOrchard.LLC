# System ID Rule

A Vault Master File must have a System ID.

The System ID is the stable identifier used by Atlas, Library, Journal, GitHub, Asana, and storage mirrors to recognize the same protected object even if display names, folders, or copies change.

## Rule

Filenames may change.
Locations may change.
Copies may multiply.
The System ID must remain stable.

## Vault Master Requirement

A Vault Master is not fully valid unless it has:

- system_id
- owner
- authority_boundary
- master_location
- checksum_or_proof_method
- copy_policy
- restore_path

## Boundary

The System ID is not the filename.
The System ID is not the folder path.
The System ID is not the platform file ID.

Platform file IDs may support the System ID, but they do not replace it.
