import { chakra, Button, IconButton } from "@chakra-ui/react";

const style = {
    base: {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "var(--pickme-color-primary)",
        boxShadow: "0px 0px 10px #444",
        _hover: {
            backgroundColor: "transparent",
        },
        _expanded: {
            backgroundColor: "transparent",
            boxShadow: "0px 0px 10px #FFF",
        },
    },
};

export const StyledButton = chakra(Button, style);

export const StyledIconButton = chakra(IconButton, style);
