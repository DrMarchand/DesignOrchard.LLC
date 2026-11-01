export const BOOTSTRAP_HOSTS = Object.freeze({
    'bootstrap.drmarchandslaboratory.com': Object.freeze({
        id: 'laboratory',
        home: true,
        label: 'DrMarchand’s Laboratory'
    }),

    'bootstrap.designorchard.net': Object.freeze({
        id: 'design-orchard',
        home: false,
        label: 'Design Orchard'
    }),

    'bootstrap.drmarchands.com': Object.freeze({
        id: 'drmarchands',
        home: false,
        label: 'DrMarchand'
    }),

    'bootstrap.drmarchandslibrary.org': Object.freeze({
        id: 'library',
        home: false,
        label: 'DrMarchand’s Library'
    })
});

export function resolveBootstrapSource(moduleUrl) {
    const url = new URL(moduleUrl);

    return Object.freeze({
        hostname: url.hostname,
        origin: url.origin,
        context:
            BOOTSTRAP_HOSTS[url.hostname] ??
            Object.freeze({
                id: 'unregistered-bootstrap-host',
                home: false,
                label: url.hostname
            })
    });
}

export function resolveConsumer() {
    if (!globalThis.location) {
        return Object.freeze({
            hostname: '',
            origin: ''
        });
    }

    return Object.freeze({
        hostname: globalThis.location.hostname,
        origin: globalThis.location.origin
    });
}
