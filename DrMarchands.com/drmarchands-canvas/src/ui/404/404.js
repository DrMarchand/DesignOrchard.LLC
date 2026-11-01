const DOMAIN_CONTEXTS = Object.freeze([
    Object.freeze({
        domain: 'drmarchandslaboratory.com',
        id: 'laboratory',
        eyebrow: 'DrMarchand’s Laboratory',
        title: 'Resource not found',
        message: 'The requested Laboratory surface could not be resolved.',
        home: 'https://drmarchandslaboratory.com/'
    }),

    Object.freeze({
        domain: 'designorchard.net',
        id: 'design-orchard',
        eyebrow: 'Design Orchard',
        title: 'Page not found',
        message: 'The requested Design Orchard resource could not be found.',
        home: 'https://designorchard.net/'
    }),

    Object.freeze({
        domain: 'drmarchands.com',
        id: 'drmarchands',
        eyebrow: 'DrMarchand',
        title: 'Page not found',
        message: 'The requested DrMarchand resource could not be found.',
        home: 'https://drmarchands.com/'
    }),

    Object.freeze({
        domain: 'drmarchandslibrary.org',
        id: 'library',
        eyebrow: 'DrMarchand’s Library',
        title: 'Record not found',
        message: 'The requested Library resource could not be located.',
        home: 'https://drmarchandslibrary.org/'
    })
]);

function hostnameMatches(hostname, domain) {
    return (
        hostname === domain ||
        hostname.endsWith(`.${domain}`)
    );
}

function resolveContext() {
    const hostname =
        globalThis.location?.hostname?.toLowerCase() ?? '';

    const context =
        DOMAIN_CONTEXTS.find(
            entry => hostnameMatches(hostname, entry.domain)
        );

    if (context) {
        return context;
    }

    return Object.freeze({
        domain: hostname,
        id: 'unknown',
        eyebrow: 'Design Orchard LLC',
        title: '404 — Not Found',
        message: 'The requested resource could not be found.',
        home: '/'
    });
}

function createElement(tag, className, text) {
    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

export function render404(host) {
    if (!host) {
        return;
    }

    const context = resolveContext();

    document.documentElement.dataset.canvasDomain =
        context.id;

    host.replaceChildren();
    host.dataset.canvas404Context = context.id;

    const main =
        createElement('main', 'canvas-404');

    const card =
        createElement('div', 'canvas-404__card');

    const code =
        createElement('div', 'canvas-404__code', '404');

    const eyebrow =
        createElement(
            'div',
            'canvas-404__eyebrow',
            context.eyebrow
        );

    const title =
        createElement('h1', '', context.title);

    const message =
        createElement('p', '', context.message);

    const path =
        createElement(
            'p',
            'canvas-404__path',
            globalThis.location?.pathname ?? '/'
        );

    const home =
        createElement(
            'a',
            'canvas-404__home',
            'Return home'
        );

    home.href = context.home;

    card.append(
        code,
        eyebrow,
        title,
        message,
        path,
        home
    );

    main.append(card);
    host.append(main);
}
