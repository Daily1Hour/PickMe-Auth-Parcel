import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControlsPresentation from "./ui/AuthControlsPresentation";
import UserInfoPresentation from "./ui/UserInfoPresentation";
import useLoginForm from "./ui/hooks/useLoginForm";
import useSignupForm from "./ui/hooks/useSignupForm";
import TokenInfoPresentation from "./ui/TokenInfoPresentation";
import useLoginFetch from "./api/useLoginFetch";
import useSignupFetch from "./api/useSignupFetch";
import getLoggedIn from "@/features/auth/lib/getLoggedIn";
import useUserInfo from "@/features/auth/lib/useUserInfo";

export default function AuthPage(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit: handleLoginSubmit } = useLoginFetch();
    const { handleSubmit: handleSignupSubmit } = useSignupFetch();
    const { isLoggedIn, onLogout } = getLoggedIn();
    const userInfo = useUserInfo();

    return (
        <Flex bg="gray.100" p={3}>
            {!isLoggedIn ? (
                <AuthControlsPresentation
                    loginFormMethods={loginFormMethods}
                    handleLoginSubmit={handleLoginSubmit}
                    signupFormMethods={signupFormMethods}
                    handleSignupSubmit={handleSignupSubmit}
                />
            ) : (
                <Stack>
                    <UserInfoPresentation
                        {...userInfo}
                        isLoggedIn={isLoggedIn}
                        onLogoutClick={onLogout}
                    />
                    <TokenInfoPresentation isSuccess={userInfo.isSuccess} />
                </Stack>
            )}
        </Flex>
    );
}
