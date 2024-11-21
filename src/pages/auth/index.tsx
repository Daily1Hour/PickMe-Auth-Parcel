import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControls from "@/features/auth/ui/AuthControls";
import useLoggedIn from "@/features/auth/api/useLoggedIn";
import UserInfo from "@/features/userInfo/ui/UserInfo";
import TokenInfo from "@/pages/auth/ui/TokenInfo";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <Flex bg="gray.100" p={3}>
            {!isLoggedIn ? (
                <AuthControls />
            ) : (
                <Stack w="100%">
                    <UserInfo />
                    <TokenInfo />
                </Stack>
            )}
        </Flex>
    );
}
