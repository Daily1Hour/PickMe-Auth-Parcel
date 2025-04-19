import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const BASE = process.env.VITE_BASE;

    return {
        plugins: [tsconfigPaths({ loose: true })],
        test: {
            reporters: ["verbose", "html"],
            outputFile: "./test/report.html",
            coverage: {
                provider: "istanbul",
                reporter: [
                    "lcovonly", // 커버리지 데이터 표준 형식
                    "json-summary", // 커버리지 요약 데이터
                    [
                        "html", // 웹페이지 형식 보고서
                        {
                            subdir: "test/coverage",
                        },
                    ],
                ],
                reportsDirectory: BASE,
            },
        },
    };
});
