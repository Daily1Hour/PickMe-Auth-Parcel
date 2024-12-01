import React from "react";

import { Box } from "@chakra-ui/react";

import { useLoggedIn } from "@/features/userMenu";
import AuthControls from "./ui/AuthControls";
import TokenInfo from "./ui/TokenInfo";

const isTokenView = import.meta.env.VITE_TOKEN_VIEW === "true";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    console.log("isTokenView", isTokenView);
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
