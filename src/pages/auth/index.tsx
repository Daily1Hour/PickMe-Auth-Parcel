import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControlsPresentation from "@/features/auth/ui/AuthControlsPresentation";
import TokenInfoPresentation from "@/features/auth/ui/TokenInfoPresentation";
import UserInfoPresentation from "@/features/auth/ui/UserInfoPresentation";
import getLoggedIn from "@/features/auth/lib/getLoggedIn";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = getLoggedIn();

    return (
        <Flex bg="gray.100" p={3}>
            {!isLoggedIn ? (
                <AuthControlsPresentation />
            ) : (
                <Stack>
                    <UserInfoPresentation />
                    <TokenInfoPresentation />
                </Stack>
            )}
        </Flex>
    );
}
