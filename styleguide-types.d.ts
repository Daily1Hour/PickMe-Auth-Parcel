declare module "@styleguide/GlobalStyles" {
    export {};
}

declare module "@styleguide/Button" {
    import { ButtonProps } from "@chakra-ui/react";
    const Button: React.FC<ButtonProps>;
    export default Button;
}
