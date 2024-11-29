import React from "react";

import { Flex } from "@chakra-ui/react";

import AuthControls from "@/features/auth/ui/AuthControls";
import useLoggedIn from "@/features/userInfo/api/useLoggedIn";
import UserInfo from "@/features/userInfo/ui/UserInfoControl";
import TokenInfo from "@/pages/auth/ui/TokenInfo";

const isDevMode = import.meta.env.MODE === "development";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Flex w="100%" bg="gray.100" p={3} justifyContent="right">
                {!isLoggedIn ? <AuthControls /> : <UserInfo />}
            </Flex>
            {isDevMode && isLoggedIn && <TokenInfo />}
        </>
    );
}
