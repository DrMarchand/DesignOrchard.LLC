export const ATTACHMENT_ROLES = Object.freeze([
  "control-surface",
  "presentation-surface",
  "execution-host",
  "storage-home",
  "dependency"
]);

const roleSet = new Set(ATTACHMENT_ROLES);

function requireId(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new TypeError(`${label} must be a non-empty string.`);
  return value.trim();
}

export function validateAttachment(attachment) {
  if (!attachment || typeof attachment !== "object") throw new TypeError("Attachment must be an object.");
  const role = requireId(attachment.role, "Attachment role");
  if (!roleSet.has(role)) throw new TypeError(`Unknown attachment role: ${role}`);
  return Object.freeze({
    role,
    target: requireId(attachment.target, "Attachment target"),
    transport: attachment.transport == null ? null : requireId(attachment.transport, "Attachment transport"),
    metadata: Object.freeze({ ...(attachment.metadata ?? {}) })
  });
}

export function validateEcosystemObject(object) {
  if (!object || typeof object !== "object") throw new TypeError("Ecosystem object must be an object.");
  const attachments = Array.isArray(object.attachments) ? object.attachments.map(validateAttachment) : [];
  return Object.freeze({
    id: requireId(object.id, "Object id"),
    type: requireId(object.type ?? "object", "Object type"),
    label: typeof object.label === "string" && object.label.trim() ? object.label.trim() : object.id.trim(),
    attachments: Object.freeze(attachments),
    metadata: Object.freeze({ ...(object.metadata ?? {}) })
  });
}

export class ConcreteDependencyRegistry {
  #targets = new Map();

  register(target) {
    if (!target || typeof target !== "object") throw new TypeError("Concrete dependency target must be an object.");
    const id = requireId(target.id, "Dependency id");
    if (this.#targets.has(id)) throw new Error(`Concrete dependency already registered: ${id}`);
    const record = Object.freeze({
      id,
      kind: requireId(target.kind ?? "dependency", "Dependency kind"),
      endpoint: target.endpoint ?? null,
      capabilities: Object.freeze([...(target.capabilities ?? [])]),
      metadata: Object.freeze({ ...(target.metadata ?? {}) })
    });
    this.#targets.set(id, record);
    return record;
  }

  has(id) { return this.#targets.has(id); }
  get(id) { return this.#targets.get(id) ?? null; }
  ids() { return Object.freeze([...this.#targets.keys()]); }
}

export class EcosystemResolver {
  #dependencies;

  constructor({ dependencies = new ConcreteDependencyRegistry() } = {}) {
    this.#dependencies = dependencies;
  }

  get dependencies() { return this.#dependencies; }

  resolve(objectInput, context = {}) {
    const object = validateEcosystemObject(objectInput);
    const resolved = [];
    const unresolved = [];

    for (const attachment of object.attachments) {
      if (attachment.role === "dependency") {
        const target = this.#dependencies.get(attachment.target);
        if (target) {
          resolved.push(Object.freeze({ attachment, target }));
        } else {
          unresolved.push(attachment);
        }
        continue;
      }
      resolved.push(Object.freeze({ attachment, target: null }));
    }

    return Object.freeze({
      object,
      context: Object.freeze({
        controlSurface: context.controlSurface ?? null,
        presentationSurface: context.presentationSurface ?? null
      }),
      resolved: Object.freeze(resolved),
      unresolved: Object.freeze(unresolved)
    });
  }
}
