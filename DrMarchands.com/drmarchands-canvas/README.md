# DrMarchand’s 🖼️ Canvas — Bootstrap Development Home

**Status:** development workspace; not deployed or published.

**Legal authority:** Design Orchard LLC

This workspace implements the first dependency-free bootstrap milestone for `DrMarchand’s 🖼️ Canvas`, the universal UI bootstrap. It is intentionally separate from `DrMarchand’s 🎨 Creative Canvas`.

## Machine coordinate

`drmarchands-canvas` is a local, portable development identifier only. It is not a replacement published identity.

## Scope

- reusable Canvas mount/unmount lifecycle
- typed boundary descriptors
- component registry
- application adapter input
- CSS design-token baseline
- nested SVG geometry demonstration
- accessible development Home view
- diagnostics and a state-changing layout interaction

Canvas renders and organizes UI state. It does not grant authorization, execute privileged system commands, or publish content.

## Run

Serve this directory with any static HTTP server. Example:

```sh
python3 -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

## Validate

```sh
npm test
npm run check
```

## v0.2 development attachment model

Canvas now includes a small, non-executing ecosystem attachment resolver. It keeps control surface, presentation surface, execution host, storage Home, and concrete dependencies as separate relationships. A resolved dependency is reused by reference; a missing dependency is reported as unresolved and is not recreated implicitly.

This layer is descriptive and connective only. It does not grant execution authority, publish content, or replace Atlas or DrMarchand’s ⚙︎ Nɛuro-Forge Engine responsibilities.
