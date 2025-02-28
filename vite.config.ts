import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import vitePluginSingleSpa, { SingleSpaPluginOptions } from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const serverPort = Number(process.env.VITE_SERVER_PORT); // 서버포트

    const plugins = [
        react(), // React 라이브러리 적용
        tsconfigPaths(), // tsconfig.json의 paths 설정을 적용
        nodePolyfills(), // node.js 라이브러리 polyfills를 적용
    ];

    if (mode === "single-spa") {
        // single-spa 옵션 설정
        const vitePluginSingleSpaOptions: SingleSpaPluginOptions = {
            serverPort,
            spaEntryPoints: "src/main.tsx",
        };

        // single-spa 빌드 진입점 설정
        switch (process.env.VITE_MF_TYPE) {
            case "application":
                vitePluginSingleSpaOptions.spaEntryPoints = "src/application.tsx";
                break;
            case "parcel":
                vitePluginSingleSpaOptions.spaEntryPoints = "src/parcel.tsx";
                break;
        }
        plugins.push(vitePluginSingleSpa(vitePluginSingleSpaOptions)); // single-spa 라이브러리 적용
    }

    // vite 설정
    return {
        plugins,
        build: {
            target: "esnext",
            cssMinify: true, // css 코드 압축 여부
            minify: true, // 빌드시 코드 압축 여부
            cssCodeSplit: false, // css 코드 분할 여부
            emptyOutDir: false, // 빌드시 기존 파일 삭제 여부
        },
        server: {
            // 개발 서버 설정
            port: serverPort,
            cors: true,
        },
        preview: {
            port: serverPort,
        },
        base: process.env.VITE_PUBLIC_URL,
    };
});
