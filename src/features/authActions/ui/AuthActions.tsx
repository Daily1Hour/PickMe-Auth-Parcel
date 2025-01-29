import React from "react";

import { Button, HStack } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/shared/chakra-ui";

import { useLoginFetch, useSignupFetch } from "../api";
import { useLoginForm, useSignupForm } from "./hooks";
import { Login, Signup, SocialLogin } from "./presentations";

export default function AuthActions(): React.ReactElement {
    const loginFormMethods = useLoginForm();
    const signupFormMethods = useSignupForm();
    const { handleSubmit: handleLoginSubmit } = useLoginFetch();
    const { handleSubmit: handleSignupSubmit } = useSignupFetch();

    return (
        <HStack>
            <PopoverRoot>
                <PopoverTrigger asChild>
                    <Button colorPalette="green">로그인</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <Login {...loginFormMethods} onSubmit={handleLoginSubmit} />
                        <SocialLogin />
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>

            <PopoverRoot>
                <PopoverTrigger asChild>
                    <Button colorPalette="green">회원가입</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>
                        <Signup {...signupFormMethods} onSubmit={handleSignupSubmit} />
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>
        </HStack>
    );
}
