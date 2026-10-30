import test from "node:test";
import assert from "node:assert/strict";
import { ConcreteLocationRegistry, EcosystemResolver } from "../src/ecosystem.js";
import {
  LogicAccessCoordinator,
  createPresentationEnvelope,
  validateLogicResult
} from "../src/logic.js";

test("logic request resolves stable identity and current location", () => {
  const locations = new ConcreteLocationRegistry();
  locations.register({
    objectId: "atlas:object-1",
    provider: "google-drive",
    coordinate: "drive-folder:current"
  });

  const coordinator = new LogicAccessCoordinator({
    resolver: new EcosystemResolver({ locations })
  });

  const resolution = coordinator.resolveRequest(
    {
      requestId: "request:1",
      targetId: "atlas:object-1",
      operation: "inspect",
      mode: "read"
    },
    {
      id: "atlas:object-1",
      type: "registered-object"
    }
  );

  assert.equal(resolution.object.id, "atlas:object-1");
  assert.equal(resolution.location.coordinate, "drive-folder:current");
});

test("presentation envelope renders results without granting execution or promotion authority", () => {
  const envelope = createPresentationEnvelope({
    request: {
      requestId: "request:2",
      targetId: "canvas:item",
      operation: "inspect"
    },
    result: {
      requestId: "request:2",
      targetId: "canvas:item",
      status: "resolved",
      epistemicState: "verified",
      payload: { label: "Example" },
      evidence: ["test:fixture"]
    }
  });

  assert.equal(envelope.presentation.mayRender, true);
  assert.equal(envelope.presentation.mayExecute, false);
  assert.equal(envelope.presentation.mayPromoteTruth, false);
  assert.equal(envelope.epistemicState, "verified");
});

test("exploratory results remain explicitly non-verified in presentation", () => {
  const envelope = createPresentationEnvelope({
    request: {
      requestId: "request:3",
      targetId: "canvas:idea",
      operation: "explore",
      mode: "creative"
    },
    result: {
      requestId: "request:3",
      targetId: "canvas:idea",
      status: "resolved",
      epistemicState: "exploratory",
      payload: { possibility: "alternate route" }
    }
  });

  assert.equal(envelope.epistemicState, "exploratory");
  assert.equal(envelope.presentation.mayPromoteTruth, false);
});

test("request and result identity mismatches are rejected", () => {
  assert.throws(() => createPresentationEnvelope({
    request: {
      requestId: "request:a",
      targetId: "object:a",
      operation: "inspect"
    },
    result: {
      requestId: "request:b",
      targetId: "object:a",
      status: "resolved"
    }
  }), /id mismatch/);

  assert.throws(() => createPresentationEnvelope({
    request: {
      requestId: "request:a",
      targetId: "object:a",
      operation: "inspect"
    },
    result: {
      requestId: "request:a",
      targetId: "object:b",
      status: "resolved"
    }
  }), /target mismatch/);
});

test("unknown epistemic labels are rejected instead of silently promoted", () => {
  assert.throws(() => validateLogicResult({
    requestId: "request:4",
    targetId: "object:x",
    status: "resolved",
    epistemicState: "canonical"
  }), /Unknown epistemic state/);
});

test("coordinator rejects a request aimed at a different resolved object", () => {
  const coordinator = new LogicAccessCoordinator({
    resolver: new EcosystemResolver()
  });

  assert.throws(() => coordinator.resolveRequest(
    {
      requestId: "request:5",
      targetId: "object:expected",
      operation: "inspect"
    },
    {
      id: "object:actual"
    }
  ), /target does not match/);
});
