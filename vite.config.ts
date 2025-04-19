import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// @ts-expect-error: JS file has no type declarations
import userscriptMeta from "./src/userscript/metadata";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const SERVER_PORT = Number(process.env.VITE_SERVER_PORT); // 서버포트
    const VITE_BASE = process.env.VITE_BASE; // 기본경로

    // vite 설정
    return {
        // 기본 경로 설정
        base: `/${VITE_BASE}/`,

        // 플러그인
        plugins: [
            react(), // React 라이브러리 적용
            tsconfigPaths(), // tsconfig.json의 paths 설정을 적용
            nodePolyfills(), // node.js 라이브러리 polyfills를 적용
            vitePluginSingleSpa({
                // single-spa 라이브러리 적용
                serverPort: SERVER_PORT,
                spaEntryPoints: "src/parcel.tsx",
            }),
        ],

        // 개발 서버 설정
        server: {
            port: SERVER_PORT,
            cors: true,
        },

        // 빌드 설정
        build: {
            target: "esnext", // 빌드 타겟 설정
            minify: "terser", // 빌드시 코드 압축 여부, 정밀 제어 terser 사용
            terserOptions: {
                // 압축, 난독화, 주석 제거
                format: {
                    comments: "all", // 주석을 모두 포함할지 여부
                },
            },

            cssMinify: true, // css 코드 압축 여부
            cssCodeSplit: false, // css 코드 분할 여부

            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부

            rollupOptions: {
                //코드 병합/분할, chunk 설정
                input: {
                    main: "index.html",
                    "widget.user": "src/userscript/widget.user.js",
                    "widget.meta": "src/userscript/widget.meta.js",
                },
                output: {
                    banner: (chunkInfo) => {
                        return chunkInfo.name === "widget.user" || chunkInfo.name === "widget.meta"
                            ? `${userscriptMeta}`
                            : "";
                    },
                },
            },
        },

        // 프리뷰 서버 설정
        preview: {
            port: SERVER_PORT,
        },
    };
});

// Vite 빌드 과정
// 플러그인 실행 → Rollup 번들링 → Minify 압축(Terser) → CSS Minify, Code Split → 최종 빌드
