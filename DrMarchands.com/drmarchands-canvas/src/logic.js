export const EPISTEMIC_STATES = Object.freeze([
  "verified",
  "exploratory",
  "validating",
  "unknown"
]);

const stateSet = new Set(EPISTEMIC_STATES);

function requireText(value, label) {
  if (typeof value !== "string" || !value.trim()) throw new TypeError(`${label} must be a non-empty string.`);
  return value.trim();
}

function freezeObject(value) {
  return Object.freeze({ ...(value ?? {}) });
}

export function validateLogicRequest(input) {
  if (!input || typeof input !== "object") throw new TypeError("Logic request must be an object.");

  return Object.freeze({
    requestId: requireText(input.requestId, "Request id"),
    targetId: requireText(input.targetId, "Target id"),
    operation: requireText(input.operation, "Operation"),
    mode: requireText(input.mode ?? "read", "Mode"),
    parameters: freezeObject(input.parameters),
    requestedBy: input.requestedBy == null ? null : requireText(input.requestedBy, "Requested by"),
    metadata: freezeObject(input.metadata)
  });
}

export function validateLogicResult(input) {
  if (!input || typeof input !== "object") throw new TypeError("Logic result must be an object.");

  const epistemicState = requireText(input.epistemicState ?? "unknown", "Epistemic state");
  if (!stateSet.has(epistemicState)) throw new TypeError(`Unknown epistemic state: ${epistemicState}`);

  return Object.freeze({
    requestId: requireText(input.requestId, "Request id"),
    targetId: requireText(input.targetId, "Target id"),
    status: requireText(input.status, "Result status"),
    epistemicState,
    payload: input.payload ?? null,
    evidence: Object.freeze([...(input.evidence ?? [])]),
    provenance: freezeObject(input.provenance),
    error: input.error == null ? null : freezeObject(input.error),
    metadata: freezeObject(input.metadata)
  });
}

export function createPresentationEnvelope({ request, result, location = null } = {}) {
  const normalizedRequest = validateLogicRequest(request);
  const normalizedResult = validateLogicResult(result);

  if (normalizedRequest.requestId !== normalizedResult.requestId) {
    throw new Error("Request/result id mismatch.");
  }
  if (normalizedRequest.targetId !== normalizedResult.targetId) {
    throw new Error("Request/result target mismatch.");
  }

  return Object.freeze({
    kind: "canvas-presentation-envelope",
    targetId: normalizedResult.targetId,
    requestId: normalizedResult.requestId,
    operation: normalizedRequest.operation,
    mode: normalizedRequest.mode,
    status: normalizedResult.status,
    epistemicState: normalizedResult.epistemicState,
    payload: normalizedResult.payload,
    evidence: normalizedResult.evidence,
    provenance: normalizedResult.provenance,
    error: normalizedResult.error,
    location,
    presentation: Object.freeze({
      mayRender: true,
      mayExecute: false,
      mayPromoteTruth: false
    })
  });
}

export class LogicAccessCoordinator {
  #resolver;

  constructor({ resolver } = {}) {
    if (!resolver || typeof resolver.resolve !== "function") {
      throw new TypeError("LogicAccessCoordinator requires a resolver.");
    }
    this.#resolver = resolver;
  }

  resolveRequest(requestInput, objectInput, context = {}) {
    const request = validateLogicRequest(requestInput);
    const resolvedObject = this.#resolver.resolve(objectInput, context);

    if (request.targetId !== resolvedObject.object.id) {
      throw new Error("Logic request target does not match resolved object identity.");
    }

    return Object.freeze({
      request,
      object: resolvedObject.object,
      location: resolvedObject.location,
      dependencies: resolvedObject.resolved,
      unresolved: resolvedObject.unresolved,
      context: resolvedObject.context
    });
  }

  present(resolution, resultInput) {
    if (!resolution || typeof resolution !== "object") throw new TypeError("Resolution is required.");
    return createPresentationEnvelope({
      request: resolution.request,
      result: resultInput,
      location: resolution.location
    });
  }
}
