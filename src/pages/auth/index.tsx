import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControls from "@/features/auth/ui/AuthControls";
import useLoggedIn from "@/features/auth/api/useLoggedIn";
import UserInfo from "@/features/userInfo/ui/UserInfoControl";
import TokenInfo from "@/pages/auth/ui/TokenInfo";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <Flex>
            {!isLoggedIn ? (
                <Flex w="100%" bg="gray.100" p={3} justifyContent="right">
                    <AuthControls />
                </Flex>
            ) : (
                <Stack w="100%">
                    <Flex w="100%" bg="gray.100" p={3} justifyContent="right">
                        <UserInfo />
                    </Flex>
                    <TokenInfo />
                </Stack>
            )}
        </Flex>
    );
}
