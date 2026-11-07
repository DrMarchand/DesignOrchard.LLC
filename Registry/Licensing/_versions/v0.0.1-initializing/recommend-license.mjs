/*
 * File rights: copyright holder pending work-specific verification.
 * No Apache-2.0 or MIT license is granted by this prototype itself.
 * See Registry/Licensing/README.md for review and custody requirements.
 */
/**
 * Design Orchard LLC - draft license recommendation policy v0.0.1.
 * Evaluates declared facts. Never licenses, edits, publishes, or grants rights.
 * Candidate licenses: Apache-2.0 and MIT.
 */
export const POLICY_VERSION = '0.0.1';
export const LICENSE_IDS = Object.freeze(['Apache-2.0', 'MIT']);

const ENUMS = Object.freeze({
  artifactKind: ['software_only', 'mixed_assets', 'artwork_only'],
  softwarePurpose: ['language_or_engine', 'sdk_or_api', 'small_utility', 'simple_library', 'other'],
  distribution: ['public_release', 'client_delivery', 'internal_only'],
  patentConcern: ['material', 'low', 'unknown'],
  contributors: ['multiple', 'single', 'unknown'],
  rightsStatus: ['verified', 'pending', 'disputed'],
  dependencyStatus: ['cleared', 'unknown', 'incompatible'],
  existingLicense: ['none', 'MIT', 'Apache-2.0', 'other', 'unknown'],
  restrictionGoal: ['none', 'noncommercial', 'no_derivatives', 'exclusive']
});

function requireChoice(value, name, options) {
  if (!options.includes(value)) {
    throw new TypeError(name + ' must be one of: ' + options.join(', '));
  }
}

