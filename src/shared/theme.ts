import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                "pickme-primary": generateColorScale("--pickme-color-primary"),
                "pickme-secondary": generateColorScale("--pickme-color-secondary"),
                "pickme-tertiary": generateColorScale("--pickme-color-tertiary"),
            },
        },
        semanticTokens: {
            colors: {
                "pickme-primary": generateColorSemantic("pickme-primary"),
                "pickme-secondary": generateColorSemantic("pickme-secondary"),
                "pickme-tertiary": generateColorSemantic("pickme-tertiary"),
            },
        },
    },
});

export default createSystem(defaultConfig, config);

// 색상 스케일(50~950) 생성 함수
function generateColorScale(color: string) {
    return {
        50: { value: `color-mix(in srgb, white 90%, var(${color}))` },
        100: { value: `color-mix(in srgb, white 70%, var(${color}))` },
        200: { value: `color-mix(in srgb, white 50%, var(${color}))` },
        300: { value: `color-mix(in srgb, white 30%, var(${color}))` },
        400: { value: `color-mix(in srgb, white 10%, var(${color}))` },
        500: { value: `var(${color})` },
        600: { value: `color-mix(in srgb, black 10%, var(${color}))` },
        700: { value: `color-mix(in srgb, black 20%, var(${color}))` },
        800: { value: `color-mix(in srgb, black 30%, var(${color}))` },
        900: { value: `color-mix(in srgb, black 40%, var(${color}))` },
        950: { value: `color-mix(in srgb, black 50%, var(${color}))` },
    };
}

// 색상 시맨틱 토큰 생성 함수
function generateColorSemantic(color: string) {
    return {
        solid: { value: `{colors.${color}.500}` }, // 기본 색상
        contrast: { value: "white" }, // 대비 (글자 등)
        fg: { value: `{colors.${color}.700}` }, // 전경색 (글자 등)
        muted: { value: `{colors.${color}.300}` }, // 덜 강조된 색상 (버튼/텍스트 등)
        subtle: { value: `{colors.${color}.100}` }, // 더 약한 강조 색상 (경계선, 배경 등)
        emphasized: { value: `{colors.${color}.700}` }, // 강조 색상 (활성화된 버튼 등)
        focusRing: { value: `{colors.${color}.400}` }, // 포커스 효과 색상 (입력 필드 등)
    };
}
