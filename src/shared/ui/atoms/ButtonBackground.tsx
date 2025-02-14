import { chakra } from "@chakra-ui/react";

const ButtonBackground = chakra("div", {
    base: {
        position: "absolute",
        height: "100%",
        width: "100%",
        _hover: {
            backgroundColor: "white",
            opacity: 0.08,
        },
    },
});

export default ButtonBackground;
