import React from "react";
import { HStack } from "@chakra-ui/react";

import { PopoverLayout, LoginForm, SocialLoginForm, SignupForm } from "./ui";

export default function AuthActions(): React.ReactElement {
    return (
        <HStack>
            <PopoverLayout title="로그인">
                <LoginForm />

                <SocialLoginForm />
            </PopoverLayout>

            <PopoverLayout title="회원가입">
                <SignupForm />
            </PopoverLayout>
        </HStack>
    );
}
