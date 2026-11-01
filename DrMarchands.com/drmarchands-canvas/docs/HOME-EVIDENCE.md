# Canvas Home Evidence

Observed before creating the first local development workspace:

- Connected GitHub repository `DrMarchand/DesignOrchard.LLC` contains `DrMarchands.com/` as an established domain-home package.
- Before this placement, `DrMarchands.com/` contained `README.md` and `DrMarchandsLibrary.org/`; no universal Canvas directory was observed there.
- The Canvas-named repositories `Creative.Canvas` and `creative-canvas-dev-portal` belong to the separate Creative Canvas system and were not used as the universal Canvas Home.
- The initial execution container contained no Design Orchard Git checkout, so `/home/oai` was shell `$HOME`, not Canvas Home.

## Current source placement

The v0.2 development source is now placed at:

`DrMarchand/DesignOrchard.LLC`  
→ `DrMarchands.com/`  
→ `drmarchands-canvas/`

on branch:

`canvas/bootstrap-v0.2.0-dev`

This establishes a reviewable source location under the existing company/domain hierarchy without creating another `Design Orchard LLC` root. The branch is not a production deployment and does not establish the live server document root.
