import {
    CanvasBootstrap,
    ComponentRegistry,
    CANVAS_IDENTITY,
    CANVAS_VERSION,
    LEGAL_AUTHORITY
} from '../canvas.js';

import {
    resolveBootstrapSource,
    resolveConsumer
} from './context.js';

import {
    readIdentityContext
} from '../identity.js';

export const BOOTSTRAP_VERSION = '0.1.0-dev';

export const BOOTSTRAP_IDENTITY =
    'DrMarchand’s 🖼️ Canvas Bootstrap';

function defaultRenderer({ bootstrap }) {
    const marker = document.createElement('div');

    marker.hidden = true;
    marker.setAttribute('aria-hidden', 'true');

    marker.dataset.canvasIdentity = CANVAS_IDENTITY;
    marker.dataset.canvasVersion = CANVAS_VERSION;
    marker.dataset.canvasBootstrapVersion = BOOTSTRAP_VERSION;
    marker.dataset.canvasState = bootstrap.state;

    return marker;
}

export function createCanvasRuntime({
    host,
    application,
    boundaries = [],
    adapter = {},
    renderer = defaultRenderer
} = {}) {
    if (!host || typeof host.append !== 'function') {
        throw new TypeError(
            'DrMarchand’s 🖼️ Canvas bootstrap requires a valid host.'
        );
    }

    if (!application || typeof application.id !== 'string') {
        throw new TypeError(
            'DrMarchand’s 🖼️ Canvas bootstrap requires an application id.'
        );
    }

    const source = resolveBootstrapSource(import.meta.url);
    const consumer = resolveConsumer();
    const registry = new ComponentRegistry();

    const runtimeAdapter = Object.freeze({
        ...adapter,

        bootstrap: Object.freeze({
            source,
            consumer
        })
    });

    const bootstrap = new CanvasBootstrap({
        config: {
            application,
            boundaries
        },
        registry,
        adapter: runtimeAdapter
    });

    bootstrap.mount(host, renderer);

    const api = Object.freeze({
        identity: CANVAS_IDENTITY,
        legalAuthority: LEGAL_AUTHORITY,
        canvasVersion: CANVAS_VERSION,
        bootstrapVersion: BOOTSTRAP_VERSION,

        source,
        consumer,

        state() {
            return bootstrap.state;
        },

        pageState() {
            const bridge = runtimeAdapter.pageState;

            if (!bridge || typeof bridge.read !== 'function') {
                return null;
            }

            return bridge.read();
        },

        identityContext() {
            return readIdentityContext(runtimeAdapter.identity);
        },

        unmount() {
            bootstrap.unmount();
        }
    });

    return Object.freeze({
        bootstrap,
        registry,
        adapter: runtimeAdapter,
        api
    });
}
