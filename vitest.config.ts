import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
    // 환경변수 증설
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    const PUBLIC_URL = process.env.VITE_PUBLIC_URL;

    return {
        plugins: [tsconfigPaths({ loose: true })],
        test: {
            reporters: ["verbose", "html"],
            outputFile: "./test/report.html",
            coverage: {
                provider: "istanbul",
                reporter: [
                    "json-summary",
                    [
                        "html",
                        {
                            subdir: "test/coverage",
                        },
                    ],
                ],
                reportsDirectory: PUBLIC_URL,
            },
        },
    };
});
