import {
    readIdentityContext,
    validateIdentityContext
} from '../../identity.js';

function freezeContext(value) {
    return value === null
        ? null
        : validateIdentityContext(value);
}

export function createIdentityAdapter(bridge = globalThis.canvasIdentity) {
    return Object.freeze({
        read() {
            if (!bridge || typeof bridge.read !== 'function') {
                return null;
            }

            return freezeContext(bridge.read());
        }
    });
}

export function createStaticIdentityAdapter(context) {
    const resolved = freezeContext(context);

    return Object.freeze({
        read() {
            return resolved;
        }
    });
}

export function readResolvedIdentity(adapter) {
    return readIdentityContext(adapter);
}
