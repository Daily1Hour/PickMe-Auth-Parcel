import React from "react";
import { Flex } from "@chakra-ui/react";
import { Toaster } from "@/third-party/chakra-ui";

import AuthActions from "@/features/authActions";
import UserMenu, { useLoggedIn } from "@/features/userMenu";

export default function AuthControls(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <Flex p={3}>
            {!isLoggedIn ? <AuthActions /> : <UserMenu />}

            <Toaster />
        </Flex>
    );
}
