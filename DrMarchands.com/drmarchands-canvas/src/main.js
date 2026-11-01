import { createHomeBootstrap, homeRenderer } from "./home.js";

const host = document.querySelector("[data-canvas-host]");
const bootstrap = createHomeBootstrap();
bootstrap.mount(host, homeRenderer);

// Development-only handle for manual inspection; no privileged capabilities are exposed.
globalThis.canvasHome = Object.freeze({
  version: bootstrap.version,
  state: () => bootstrap.state,
  unmount: () => bootstrap.unmount(),
  remount: () => bootstrap.mount(host, homeRenderer)
});
