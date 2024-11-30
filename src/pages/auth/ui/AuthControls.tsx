import React from "react";

import { Flex } from "@chakra-ui/react";

import AuthActions from "@/features/authActions";
import UserMenu, { useLoggedIn } from "@/features/userMenu";

export default function AuthControls(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <Flex w="100%" p={3} justifyContent="right">
            {!isLoggedIn ? <AuthActions /> : <UserMenu />}
        </Flex>
    );
}
