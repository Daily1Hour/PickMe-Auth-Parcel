import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

import("@styleguide/GlobalStyles");

const pickmeConfig = defineConfig({
    theme: {
        tokens: {
            colors: {
                pickme: {
                    600: { value: "var(--pickme-color-primary)" }, // 기본 색상
                },
            },
        },
        semanticTokens: {
            colors: {
                pickme: {
                    solid: { value: "{colors.pickme.600}" },
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
