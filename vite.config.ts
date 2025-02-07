import { defineConfig, loadEnv } from "vite";

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    // 서버포트
    const serverPort = Number(process.env.VITE_SERVER_PORT);

    // vite 설정
    return {
        plugins: [
            react(), // React 라이브러리 적용
            federation({
                // 모듈 페더레이션 적용
                remotes: {
                    "@styleguide": "http://localhost:9001/pickme-style-guide.js",
                },
            }),
            tsconfigPaths(), // tsconfig.json의 paths 설정을 적용
            nodePolyfills(), // node.js 라이브러리 polyfills를 적용
        ],
        build: {
            emptyOutDir: false,
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
