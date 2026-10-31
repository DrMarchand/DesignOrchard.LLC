import test from "node:test";
import assert from "node:assert/strict";
import {
  createIdentityAdapter,
  createStaticIdentityAdapter,
  readResolvedIdentity
} from "../src/bootstrap/adapters/identity.js";

test("identity adapter returns null when no upstream bridge exists", () => {
  const adapter = createIdentityAdapter(null);
  assert.equal(adapter.read(), null);
});

test("identity adapter validates upstream resolved context", () => {
  const adapter = createIdentityAdapter({
    read() {
      return {
        identityId: "dml-operator",
        lane: "DBA_LABORATORY",
        role: "operator",
        scope: "DrMarchand’s Laboratory"
      };
    }
  });

  assert.equal(adapter.read().lane, "DBA_LABORATORY");
});

test("static identity adapter is suitable for bounded tests", () => {
  const adapter = createStaticIdentityAdapter({
    identityId: "external-fixture",
    lane: "EXTERNAL",
    purpose: "TEST",
    trustState: "unintroduced"
  });

  const resolved = readResolvedIdentity(adapter);
  assert.equal(resolved.identityId, "external-fixture");
  assert.equal(resolved.purpose, "TEST");
});
