# Design Orchard LLC Architecture

This repository is the durable source of truth for the Design Orchard ecosystem.

## Purpose

Design Orchard LLC uses Asana for planning, drafts, operating rhythms, and business coordination. GitHub private repositories are the safety net for documentation, implementation, consistency checks, and internal review before anything is released publicly.

## Core principle

Nothing becomes public until it has been planned in Asana and validated in the private GitHub layer.

## Ecosystem map

```text
Design Orchard LLC
  legal root, ownership, structure, assets, records

Design Orchard
  company brand and ecosystem identity

Design Orchard service island
  client/company service environment for company information, clients, assets, marks, copyrights, contracts, delivery, and records

DrMarchand's Laboratory
  research, development, and software division
  primary domain: drmarchandslaboratory.com

DrMarchand's Neuro-Forge Engine
  core software engine for the Laboratory ecosystem

Big Brother
  planned open-source dashboard application built under the Laboratory ecosystem
  not a brand

KEJ Studio
  creative services division

DrMarchand's Creative Canvas
  bridge, workspace, and dashboard to KEJ Studio services

KEJ Studio productions
  creative productions, published works, and studio assets
```

## Operating layers

| Layer | Role | Tooling |
| --- | --- | --- |
| Planning | Ideas, requirements, drafts, architecture, decisions | Asana |
| Private validation | Internal source of truth, documentation, code, review, tests | GitHub Private |
| Publication | Public documentation, open-source releases, community-facing work | GitHub Public |
| Delivery | Websites, portals, services, client/customer access | DesignOrchardLLC.com, drmarchandslaboratory.com, drmarchands.com, kejstudio.com |

## Golden rule

Create value for the client or customer, deliver it reliably, support it responsibly, and improve the system every cycle.
