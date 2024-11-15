import React from "react";

import { useQuery } from "@tanstack/react-query";
import { Flex, Box } from "@chakra-ui/react";

import LoginPresentation from "./ui/LoginPresentation";
import SignupPresentation from "./ui/SignupPresentation";
import UserInfoPresentation from "./ui/UserInfoPresentation";
import useLoginForm from "./ui/hooks/useLoginForm";
import useSignupForm from "./ui/hooks/useSignupForm";
import useLoginFetch from "./api/useLoginFetch";
import useSignupFetch from "./api/useSignupFetch";
import getLoggedIn from "@/shared/lib/getLoggedIn";
import getTokens, { UserTokens } from "@/shared/lib/getTokens";

export default function AuthPage(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit: handleLoginSubmit } = useLoginFetch();
    const { handleSubmit: handleSignupSubmit } = useSignupFetch();
    const { isLoggedIn, logoutHandler } = getLoggedIn();
    const { data: tokens, isLoading } = useQuery<UserTokens>({
        queryKey: ["tokens"],
        queryFn: getTokens,
    });

    return (
        <Flex bg="gray.100" p={3}>
            {!isLoggedIn ? (
                <>
                    <Box flex="5">
                        <LoginPresentation {...loginFormMethods} onSubmit={handleLoginSubmit} />
                    </Box>
                    <Box flex="5">
                        <SignupPresentation {...signupFormMethods} onSubmit={handleSignupSubmit} />
                    </Box>
                </>
            ) : (
                <UserInfoPresentation
                    {...tokens}
                    isLoading={isLoading}
                    logoutClick={logoutHandler}
                />
            )}
        </Flex>
    );
}
