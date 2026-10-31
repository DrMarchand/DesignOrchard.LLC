export function createPageStateAdapter(bridge = globalThis.canvasPageState) {
    return Object.freeze({
        read() {
            if (!bridge || typeof bridge.read !== 'function') {
                return Object.freeze({
                    version: null,
                    project_id: '',
                    client: '',
                    company: '',
                    active_plugins: Object.freeze([])
                });
            }

            return bridge.read();
        }
    });
}
