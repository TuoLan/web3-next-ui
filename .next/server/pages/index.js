const CHUNK_PUBLIC_PATH = "server/pages/index.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__e126d5._.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_d1c2c4._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4ddf35._.css");
runtime.loadChunk("server/chunks/ssr/node_modules_@rainbow-me_rainbowkit_dist_index_f59d9c.css");
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/pages.js { INNER_PAGE => \"[project]/pages/index.tsx [ssr] (ecmascript)\", INNER_DOCUMENT => \"[project]/pages/_document.tsx [ssr] (ecmascript)\", INNER_APP => \"[project]/pages/_app.tsx [ssr] (ecmascript)\" } [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
