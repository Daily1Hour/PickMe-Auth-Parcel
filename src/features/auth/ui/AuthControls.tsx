import React from "react";

import { Button, HStack } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/shared/chakra-ui/popover";

import LoginPresentation from "./presentations/Login";
import SignupPresentation from "./presentations/Signup";
import SocialLoginPresentation from "./presentations/SocialLogin";
import useLoginFetch from "../api/useLoginFetch";
import useSignupFetch from "../api/useSignupFetch";
import useLoginForm from "./hooks/useLoginForm";
import useSignupForm from "./hooks/useSignupForm";

export default function AuthControls(): React.ReactElement {
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
                        <LoginPresentation {...loginFormMethods} onSubmit={handleLoginSubmit} />
                        <SocialLoginPresentation />
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
                        <SignupPresentation {...signupFormMethods} onSubmit={handleSignupSubmit} />
                    </PopoverBody>
                </PopoverContent>
            </PopoverRoot>
        </HStack>
    );
}
