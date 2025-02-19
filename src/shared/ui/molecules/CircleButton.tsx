import { defineStyle, chakra, IconButton } from "@chakra-ui/react";

const ring = defineStyle({
    colorPalette: "grey",
    outlineWidth: "1px",
    outlineColor: "colorPalette.300",
    outlineStyle: "solid",
});

const CircleButton = chakra(
    IconButton,
    {
        base: {
            ...ring,
            rounded: "full",
            _hover: {
                transform: "scale(1.1)",
            },
        },
    },
    {
        defaultProps: {
            size: "2xl",
        },
    },
);

export default CircleButton;
