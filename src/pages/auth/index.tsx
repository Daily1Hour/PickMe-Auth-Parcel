import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import LoginPresentation from "./ui/LoginPresentation";
import SignupPresentation from "./ui/SignupPresentation";
import useLoginForm from "./ui/hooks/useLoginForm";
import useSignupForm from "./ui/hooks/useSignupForm";

export default function AuthPage(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();

    return (
        <Flex bg="gray.100" p={3}>
            <Box flex="5">
                <LoginPresentation {...loginFormMethods} />
            </Box>
            <Box flex="5">
                <SignupPresentation {...signupFormMethods} />
            </Box>
        </Flex>
    );
}
