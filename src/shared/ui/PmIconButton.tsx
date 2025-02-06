import { chakra, IconButton } from "@chakra-ui/react";

const PmIconButton = chakra(IconButton, {
    base: {
        colorPalette: "pickme",
        borderRadius: "lg",
        _dark: {
            opacity: 0.8,
        },
    },
});

export default PmIconButton;
