import React from "react";

import { Box } from "@chakra-ui/react";

import { useLoggedIn } from "@/features/userMenu";
import { AuthControls, TokenInfo } from "./ui";

const isTokenView = import.meta.env.VITE_TOKEN_VIEW;

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Box bg="gray.100">
                <AuthControls />
            </Box>

            {isTokenView && isLoggedIn && <TokenInfo />}
        </>
    );
}

export { AuthControls };
