"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.version = exports.json = exports.raw = void 0;
/**
 * index.ts
 *
 * A high-performance wrapper around the Emscripten-compiled jq runtime.
 * Provides:
 *   - A singleton, lazy-loaded jq instance
 *   - Promise-based functions: raw() and json()
 *   - Automatic JSON stringification and parsing
 *   - Efficient buffer handling and minimal overhead
 *   - A function to get the underlying jq version
 */
const jq_js_1 = __importDefault(require("./build/jq.js"));
const jq_api_1 = require("./jq-api");
let instancePromise = null;
/**
 * Lazily initializes and retrieves the jq instance.
 */
function getInstance() {
    if (!instancePromise) {
        instancePromise = (0, jq_js_1.default)();
    }
    return instancePromise;
}
_a = (0, jq_api_1.createApi)(getInstance), exports.raw = _a.raw, exports.json = _a.json, exports.version = _a.version;
