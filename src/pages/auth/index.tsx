import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControls from "@/features/auth/ui/AuthControls";
import TokenInfo from "@/pages/auth/ui/TokenInfo";
import UserInfo from "@/features/userInfo/ui/UserInfo";
import getLoggedIn from "@/entities/auth/services/getLoggedIn";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = getLoggedIn();

    return (
        <Flex bg="gray.100" p={3}>
            {!isLoggedIn ? (
                <AuthControls />
            ) : (
                <Stack>
                    <UserInfo />
                    <TokenInfo />
                </Stack>
            )}
        </Flex>
    );
}
