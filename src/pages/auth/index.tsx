import React from "react";

import { Box } from "@chakra-ui/react";

import { useLoggedIn } from "@/features/userMenu";
import AuthControls from "./ui/AuthControls";
import TokenInfo from "./ui/TokenInfo";

const isDevMode = import.meta.env.MODE === "development";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Box bg="gray.100">
                <AuthControls />
            </Box>

            {isDevMode && isLoggedIn && <TokenInfo />}
        </>
    );
}

export { AuthControls };
