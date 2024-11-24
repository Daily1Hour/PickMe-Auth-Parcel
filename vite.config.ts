import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { createHtmlPlugin } from "vite-plugin-html";
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버포트
    const spaEntryPoints = "src/app/mfa.tsx";
    const isMFA = mode === "mfa";

    return {
        plugins: [
            react(), // React 라이브러리 적용
            tsconfigPaths(), // tsconfig.json의 paths 설정을 적용
            nodePolyfills(), // node.js 라이브러리 polyfills를 적용
            isMFA &&
                vitePluginSingleSpa({
                    // single-spa 라이브러리 적용
                    serverPort,
                    spaEntryPoints,
                }),
            createHtmlPlugin({
                // EJS 템플릿 엔진을 사용하여 HTML 파일 생성
                minify: true,
                inject: {
                    data: {
                        isMFA,
                    },
                },
            }),
        ],
        base: process.env.VITE_PUBLIC_URL,
        server: {
            port: serverPort,
            cors: true,
        },
    };
});
