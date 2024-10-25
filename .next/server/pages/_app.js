const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_10adba._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__cb126d._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4ddf35._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_@rainbow-me_rainbowkit_dist_index_f59d9c.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/pages/_app.tsx [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
