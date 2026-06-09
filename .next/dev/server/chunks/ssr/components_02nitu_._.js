module.exports = [
"[project]/components/backgrounds/WaveBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WaveBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-ssr] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/Points.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PointMaterial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
/* ─── THREE.JS POINT SURFACE (internal logic UNCHANGED) ─────────────── */ function LiquiditySurface() {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cols = 220;
    const rows = 100;
    const spacingX = 0.13;
    const spacingZ = 0.18;
    const positions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const arr = new Float32Array(cols * rows * 3);
        let i = 0;
        for(let x = 0; x < cols; x++){
            for(let z = 0; z < rows; z++){
                arr[i] = (x - cols / 2) * spacingX;
                arr[i + 1] = 0;
                arr[i + 2] = (z - rows / 2) * spacingZ;
                i += 3;
            }
        }
        return arr;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(({ clock })=>{
        const t = clock.getElapsedTime();
        const pos = ref.current.geometry.attributes.position.array;
        let i = 0;
        for(let x = 0; x < cols; x++){
            for(let z = 0; z < rows; z++){
                pos[i + 1] = Math.sin(x * 0.18 + t * 0.9) * 0.55 + Math.cos(z * 0.22 + t * 0.7) * 0.45 + Math.sin((x + z) * 0.12 + t * 1.1) * 0.30 + Math.sin(x * 0.06 - t * 0.5) * 0.20;
                i += 3;
            }
        }
        ref.current.geometry.attributes.position.needsUpdate = true;
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Points$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Points"], {
        ref: ref,
        positions: positions,
        stride: 3,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PointMaterial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PointMaterial"], {
            color: "#00e5ff",
            size: 0.04,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.72,
            depthWrite: false,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        }, void 0, false, {
            fileName: "[project]/components/backgrounds/WaveBackground.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
/* ─── SVG ORGANIC FLOW PATHS — Framer Motion, ultra-low opacity 0.02-0.04 */ const FLOW_PATHS = [
    {
        d: "M-80 420 C 120 340, 280 500, 480 380 S 720 260, 960 340 S 1200 460, 1440 360",
        delay: 0,
        dur: 14
    },
    {
        d: "M-80 460 C 100 360, 300 520, 520 400 S 760 300, 1000 390 S 1260 500, 1520 400",
        delay: 2.5,
        dur: 18
    },
    {
        d: "M-80 380 C 160 300, 320 460, 540 360 S 780 240, 1040 320 S 1280 440, 1520 340",
        delay: 5,
        dur: 22
    },
    {
        d: "M-80 500 C 80 400, 260 540, 460 420 S 700 280, 940 380 S 1180 480, 1520 440",
        delay: 1.5,
        dur: 16
    },
    {
        d: "M-80 350 C 200 270, 360 430, 580 310 S 820 200, 1080 290 S 1320 400, 1520 310",
        delay: 4,
        dur: 20
    }
];
const GRAD_IDS = [
    "wfg0",
    "wfg1",
    "wfg2"
];
function SvgFlowLayer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 1440 800",
            preserveAspectRatio: "xMidYMid slice",
            className: "w-full h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "wfg0",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "35%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "65%",
                                    stopColor: "#7c3aed",
                                    stopOpacity: "0.4"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#7c3aed",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "wfg1",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#0ea5e9",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "45%",
                                    stopColor: "#0ea5e9",
                                    stopOpacity: "0.45"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#0ea5e9",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "wfg2",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#7c3aed",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: "#8b5cf6",
                                    stopOpacity: "0.35"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                FLOW_PATHS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                        d: p.d,
                        fill: "none",
                        stroke: `url(#${GRAD_IDS[i % 3]})`,
                        strokeWidth: i % 2 === 0 ? 1.1 : 0.65,
                        initial: {
                            pathLength: 0,
                            opacity: 0
                        },
                        animate: {
                            pathLength: [
                                0,
                                1,
                                0
                            ],
                            opacity: [
                                0,
                                0.026 + i % 3 * 0.007,
                                0
                            ]
                        },
                        transition: {
                            duration: p.dur,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                            times: [
                                0,
                                0.5,
                                1
                            ]
                        }
                    }, i, false, {
                        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/components/backgrounds/WaveBackground.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function WaveBackground() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                camera: {
                    position: [
                        0,
                        3.2,
                        12
                    ],
                    fov: 62,
                    near: 0.1,
                    far: 80
                },
                gl: {
                    antialias: false,
                    alpha: true
                },
                dpr: [
                    1,
                    1.5
                ],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                        attach: "fog",
                        args: [
                            "#060b18",
                            8,
                            28
                        ]
                    }, void 0, false, {
                        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiquiditySurface, {}, void 0, false, {
                        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SvgFlowLayer, {}, void 0, false, {
                fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.008) 3px, rgba(0,229,255,0.008) 4px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    background: "radial-gradient(ellipse 88% 72% at 50% 62%, transparent 38%, rgba(6,11,24,0.72) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/backgrounds/WaveBackground.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/backgrounds/WaveBackground.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/CursorGlow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CursorGlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function CursorGlow() {
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(-500);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 80,
        damping: 22
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 80,
        damping: 22
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const move = (e)=>{
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return ()=>window.removeEventListener("mousemove", move);
    }, [
        mouseX,
        mouseY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        "aria-hidden": "true",
        className: "pointer-events-none fixed top-0 left-0 z-[5] rounded-full will-change-transform",
        style: {
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            width: 420,
            height: 420,
            background: "radial-gradient(circle, rgba(0,229,255,0.08) 0%, rgba(0,229,255,0.04) 35%, transparent 70%)",
            filter: "blur(28px)"
        }
    }, void 0, false, {
        fileName: "[project]/components/ui/CursorGlow.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/MiniChart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MiniChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const POINT_COUNT = 8;
const W = 320;
const H = 70;
const PAD = 6;
function buildPath(data) {
    const pts = data.map((v, i)=>{
        const x = PAD + i / (POINT_COUNT - 1) * (W - PAD * 2);
        const y = H - PAD - v / 100 * (H - PAD * 2);
        return {
            x,
            y
        };
    });
    const polyline = pts.map((p)=>`${p.x},${p.y}`).join(" ");
    const area = [
        `${PAD},${H}`,
        ...pts.map((p)=>`${p.x},${p.y}`),
        `${W - PAD},${H}`
    ].join(" ");
    const last = pts[pts.length - 1];
    return {
        polyline,
        area,
        lastX: last.x,
        lastY: last.y
    };
}
function MiniChart() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // ✅ ONLY RUN ON CLIENT (fixes hydration)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initial = Array.from({
            length: POINT_COUNT
        }, ()=>30 + Math.random() * 40);
        setData(initial);
    }, []);
    // ✅ animation loop (only runs after mount)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!data) return;
        const id = setInterval(()=>{
            setData((prev)=>{
                if (!prev) return prev;
                const last = prev[prev.length - 1];
                const next = Math.max(10, Math.min(90, last + (Math.random() - 0.48) * 12));
                return [
                    ...prev.slice(1),
                    next
                ];
            });
        }, 1400);
        return ()=>clearInterval(id);
    }, [
        data
    ]);
    // 🚫 prevent server/client mismatch
    if (!data) return null;
    const { polyline, area, lastX, lastY } = buildPath(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none z-30",
        style: {
            width: W,
            height: H + 10,
            opacity: 0.32
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: W,
            height: H,
            viewBox: `0 0 ${W} ${H}`,
            overflow: "visible",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "mc-lineGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "60%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0.9"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/MiniChart.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: "mc-areaGrad",
                            x1: "0%",
                            y1: "0%",
                            x2: "0%",
                            y2: "100%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: "#00e5ff",
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/MiniChart.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                            id: "mc-glow",
                            x: "-20%",
                            y: "-20%",
                            width: "140%",
                            height: "140%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                    stdDeviation: "2",
                                    result: "blur"
                                }, void 0, false, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "blur"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/MiniChart.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                            in: "SourceGraphic"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ui/MiniChart.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ui/MiniChart.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ui/MiniChart.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/MiniChart.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: area,
                    fill: "url(#mc-areaGrad)"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MiniChart.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                    fill: "none",
                    stroke: "url(#mc-lineGrad)",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    points: polyline,
                    filter: "url(#mc-glow)"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MiniChart.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: lastX,
                    cy: lastY,
                    r: "2.5",
                    fill: "#00e5ff",
                    opacity: "0.9",
                    filter: "url(#mc-glow)"
                }, void 0, false, {
                    fileName: "[project]/components/ui/MiniChart.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/MiniChart.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/MiniChart.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backgrounds$2f$WaveBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/backgrounds/WaveBackground.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CursorGlow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CursorGlow.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MiniChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/MiniChart.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const PROBEX_URL = ("TURBOPACK compile-time value", "https://app.probex.io") ?? "#";
const LIVE_STATS = [
    {
        label: "Consensus",
        value: "99.42%"
    },
    {
        label: "Latency",
        value: "< 90ms"
    },
    {
        label: "Markets",
        value: "840+"
    }
];
function Hero() {
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    const waveY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        600
    ], [
        0,
        90
    ]);
    const waveOpacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        480
    ], [
        1,
        0
    ]);
    const contentY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, [
        0,
        400
    ], [
        0,
        -36
    ]);
    const mouseX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const mouseY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    const springX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseX, {
        stiffness: 50,
        damping: 20
    });
    const springY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSpring"])(mouseY, {
        stiffness: 50,
        damping: 20
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const move = (e)=>{
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", move);
        return ()=>window.removeEventListener("mousemove", move);
    }, [
        mouseX,
        mouseY
    ]);
    const rotateX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(springY, [
        -1,
        1
    ], [
        2.5,
        -2.5
    ]);
    const rotateY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(springX, [
        -1,
        1
    ], [
        -2.5,
        2.5
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: waveY,
                    opacity: waveOpacity,
                    zIndex: 0
                },
                className: "absolute inset-0 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$backgrounds$2f$WaveBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    zIndex: 1,
                    background: "linear-gradient(to bottom, rgba(6,11,24,0.82) 0%, rgba(6,11,24,0.48) 30%, rgba(6,11,24,0.28) 55%, rgba(6,11,24,0.62) 78%, rgba(6,11,24,0.92) 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    opacity: [
                        0.06,
                        0.14,
                        0.06
                    ]
                },
                transition: {
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                "aria-hidden": true,
                className: "absolute pointer-events-none z-[2]",
                style: {
                    top: "26%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 750,
                    height: 400,
                    background: "radial-gradient(ellipse, rgba(0,229,255,0.15) 0%, rgba(124,58,237,0.06) 55%, transparent 70%)",
                    filter: "blur(50px)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[3] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CursorGlow$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-[4] pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$MiniChart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/sections/Hero.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: contentY,
                    rotateX,
                    rotateY,
                    transformPerspective: 1200
                },
                className: "relative z-10 flex flex-col items-center gpu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.1
                        },
                        className: "mb-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] tracking-[0.24em] uppercase font-medium",
                            style: {
                                fontFamily: "'JetBrains Mono', monospace",
                                background: "rgba(0,229,255,0.06)",
                                border: "1px solid rgba(0,229,255,0.18)",
                                color: "var(--cyan)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-1.5 h-1.5 rounded-full animate-data-blink",
                                    style: {
                                        background: "var(--cyan)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                "Probex Engine · Live"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Hero.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: 18
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.9,
                            delay: 0.18
                        },
                        style: {
                            fontFamily: "Manrope, sans-serif",
                            fontWeight: 800,
                            fontSize: "clamp(3.2rem, 10vw, 7.5rem)",
                            letterSpacing: "-0.03em",
                            lineHeight: 0.94
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient-white",
                                children: "QUBO"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gradient-probex",
                                children: "Probex"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 12
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.32
                        },
                        className: "mt-5 text-lg md:text-xl font-light",
                        style: {
                            fontFamily: "Manrope, sans-serif",
                            color: "var(--text-secondary)",
                            fontWeight: 300
                        },
                        children: [
                            "Real-time",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--cyan-dim)",
                                    fontWeight: 500
                                },
                                children: "probabilistic consensus"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            " ",
                            "for predictive markets"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.44
                        },
                        className: "mt-4 max-w-md text-sm leading-relaxed",
                        style: {
                            fontFamily: "Manrope, sans-serif",
                            color: "var(--text-muted)",
                            fontWeight: 400
                        },
                        children: "Institutional-grade infrastructure built for compliant predictive markets — cryptographic finality in under 90ms, embedded across 47 regulatory frameworks."
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            delay: 0.54
                        },
                        className: "mt-7 flex items-center gap-1",
                        children: LIVE_STATS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2.5",
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base font-semibold",
                                                style: {
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    color: "var(--cyan-dim)"
                                                },
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[9px] mt-0.5 tracking-[0.16em] uppercase",
                                                style: {
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    color: "var(--text-muted)"
                                                },
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Hero.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    i < LIVE_STATS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-px h-7",
                                        style: {
                                            background: "rgba(148,163,184,0.1)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8,
                            delay: 0.66
                        },
                        className: "mt-9 flex gap-3 flex-col sm:flex-row items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: PROBEX_URL,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                    whileHover: {
                                        scale: 1.03,
                                        boxShadow: "0 0 40px rgba(0,229,255,0.32), 0 0 80px rgba(124,58,237,0.14)"
                                    },
                                    whileTap: {
                                        scale: 0.97
                                    },
                                    className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide cursor-pointer gpu",
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 50%, #7c3aed 100%)",
                                        color: "#060b18"
                                    },
                                    children: [
                                        "Access Probex",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Hero.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/Hero.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                whileHover: {
                                    borderColor: "rgba(0,229,255,0.38)",
                                    color: "var(--text-primary)"
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                onClick: ()=>document.getElementById("pipeline")?.scrollIntoView({
                                        behavior: "smooth"
                                    }),
                                className: "inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium gpu transition-all duration-200",
                                style: {
                                    fontFamily: "Manrope, sans-serif",
                                    border: "1px solid rgba(148,163,184,0.14)",
                                    color: "var(--text-secondary)",
                                    background: "transparent"
                                },
                                children: [
                                    "Explore the engine",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Hero.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Hero.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 0.3
                },
                transition: {
                    delay: 1.6,
                    duration: 1
                },
                "aria-hidden": true,
                className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
                style: {
                    zIndex: 10
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] tracking-[0.32em] uppercase",
                        style: {
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "var(--text-muted)"
                        },
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                7,
                                0
                            ]
                        },
                        transition: {
                            duration: 1.7,
                            repeat: Infinity
                        },
                        className: "w-px h-8",
                        style: {
                            background: "linear-gradient(to bottom, rgba(0,229,255,0.5), transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Hero.tsx",
                        lineNumber: 257,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Hero.tsx",
                lineNumber: 243,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, delay = 0, direction = "up" }) {
    const directionMap = {
        up: {
            y: 32,
            x: 0
        },
        down: {
            y: -32,
            x: 0
        },
        left: {
            x: 32,
            y: 0
        },
        right: {
            x: -32,
            y: 0
        },
        none: {
            x: 0,
            y: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            ...directionMap[direction]
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0
        },
        transition: {
            duration: 0.65,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        viewport: {
            once: true,
            margin: "-80px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Reveal.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Pipeline.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Pipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ─── DATA ─────────────────────────────────────────────────────────── */ const STAGES = [
    {
        index: "01",
        tag: "INGESTION",
        title: "Raw Predictive Feed",
        desc: "Multi-source event streams from prediction markets, liquidity pools, and sentiment oracles are ingested in parallel. Each packet is timestamped at receipt, validated against schema checksums, and queued for normalisation — no data touches consensus without a clean signature.",
        metrics: [
            {
                label: "Ingestion Latency",
                value: "< 14ms"
            },
            {
                label: "Sources Active",
                value: "840+"
            },
            {
                label: "Packet Integrity",
                value: "99.97%"
            }
        ],
        accent: "#00e5ff",
        side: "left"
    },
    {
        index: "02",
        tag: "NORMALISATION",
        title: "Schema & Weight Calibration",
        desc: "Ingested streams are resolved against Probex's unified schema layer. Conflicting signals are probability-weighted using a rolling Bayesian calibration model. Stale events are expired on a per-source TTL; recency decay functions ensure the consensus state always reflects live market reality.",
        metrics: [
            {
                label: "Normalisation",
                value: "< 8ms"
            },
            {
                label: "Calibration Cycle",
                value: "50ms"
            },
            {
                label: "Decay Precision",
                value: "±0.03%"
            }
        ],
        accent: "#8b5cf6",
        side: "right"
    },
    {
        index: "03",
        tag: "CONSENSUS ENGINE",
        title: "Probex Consensus Layer",
        desc: "Normalised signals enter the core Probex consensus engine — a distributed probabilistic voter that resolves multi-party event states with cryptographic finality. Quorum thresholds, deviation bands, and outlier rejection rules are enforced deterministically before any state update is committed.",
        metrics: [
            {
                label: "Consensus Precision",
                value: "99.42%"
            },
            {
                label: "Quorum Latency",
                value: "< 22ms"
            },
            {
                label: "Finality",
                value: "< 40ms"
            }
        ],
        accent: "#00e5ff",
        side: "left"
    },
    {
        index: "04",
        tag: "COMPLIANCE GATE",
        title: "Regulatory Output & Audit",
        desc: "Every committed state transition is routed through Probex's compliance guardrails before reaching end-consumer APIs. Jurisdiction rules, exposure caps, and mandatory reporting triggers are evaluated in-band. All outputs are written to an immutable audit log with full provenance tracing.",
        metrics: [
            {
                label: "Gate Latency",
                value: "< 6ms"
            },
            {
                label: "Audit Coverage",
                value: "100%"
            },
            {
                label: "Jurisdictions",
                value: "47"
            }
        ],
        accent: "#8b5cf6",
        side: "right"
    }
];
const LIVE_METRICS = [
    {
        label: "End-to-end",
        value: "< 90ms"
    },
    {
        label: "Consensus P99",
        value: "38ms"
    },
    {
        label: "Events/sec",
        value: "62,400"
    },
    {
        label: "Uptime (30d)",
        value: "99.97%"
    }
];
/* ─── STAGE CARD ───────────────────────────────────────────────────── */ function StageCard({ stage, i }) {
    const isRight = stage.side === "right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.09,
        direction: isRight ? "right" : "left",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex gap-0 md:gap-10 items-stretch ${isRight ? "md:flex-row-reverse" : "md:flex-row"} flex-col`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex flex-col items-center shrink-0 w-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full flex items-center justify-center shrink-0 gpu",
                            style: {
                                border: `1px solid ${stage.accent}44`,
                                background: `${stage.accent}0d`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: "0.6rem",
                                    fontWeight: 600,
                                    color: stage.accent,
                                    letterSpacing: "0.1em"
                                },
                                children: stage.index
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        i < STAGES.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                scaleY: 0
                            },
                            whileInView: {
                                scaleY: 1
                            },
                            transition: {
                                duration: 0.8,
                                delay: i * 0.1 + 0.3,
                                ease: "easeOut"
                            },
                            viewport: {
                                once: true
                            },
                            className: "flex-1 w-px origin-top mt-2",
                            style: {
                                background: `linear-gradient(to bottom, ${stage.accent}44, transparent)`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Pipeline.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 mb-8 md:mb-10 p-7 rounded-xl gpu transition-colors duration-250 group",
                    style: {
                        background: "rgba(11,16,32,0.7)",
                        border: `1px solid rgba(148,163,184,0.07)`
                    },
                    onMouseEnter: (e)=>{
                        e.currentTarget.style.borderColor = `${stage.accent}33`;
                        e.currentTarget.style.background = "rgba(13,20,42,0.85)";
                    },
                    onMouseLeave: (e)=>{
                        e.currentTarget.style.borderColor = "rgba(148,163,184,0.07)";
                        e.currentTarget.style.background = "rgba(11,16,32,0.7)";
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "md:hidden text-[10px] tracking-[0.22em] mb-3 block",
                            style: {
                                fontFamily: "'JetBrains Mono', monospace",
                                color: stage.accent,
                                opacity: 0.7
                            },
                            children: stage.index
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] tracking-[0.22em] uppercase font-medium mb-3 block",
                            style: {
                                fontFamily: "'JetBrains Mono', monospace",
                                color: stage.accent
                            },
                            children: stage.tag
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-semibold mb-3 leading-snug",
                            style: {
                                fontFamily: "Manrope, sans-serif",
                                fontWeight: 700,
                                color: "var(--text-primary)",
                                letterSpacing: "-0.01em"
                            },
                            children: stage.title
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm leading-relaxed mb-6",
                            style: {
                                fontFamily: "Manrope, sans-serif",
                                color: "var(--text-secondary)",
                                fontWeight: 400
                            },
                            children: stage.desc
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-3 pt-5",
                            style: {
                                borderTop: "1px solid rgba(148,163,184,0.06)"
                            },
                            children: stage.metrics.map((m, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] tracking-[0.18em] uppercase mb-1",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "var(--text-muted)"
                                            },
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Pipeline.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: stage.accent
                                            },
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Pipeline.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/components/sections/Pipeline.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Pipeline.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Pipeline.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:block w-16 shrink-0"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Pipeline.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Pipeline.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Pipeline.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function Pipeline() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "pipeline",
        className: "relative py-28 scroll-mt-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider-cyan absolute top-0 inset-x-0"
            }, void 0, false, {
                fileName: "[project]/components/sections/Pipeline.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-4xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "label-tag mb-4",
                                children: "[ DATA PIPELINE ]"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-5 text-gradient-white",
                                style: {
                                    fontFamily: "Manrope, sans-serif",
                                    fontWeight: 800,
                                    fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                                    letterSpacing: "-0.025em",
                                    lineHeight: 1.1
                                },
                                children: [
                                    "From Raw Signal",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/sections/Pipeline.tsx",
                                        lineNumber: 223,
                                        columnNumber: 28
                                    }, this),
                                    "to Consensus Truth"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-lg text-sm leading-relaxed mb-16",
                                style: {
                                    fontFamily: "Manrope, sans-serif",
                                    color: "var(--text-secondary)"
                                },
                                children: "Probex's four-stage processing architecture transforms noisy, multi-origin predictive feeds into cryptographically finalised consensus states in under 90 milliseconds end-to-end."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Pipeline.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: STAGES.map((stage, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StageCard, {
                                stage: stage,
                                i: i
                            }, i, false, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/Pipeline.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 14
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.55,
                            delay: 0.3
                        },
                        viewport: {
                            once: true
                        },
                        className: "mt-4 flex items-center justify-between px-5 py-3.5 rounded-xl",
                        style: {
                            background: "rgba(11,16,32,0.8)",
                            border: "1px solid rgba(0,229,255,0.1)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 mr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full animate-data-blink",
                                        style: {
                                            background: "#22c55e"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Pipeline.tsx",
                                        lineNumber: 255,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: "0.6rem",
                                            letterSpacing: "0.2em",
                                            color: "#22c55e",
                                            textTransform: "uppercase"
                                        },
                                        children: "Live"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Pipeline.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 254,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6 flex-wrap",
                                children: LIVE_METRICS.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: "0.58rem",
                                                    letterSpacing: "0.14em",
                                                    color: "var(--text-muted)",
                                                    textTransform: "uppercase"
                                                },
                                                children: [
                                                    m.label,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Pipeline.tsx",
                                                lineNumber: 268,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: "0.72rem",
                                                    fontWeight: 600,
                                                    color: "var(--cyan-dim)"
                                                },
                                                children: m.value
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Pipeline.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/sections/Pipeline.tsx",
                                        lineNumber: 267,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Pipeline.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Pipeline.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Pipeline.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider-cyan absolute bottom-0 inset-x-0"
            }, void 0, false, {
                fileName: "[project]/components/sections/Pipeline.tsx",
                lineNumber: 285,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Pipeline.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Architecture.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Architecture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ─── INLINE SVG DIAGRAMS ───────────────────────────────────────────── */ /** Layer 1: Consensus Verification — node cluster with edges */ function DiagramConsensus() {
    const nodes = [
        {
            cx: 80,
            cy: 36,
            r: 5
        },
        {
            cx: 148,
            cy: 20,
            r: 4
        },
        {
            cx: 200,
            cy: 48,
            r: 6
        },
        {
            cx: 148,
            cy: 76,
            r: 4
        },
        {
            cx: 80,
            cy: 64,
            r: 4
        },
        {
            cx: 30,
            cy: 50,
            r: 3
        }
    ];
    const edges = [
        [
            0,
            1
        ],
        [
            0,
            4
        ],
        [
            0,
            5
        ],
        [
            1,
            2
        ],
        [
            2,
            3
        ],
        [
            3,
            4
        ],
        [
            1,
            3
        ],
        [
            0,
            2
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 230 96",
        className: "w-full",
        style: {
            height: 96
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                        id: "cng",
                        cx: "50%",
                        cy: "50%",
                        r: "50%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                stopColor: "#00e5ff",
                                stopOpacity: "0.9"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                stopColor: "#00e5ff",
                                stopOpacity: "0.2"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Architecture.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                        id: "cnglow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                stdDeviation: "2",
                                result: "blur"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "blur"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Architecture.tsx",
                                        lineNumber: 31,
                                        columnNumber: 20
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                        in: "SourceGraphic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Architecture.tsx",
                                        lineNumber: 31,
                                        columnNumber: 44
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Architecture.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            edges.map(([a, b], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].line, {
                    x1: nodes[a].cx,
                    y1: nodes[a].cy,
                    x2: nodes[b].cx,
                    y2: nodes[b].cy,
                    stroke: "rgba(0,229,255,0.22)",
                    strokeWidth: "0.7",
                    initial: {
                        pathLength: 0,
                        opacity: 0
                    },
                    whileInView: {
                        pathLength: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.6,
                        delay: i * 0.06
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)),
            nodes.map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: n.cx,
                    cy: n.cy,
                    r: n.r,
                    fill: "url(#cng)",
                    filter: "url(#cnglow)",
                    initial: {
                        scale: 0,
                        opacity: 0
                    },
                    whileInView: {
                        scale: 1,
                        opacity: 1
                    },
                    transition: {
                        duration: 0.4,
                        delay: i * 0.07 + 0.3
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                cx: nodes[2].cx,
                cy: nodes[2].cy,
                r: 14,
                fill: "none",
                stroke: "rgba(0,229,255,0.18)",
                strokeWidth: "0.8",
                strokeDasharray: "4 3",
                initial: {
                    opacity: 0
                },
                whileInView: {
                    opacity: 1
                },
                transition: {
                    delay: 0.9
                },
                viewport: {
                    once: true
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Architecture.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
/** Layer 2: Compliance Guardrails — layered shield / filter funnel */ function DiagramCompliance() {
    const bands = [
        0,
        10,
        20,
        30
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 230 96",
        className: "w-full",
        style: {
            height: 96
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "shieldGrad",
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#7c3aed",
                            stopOpacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#7c3aed",
                            stopOpacity: "0.1"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M115 8 L165 28 L165 56 Q165 82 115 90 Q65 82 65 56 L65 28 Z",
                fill: "none",
                stroke: "rgba(124,58,237,0.35)",
                strokeWidth: "1",
                initial: {
                    pathLength: 0
                },
                whileInView: {
                    pathLength: 1
                },
                transition: {
                    duration: 1.1,
                    ease: "easeInOut"
                },
                viewport: {
                    once: true
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            bands.map((offset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                    d: `M${80 + offset} ${38 + i * 11} L${150 - offset} ${38 + i * 11}`,
                    stroke: `rgba(139,92,246,${0.45 - i * 0.09})`,
                    strokeWidth: "1.2",
                    strokeLinecap: "round",
                    initial: {
                        scaleX: 0,
                        opacity: 0
                    },
                    whileInView: {
                        scaleX: 1,
                        opacity: 1
                    },
                    style: {
                        originX: "50%"
                    },
                    transition: {
                        duration: 0.45,
                        delay: 0.4 + i * 0.1
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M105 62 L112 70 L128 52",
                fill: "none",
                stroke: "rgba(139,92,246,0.8)",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                initial: {
                    pathLength: 0
                },
                whileInView: {
                    pathLength: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 1
                },
                viewport: {
                    once: true
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            [
                40,
                70,
                100,
                130,
                160,
                190
            ].map((x, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                    cx: x,
                    cy: 88,
                    r: 2.5,
                    fill: i < 4 ? "rgba(139,92,246,0.6)" : "rgba(148,163,184,0.15)",
                    initial: {
                        scale: 0
                    },
                    whileInView: {
                        scale: 1
                    },
                    transition: {
                        delay: 0.8 + i * 0.07
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Architecture.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
/** Layer 3: Liquidity Engine — order book bars + flow lines */ function DiagramLiquidity() {
    const bars = [
        {
            x: 22,
            h: 28,
            fill: "rgba(0,229,255,0.6)"
        },
        {
            x: 38,
            h: 42,
            fill: "rgba(0,229,255,0.75)"
        },
        {
            x: 54,
            h: 34,
            fill: "rgba(0,229,255,0.55)"
        },
        {
            x: 70,
            h: 50,
            fill: "rgba(0,229,255,0.8)"
        },
        {
            x: 86,
            h: 30,
            fill: "rgba(0,229,255,0.5)"
        }
    ];
    const asks = [
        {
            x: 116,
            h: 26,
            fill: "rgba(124,58,237,0.6)"
        },
        {
            x: 132,
            h: 44,
            fill: "rgba(124,58,237,0.75)"
        },
        {
            x: 148,
            h: 32,
            fill: "rgba(124,58,237,0.55)"
        },
        {
            x: 164,
            h: 48,
            fill: "rgba(124,58,237,0.7)"
        },
        {
            x: 180,
            h: 22,
            fill: "rgba(124,58,237,0.45)"
        }
    ];
    const baseY = 76;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 230 96",
        className: "w-full",
        style: {
            height: 96
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "100",
                y1: "20",
                x2: "100",
                y2: "76",
                stroke: "rgba(148,163,184,0.15)",
                strokeWidth: "0.8",
                strokeDasharray: "3 3"
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            bars.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].rect, {
                    x: b.x,
                    y: baseY - b.h,
                    width: 10,
                    height: b.h,
                    fill: b.fill,
                    rx: "1",
                    initial: {
                        scaleY: 0
                    },
                    whileInView: {
                        scaleY: 1
                    },
                    style: {
                        originY: "bottom",
                        originX: `${b.x + 5}px`
                    },
                    transition: {
                        duration: 0.4,
                        delay: i * 0.07
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)),
            asks.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].rect, {
                    x: a.x,
                    y: baseY - a.h,
                    width: 10,
                    height: a.h,
                    fill: a.fill,
                    rx: "1",
                    initial: {
                        scaleY: 0
                    },
                    whileInView: {
                        scaleY: 1
                    },
                    style: {
                        originY: "bottom"
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.3 + i * 0.07
                    },
                    viewport: {
                        once: true
                    }
                }, i, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].path, {
                d: "M 100 50 Q 115 32, 130 50",
                fill: "none",
                stroke: "rgba(0,229,255,0.4)",
                strokeWidth: "1",
                initial: {
                    pathLength: 0
                },
                whileInView: {
                    pathLength: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.8
                },
                viewport: {
                    once: true
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                x: "96",
                y: "90",
                textAnchor: "middle",
                style: {
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: 7,
                    fill: "rgba(148,163,184,0.4)"
                },
                children: "SPREAD"
            }, void 0, false, {
                fileName: "[project]/components/sections/Architecture.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/Architecture.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
/* ─── LAYER CONFIG ──────────────────────────────────────────────────── */ const LAYERS = [
    {
        index: "L1",
        tag: "CONSENSUS VERIFICATION",
        title: "Distributed Truth Resolution",
        desc: "Multi-node quorum validation with cryptographic finality. Probex resolves contested event states by aggregating validator votes against deviation bounds, rejecting outliers, and committing only when a configurable quorum threshold is met.",
        diagram: DiagramConsensus,
        stats: [
            {
                label: "Quorum threshold",
                value: "67%"
            },
            {
                label: "Validator nodes",
                value: "128"
            },
            {
                label: "Finality",
                value: "< 40ms"
            }
        ],
        accent: "#00e5ff",
        glowColor: "rgba(0,229,255,0.1)"
    },
    {
        index: "L2",
        tag: "COMPLIANCE GUARDRAILS",
        title: "In-Band Regulatory Layer",
        desc: "Jurisdiction rules, position caps, mandatory reporting, and KYC/AML hooks are evaluated inline — never as a post-process. Probex supports 47 regulatory frameworks with live rule updates and full immutable audit trail per state transition.",
        diagram: DiagramCompliance,
        stats: [
            {
                label: "Frameworks",
                value: "47"
            },
            {
                label: "Gate latency",
                value: "< 6ms"
            },
            {
                label: "Audit coverage",
                value: "100%"
            }
        ],
        accent: "#8b5cf6",
        glowColor: "rgba(124,58,237,0.12)"
    },
    {
        index: "L3",
        tag: "LIQUIDITY ENGINE",
        title: "Predictive Market Depth",
        desc: "Real-time synthetic order book construction from aggregated position flows, automated market-maker liquidity, and institutional participation tiers. Spread optimisation and depth balancing run continuously to minimise slippage on large position changes.",
        diagram: DiagramLiquidity,
        stats: [
            {
                label: "Book depth",
                value: "L5"
            },
            {
                label: "AMM refresh",
                value: "200ms"
            },
            {
                label: "Slippage (avg)",
                value: "0.04%"
            }
        ],
        accent: "#00e5ff",
        glowColor: "rgba(0,229,255,0.08)"
    }
];
/* ─── SPOTLIGHT CARD ─────────────────────────────────────────────── */ function LayerCard({ layer, i }) {
    const Diagram = layer.diagram;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        delay: i * 0.1,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "relative rounded-xl overflow-hidden gpu transition-colors duration-250 h-full",
            style: {
                background: "rgba(11,16,32,0.72)",
                border: `1px solid rgba(148,163,184,0.07)`
            },
            onMouseMove: (e)=>{
                const r = ref.current?.getBoundingClientRect();
                if (r) setPos({
                    x: e.clientX - r.left,
                    y: e.clientY - r.top
                });
            },
            onMouseEnter: ()=>setHovered(true),
            onMouseLeave: ()=>{
                setHovered(false);
                ref.current.style.borderColor = "rgba(148,163,184,0.07)";
            },
            onMouseOver: (e)=>e.currentTarget.style.borderColor = `${layer.accent}28`,
            onMouseOut: (e)=>e.currentTarget.style.borderColor = "rgba(148,163,184,0.07)",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none transition-opacity duration-300",
                    style: {
                        opacity: hovered ? 1 : 0,
                        background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, ${layer.glowColor}, transparent 65%)`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 p-6 flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider",
                                    style: {
                                        fontFamily: "'JetBrains Mono', monospace",
                                        background: `${layer.accent}14`,
                                        border: `1px solid ${layer.accent}30`,
                                        color: layer.accent
                                    },
                                    children: layer.index
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] tracking-[0.2em] uppercase",
                                    style: {
                                        fontFamily: "'JetBrains Mono', monospace",
                                        color: "var(--text-muted)"
                                    },
                                    children: layer.tag
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg mb-5 overflow-hidden px-3 py-2",
                            style: {
                                background: "rgba(6,11,24,0.6)",
                                border: "1px solid rgba(148,163,184,0.05)",
                                minHeight: 96
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Diagram, {}, void 0, false, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-bold mb-2 leading-snug",
                            style: {
                                fontFamily: "Manrope, sans-serif",
                                color: "var(--text-primary)",
                                letterSpacing: "-0.01em"
                            },
                            children: layer.title
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs leading-relaxed mb-5 flex-1",
                            style: {
                                fontFamily: "Manrope, sans-serif",
                                color: "var(--text-secondary)",
                                fontWeight: 400
                            },
                            children: layer.desc
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2 pt-4",
                            style: {
                                borderTop: "1px solid rgba(148,163,184,0.05)"
                            },
                            children: layer.stats.map((s, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[8px] tracking-[0.16em] uppercase mb-0.5",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "var(--text-muted)"
                                            },
                                            children: s.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Architecture.tsx",
                                            lineNumber: 345,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: layer.accent
                                            },
                                            children: s.value
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Architecture.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, j, true, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 288,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Architecture.tsx",
            lineNumber: 263,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Architecture.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
function Architecture() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "architecture",
        className: "py-28 scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-10 items-end mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label-tag mb-4",
                                        children: "[ PROBEX ARCHITECTURE ]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Architecture.tsx",
                                        lineNumber: 376,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-gradient-white",
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            fontWeight: 800,
                                            fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                                            letterSpacing: "-0.025em",
                                            lineHeight: 1.1
                                        },
                                        children: [
                                            "Three Operational",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/sections/Architecture.tsx",
                                                lineNumber: 387,
                                                columnNumber: 34
                                            }, this),
                                            "Layers. One Engine."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Architecture.tsx",
                                        lineNumber: 377,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed",
                                style: {
                                    fontFamily: "Manrope, sans-serif",
                                    color: "var(--text-secondary)"
                                },
                                children: "Probex separates concerns into three independently verifiable layers — consensus, compliance, and liquidity — each with its own failure domain, latency budget, and monitoring surface. They compose to produce a single, auditable predictive market infrastructure."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Architecture.tsx",
                                lineNumber: 390,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Architecture.tsx",
                        lineNumber: 374,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-5",
                    children: LAYERS.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerCard, {
                            layer: layer,
                            i: i
                        }, i, false, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 405,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.8,
                        delay: 0.5
                    },
                    viewport: {
                        once: true
                    },
                    className: "mt-8 flex items-center justify-between px-6",
                    children: LAYERS.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-px",
                                    style: {
                                        background: i === 0 ? `linear-gradient(to right, transparent, ${layer.accent}40)` : i === 1 ? `linear-gradient(to right, ${LAYERS[0].accent}40, ${layer.accent}40)` : `linear-gradient(to right, ${layer.accent}40, transparent)`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1.5 h-1.5 rounded-full mx-2 shrink-0",
                                    style: {
                                        background: layer.accent,
                                        boxShadow: `0 0 6px ${layer.accent}80`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this),
                                i === LAYERS.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Architecture.tsx",
                                    lineNumber: 433,
                                    columnNumber: 43
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/sections/Architecture.tsx",
                            lineNumber: 418,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Architecture.tsx",
                    lineNumber: 410,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Architecture.tsx",
            lineNumber: 370,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Architecture.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/SuperCore.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SuperCore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ─── MATHEMATICAL FRAMEWORKS ────────────────────────────────────────── */ const FRAMEWORKS = [
    {
        id: "bayesian",
        index: "01",
        tag: "INFERENCE ENGINE",
        title: "Hierarchical Bayesian Inference",
        shortTitle: "Bayesian",
        accent: "#00e5ff",
        accentDim: "rgba(0,229,255,0.08)",
        formula: "P(H|E) = P(E|H) · P(H) / P(E)",
        formulaAnnotation: "Posterior · Likelihood × Prior / Evidence",
        desc: "Probex's core inference layer applies hierarchical Bayesian updating across all consensus inputs. Each new event updates a rolling prior distribution — signal confidence degrades gracefully under sparse data rather than collapsing to binary outcomes.",
        properties: [
            {
                label: "Update frequency",
                value: "50ms rolling"
            },
            {
                label: "Prior distribution",
                value: "Beta(α,β)"
            },
            {
                label: "Convergence",
                value: "< 8 epochs"
            }
        ]
    },
    {
        id: "kalman",
        index: "02",
        tag: "STATE TRACKING",
        title: "Extended Kalman Filter",
        shortTitle: "Kalman",
        accent: "#8b5cf6",
        accentDim: "rgba(139,92,246,0.08)",
        formula: "x̂ₖ = Fₖ x̂ₖ₋₁ + Kₖ(zₖ − HₖFₖx̂ₖ₋₁)",
        formulaAnnotation: "State · Prediction + Gain × Innovation",
        desc: "Non-linear market state variables are tracked via an Extended Kalman Filter — handling the non-Gaussian residuals common in prediction markets. The filter produces optimal state estimates even under high measurement noise, with covariance bounds surfaced to the compliance layer.",
        properties: [
            {
                label: "State vector dims",
                value: "48"
            },
            {
                label: "Process noise",
                value: "Q adaptive"
            },
            {
                label: "Noise tolerance",
                value: "σ ≤ 0.08"
            }
        ]
    },
    {
        id: "brier",
        index: "03",
        tag: "CALIBRATION",
        title: "Brier Score Calibration",
        shortTitle: "Brier",
        accent: "#00e5ff",
        accentDim: "rgba(0,229,255,0.08)",
        formula: "BS = (1/N) Σ (fₜ − oₜ)²",
        formulaAnnotation: "Mean Squared Error of Probability Forecasts",
        desc: "All Probex probability outputs are continuously evaluated against resolved outcomes using the Brier Score. Validators whose forecasts systematically underperform are downweighted in future consensus rounds. Calibration curves are published on-chain for independent verification.",
        properties: [
            {
                label: "Target BS",
                value: "< 0.06"
            },
            {
                label: "Rolling window",
                value: "2,000 events"
            },
            {
                label: "Recalibration",
                value: "Every epoch"
            }
        ]
    },
    {
        id: "shapley",
        index: "04",
        tag: "ATTRIBUTION",
        title: "Shapley Value Attribution",
        shortTitle: "Shapley",
        accent: "#8b5cf6",
        accentDim: "rgba(139,92,246,0.08)",
        formula: "φᵢ = Σ [|S|!(n−|S|−1)!/n!] · [v(S∪{i})−v(S)]",
        formulaAnnotation: "Fair marginal contribution across all coalitions",
        desc: "Payoff distribution across market participants uses Shapley Value attribution — the only allocation mechanism satisfying efficiency, symmetry, dummy, and additivity axioms simultaneously. This ensures no participant can systematically extract value beyond their marginal contribution to consensus accuracy.",
        properties: [
            {
                label: "Coalitions",
                value: "2ⁿ computed"
            },
            {
                label: "Fairness axioms",
                value: "4 / 4 met"
            },
            {
                label: "Distribution lag",
                value: "< 1 epoch"
            }
        ]
    }
];
/* ─── FORMULA DISPLAY ────────────────────────────────────────────────── */ function FormulaBlock({ formula, annotation, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg px-4 py-4 my-5 relative overflow-hidden",
        style: {
            background: "rgba(6,11,24,0.7)",
            border: `1px solid ${accent}22`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-8 h-px",
                style: {
                    background: accent,
                    opacity: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/SuperCore.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-px h-6",
                style: {
                    background: accent,
                    opacity: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/SuperCore.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-medium mb-1.5 tracking-wide",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color: accent
                },
                children: formula
            }, void 0, false, {
                fileName: "[project]/components/sections/SuperCore.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] tracking-[0.12em]",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--text-muted)"
                },
                children: annotation
            }, void 0, false, {
                fileName: "[project]/components/sections/SuperCore.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/SuperCore.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
/* ─── ANIMATED BACKGROUND GRID ───────────────────────────────────────── */ function MathGrid({ accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 pointer-events-none overflow-hidden rounded-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 400 300",
            className: "w-full h-full opacity-[0.04]",
            preserveAspectRatio: "xMidYMid slice",
            children: [
                [
                    50,
                    100,
                    150,
                    200,
                    250
                ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "0",
                        y1: y,
                        x2: "400",
                        y2: y,
                        stroke: accent,
                        strokeWidth: "0.5"
                    }, y, false, {
                        fileName: "[project]/components/sections/SuperCore.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)),
                [
                    80,
                    160,
                    240,
                    320
                ].map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: x,
                        y1: "0",
                        x2: x,
                        y2: "300",
                        stroke: accent,
                        strokeWidth: "0.5"
                    }, x, false, {
                        fileName: "[project]/components/sections/SuperCore.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M0 250 C 60 230, 100 180, 140 140 S 240 80, 280 90 S 360 130, 400 120",
                    fill: "none",
                    stroke: accent,
                    strokeWidth: "1.2",
                    opacity: 0.6
                }, void 0, false, {
                    fileName: "[project]/components/sections/SuperCore.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/SuperCore.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/SuperCore.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
function SuperCore() {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const fw = FRAMEWORKS[active];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "supercore",
        className: "py-28 scroll-mt-20 relative overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag mb-4",
                            children: "[ MATHEMATICAL FRAMEWORK ]"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/SuperCore.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-10 items-end mb-14",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-gradient-white",
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 800,
                                        fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                                        letterSpacing: "-0.025em",
                                        lineHeight: 1.1
                                    },
                                    children: [
                                        "The Mathematics",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 165,
                                            columnNumber: 30
                                        }, this),
                                        "Behind Probex"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed",
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        color: "var(--text-secondary)"
                                    },
                                    children: "Probex's predictive accuracy rests on four interlocking mathematical frameworks — chosen for their formal guarantees, not their familiarity. Every layer can be independently audited against its specification."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/SuperCore.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/SuperCore.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.05,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 flex-wrap mb-8",
                        children: FRAMEWORKS.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActive(i),
                                className: "px-4 py-2 rounded-md text-xs tracking-widest uppercase transition-all duration-200 gpu",
                                style: {
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontWeight: 500,
                                    background: active === i ? `${f.accent}16` : "rgba(11,16,32,0.7)",
                                    border: active === i ? `1px solid ${f.accent}44` : "1px solid rgba(148,163,184,0.07)",
                                    color: active === i ? f.accent : "var(--text-muted)"
                                },
                                children: f.shortTitle
                            }, f.id, false, {
                                fileName: "[project]/components/sections/SuperCore.tsx",
                                lineNumber: 182,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/SuperCore.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/SuperCore.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.38,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    className: "grid md:grid-cols-[1fr_380px] gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-xl overflow-hidden p-8 gpu",
                            style: {
                                background: "rgba(11,16,32,0.75)",
                                border: `1px solid ${fw.accent}1a`
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MathGrid, {
                                    accent: fw.accent
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 mb-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider",
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        background: `${fw.accent}14`,
                                                        border: `1px solid ${fw.accent}30`,
                                                        color: fw.accent
                                                    },
                                                    children: fw.index
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] tracking-[0.22em] uppercase",
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        color: "var(--text-muted)"
                                                    },
                                                    children: fw.tag
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-bold mb-3 leading-snug",
                                            style: {
                                                fontFamily: "Manrope, sans-serif",
                                                color: "var(--text-primary)",
                                                letterSpacing: "-0.02em"
                                            },
                                            children: fw.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm leading-relaxed",
                                            style: {
                                                fontFamily: "Manrope, sans-serif",
                                                color: "var(--text-secondary)"
                                            },
                                            children: fw.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormulaBlock, {
                                            formula: fw.formula,
                                            annotation: fw.formulaAnnotation,
                                            accent: fw.accent
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/SuperCore.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-6 gpu",
                                    style: {
                                        background: "rgba(11,16,32,0.75)",
                                        border: "1px solid rgba(148,163,184,0.07)",
                                        flex: 1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] tracking-[0.22em] uppercase mb-5",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "var(--text-muted)"
                                            },
                                            children: "Specifications"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: fw.properties.map((prop, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between py-3",
                                                    style: {
                                                        borderBottom: i < fw.properties.length - 1 ? "1px solid rgba(148,163,184,0.05)" : "none"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs",
                                                            style: {
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                color: "var(--text-muted)"
                                                            },
                                                            children: prop.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold",
                                                            style: {
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                color: fw.accent
                                                            },
                                                            children: prop.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl p-6 gpu",
                                    style: {
                                        background: "rgba(11,16,32,0.75)",
                                        border: "1px solid rgba(148,163,184,0.07)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] tracking-[0.22em] uppercase mb-4",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "var(--text-muted)"
                                            },
                                            children: "Consensus Precision"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 305,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold mb-3",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: fw.accent
                                            },
                                            children: "99.42%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full rounded-full overflow-hidden",
                                            style: {
                                                height: 4,
                                                background: "rgba(148,163,184,0.1)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "h-full rounded-full",
                                                initial: {
                                                    width: 0
                                                },
                                                animate: {
                                                    width: "99.42%"
                                                },
                                                transition: {
                                                    duration: 1.1,
                                                    delay: 0.2,
                                                    ease: "easeOut"
                                                },
                                                style: {
                                                    background: `linear-gradient(to right, ${fw.accent}, ${active % 2 === 0 ? "#8b5cf6" : "#00e5ff"})`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/SuperCore.tsx",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] mt-2",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "var(--text-muted)"
                                            },
                                            children: "Rolling 2,000 resolved events"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/SuperCore.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/SuperCore.tsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/SuperCore.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this)
                    ]
                }, fw.id, true, {
                    fileName: "[project]/components/sections/SuperCore.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center gap-2 mt-8",
                    children: FRAMEWORKS.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActive(i),
                            className: "transition-all duration-200 rounded-full gpu",
                            style: {
                                width: active === i ? 20 : 6,
                                height: 6,
                                background: active === i ? f.accent : "rgba(148,163,184,0.2)"
                            },
                            "aria-label": `Select ${f.shortTitle}`
                        }, f.id, false, {
                            fileName: "[project]/components/sections/SuperCore.tsx",
                            lineNumber: 345,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/SuperCore.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/SuperCore.tsx",
            lineNumber: 149,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/SuperCore.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/DashboardPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ─── STATIC SEED DATA ───────────────────────────────────────────────── */ const MARKETS = [
    {
        id: "PRX-001",
        event: "Fed rate cut before Q3",
        yes: 67.4,
        no: 32.6,
        vol: "$4.2M",
        trend: "up"
    },
    {
        id: "PRX-002",
        event: "BTC > $120k end of month",
        yes: 44.1,
        no: 55.9,
        vol: "$8.7M",
        trend: "down"
    },
    {
        id: "PRX-003",
        event: "ECB emergency session Jun",
        yes: 22.8,
        no: 77.2,
        vol: "$1.1M",
        trend: "flat"
    },
    {
        id: "PRX-004",
        event: "US CPI below 2.8% for May",
        yes: 58.3,
        no: 41.7,
        vol: "$3.5M",
        trend: "up"
    },
    {
        id: "PRX-005",
        event: "NVDA earnings beat consensus",
        yes: 72.9,
        no: 27.1,
        vol: "$6.1M",
        trend: "up"
    },
    {
        id: "PRX-006",
        event: "OPEC+ output cut extended",
        yes: 38.5,
        no: 61.5,
        vol: "$2.8M",
        trend: "down"
    }
];
const SEED_LOGS = [
    {
        ts: "08:42:11.004",
        msg: "CONSENSUS_COMMIT  PRX-004  p=0.583  Δ=+0.021  validators=87/128",
        level: "ok"
    },
    {
        ts: "08:42:10.887",
        msg: "LIQUIDITY_REBAL   PRX-001  spread=0.038%  depth=L5",
        level: "info"
    },
    {
        ts: "08:42:10.551",
        msg: "COMPLIANCE_PASS   PRX-005  jurisdiction=US  flag=none",
        level: "ok"
    },
    {
        ts: "08:42:09.993",
        msg: "SIGNAL_INGEST     sources=840  latency=11ms  checksum=✓",
        level: "info"
    },
    {
        ts: "08:42:09.210",
        msg: "OUTLIER_REJECT    PRX-002  validator=0x3f7  deviation=σ3.8",
        level: "warn"
    },
    {
        ts: "08:42:08.774",
        msg: "KALMAN_UPDATE     state_dim=48  residual=0.024  cov=stable",
        level: "info"
    }
];
/* ─── SPARKLINE ──────────────────────────────────────────────────────── */ function Sparkline({ values, color }) {
    const w = 60;
    const h = 24;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    const pts = values.map((v, i)=>`${i / (values.length - 1) * w},${h - (v - min) / range * h}`).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: w,
        height: h,
        viewBox: `0 0 ${w} ${h}`,
        className: "overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: pts,
                fill: "none",
                stroke: color,
                strokeWidth: "1.2",
                strokeLinejoin: "round",
                strokeLinecap: "round",
                opacity: 0.8
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: (values.length - 1) / (values.length - 1) * w,
                cy: h - (values[values.length - 1] - min) / range * h,
                r: "2",
                fill: color
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/DashboardPreview.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
/* ─── ANIMATED PROBABILITY BAR ───────────────────────────────────────── */ function ProbBar({ yes, trend }) {
    const color = trend === "up" ? "#22d3ee" : trend === "down" ? "#8b5cf6" : "#94a3b8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 rounded-full overflow-hidden",
                style: {
                    height: 4,
                    background: "rgba(148,163,184,0.08)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full",
                    style: {
                        width: `${yes}%`,
                        background: `linear-gradient(to right, ${color}, ${color}99)`,
                        transition: "width 0.6s ease"
                    }
                }, void 0, false, {
                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] tabular-nums shrink-0",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color
                },
                children: [
                    yes.toFixed(1),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/DashboardPreview.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
/* ─── MINI LINE CHART ────────────────────────────────────────────────── */ function VolumeChart() {
    const data = [
        2.1,
        3.4,
        2.8,
        4.2,
        3.9,
        5.1,
        4.7,
        6.3,
        5.8,
        7.1,
        6.4,
        8.2
    ];
    const w = 280;
    const h = 72;
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min;
    const pts = data.map((v, i)=>`${i / (data.length - 1) * w},${h - (v - min) / range * (h - 8)}`).join(" ");
    const areaBase = `${0},${h} ${pts} ${w},${h}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: `0 0 ${w} ${h}`,
        className: "w-full",
        style: {
            height: h
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "volGrad",
                    x1: "0",
                    y1: "0",
                    x2: "0",
                    y2: "1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#00e5ff",
                            stopOpacity: "0.18"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#00e5ff",
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: areaBase,
                fill: "url(#volGrad)"
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: pts,
                fill: "none",
                stroke: "#22d3ee",
                strokeWidth: "1.4",
                strokeLinejoin: "round",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 108,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/DashboardPreview.tsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
/* ─── LOG LINE ───────────────────────────────────────────────────────── */ function LogEntry({ line }) {
    const col = {
        ok: "#22c55e",
        warn: "#f59e0b",
        info: "#3d5570"
    }[line.level];
    const bracket = {
        ok: "OK",
        warn: "WN",
        info: "--"
    }[line.level];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-baseline gap-3 py-0.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 text-[9px] tabular-nums",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#3d5570"
                },
                children: line.ts
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "shrink-0 text-[9px] font-semibold px-1 rounded",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color: col,
                    background: `${col}14`,
                    border: `1px solid ${col}30`
                },
                children: bracket
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] leading-relaxed break-all",
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#4a6680"
                },
                children: line.msg
            }, void 0, false, {
                fileName: "[project]/components/sections/DashboardPreview.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/DashboardPreview.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
function DashboardPreview() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("08:42:11");
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(SEED_LOGS);
    const [markets, setMarkets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(MARKETS);
    const tickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    /* Live clock */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            const now = new Date();
            setTime(now.toTimeString().slice(0, 8));
        }, 1000);
        return ()=>clearInterval(id);
    }, []);
    /* Drift market probabilities subtly every 2s */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = setInterval(()=>{
            setMarkets((prev)=>prev.map((m)=>{
                    const drift = (Math.random() - 0.5) * 0.6;
                    const newYes = Math.min(99, Math.max(1, m.yes + drift));
                    const trend = drift > 0.1 ? "up" : drift < -0.1 ? "down" : "flat";
                    return {
                        ...m,
                        yes: newYes,
                        no: 100 - newYes,
                        trend
                    };
                }));
        }, 2200);
        return ()=>clearInterval(id);
    }, []);
    /* Append a log line every 3.5s */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const msgs = [
            {
                ts: "",
                msg: "BRIER_EVAL        window=2000  BS=0.048  target=<0.060  ✓",
                level: "ok"
            },
            {
                ts: "",
                msg: "SHAPLEY_DISTRIB   epoch=8274  recipients=312  lag=0.3ms",
                level: "info"
            },
            {
                ts: "",
                msg: "KALMAN_UPDATE     state_dim=48  residual=0.019  cov=stable",
                level: "info"
            },
            {
                ts: "",
                msg: "COMPLIANCE_PASS   PRX-001  jurisdiction=EU  AML=clear",
                level: "ok"
            },
            {
                ts: "",
                msg: "STALE_EXPIRE      PRX-003  source=oracle_7  TTL=exceeded",
                level: "warn"
            }
        ];
        let idx = 0;
        const id = setInterval(()=>{
            const now = new Date().toTimeString().slice(0, 12).replace(" ", ".").slice(0, 12);
            const line = {
                ...msgs[idx % msgs.length],
                ts: now
            };
            idx++;
            setLogs((prev)=>[
                    line,
                    ...prev
                ].slice(0, 8));
        }, 3500);
        return ()=>clearInterval(id);
    }, []);
    /* Sparkline seeds per market */ const sparkSeeds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(MARKETS.map(()=>Array.from({
            length: 10
        }, ()=>40 + Math.random() * 40)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-28 scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "label-tag mb-4",
                            children: "[ PROBEX PLATFORM ]"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-10 items-end mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-gradient-white",
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        fontWeight: 800,
                                        fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                                        letterSpacing: "-0.025em",
                                        lineHeight: 1.1
                                    },
                                    children: [
                                        "High-Density Operator",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 226,
                                            columnNumber: 36
                                        }, this),
                                        "Interface"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-relaxed",
                                    style: {
                                        fontFamily: "Manrope, sans-serif",
                                        color: "var(--text-secondary)"
                                    },
                                    children: "The Probex operator terminal surfaces live market states, consensus logs, and compliance status in a single unified view — updating in real time with zero polling delay."
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.75,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1
                        ]
                    },
                    viewport: {
                        once: true,
                        margin: "-60px"
                    },
                    className: "rounded-2xl overflow-hidden gpu",
                    style: {
                        background: "var(--bg-terminal)",
                        border: "1px solid rgba(148,163,184,0.08)",
                        boxShadow: "0 40px 120px rgba(0,0,0,0.65), 0 0 0 1px rgba(0,229,255,0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 py-3.5",
                            style: {
                                borderBottom: "1px solid rgba(148,163,184,0.06)",
                                background: "rgba(255,255,255,0.018)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full",
                                            style: {
                                                background: "rgba(255,95,87,0.7)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 258,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full",
                                            style: {
                                                background: "rgba(255,189,68,0.7)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 259,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-2.5 h-2.5 rounded-full",
                                            style: {
                                                background: "rgba(39,201,63,0.7)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-[10px] tracking-[0.18em]",
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                color: "#3d5570"
                                            },
                                            children: "probex.platform / operator"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full animate-data-blink",
                                                    style: {
                                                        background: "#22c55e"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 270,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.6rem",
                                                        color: "#22c55e",
                                                        letterSpacing: "0.18em"
                                                    },
                                                    children: "LIVE"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 269,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: "0.6rem",
                                                color: "#3d5570",
                                                letterSpacing: "0.12em"
                                            },
                                            children: time
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 275,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-12 gap-0",
                            style: {
                                minHeight: 520
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-2 py-4 px-3 hidden lg:flex flex-col gap-3",
                                    style: {
                                        borderRight: "1px solid rgba(148,163,184,0.05)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: "0.55rem",
                                                letterSpacing: "0.22em",
                                                color: "#3d5570",
                                                textTransform: "uppercase",
                                                marginBottom: 4
                                            },
                                            children: "System"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 289,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            {
                                                label: "Consensus",
                                                value: "ACTIVE",
                                                color: "#22c55e"
                                            },
                                            {
                                                label: "Liquidity",
                                                value: "ACTIVE",
                                                color: "#22c55e"
                                            },
                                            {
                                                label: "Compliance",
                                                value: "ACTIVE",
                                                color: "#22c55e"
                                            },
                                            {
                                                label: "Kalman",
                                                value: "SYNC",
                                                color: "#22d3ee"
                                            }
                                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.52rem",
                                                            color: "#3d5570",
                                                            letterSpacing: "0.14em",
                                                            textTransform: "uppercase"
                                                        },
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.62rem",
                                                            color: s.color,
                                                            fontWeight: 600
                                                        },
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto",
                                            children: [
                                                {
                                                    label: "Events/s",
                                                    value: "62.4K"
                                                },
                                                {
                                                    label: "P99",
                                                    value: "38ms"
                                                },
                                                {
                                                    label: "Nodes",
                                                    value: "128"
                                                }
                                            ].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                fontSize: "0.5rem",
                                                                color: "#3d5570",
                                                                letterSpacing: "0.15em",
                                                                textTransform: "uppercase"
                                                            },
                                                            children: m.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                            lineNumber: 315,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontFamily: "'JetBrains Mono', monospace",
                                                                fontSize: "0.68rem",
                                                                color: "#22d3ee",
                                                                fontWeight: 600
                                                            },
                                                            children: m.value
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 285,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-7 flex flex-col",
                                    style: {
                                        borderRight: "1px solid rgba(148,163,184,0.05)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-2 px-4 py-2.5",
                                            style: {
                                                gridTemplateColumns: "5rem 1fr 7rem 3.5rem",
                                                borderBottom: "1px solid rgba(148,163,184,0.05)",
                                                background: "rgba(255,255,255,0.01)"
                                            },
                                            children: [
                                                "ID",
                                                "MARKET EVENT",
                                                "PROBABILITY",
                                                "VOL"
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.55rem",
                                                        letterSpacing: "0.22em",
                                                        color: "#3d5570",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 332,
                                            columnNumber: 15
                                        }, this),
                                        markets.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "grid gap-2 px-4 py-2.5 transition-colors duration-200",
                                                style: {
                                                    gridTemplateColumns: "5rem 1fr 7rem 3.5rem",
                                                    borderBottom: "1px solid rgba(148,163,184,0.03)"
                                                },
                                                whileHover: {
                                                    background: "rgba(0,229,255,0.025)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.6rem",
                                                            color: "#3d5570",
                                                            alignSelf: "center"
                                                        },
                                                        children: m.id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "self-center truncate",
                                                        style: {
                                                            fontFamily: "Manrope, sans-serif",
                                                            fontSize: "0.7rem",
                                                            color: "var(--text-secondary)",
                                                            fontWeight: 400
                                                        },
                                                        children: m.event
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 366,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "self-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProbBar, {
                                                            yes: m.yes,
                                                            trend: m.trend
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                            lineNumber: 373,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 372,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "self-center text-right",
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.6rem",
                                                            color: "#4a6680"
                                                        },
                                                        children: m.vol
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                lineNumber: 352,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 pt-4 pb-2 mt-auto",
                                            style: {
                                                borderTop: "1px solid rgba(148,163,184,0.04)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.55rem",
                                                        letterSpacing: "0.2em",
                                                        color: "#3d5570",
                                                        textTransform: "uppercase",
                                                        marginBottom: 8
                                                    },
                                                    children: "Aggregate volume 12h"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(VolumeChart, {}, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-12 lg:col-span-3 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-2.5 flex items-center justify-between",
                                            style: {
                                                borderBottom: "1px solid rgba(148,163,184,0.05)",
                                                background: "rgba(255,255,255,0.01)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.55rem",
                                                        letterSpacing: "0.22em",
                                                        color: "#3d5570",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: "Consensus Log"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1 h-1 rounded-full animate-data-blink",
                                                        style: {
                                                            background: "#22c55e"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 px-3 py-3 overflow-hidden space-y-0.5",
                                            children: logs.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: 6
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        duration: 0.25
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LogEntry, {
                                                        line: line
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 21
                                                    }, this)
                                                }, `${line.ts}-${i}`, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-5 py-2",
                            style: {
                                borderTop: "1px solid rgba(148,163,184,0.05)",
                                background: "rgba(255,255,255,0.01)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-5 flex-wrap",
                                    children: [
                                        {
                                            label: "Consensus precision",
                                            value: "99.42%"
                                        },
                                        {
                                            label: "End-to-end latency",
                                            value: "< 90ms"
                                        },
                                        {
                                            label: "Active markets",
                                            value: "840"
                                        }
                                    ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.55rem",
                                                        letterSpacing: "0.14em",
                                                        color: "#3d5570",
                                                        textTransform: "uppercase"
                                                    },
                                                    children: [
                                                        s.label,
                                                        ":"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.62rem",
                                                        color: "#22d3ee",
                                                        fontWeight: 600
                                                    },
                                                    children: s.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                                            lineNumber: 435,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: "0.5rem",
                                        color: "#2a3f55",
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase"
                                    },
                                    children: "PROBEX::v3.2.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/DashboardPreview.tsx",
                            lineNumber: 425,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/DashboardPreview.tsx",
                    lineNumber: 240,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/DashboardPreview.tsx",
            lineNumber: 210,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/DashboardPreview.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/CTABridge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CTABridge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-ssr] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-ssr] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/* ─── Reads from env — set NEXT_PUBLIC_PROBEX_URL in .env.local ─────── */ const PROBEX_URL = ("TURBOPACK compile-time value", "https://app.probex.io") ?? "#";
const TRUST_SIGNALS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        label: "SOC 2 Type II",
        value: "Certified"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Consensus Precision",
        value: "99.42%"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"],
        label: "End-to-End Latency",
        value: "< 90ms"
    }
];
/* ─── TERMINAL PROMPT LINE ───────────────────────────────────────────── */ function PromptLine({ text, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -6
        },
        whileInView: {
            opacity: 1,
            x: 0
        },
        transition: {
            duration: 0.35,
            delay
        },
        viewport: {
            once: true
        },
        className: "flex items-baseline gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "rgba(0,229,255,0.5)"
                },
                children: "$"
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#4a6680"
                },
                children: text
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CTABridge.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function CTABridge() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-28 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider-cyan absolute top-0 inset-x-0"
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                "aria-hidden": true,
                className: "absolute inset-0 pointer-events-none",
                animate: {
                    opacity: [
                        0.4,
                        0.7,
                        0.4
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                style: {
                    background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(0,229,255,0.04) 0%, rgba(124,58,237,0.025) 50%, transparent 75%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-6xl mx-auto px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-[1fr_auto] gap-12 items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label-tag mb-6",
                                        children: "[ ACCESS THE PLATFORM ]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            fontWeight: 800,
                                            fontSize: "clamp(2rem, 5vw, 3.4rem)",
                                            letterSpacing: "-0.025em",
                                            lineHeight: 1.05,
                                            marginBottom: "1.5rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-white",
                                                children: "Ready to trade on"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gradient-probex",
                                                children: "real-time consensus?"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 76,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-lg text-sm leading-relaxed mb-8",
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            color: "var(--text-secondary)"
                                        },
                                        children: "Probex is live. Institutional and professional counterparties can access the full platform today — live markets, real-time consensus feeds, and compliance tooling for 47 jurisdictions."
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-6 flex-wrap mb-10",
                                        children: TRUST_SIGNALS.map(({ icon: Icon, label, value }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 10
                                                },
                                                whileInView: {
                                                    opacity: 1,
                                                    y: 0
                                                },
                                                transition: {
                                                    delay: 0.1 + i * 0.1
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 13,
                                                        style: {
                                                            color: i % 2 === 0 ? "var(--cyan-dim)" : "var(--violet-soft)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "'JetBrains Mono', monospace",
                                                                    fontSize: "0.58rem",
                                                                    color: "var(--text-muted)",
                                                                    letterSpacing: "0.14em",
                                                                    textTransform: "uppercase"
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: "'JetBrains Mono', monospace",
                                                                    fontSize: "0.72rem",
                                                                    fontWeight: 600,
                                                                    color: "var(--text-primary)"
                                                                },
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 91,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: PROBEX_URL,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    whileHover: {
                                                        scale: 1.03,
                                                        boxShadow: "0 0 40px rgba(0,229,255,0.30), 0 0 80px rgba(124,58,237,0.15)"
                                                    },
                                                    whileTap: {
                                                        scale: 0.97
                                                    },
                                                    className: "inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg text-sm font-bold tracking-wide cursor-pointer gpu",
                                                    style: {
                                                        fontFamily: "Manrope, sans-serif",
                                                        background: "linear-gradient(135deg, #00e5ff 0%, #0ea5e9 50%, #7c3aed 100%)",
                                                        color: "#060b18",
                                                        letterSpacing: "0.01em"
                                                    },
                                                    children: [
                                                        "Access Probex Platform",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/CTABridge.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/CTABridge.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    borderColor: "rgba(0,229,255,0.35)"
                                                },
                                                whileTap: {
                                                    scale: 0.97
                                                },
                                                className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-medium gpu transition-colors duration-200",
                                                style: {
                                                    fontFamily: "Manrope, sans-serif",
                                                    border: "1px solid rgba(148,163,184,0.14)",
                                                    color: "var(--text-secondary)",
                                                    background: "transparent"
                                                },
                                                children: [
                                                    "Request institutional access",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/CTABridge.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTABridge.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.12,
                            direction: "right",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl overflow-hidden gpu",
                                style: {
                                    width: "min(360px, 100%)",
                                    background: "var(--bg-terminal)",
                                    border: "1px solid rgba(148,163,184,0.08)",
                                    boxShadow: "0 20px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.03)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-3",
                                        style: {
                                            borderBottom: "1px solid rgba(148,163,184,0.06)",
                                            background: "rgba(255,255,255,0.018)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            background: "rgba(255,95,87,0.6)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 175,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            background: "rgba(255,189,68,0.6)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full",
                                                        style: {
                                                            background: "rgba(39,201,63,0.6)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-[9px] tracking-[0.16em]",
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            color: "#2a3f55"
                                                        },
                                                        children: "probex-cli"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-1.5 h-1.5 rounded-full animate-data-blink",
                                                        style: {
                                                            background: "#22c55e"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.55rem",
                                                            color: "#22c55e",
                                                            letterSpacing: "0.18em"
                                                        },
                                                        children: "CONNECTED"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-4 space-y-2",
                                        style: {
                                            minHeight: 220
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptLine, {
                                                text: "probex auth --mode=institutional",
                                                delay: 0.1
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 0.3
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.65rem",
                                                        color: "#22c55e"
                                                    },
                                                    children: "✓ Authentication successful"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/CTABridge.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptLine, {
                                                text: "probex market list --active",
                                                delay: 0.5
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 207,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 0.7
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "pl-3 space-y-1",
                                                children: [
                                                    "PRX-001  Fed rate cut Q3       YES: 67.4%",
                                                    "PRX-002  BTC > $120k EOM       YES: 44.1%",
                                                    "PRX-005  NVDA earnings beat    YES: 72.9%",
                                                    "  ... 837 markets active"
                                                ].map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.58rem",
                                                            color: i === 3 ? "#2a3f55" : "#4a6680"
                                                        },
                                                        children: line
                                                    }, i, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PromptLine, {
                                                text: "probex consensus --stream PRX-001",
                                                delay: 1.1
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0
                                                },
                                                whileInView: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 1.3
                                                },
                                                viewport: {
                                                    once: true
                                                },
                                                className: "pl-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: "0.58rem",
                                                        color: "#22d3ee"
                                                    },
                                                    children: "Streaming consensus · latency 11ms · quorum 98/128"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/CTABridge.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 228,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.65rem",
                                                            color: "rgba(0,229,255,0.5)"
                                                        },
                                                        children: "$"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        animate: {
                                                            opacity: [
                                                                1,
                                                                0,
                                                                1
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 1,
                                                            repeat: Infinity
                                                        },
                                                        className: "inline-block w-1.5 h-3 rounded-[1px]",
                                                        style: {
                                                            background: "rgba(0,229,255,0.6)"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 py-2.5 flex items-center justify-between",
                                        style: {
                                            borderTop: "1px solid rgba(148,163,184,0.05)",
                                            background: "rgba(255,255,255,0.01)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                    fontSize: "0.55rem",
                                                    color: "#2a3f55"
                                                },
                                                children: ("TURBOPACK compile-time truthy", 1) ? PROBEX_URL.replace(/^https?:\/\//, "") : "TURBOPACK unreachable"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: PROBEX_URL,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-1 transition-colors duration-200",
                                                style: {
                                                    color: "var(--text-muted)"
                                                },
                                                onMouseEnter: (e)=>e.currentTarget.style.color = "var(--cyan-dim)",
                                                onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 271,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "'JetBrains Mono', monospace",
                                                            fontSize: "0.55rem",
                                                            letterSpacing: "0.14em"
                                                        },
                                                        children: "OPEN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/CTABridge.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/CTABridge.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/CTABridge.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/CTABridge.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/CTABridge.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "divider-cyan absolute bottom-0 inset-x-0"
            }, void 0, false, {
                fileName: "[project]/components/sections/CTABridge.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/CTABridge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/sections/Insights.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Insights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Reveal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const INSIGHTS = [
    {
        tag: "Consensus Theory",
        title: "Byzantine Fault Tolerance in Prediction Markets",
        excerpt: "How Probex adapts BFT consensus models to handle adversarial validators and conflicting event states at sub-40ms finality.",
        accent: "#00e5ff"
    },
    {
        tag: "Bayesian Methods",
        title: "Hierarchical Priors for Multi-Source Signal Fusion",
        excerpt: "A practical treatment of constructing hierarchical Bayesian priors that remain calibrated under sparse-data regimes.",
        accent: "#8b5cf6"
    },
    {
        tag: "Compliance Engineering",
        title: "In-Band Regulatory Logic Without Latency Penalty",
        excerpt: "Architectural patterns for embedding jurisdiction rules at the execution layer without adding measurable latency overhead.",
        accent: "#00e5ff"
    },
    {
        tag: "Market Microstructure",
        title: "AMM-Based Liquidity for Probabilistic Outcomes",
        excerpt: "Extending constant-function market makers to support binary outcome markets with asymmetric tail risk profiles.",
        accent: "#8b5cf6"
    }
];
function Insights() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "research",
        className: "py-28 scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divider-cyan mb-16"
                }, void 0, false, {
                    fileName: "[project]/components/sections/Insights.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-between mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "label-tag mb-4",
                                        children: "[ RESEARCH ]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-gradient-white",
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            fontWeight: 800,
                                            fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
                                            letterSpacing: "-0.025em",
                                            lineHeight: 1.1
                                        },
                                        children: [
                                            "The Thinking",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/sections/Insights.tsx",
                                                lineNumber: 54,
                                                columnNumber: 29
                                            }, this),
                                            "Behind Probex"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Insights.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "hidden md:block text-xs tracking-widest uppercase pb-0.5 transition-colors duration-200",
                                style: {
                                    fontFamily: "'JetBrains Mono', monospace",
                                    color: "var(--text-muted)",
                                    borderBottom: "1px solid rgba(148,163,184,0.15)"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = "var(--cyan-dim)",
                                onMouseLeave: (e)=>e.currentTarget.style.color = "var(--text-muted)",
                                children: "Full library →"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Insights.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/Insights.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/Insights.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
                    children: INSIGHTS.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            delay: i * 0.08,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    y: -4
                                },
                                transition: {
                                    duration: 0.2
                                },
                                className: "group cursor-pointer rounded-xl p-6 gpu transition-colors duration-200 h-full flex flex-col",
                                style: {
                                    background: "rgba(11,16,32,0.7)",
                                    border: "1px solid rgba(148,163,184,0.07)"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.borderColor = `${item.accent}28`,
                                onMouseLeave: (e)=>e.currentTarget.style.borderColor = "rgba(148,163,184,0.07)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.2em] uppercase mb-4 block",
                                        style: {
                                            fontFamily: "'JetBrains Mono', monospace",
                                            color: item.accent
                                        },
                                        children: item.tag
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold leading-snug mb-3 flex-1",
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            color: "var(--text-primary)",
                                            letterSpacing: "-0.01em"
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-3",
                                        style: {
                                            fontFamily: "Manrope, sans-serif",
                                            color: "var(--text-secondary)"
                                        },
                                        children: item.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px mt-auto",
                                        style: {
                                            background: `linear-gradient(to right, ${item.accent}40, transparent)`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Insights.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/Insights.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        }, i, false, {
                            fileName: "[project]/components/sections/Insights.tsx",
                            lineNumber: 74,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/Insights.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Insights.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Insights.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/SectionWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function SectionWrapper({ children, delay = 0, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].section, {
        initial: {
            opacity: 0,
            y: 48
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.85,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        viewport: {
            once: true,
            margin: "-60px"
        },
        className: `relative z-10 ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/SectionWrapper.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_02nitu_._.js.map