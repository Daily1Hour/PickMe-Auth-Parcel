import { chakra, Button } from "@chakra-ui/react";

const SecondaryButton = chakra(Button, {
    base: {
        colorPalette: "pickme",
        borderRadius: "lg",
        _hover: {
            opacity: 0.8,
        },
    },
});

export default SecondaryButton;
