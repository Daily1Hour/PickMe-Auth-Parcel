import { chakra, Button } from "@chakra-ui/react";
import { forwardRef } from "react";

const StyledButton = chakra(Button, {
    base: {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "var(--pickme-color-primary)",
        boxShadow: "0px 0px 10px #444",
        _hover: {
            backgroundColor: "transparent",
        },
    },
});

const Background = chakra("div", {
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

const PrimaryButton = forwardRef<HTMLButtonElement, { children: React.ReactNode }>(
    ({ children, ...props }, ref) => {
        return (
            <StyledButton {...props} ref={ref}>
                {children}
                <Background />
            </StyledButton>
        );
    },
);

export default PrimaryButton;
