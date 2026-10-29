export const CANVAS_VERSION = "0.2.0-dev";
export const CANVAS_IDENTITY = "DrMarchand’s 🖼️ Canvas";
export const LEGAL_AUTHORITY = "Design Orchard LLC";

export const BOUNDARY_TYPES = Object.freeze([
  "identity",
  "structure",
  "geometry",
  "responsive-layout",
  "visual-style",
  "semantics",
  "data-access",
  "interaction",
  "publication-lifecycle"
]);

const typeSet = new Set(BOUNDARY_TYPES);

export function validateBoundary(boundary) {
  if (!boundary || typeof boundary !== "object") throw new TypeError("Boundary must be an object.");
  if (!typeSet.has(boundary.type)) throw new TypeError(`Unknown boundary type: ${String(boundary.type)}`);
  if (typeof boundary.id !== "string" || !boundary.id.trim()) throw new TypeError("Boundary id must be a non-empty string.");
  return Object.freeze({
    id: boundary.id.trim(),
    type: boundary.type,
    label: typeof boundary.label === "string" ? boundary.label : boundary.id,
    parent: boundary.parent ?? null,
    metadata: boundary.metadata && typeof boundary.metadata === "object" ? Object.freeze({ ...boundary.metadata }) : Object.freeze({})
  });
}

export function validateConfig(config = {}) {
  if (config !== null && typeof config !== "object") throw new TypeError("Canvas configuration must be an object.");
  const boundaries = Array.isArray(config.boundaries) ? config.boundaries.map(validateBoundary) : [];
  const ids = new Set();
  for (const boundary of boundaries) {
    if (ids.has(boundary.id)) throw new TypeError(`Duplicate boundary id: ${boundary.id}`);
    ids.add(boundary.id);
  }
  for (const boundary of boundaries) {
    if (boundary.parent !== null && !ids.has(boundary.parent)) throw new TypeError(`Unknown parent boundary: ${boundary.parent}`);
    let cursor = boundary.parent;
    const seen = new Set([boundary.id]);
    while (cursor !== null) {
      if (seen.has(cursor)) throw new TypeError(`Boundary cycle detected at: ${cursor}`);
      seen.add(cursor);
      const parent = boundaries.find((candidate) => candidate.id === cursor);
      cursor = parent?.parent ?? null;
    }
  }
  const theme = config.theme && typeof config.theme === "object" ? { ...config.theme } : {};
  const application = config.application && typeof config.application === "object" ? { ...config.application } : {};
  return Object.freeze({ boundaries: Object.freeze(boundaries), theme: Object.freeze(theme), application: Object.freeze(application) });
}

export class ComponentRegistry {
  #components = new Map();

  register(name, factory) {
    if (typeof name !== "string" || !name.trim()) throw new TypeError("Component name must be a non-empty string.");
    if (typeof factory !== "function") throw new TypeError("Component factory must be a function.");
    if (this.#components.has(name)) throw new Error(`Component already registered: ${name}`);
    this.#components.set(name, factory);
    return this;
  }

  has(name) { return this.#components.has(name); }
  get(name) { return this.#components.get(name); }
  names() { return Object.freeze([...this.#components.keys()]); }
}

export class CanvasBootstrap {
  #host = null;
  #root = null;
  #config;
  #registry;
  #adapter;
  #state = "initialized";

  constructor({ config = {}, registry = new ComponentRegistry(), adapter = {} } = {}) {
    this.#config = validateConfig(config);
    this.#registry = registry;
    this.#adapter = Object.freeze({ ...adapter });
  }

  get version() { return CANVAS_VERSION; }
  get state() { return this.#state; }
  get registry() { return this.#registry; }
  get config() { return this.#config; }

  mount(host, renderer) {
    if (!host || typeof host.append !== "function") throw new TypeError("Canvas host must support append().");
    if (this.#root) this.unmount();
    if (typeof renderer !== "function") throw new TypeError("Canvas renderer must be a function.");
    const root = renderer({ bootstrap: this, host, config: this.#config, registry: this.#registry, adapter: this.#adapter });
    if (!root) throw new Error("Canvas renderer did not return a root node.");
    host.append(root);
    this.#host = host;
    this.#root = root;
    this.#state = "mounted";
    return this;
  }

  update(nextConfig = {}) {
    this.#config = validateConfig(nextConfig);
    this.#state = this.#root ? "mounted" : "initialized";
    return this;
  }

  unmount() {
    if (this.#root && typeof this.#root.remove === "function") this.#root.remove();
    this.#root = null;
    this.#host = null;
    this.#state = "unmounted";
    return this;
  }
}
