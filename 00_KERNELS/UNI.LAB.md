# UNI.LAB

Universal Laboratory Operations Kernel

Status: SEED
Layer: Kernel
Domain: Laboratory

## Purpose

UNI.LAB governs research, development, experimentation, validation workflows, technical infrastructure, automation, builds, and structure testing.

## Core Rule

No laboratory object may be promoted, published, certified, mirrored, archived, or disposed unless its purpose, authority boundary, test status, relationship map, and evidence trail are explicit.

## Applies To

- software systems
- automation workflows
- schemas
- agents
- dashboards
- experiments
- technical documents
- research artifacts
- validation logs
- GitHub repositories
- storage test structures
- package staging

## Primary States

- LAB_DRAFT
- LAB_EXPERIMENT
- LAB_TESTING
- LAB_VALIDATED
- LAB_FAILED
- LAB_NEEDS_CLARIFICATION
- LAB_READY_FOR_LIBRARY
- LAB_READY_FOR_REGISTRY
- LAB_BLOCKED
- LAB_DISPOSE_REVIEW

## Storage Relationship

LAB_8.TB is the primary external Lab storage root.

LAB_8.TB builds and tests.

## Boundary

UNI.LAB protects experimentation without confusing experiments with verified records.
