import React, { useState } from "react";
import { HStack, Link, Stack } from "@chakra-ui/react";

import { PopoverLayout, LoginForm, SocialLoginForm, SignupForm } from "./ui";

export default function AuthActions(): React.ReactElement {
    const [isSignup, setIsSignup] = useState(false);

    return (
        <PopoverLayout title="로그인">
            <Stack align="center" mx="10%" mt="10%">
                {!isSignup ? (
                    <>
                        <LoginForm />

                        <HStack w="100%" justify="space-between" fontSize={12}>
                            <Link>비밀번호 찾기</Link>
                            <Link onClick={() => setIsSignup(true)}>회원가입</Link>
                        </HStack>
                    </>
                ) : (
                    <>
                        <SignupForm />

                        <HStack w="100%" justify="space-between" fontSize={12}>
                            <Link>비밀번호 찾기</Link>
                            <Link onClick={() => setIsSignup(false)}>로그인</Link>
                        </HStack>
                    </>
                )}

                <SocialLoginForm />
            </Stack>
        </PopoverLayout>
    );
}
