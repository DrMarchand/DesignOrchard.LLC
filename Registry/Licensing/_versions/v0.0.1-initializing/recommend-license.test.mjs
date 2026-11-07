/*
 * File rights: copyright holder pending work-specific verification.
 * No Apache-2.0 or MIT license is granted by this prototype itself.
 * See Registry/Licensing/README.md for review and custody requirements.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { recommendLicense, LICENSE_IDS } from './recommend-license.mjs';

const base = {
  artifactKind: 'software_only',
  softwarePurpose: 'language_or_engine',
  distribution: 'public_release',
  patentConcern: 'material',
  contributors: 'multiple',
  rightsStatus: 'verified',
  dependencyStatus: 'cleared',
  existingLicense: 'none',
  restrictionGoal: 'none'
};
const run = (changes = {}) => recommendLicense({ ...base, ...changes });
const has = (r, code) => r.flags.some(f => f.code === code);

test('catalog contains only the two permitted identifiers', () => {
  assert.deepEqual(LICENSE_IDS, ['Apache-2.0', 'MIT']);
});
test('language/engine with patent concern and multiple contributors recommends Apache', () => {
  assert.equal(run().recommendation, 'Apache-2.0');
});
test('simple utility, low patent concern, single contributor recommends MIT', () => {
  assert.equal(run({ softwarePurpose: 'small_utility', patentConcern: 'low', contributors: 'single' }).recommendation, 'MIT');
});
test('simple library favors MIT without material patent concerns', () => {
  assert.equal(run({ softwarePurpose: 'simple_library', patentConcern: 'low', contributors: 'single' }).recommendation, 'MIT');
});
test('significant patent concerns can override simple-library preference', () => {
  assert.equal(run({ softwarePurpose: 'simple_library', contributors: 'single' }).recommendation, 'Apache-2.0');
});
test('internal-only work does not trigger an outbound license recommendation', () => {
  const r = run({ distribution: 'internal_only' });
  assert.equal(r.recommendation, null);
  assert.ok(has(r, 'PRIVATE_RELEASE_NOT_DECIDED'));
});
test('artwork-only projects cannot be mass licensed through software selector', () => {
  const r = run({ artifactKind: 'artwork_only' });
  assert.equal(r.recommendation, null);
  assert.ok(has(r, 'NON_SOFTWARE_SCOPE'));
});
test('mixed-asset packages are held for scope separation', () => {
  assert.equal(run({ artifactKind: 'mixed_assets' }).recommendation, null);
});
test('noncommercial, exclusive or no-derivatives requirements match neither license', () => {
  for (const restrictionGoal of ['noncommercial', 'exclusive', 'no_derivatives']) {
    const r = run({ restrictionGoal });
    assert.equal(r.recommendation, null);
    assert.ok(has(r, 'NEITHER_LICENSE_MATCHES_RESTRICTIONS'));
  }
});
test('unverified rights are blockers even when a recommendation is available', () => {
  const r = run({ rightsStatus: 'pending' });
  assert.equal(r.recommendation, 'Apache-2.0');
  assert.ok(has(r, 'RIGHTS_PENDING'));
  assert.equal(r.applicationAllowed, false);
});
test('unresolved third party dependencies are blockers', () => {
  const r = run({ dependencyStatus: 'unknown' });
  assert.ok(has(r, 'DEPENDENCIES_UNREVIEWED'));
  assert.equal(r.releaseAuthorized, false);
});
test('known incompatible dependency flags are blockers', () => {
  assert.ok(has(run({ dependencyStatus: 'incompatible' }), 'DEPENDENCY_CONFLICT'));
});
test('existing MIT license is not silently overwritten by Apache recommendation', () => {
  const r = run({ existingLicense: 'MIT' });
  assert.ok(has(r, 'RELICENSING_REQUIRES_REVIEW'));
  assert.ok(has(r, 'EXISTING_GRANTS_PRESERVED'));
});
test('other existing license cannot be replaced automatically', () => {
  const r = run({ existingLicense: 'other' });
  assert.ok(has(r, 'EXISTING_LICENSE_OUTSIDE_POLICY'));
});
test('MIT override on patent-sensitive engine shows both warnings', () => {
  const r = run({ selectedLicense: 'MIT' });
  assert.ok(has(r, 'OVERRIDE_REQUIRES_RATIONALE'));
  assert.ok(has(r, 'MIT_NO_EXPRESS_PATENT_GRANT'));
});
test('selecting Apache reports change/NOTICE obligations', () => {
  assert.ok(has(run({ selectedLicense: 'Apache-2.0' }), 'APACHE_DISTRIBUTION_COMPLIANCE'));
});
test('client delivery triggers client agreement review', () => {
  assert.ok(has(run({ distribution: 'client_delivery' }), 'CLIENT_CONTRACT_REVIEW'));
});
test('no automatic licensing occurs even on clean evidence', () => {
  const r = run({ selectedLicense: 'Apache-2.0' });
  assert.equal(r.applicationAllowed, false);
  assert.equal(r.decisionStatus, 'human_review_required');
  assert.equal(r.releaseAuthorized, false);
});
test('unknown enum, invalid selection, and missing fields throw', () => {
  assert.throws(() => recommendLicense({}), /artifactKind/);
  assert.throws(() => run({ softwarePurpose: 'enterprise' }), /softwarePurpose/);
  assert.throws(() => run({ selectedLicense: 'GPL-3.0-only' }), /selectedLicense/);
  assert.throws(() => recommendLicense(null), /required/);
});
