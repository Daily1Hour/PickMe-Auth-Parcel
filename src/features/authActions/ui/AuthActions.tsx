import React from "react";
import { HStack } from "@chakra-ui/react";

import { useLoginFetch, useSignupFetch } from "../api";
import { useLoginForm, useSignupForm } from "../hook";
import PopoverLayout from "./PopoverLayout";
import Login from "./Login";
import Signup from "./Signup";
import SocialLogin from "./SocialLogin";

export default function AuthActions(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit: handleLoginSubmit } = useLoginFetch();
    const { handleSubmit: handleSignupSubmit } = useSignupFetch();

    return (
        <HStack>
            <PopoverLayout title="로그인">
                <Login methods={loginFormMethods} onSubmit={handleLoginSubmit} />
                <SocialLogin />
            </PopoverLayout>

            <PopoverLayout title="회원가입">
                <Signup methods={signupFormMethods} onSubmit={handleSignupSubmit} />
            </PopoverLayout>
        </HStack>
    );
}
