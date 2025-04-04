import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginSingleSpa from "vite-plugin-single-spa";

import userscriptMeta from "./src/userscript/widget.meta";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const SERVER_PORT = Number(process.env.VITE_SERVER_PORT); // 서버포트
    const PUBLIC_URL = process.env.VITE_PUBLIC_URL; // 기본경로

    // vite 설정
    return {
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
        build: {
            target: "esnext", // 빌드 타겟 설정
            cssMinify: true, // css 코드 압축 여부
            minify: "terser", // 빌드시 코드 압축 여부, 정밀 제어 terser 사용 
            cssCodeSplit: false, // css 코드 분할 여부
            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부
            rollupOptions: {
                input: {
                    main: "index.html",
                    widget: "src/userscript/widget.user.js",
                },
                output: {
                    entryFileNames: (chunk) =>
                        chunk.name === "widget" ? "[name].user.js" : "assets/[name]-[hash].js", // 위젯 파일명 설정
                    banner: (chunkInfo) => {
                        return chunkInfo.name === "widget" ? `${userscriptMeta}` : "";
                    },
                },
            },
            terserOptions: {
                format: {
                    comments: "all", // 주석을 모두 포함할지 여부
                },
            },
        },
        server: {
            // 개발 서버 설정
            port: SERVER_PORT,
            cors: true,
        },
        preview: {
            port: SERVER_PORT,
        },
        base: PUBLIC_URL,
    };
});
