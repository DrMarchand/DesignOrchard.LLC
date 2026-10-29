import { CANVAS_IDENTITY, CANVAS_VERSION, LEGAL_AUTHORITY, CanvasBootstrap, ComponentRegistry } from "./canvas.js";

const SVG_NS = "http://www.w3.org/2000/svg";

function el(document, tag, options = {}) {
  const node = document.createElement(tag);
  if (options.className) node.className = options.className;
  if (options.text !== undefined) node.textContent = String(options.text);
  for (const [name, value] of Object.entries(options.attrs ?? {})) node.setAttribute(name, String(value));
  return node;
}

function svgEl(document, tag, attrs = {}) {
  const node = document.createElementNS(SVG_NS, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, String(value));
  return node;
}

export function createBoundaryCard(document, boundary, depth = 0) {
  const section = el(document, "section", { className: "canvas-boundary", attrs: { "data-depth": depth, "data-boundary-type": boundary.type } });
  section.append(el(document, "div", { className: "canvas-boundary__label", text: boundary.type }));
  section.append(el(document, "h2", { text: boundary.label }));
  if (boundary.metadata?.description) section.append(el(document, "p", { className: "canvas-muted", text: boundary.metadata.description }));
  return section;
}

export function createGeometry(document) {
  const svg = svgEl(document, "svg", { class: "canvas-geometry", viewBox: "0 0 640 320", role: "img", "aria-labelledby": "canvas-geometry-title" });
  const title = svgEl(document, "title", { id: "canvas-geometry-title" });
  title.textContent = "Nested Canvas boundary geometry";
  svg.append(title);
  const groups = [
    { x: 28, y: 28, width: 584, height: 264, rx: 24 },
    { x: 92, y: 72, width: 456, height: 176, rx: 18 },
    { x: 174, y: 112, width: 292, height: 96, rx: 12 }
  ];
  groups.forEach((attrs, index) => {
    const rect = svgEl(document, "rect", { ...attrs, fill: "none", stroke: "currentColor", "stroke-width": index === 0 ? 3 : 2, opacity: 1 - index * 0.22 });
    svg.append(rect);
  });
  return svg;
}

export function toggleLayoutMode(home, button) {
  const compact = home.getAttribute("data-mode") === "compact";
  home.setAttribute("data-mode", compact ? "expanded" : "compact");
  button.setAttribute("aria-pressed", String(!compact));
  button.textContent = compact ? "Use compact layout" : "Use expanded layout";
  return home.getAttribute("data-mode");
}

export function homeRenderer({ bootstrap, host, config, registry, adapter }) {
  const document = host.ownerDocument ?? globalThis.document;
  if (!document) throw new Error("A document is required to render Canvas Home.");

  const home = el(document, "main", { className: "canvas-home", attrs: { "data-mode": "expanded", "data-canvas-version": CANVAS_VERSION } });
  const shell = el(document, "div", { className: "canvas-shell" });
  const header = el(document, "header", { className: "canvas-header" });
  const heading = el(document, "div");
  heading.append(el(document, "div", { className: "canvas-kicker", text: LEGAL_AUTHORITY }));
  heading.append(el(document, "h1", { className: "canvas-title", text: adapter.title ?? CANVAS_IDENTITY }));
  heading.append(el(document, "p", { className: "canvas-muted", text: adapter.description ?? "Universal UI bootstrap development Home." }));
  header.append(heading);

  const controls = el(document, "div", { className: "canvas-controls" });
  const modeButton = el(document, "button", { className: "canvas-button", text: "Use compact layout", attrs: { type: "button", "aria-pressed": "false" } });
  modeButton.addEventListener("click", () => {
    toggleLayoutMode(home, modeButton);
    updateDiagnostics();
  });
  controls.append(modeButton);
  header.append(controls);
  shell.append(header);

  shell.append(createGeometry(document));

  const grid = el(document, "div", { className: "canvas-grid", attrs: { "aria-label": "Canvas boundaries" } });
  config.boundaries.forEach((boundary, index) => grid.append(createBoundaryCard(document, boundary, index === 0 ? 0 : 1)));
  shell.append(grid);

  const registered = el(document, "section", { className: "canvas-boundary" });
  registered.append(el(document, "div", { className: "canvas-boundary__label", text: "component registration" }));
  const exampleFactory = registry.get("example-status");
  if (exampleFactory) registered.append(exampleFactory({ document, state: bootstrap.state }));
  shell.append(registered);

  const diagnostics = el(document, "aside", { className: "canvas-boundary canvas-diagnostics", attrs: { "aria-live": "polite", "aria-label": "Canvas diagnostics" } });
  const diagnosticText = el(document, "div");
  diagnostics.append(el(document, "div", { className: "canvas-boundary__label", text: "diagnostics" }), diagnosticText);
  shell.append(diagnostics);

  function updateDiagnostics() {
    const payload = {
      identity: CANVAS_IDENTITY,
      version: CANVAS_VERSION,
      lifecycle: bootstrap.state,
      mode: home.getAttribute("data-mode"),
      boundaries: config.boundaries.length,
      components: registry.names()
    };
    diagnosticText.textContent = JSON.stringify(payload, null, 2);
  }

  home.append(shell);
  queueMicrotask(updateDiagnostics);
  return home;
}

export function createHomeBootstrap() {
  const registry = new ComponentRegistry();
  registry.register("example-status", ({ document }) => {
    const node = el(document, "p", { className: "canvas-muted" });
    node.textContent = "Registered components attach to Canvas without modifying bootstrap core.";
    return node;
  });

  const boundaries = [
    { id: "canvas-root", type: "structure", label: "Canvas Root", metadata: { description: "Reusable mounting surface; structural boundary, not a security boundary." } },
    { id: "identity", type: "identity", label: "Identity Boundary", parent: "canvas-root", metadata: { description: "Carries canonical object identity without recreating the object." } },
    { id: "geometry", type: "geometry", label: "Geometry Boundary", parent: "canvas-root", metadata: { description: "Defines nested space, dimensions, positioning, and SVG geometry." } },
    { id: "interaction", type: "interaction", label: "Interaction Boundary", parent: "canvas-root", metadata: { description: "Defines UI interaction; privileged execution remains outside Canvas." } },
    { id: "publication", type: "publication-lifecycle", label: "Publication Lifecycle", parent: "canvas-root", metadata: { description: "Presentation of lifecycle state only; publication authority is external." } }
  ];

  return new CanvasBootstrap({
    config: { boundaries, theme: { tokenSource: "src/tokens.css" }, application: { id: "canvas-home-dev" } },
    registry,
    adapter: { title: CANVAS_IDENTITY, description: "A consistent UI bootstrap for Design Orchard ecosystem objects across platforms." }
  });
}
