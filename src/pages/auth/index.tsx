import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import LoginFormLayout from "./ui/LoginFormLayout";
import SignupFormLayout from "./ui/SignupFormLayout";

export default function AuthPage(): React.ReactElement {
    return (
        <Flex bg="gray.100" p={3}>
            <Box flex="5">
                <LoginFormLayout />
            </Box>
            <Box flex="5">
                <SignupFormLayout />
            </Box>
        </Flex>
    );
}
