import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Link } from "@chakra-ui/react";

import { useLoginForm } from "../hook";
import { useLoginFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";

const testUsername = import.meta.env.VITE_TEST_USERNAME;
const testPassword = import.meta.env.VITE_TEST_PASSWORD;

export default function LoginForm(): React.ReactElement {
    const methods = useLoginForm(); // 로그인인 폼 상태 및 제출 메서드
    const { submitLogin } = useLoginFetch(); // 로그인 API 호출 메서드

    const onLoginSubmit = methods.handleSubmit(submitLogin); // 로그인 폼 제출
    const isValid = methods.formState.isValid; // 폼 상태 유효 여부

    return (
        <Stack align="center" mx="10%" mt="10%">
            <FormProvider {...methods}>
                <FormLayout title="로그인" onSubmit={onLoginSubmit} isValid={isValid}>
                    <FormField name="username" label="아이디" default={testUsername} />
                    <FormField name="password" label="이메일" default={testPassword} isPassword />
                </FormLayout>
            </FormProvider>

            <Link w="100%" textAlign="left" mt="20px" fontSize={10}>
                비밀번호 찾기
            </Link>
        </Stack>
    );
}
