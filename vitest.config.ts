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
            // 테스트 환경 설정
            environment: "jsdom",

            // 테스트 실행 전 목 로드
            setupFiles: ["./src/__mocks__/reactQueryMock.ts", "./src/__mocks__/authMock.ts"],

            // 모듈 경로 별칭
            resolve: {
                alias: {
                    __mocks__: "./src/__mocks__",
                },
            },

            // 리포터 설정
            reporters: ["verbose", "html"],
            outputFile: "./test/report.html",

            // 커버리지 설정
            coverage: {
                provider: "istanbul",
                reportsDirectory: BASE,

                reporter: [
                    "lcovonly", // 표준 커버리지 포맷
                    "json-summary", // 커버리지 요약 데이터
                    [
                        "html", // 시각적 웹 리포트
                        {
                            subdir: "test/coverage",
                        },
                    ],
                ],

                // 포함/제외 파일 설정
                include: ["src/**/*.{ts,tsx}"],
                exclude: [
                    "src/**/*.test.{ts,tsx}",
                    "src/**/__tests__/**",
                    "src/**/__mocks__/**",
                    "src/**/*.usage.ts",
                ],
            },
        },
    };
});
