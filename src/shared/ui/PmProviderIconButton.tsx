import { chakra, IconButton } from "@chakra-ui/react";

const PmProviderIconButton = chakra(IconButton, {
    base: {
        fontSize: "1.5rem",
        rounded: "full",
        colorPalette: "grey",
        outlineWidth: "1px",
        outlineColor: "colorPalette.200",
        outlineStyle: "solid",
        _hover: {
            outlineWidth: "3px",
        },
    },
});

export default PmProviderIconButton;
