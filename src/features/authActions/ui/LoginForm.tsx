import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Link } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans/ko";
import { LoginCredential } from "@/entities/auth";
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
                <FormLayout
                    title={FormTitleDictionary["login"]}
                    onSubmit={onLoginSubmit}
                    isValid={isValid}
                >
                    <FormField<LoginCredential> name="username" default={testUsername} />
                    <FormField<LoginCredential> name="password" default={testPassword} isPassword />
                </FormLayout>
            </FormProvider>

            <Link w="100%" textAlign="left" mt="20px" fontSize={10}>
                비밀번호 찾기
            </Link>
        </Stack>
    );
}
