import React from "react";
import { Box } from "@chakra-ui/react";
import { Toaster } from "@/third-party/chakra-ui";

import { useLoggedIn } from "@/features/userMenu";
import { AuthControls, TokenInfo } from "./ui";

const isTokenView = import.meta.env.VITE_TOKEN_VIEW;

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Box bg="pink.700">
                <AuthControls />
            </Box>

            {isTokenView && isLoggedIn && <TokenInfo />}

            <Toaster />
        </>
    );
}

export { AuthControls };
