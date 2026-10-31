import test from "node:test";
import assert from "node:assert/strict";
import {
  IDENTITY_LANES,
  readIdentityContext,
  validateIdentityBridge,
  validateIdentityContext
} from "../src/identity.js";

test("identity lanes preserve the shared lane vocabulary", () => {
  for (const lane of [
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
  ]) {
    assert.ok(IDENTITY_LANES.includes(lane), lane);
  }
});

test("identity context separates lane from purpose and authority", () => {
  const context = validateIdentityContext({
    identityId: "external-test-1",
    lane: "EXTERNAL",
    purpose: "TEST",
    trustState: "unintroduced"
  });

  assert.equal(context.lane, "EXTERNAL");
  assert.equal(context.purpose, "TEST");
  assert.equal(context.permission, null);
});

test("identity bridge never transfers authority or becomes transitive", () => {
  const bridge = validateIdentityBridge({
    sourceIdentity: "company-root",
    sourceLane: "COMPANY_ROOT",
    targetIdentity: "lab-operator",
    targetLane: "DBA_LABORATORY",
    direction: "outbound",
    purpose: "identity-resolution"
  });

  assert.equal(bridge.authorityTransfer, false);
  assert.equal(bridge.transitive, false);
});

test("identity adapter reads a resolved upstream context", () => {
  const context = readIdentityContext({
    read() {
      return {
        identityId: "author-1",
        lane: "AUTHOR_PUBLIC",
        role: "author",
        scope: "DrMarchand’s 🖼️ Canvas"
      };
    }
  });

  assert.equal(context.identityId, "author-1");
  assert.equal(context.lane, "AUTHOR_PUBLIC");
});

test("unknown lanes are rejected", () => {
  assert.throws(
    () => validateIdentityContext({ identityId: "x", lane: "ADMIN" }),
    /Unknown identity lane/
  );
});
