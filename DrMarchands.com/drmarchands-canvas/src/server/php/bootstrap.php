<?php

declare(strict_types=1);

/*
 * DrMarchand’s 🖼️ Canvas
 * Shared PHP bootstrap boundary.
 *
 * This file establishes shared PHP context.
 * Application-specific business logic does not belong here.
 */

const CANVAS_PHP_BOOTSTRAP_VERSION = '0.1.0-dev';
const CANVAS_LEGAL_AUTHORITY = 'Design Orchard LLC';

function canvas_php_context(): array
{
    return [
        'bootstrap_version' => CANVAS_PHP_BOOTSTRAP_VERSION,
        'legal_authority' => CANVAS_LEGAL_AUTHORITY,
        'environment' => 'DrMarchand’s Laboratory',
    ];
}
