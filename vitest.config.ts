import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths({ loose: true })],
    test: {
        reporters: ["verbose", "html"],
        outputFile: "./test/report.html",
        coverage: {
            provider: "istanbul",
            reporter: ["json-summary", "html"],
            reportsDirectory: `./test`,
        },
    },
});
