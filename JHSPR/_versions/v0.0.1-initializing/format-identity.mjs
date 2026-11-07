/**
 * JHSPR v0.0.1 identity-display demonstration.
 * Plain text only. This is NOT a JHSPR language runtime or legal verifier.
 */
function clean(value, label) {
  if (typeof value !== 'string' || !value.trim() || /[\r\n]/.test(value)) {
    throw new TypeError(label + ' must be a nonblank single-line string');
  }
  return value.trim();
}
export function formatIdentity(record, options = {}) {
  if (!record || typeof record !== 'object' || !record.identity) {
    throw new TypeError('identity record is required');
  }
  const i = record.identity;
  const alt = clean(i.alt, 'identity.alt');
  const name = clean(i.name, 'identity.name');
  const type = clean(i.type, 'identity.type');
  if (!/^[a-z][a-z0-9_]*$/.test(type)) {
    throw new TypeError('identity.type must be a classification token');
  }
  clean(i.record_id, 'identity.record_id');
  const label = alt + ' ' + name;
  const rights = record.rights;
  if (!rights || !['pending', 'verified', 'not_applicable'].includes(rights.status)) {
    throw new TypeError('rights.status must be pending, verified, or not_applicable');
  }
  if (rights.status !== 'verified') return label;
  const c = rights.copyright;
  if (!c || !Number.isInteger(c.year) || c.year < 1000 || c.year > 9999) {
    throw new TypeError('verified copyright requires a valid year');
  }
  const owner = clean(c.owner, 'copyright.owner');
  clean(c.work_id, 'copyright.work_id');
  clean(c.evidence_ref, 'copyright.evidence_ref');
  clean(c.approved_by, 'copyright.approved_by');
  // Caller must check the referenced approval independently; this flag is not proof.
  if (options.allowCopyrightNotice !== true) return label;
  return label + ' © ' + c.year + ' ' + owner;
}
