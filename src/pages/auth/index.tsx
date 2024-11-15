import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import LoginPresentation from "./ui/LoginPresentation";
import SignupPresentation from "./ui/SignupPresentation";
import useLoginForm from "./ui/hooks/useLoginForm";
import useLoginFetch from "./ui/hooks/useLoginFetch";
import useSignupForm from "./ui/hooks/useSignupForm";

export default function AuthPage(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit } = useLoginFetch();

    return (
        <Flex bg="gray.100" p={3}>
            <Box flex="5">
                <LoginPresentation {...loginFormMethods} onSubmit={handleSubmit} />
            </Box>
            <Box flex="5">
                <SignupPresentation {...signupFormMethods} />
            </Box>
        </Flex>
    );
}
