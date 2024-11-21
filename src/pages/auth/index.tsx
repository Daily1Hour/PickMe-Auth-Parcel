import React from "react";

import { Flex, Stack } from "@chakra-ui/react";

import AuthControlsPresentation from "@/features/auth/ui/AuthControlsPresentation";
import useLoginForm from "@/features/auth/ui/hooks/useLoginForm";
import useSignupForm from "@/features/auth/ui/hooks/useSignupForm";
import TokenInfoPresentation from "@/features/auth/ui/TokenInfoPresentation";
import UserInfoPresentation from "@/features/auth/ui/UserInfoPresentation";
import useLoginFetch from "@/features/auth/api/useLoginFetch";
import useSignupFetch from "@/features/auth/api/useSignupFetch";
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
