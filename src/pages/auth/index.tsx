import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import LoginPresentation from "./ui/LoginPresentation";
import SignupPresentation from "./ui/SignupPresentation";
import useLoginForm from "./ui/hooks/useLoginForm";
import useSignupForm from "./ui/hooks/useSignupForm";
import useLoginFetch from "./api/useLoginFetch";
import useSignupFetch from "./api/useSignupFetch";

export default function AuthPage(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit: handleLoginSubmit } = useLoginFetch();
    const { handleSubmit: handleSignupSubmit } = useSignupFetch();

    return (
        <Flex bg="gray.100" p={3}>
            <Box flex="5">
                <LoginPresentation {...loginFormMethods} onSubmit={handleLoginSubmit} />
            </Box>
            <Box flex="5">
                <SignupPresentation {...signupFormMethods} onSubmit={handleSignupSubmit} />
            </Box>
        </Flex>
    );
}
