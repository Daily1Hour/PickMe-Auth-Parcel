import React, { useState } from "react";
import { HStack, Link, Stack } from "@chakra-ui/react";

import { PopoverLayout, LoginForm, ForgotPasswordForm, SocialLoginForm, SignupForm } from "./ui";

export default function AuthActions(): React.ReactElement {
    const [actionType, setActionType] = useState<"login" | "signup" | "passwordForgot">("login");

    return (
        <PopoverLayout title="로그인">
            <Stack align="center" mx="10%" mt="10%">
                {actionType === "login" ? (
                    <>
                        <LoginForm />

                        <HStack w="100%" justify="space-between" fontSize={12}>
                            <Link onClick={() => setActionType("passwordForgot")}>
                                비밀번호 찾기
                            </Link>
                            <Link onClick={() => setActionType("signup")}>회원가입</Link>
                        </HStack>
                    </>
                ) : actionType === "signup" ? (
                    <>
                        <SignupForm />

                        <HStack w="100%" justify="space-between" fontSize={12}>
                            <Link>비밀번호 찾기</Link>
                            <Link onClick={() => setActionType("login")}>로그인</Link>
                        </HStack>
                    </>
                ) : (
                    <>
                        <ForgotPasswordForm />

                        <HStack w="100%" justify="space-between" fontSize={12}>
                            <Link onClick={() => setActionType("login")}>로그인</Link>
                            <Link onClick={() => setActionType("signup")}>회원가입</Link>
                        </HStack>
                    </>
                )}

                <SocialLoginForm />
            </Stack>
        </PopoverLayout>
    );
}
