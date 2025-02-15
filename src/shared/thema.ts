import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const pickmeConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                pickme: {
                    50: { value: "teal" },
                    100: { value: "teal" },
                    200: { value: "teal" },
                    300: { value: "teal" },
                    400: { value: "teal" },
                    500: { value: "teal" },
                    600: { value: "teal" },
                    700: { value: "white" },
                    800: { value: "teal" },
                    900: { value: "teal" },
                },
            },
        },
        semanticTokens: {
            colors: {
                pickme: {
                    solid: { value: "{colors.pickme.500}" }, // 기본 색상
                    contrast: { value: "white" }, // 대비
                    fg: { value: "{colors.pickme.700}" },
                    muted: { value: "{colors.pickme.700}" },
                    subtle: { value: "{colors.pickme.700}" },
                    emphasized: { value: "{colors.pickme.700}" },
                    focusRing: { value: "{colors.pickme.500}" },
                },
            },
        },
    },
});

export const pickmeSystem = createSystem(defaultConfig, pickmeConfig);
