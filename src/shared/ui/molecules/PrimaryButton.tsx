import { forwardRef } from "react";

import { StyledButton, StyledIconButton, ButtonBackground } from "../atoms";

export const PrimaryButton = forwardRef<HTMLButtonElement, { children: React.ReactNode }>(
    ({ children, ...props }, ref) => {
        return (
            <StyledButton {...props} ref={ref}>
                {children}
                <ButtonBackground />
            </StyledButton>
        );
    },
);

export const PrimaryIconButton = forwardRef<HTMLButtonElement, { children: React.ReactNode }>(
    ({ children, ...props }, ref) => {
        return (
            <StyledIconButton {...props} ref={ref}>
                {children}
            </StyledIconButton>
        );
    },
);