export function recommendLicense(input) {
  if (input === null || typeof input !== 'object' || Array.isArray(input)) {
    throw new TypeError('A licensing review input record is required.');
  }
  for (const [name, options] of Object.entries(ENUMS)) {
    requireChoice(input[name], name, options);
  }
  if (input.selectedLicense != null) {
    requireChoice(input.selectedLicense, 'selectedLicense', LICENSE_IDS);
  }

  const flags = [];
  const reasons = [];
  const scores = { 'Apache-2.0': 0, MIT: 0 };
  const flag = (code, severity, explanation) => flags.push({ code, severity, explanation });
  let eligibleForComparison = true;

  if (input.artifactKind !== 'software_only') {
    eligibleForComparison = false;
    flag('NON_SOFTWARE_SCOPE', 'BLOCKER',
      'This gate licenses qualifying software only; separate creative artwork, client proofs, trademarks, and mixed-asset permissions.');
  }
  if (input.distribution === 'internal_only') {
    eligibleForComparison = false;
    flag('PRIVATE_RELEASE_NOT_DECIDED', 'REVIEW',
      'A public outbound license is not required merely to develop private code. Decide on release intent first.');
  }
  if (input.restrictionGoal !== 'none') {
    eligibleForComparison = false;
    flag('NEITHER_LICENSE_MATCHES_RESTRICTIONS', 'BLOCKER',
      'MIT and Apache-2.0 both allow commercial redistribution and modification. Neither enforces the requested restriction.');
  }
  if (input.softwarePurpose === 'language_or_engine') {
    scores['Apache-2.0'] += 3;
    reasons.push('Language and engine infrastructure favors explicit contributor patent terms and change attribution.');
  } else if (input.softwarePurpose === 'sdk_or_api') {
    scores['Apache-2.0'] += 2;
    reasons.push('SDK/API infrastructure benefits from a clear express patent grant when relevant.');
  } else if (input.softwarePurpose === 'small_utility') {
    scores.MIT += 3;
    reasons.push('A small utility often benefits from a shorter, simpler license notice.');
  } else if (input.softwarePurpose === 'simple_library') {
    scores.MIT += 2;
    reasons.push('A small reusable library may prioritize minimal distribution obligations.');
  }

  if (input.patentConcern === 'material') {
    scores['Apache-2.0'] += 4;
    reasons.push('Apache-2.0 provides an express, bounded contributor patent license and patent-litigation termination.');
  } else if (input.patentConcern === 'low') {
    scores.MIT += 1;
    reasons.push('A currently low patent concern favors simpler notice requirements, not proof of patent safety.');
  } else {
    flag('PATENT_REVIEW_NEEDED', 'REVIEW', 'Patent relevance is unknown; neither license guarantees patent clearance.');
  }

  if (input.contributors === 'multiple') {
    scores['Apache-2.0'] += 2;
    reasons.push('A multi-contributor project benefits from documented contribution and patent permissions.');
    flag('CONTRIBUTION_PROVENANCE', 'REVIEW', 'Verify inbound rights and authority for every contribution.');
  } else if (input.contributors === 'single') {
    scores.MIT += 1;
  } else {
    flag('CONTRIBUTORS_UNKNOWN', 'REVIEW', 'Identify contributors and their licensing permissions.');
  }

  if (input.rightsStatus === 'pending') {
    flag('RIGHTS_PENDING', 'BLOCKER', 'The authority to license all included human-authored code is not verified.');
  } else if (input.rightsStatus === 'disputed') {
    flag('RIGHTS_DISPUTED', 'BLOCKER', 'Resolve rights disputes before any outbound license decision.');
  }
  if (input.dependencyStatus === 'unknown') {
    flag('DEPENDENCIES_UNREVIEWED', 'BLOCKER', 'Inventory bundled components and license obligations before publication.');
  } else if (input.dependencyStatus === 'incompatible') {
    flag('DEPENDENCY_CONFLICT', 'BLOCKER', 'Known license incompatibility requires work-specific resolution.');
  }

  if (input.existingLicense === 'unknown') {
    flag('EXISTING_LICENSE_UNVERIFIED', 'BLOCKER', 'Inspect the existing repository license before changing or adding terms.');
  } else if (input.existingLicense === 'other') {
    flag('EXISTING_LICENSE_OUTSIDE_POLICY', 'BLOCKER', 'An existing third license cannot be replaced by this two-option selector.');
  } else if (input.existingLicense !== 'none') {
    flag('EXISTING_GRANTS_PRESERVED', 'REVIEW',
      'Existing ' + input.existingLicense + ' grants and notices remain effective; a proposed change does not revoke them.');
  }
  if (input.distribution === 'client_delivery') {
    flag('CLIENT_CONTRACT_REVIEW', 'REVIEW',
      'Confirm work-for-hire, customer ownership, escrow, confidentiality, and license promises separately.');
  }

  let recommendation = null;
  if (eligibleForComparison) {
    if (scores['Apache-2.0'] > scores.MIT) recommendation = 'Apache-2.0';
    else if (scores.MIT > scores['Apache-2.0']) recommendation = 'MIT';
    else flag('INSUFFICIENT_DECISION_SIGNAL', 'REVIEW',
      'Purpose and patent/contribution inputs do not establish a clear preference.');
  }

  if (recommendation && input.existingLicense !== 'none' &&
      input.existingLicense !== recommendation) {
    flag('RELICENSING_REQUIRES_REVIEW', 'BLOCKER',
      'Recommendation differs from existing ' + input.existingLicense + '; confirm all holder and contributor permissions.');
  }
  if (input.selectedLicense && recommendation && input.selectedLicense !== recommendation) {
    flag('OVERRIDE_REQUIRES_RATIONALE', 'REVIEW',
      'Selected ' + input.selectedLicense + ' differs from recommended ' + recommendation + '; document the human rationale.');
  }
  if (input.selectedLicense === 'MIT' && input.patentConcern === 'material') {
    flag('MIT_NO_EXPRESS_PATENT_GRANT', 'REVIEW',
      'MIT lacks the express patent-license and retaliation provisions present in Apache-2.0.');
  }
  if (input.selectedLicense === 'Apache-2.0') {
    flag('APACHE_DISTRIBUTION_COMPLIANCE', 'REVIEW',
      'Retain license and applicable notices; mark changed files and preserve NOTICE attributions when required.');
  }
  if (input.selectedLicense === 'MIT') {
    flag('MIT_DISTRIBUTION_COMPLIANCE', 'REVIEW',
      'Keep the MIT copyright and license notice in copies or substantial portions.');
  }

  return {
    policyVersion: POLICY_VERSION,
    options: [...LICENSE_IDS],
    recommendation,
    selectedLicense: input.selectedLicense ?? null,
    scores,
    reasons,
    flags,
    blockingCodes: flags.filter(f => f.severity === 'BLOCKER').map(f => f.code),
    decisionStatus: 'human_review_required',
    applicationAllowed: false,
    releaseAuthorized: false,
    note: 'A recommendation is advisory; legal rights, source evidence, and human approval are separate gates.'
  };
}
