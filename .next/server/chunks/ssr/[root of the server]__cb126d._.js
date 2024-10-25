module.exports = {

"[project]/config/wagmi.ts [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "config": ()=>config
});
var __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__ = __turbopack_external_import__("@rainbow-me/rainbowkit");
var __TURBOPACK__esm__external__wagmi$2f$chains__ = __turbopack_external_import__("wagmi/chains");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__,
    __TURBOPACK__esm__external__wagmi$2f$chains__
]);
[__TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__, __TURBOPACK__esm__external__wagmi$2f$chains__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const config = (0, __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__["getDefaultConfig"])({
    appName: 'RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [
        __TURBOPACK__esm__external__wagmi$2f$chains__["mainnet"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["polygon"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["optimism"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["arbitrum"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["base"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["sepolia"],
        __TURBOPACK__esm__external__wagmi$2f$chains__["localhost"],
        ...process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [
            __TURBOPACK__esm__external__wagmi$2f$chains__["localhost"]
        ] : []
    ],
    ssr: true
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),
"[next]/internal/font/google/inter_b35c0a41.module.css [ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "inter_b35c0a41-module__Y0D1la__className",
  "variable": "inter_b35c0a41-module__Y0D1la__variable",
});

})()),
"[next]/internal/font/google/inter_b35c0a41.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/inter_b35c0a41.module.css [ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Inter_b35c0a', '__Inter_Fallback_b35c0a'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[next]/internal/font/google/fira_code_b79a8a20.module.css [ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "className": "fira_code_b79a8a20-module__-fm2dq__className",
  "variable": "fira_code_b79a8a20-module__-fm2dq__variable",
});

})()),
"[next]/internal/font/google/fira_code_b79a8a20.js [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[next]/internal/font/google/fira_code_b79a8a20.module.css [ssr] (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'__Fira_Code_b79a8a', '__Fira_Code_Fallback_b79a8a'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;

})()),
"[project]/config/fonts.ts [ssr] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
;
;
;
;

})()),
"[project]/config/fonts.ts [ssr] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_b35c0a41.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/fira_code_b79a8a20.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/config/fonts.ts [ssr] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[next]/internal/font/google/inter_b35c0a41.js [ssr] (ecmascript) <export default as fontSans>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fontSans": ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/inter_b35c0a41.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[next]/internal/font/google/fira_code_b79a8a20.js [ssr] (ecmascript) <export default as fontMono>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "fontMono": ()=>__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/font/google/fira_code_b79a8a20.js [ssr] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/pages/_app.tsx [ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_esm__({
    "default": ()=>App,
    "fonts": ()=>fonts
});
var __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__esm__external__$40$nextui$2d$org$2f$react__ = __turbopack_external_import__("@nextui-org/react");
var __TURBOPACK__commonjs__external__next$2d$themes__ = __turbopack_external_require__("next-themes", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__esm__external__$40$tanstack$2f$react$2d$query__ = __turbopack_external_import__("@tanstack/react-query");
var __TURBOPACK__esm__external__wagmi__ = __turbopack_external_import__("wagmi");
var __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__ = __turbopack_external_import__("@rainbow-me/rainbowkit");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wagmi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/config/wagmi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$fonts$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/config/fonts.ts [ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__fontSans$3e$__ = __turbopack_import__("[next]/internal/font/google/inter_b35c0a41.js [ssr] (ecmascript) <export default as fontSans>");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__fontMono$3e$__ = __turbopack_import__("[next]/internal/font/google/fira_code_b79a8a20.js [ssr] (ecmascript) <export default as fontMono>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__esm__external__$40$nextui$2d$org$2f$react__,
    __TURBOPACK__esm__external__$40$tanstack$2f$react$2d$query__,
    __TURBOPACK__esm__external__wagmi__,
    __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__,
    __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wagmi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__esm__external__$40$nextui$2d$org$2f$react__, __TURBOPACK__esm__external__$40$tanstack$2f$react$2d$query__, __TURBOPACK__esm__external__wagmi__, __TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__, __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wagmi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
const client = new __TURBOPACK__esm__external__$40$tanstack$2f$react$2d$query__["QueryClient"]();
function App({ Component, pageProps }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$nextui$2d$org$2f$react__["NextUIProvider"], {
        navigate: router.push,
        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__commonjs__external__next$2d$themes__["ThemeProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__wagmi__["WagmiProvider"], {
                config: __TURBOPACK__imported__module__$5b$project$5d2f$config$2f$wagmi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["config"],
                children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$tanstack$2f$react$2d$query__["QueryClientProvider"], {
                    client: client,
                    children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(__TURBOPACK__esm__external__$40$rainbow$2d$me$2f$rainbowkit__["RainbowKitProvider"], {
                        locale: "en",
                        children: /*#__PURE__*/ (0, __TURBOPACK__commonjs__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"])(Component, {
                            ...pageProps
                        }, void 0, false, {
                            fileName: "[project]/pages/_app.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/_app.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/pages/_app.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
const fonts = {
    sans: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_b35c0a41$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__fontSans$3e$__["fontSans"].style.fontFamily,
    mono: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$fira_code_b79a8a20$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__fontMono$3e$__["fontMono"].style.fontFamily
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__cb126d._.js.map