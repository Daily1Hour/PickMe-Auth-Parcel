import React from "react";
import { Flex } from "@chakra-ui/react";

import { useLoggedIn } from "@/features/userMenu";
import { AuthControls, TokenInfo } from "./ui";

const isTokenView = import.meta.env.VITE_TOKEN_VIEW;

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Flex w="100%" p={3} justifyContent="right" bg="pink.700">
                <AuthControls />
            </Flex>

            {isTokenView && isLoggedIn && <TokenInfo />}
        </>
    );
}

export { AuthControls };
