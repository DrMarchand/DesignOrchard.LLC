import assert from 'node:assert/strict';
import test from 'node:test';
import { formatIdentity } from './format-identity.mjs';
const make = (type, status = 'pending') => ({
  identity: { alt: '⚛︎', name: 'JHSPR', type, record_id: 'DO.DML.JHSPR.1' },
  rights: { status }
});
test('JHSPR type is programming_language, not product or service', () => {
  assert.equal(formatIdentity(make('programming_language')), '⚛︎ JHSPR');
});
test('new types require no hard-coded product or service branch', () => {
  for (const type of ['service', 'protocol', 'application', 'agent', 'library', 'product']) {
    assert.equal(formatIdentity(make(type)), '⚛︎ JHSPR');
  }
});
test('pending rights cannot emit © even with explicit flag', () => {
  assert.equal(formatIdentity(make('programming_language'), { allowCopyrightNotice: true }), '⚛︎ JHSPR');
});
test('verified rights require approved work-specific fields', () => {
  assert.throws(() => formatIdentity(make('programming_language', 'verified'), { allowCopyrightNotice: true }));
});
test('verified fields alone do not turn on copyright notice', () => {
  const r = make('programming_language', 'verified');
  r.rights.copyright = { year: 2026, owner: 'Example Author', work_id: 'EXAMPLE.1',
    evidence_ref: 'illustrative-approved-record', approved_by: 'Example Reviewer' };
  assert.equal(formatIdentity(r), '⚛︎ JHSPR');
  assert.equal(formatIdentity(r, { allowCopyrightNotice: true }), '⚛︎ JHSPR © 2026 Example Author');
});
test('rejects blank names, invalid types, and line breaks', () => {
  const r = make('programming_language');
  r.identity.name = ' ';
  assert.throws(() => formatIdentity(r));
  r.identity.name = 'JHSPR';
  r.identity.type = 'product/service';
  assert.throws(() => formatIdentity(r));
  r.identity.type = 'programming_language';
  r.identity.alt = '⚛︎\nInjected';
  assert.throws(() => formatIdentity(r));
});
