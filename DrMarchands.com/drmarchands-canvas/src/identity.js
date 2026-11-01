export const IDENTITY_LANES = Object.freeze([
  "COMPANY_ROOT",
  "COMPANY_BILLING",
  "DBA_LABORATORY",
  "DBA_LABORATORY_API",
  "AUTHOR_PUBLIC",
  "LIBRARY_INFO",
  "CREATIVE_KEJ",
  "SERVICE",
  "EXTERNAL",
  "SYSTEM"
]);

const laneSet = new Set(IDENTITY_LANES);

function optionalString(value, field) {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value !== "string") throw new TypeError(`${field} must be a string or null.`);
  return value.trim() || null;
}

export function validateIdentityContext(context = {}) {
  if (!context || typeof context !== "object") {
    throw new TypeError("Identity context must be an object.");
  }

  const identityId = optionalString(context.identityId, "identityId");
  if (!identityId) throw new TypeError("identityId must be a non-empty string.");

  if (!laneSet.has(context.lane)) {
    throw new TypeError(`Unknown identity lane: ${String(context.lane)}`);
  }

  return Object.freeze({
    identityId,
    lane: context.lane,
    role: optionalString(context.role, "role"),
    scope: optionalString(context.scope, "scope"),
    purpose: optionalString(context.purpose, "purpose"),
    trustState: optionalString(context.trustState, "trustState") ?? "unknown",
    permission: optionalString(context.permission, "permission")
  });
}

export function validateIdentityBridge(bridge = {}) {
  if (!bridge || typeof bridge !== "object") {
    throw new TypeError("Identity bridge must be an object.");
  }

  const sourceIdentity = optionalString(bridge.sourceIdentity, "sourceIdentity");
  const targetIdentity = optionalString(bridge.targetIdentity, "targetIdentity");

  if (!sourceIdentity || !targetIdentity) {
    throw new TypeError("Identity bridge requires sourceIdentity and targetIdentity.");
  }

  if (!laneSet.has(bridge.sourceLane) || !laneSet.has(bridge.targetLane)) {
    throw new TypeError("Identity bridge requires known source and target lanes.");
  }

  return Object.freeze({
    sourceIdentity,
    sourceLane: bridge.sourceLane,
    targetIdentity,
    targetLane: bridge.targetLane,
    direction: optionalString(bridge.direction, "direction") ?? "outbound",
    purpose: optionalString(bridge.purpose, "purpose"),
    permission: optionalString(bridge.permission, "permission"),
    trustState: optionalString(bridge.trustState, "trustState") ?? "unknown",
    authorityTransfer: false,
    transitive: false
  });
}

export function readIdentityContext(adapter) {
  if (!adapter || typeof adapter.read !== "function") return null;
  const value = adapter.read();
  return value === null ? null : validateIdentityContext(value);
}
