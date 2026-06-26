# Canonical Responsibility Map v0.1

Status: Draft Freeze v0.1  
Authority Root: Design Orchard LLC  
Operating Context: DrMarchand's Laboratory / Nɛuro-Forge Engine / ∞ OS

## Purpose

This document freezes the current subsystem responsibility map for the Design Orchard / DrMarchand ecosystem.

The goal is to prevent responsibility drift by assigning each major subsystem a primary verb.

If a new subsystem cannot be explained with one primary responsibility, it may be overlapping an existing layer and must be reviewed before promotion.

## Canonical Responsibilities

| Component | Primary Responsibility | Description |
|---|---|---|
| 🌱 Design Orchard LLC | Own | Legal root, governance, intellectual property, contracts, business authority. |
| 🏝️ Design Orchard℠ | Provide | Service ecosystem and commercial service layer. |
| 🌴 Design Orchard™ | Represent | Public brand, product stamp, merchandise, receipts, and public-facing artifacts. |
| 🎥 KEJ Studio℠ | Serve | Service provider for digital assets, design, branding, and creative work. |
| 🔬 DrMarchand's Lab⚛︎ratory™ | Research / Build | Product, software, research, framework, validation, and production division. |
| ⚙︎ DrMarchand's Nɛuro-Forge Engine™ | Execute | Main engine software for runtime, orchestration, automation, capability resolution, and execution. |
| ∞ OS™ | Govern | Governing reference model inside the Nɛuro-Forge Engine; defines rules, semantics, state, transitions, dependencies, and capability policy. |
| 🪬 Big Brother | Observe / Report | Observation, correlation, telemetry, drift reporting, and registry-to-library reporting path. |
| 🧾 Registry | Certify | Canonical identity, provenance, authority, certification, and publication status. |
| 📚 DrMarchand's ⚛︎ Library™ | Preserve / Organize / Reference | Institutional knowledge, documentation, journals, specifications, and continuity layer. |
| 📖 BOOKSHELF | Store | Durable knowledge store held by the Library. |
| 🗺 Atlas™ | Map | Relationships, dependencies, topology, location, and navigation. |
| 🦁 Lionheart™ | Validate / Protect | Evidence validation, guardrails, policy enforcement, permission drift, and protection logic. |

## Core Invariant

No subsystem should activate merely because it exists.

Need determines activation.

```text
No need = no call.
```

Examples:

- No certification need → do not call Registry.
- No preserved knowledge need → do not call BOOKSHELF.
- No mapping need → do not call Atlas.
- No active build/test need → do not call Workbench.
- No observation/reporting need → do not call Big Brother.

## Boundary Rules

### Library / BOOKSHELF

```text
📚 Library
    holds
        📖 BOOKSHELF

🔬 Laboratory
    connects to BOOKSHELF only when needed
```

The Laboratory does not own BOOKSHELF. The Library holds BOOKSHELF. The Laboratory may connect through a bounded access pathway when preserved knowledge, archive reference, continuity context, or historical evidence is required.

### Registry / Big Brother / Library

```text
🧾 Registry
      │
      ▼
🪬 Big Brother
      │
      ▼
📚 Library
```

The Registry certifies. Big Brother observes and reports. The Library preserves, organizes, and references.

### Laboratory / Engine / OS

```text
🔬 DrMarchand's Lab⚛︎ratory™
      │
      ▼
⚙︎ DrMarchand's Nɛuro-Forge Engine™
      │
      ▼
∞ OS™
```

The Laboratory contains the Nɛuro-Forge Engine. The Nɛuro-Forge Engine runs the ∞ OS. The ∞ OS governs rules inside the engine.

## Validation Rule

Before adding or changing a subsystem, answer:

1. What is its primary verb?
2. What does it explicitly not do?
3. What does it depend on?
4. What depends on it?
5. When is it allowed to activate?
6. What evidence or need justifies activation?

## Status

This file is a draft freeze and should be treated as the v0.1 canonical responsibility map until superseded by a later architecture decision record or specification update.
