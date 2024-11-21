import React from "react";

import { Button, HStack } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/shared/chakra-ui/popover";

import LoginPresentation from "./LoginPresentation";
import SignupPresentation from "./SignupPresentation";
import SocialLoginPresentation from "./SocialLoginPresentation";

interface AuthControlsLayoutProps {
    loginFormMethods: any;
    handleLoginSubmit: any;
    signupFormMethods: any;
    handleSignupSubmit: any;
}

export default function AuthControlsPresentation({
    loginFormMethods,
    handleLoginSubmit,
    signupFormMethods,
    handleSignupSubmit,
}: AuthControlsLayoutProps): React.ReactElement {
    return (
        <HStack>
            <PopoverRoot>
                <PopoverTrigger asChild>
                    <Button>로그인</Button>
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
                <PopoverTrigger>
                    <Button>회원가입</Button>
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
