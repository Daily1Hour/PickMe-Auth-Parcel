declare module "@styleguide/global" {
    export {};
}

declare module "@styleguide/react" {
    import { ButtonProps, SystemContext } from "@chakra-ui/react";

    const chakraUiSystem: SystemContext;

    const Button: React.FC<ButtonProps>;

    export { Button, chakraUiSystem };
}
