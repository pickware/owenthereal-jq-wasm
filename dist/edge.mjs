import jqRuntime from "./build/jq.edge.js";
import jqModule from "./build/jq.wasm";
import { createApi } from "./jq-api.mjs";
let instancePromise = null;
function getInstance() {
    if (!instancePromise) {
        instancePromise = jqRuntime({
            instantiateWasm(imports, onSuccess) {
                WebAssembly.instantiate(jqModule, imports).then((instance) => onSuccess(instance, jqModule));
                return {};
            },
        });
    }
    return instancePromise;
}
export const { raw, json, version } = createApi(getInstance);
