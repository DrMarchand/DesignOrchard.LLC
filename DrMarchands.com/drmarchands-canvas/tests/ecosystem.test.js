import test from "node:test";
import assert from "node:assert/strict";
import {
  ConcreteDependencyRegistry,
  ConcreteLocationRegistry,
  EcosystemResolver,
  validateEcosystemObject
} from "../src/ecosystem.js";

test("same concrete dependency is reused across different control surfaces", () => {
  const dependencies = new ConcreteDependencyRegistry();
  const macHost = dependencies.register({
    id: "host:drmarchandslab-mac",
    kind: "execution-host",
    capabilities: ["node", "python", "git"]
  });

  const resolver = new EcosystemResolver({ dependencies });
  const object = {
    id: "canvas:home",
    type: "ui-bootstrap",
    attachments: [
      { role: "execution-host", target: "host:drmarchandslab-mac" },
      { role: "dependency", target: "host:drmarchandslab-mac" }
    ]
  };

  const fromIPhone = resolver.resolve(object, { controlSurface: "iphone", presentationSurface: "mobile" });
  const fromMac = resolver.resolve(object, { controlSurface: "mac", presentationSurface: "desktop" });

  const iphoneDependency = fromIPhone.resolved.find((entry) => entry.attachment.role === "dependency").target;
  const macDependency = fromMac.resolved.find((entry) => entry.attachment.role === "dependency").target;

  assert.strictEqual(iphoneDependency, macHost);
  assert.strictEqual(macDependency, macHost);
  assert.strictEqual(iphoneDependency, macDependency);
  assert.equal(fromIPhone.context.controlSurface, "iphone");
  assert.equal(fromMac.context.controlSurface, "mac");
});

test("resolver reports missing concrete dependencies without recreating them", () => {
  const resolver = new EcosystemResolver();
  const result = resolver.resolve({
    id: "object:x",
    attachments: [{ role: "dependency", target: "missing:dependency" }]
  });

  assert.equal(result.resolved.length, 0);
  assert.equal(result.unresolved.length, 1);
  assert.equal(result.unresolved[0].target, "missing:dependency");
  assert.equal(resolver.dependencies.has("missing:dependency"), false);
});

test("object attachments preserve execution and presentation as separate relationships", () => {
  const object = validateEcosystemObject({
    id: "canvas:home",
    attachments: [
      { role: "control-surface", target: "iphone", transport: "remote" },
      { role: "execution-host", target: "mac" },
      { role: "presentation-surface", target: "browser" },
      { role: "storage-home", target: "icloud:canvas-home" }
    ]
  });

  assert.deepEqual(object.attachments.map((a) => a.role), [
    "control-surface",
    "execution-host",
    "presentation-surface",
    "storage-home"
  ]);
});

test("duplicate concrete dependency registration is rejected", () => {
  const dependencies = new ConcreteDependencyRegistry();
  dependencies.register({ id: "dependency:x" });
  assert.throws(() => dependencies.register({ id: "dependency:x" }), /already registered/);
});

test("location changes without changing object identity", () => {
  const locations = new ConcreteLocationRegistry();
  locations.register({
    objectId: "canvas:home",
    provider: "google-drive",
    coordinate: "drive-folder:old-home",
    parentId: "laboratory:old"
  });

  const resolver = new EcosystemResolver({ locations });
  const before = resolver.resolve({ id: "canvas:home", type: "ui-bootstrap" });

  locations.relocate("canvas:home", {
    provider: "google-drive",
    coordinate: "drive-folder:new-home",
    parentId: "laboratory:current"
  });

  const after = resolver.resolve({ id: "canvas:home", type: "ui-bootstrap" });

  assert.equal(before.object.id, "canvas:home");
  assert.equal(after.object.id, "canvas:home");
  assert.equal(before.location.coordinate, "drive-folder:old-home");
  assert.equal(after.location.coordinate, "drive-folder:new-home");
  assert.equal(after.location.revision, 1);
});

test("relocation preserves prior coordinates as history", () => {
  const locations = new ConcreteLocationRegistry();
  locations.register({
    objectId: "engine:home",
    provider: "google-drive",
    coordinate: "drive-folder:a"
  });

  locations.relocate("engine:home", {
    provider: "google-drive",
    coordinate: "drive-folder:b"
  });
  locations.relocate("engine:home", {
    provider: "google-drive",
    coordinate: "drive-folder:c"
  });

  assert.deepEqual(
    locations.history("engine:home").map((location) => location.coordinate),
    ["drive-folder:a", "drive-folder:b"]
  );
  assert.equal(locations.get("engine:home").coordinate, "drive-folder:c");
  assert.equal(locations.get("engine:home").revision, 2);
});

test("relocation rejects unknown objects instead of creating them", () => {
  const locations = new ConcreteLocationRegistry();
  assert.throws(
    () => locations.relocate("missing:object", {
      provider: "google-drive",
      coordinate: "drive-folder:new"
    }),
    /No registered location/
  );
  assert.equal(locations.has("missing:object"), false);
});
