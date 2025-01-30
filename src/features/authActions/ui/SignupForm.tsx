import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack } from "@chakra-ui/react";

import { SignupCredential } from "@/entities/auth";
import { useSignupForm } from "../hook";
import { useSignupFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";

export default function SignupForm(): React.ReactElement {
    const methods = useSignupForm(); // 회원가입 폼 상태 및 제출 메서드
    const { submitSignup } = useSignupFetch(); // 회원가입 API 호출 메서드

    const onSignupSubmit = methods.handleSubmit(submitSignup); // 회원가입 폼 제출
    const isValid = methods.formState.isValid; // 폼 상태 유효 여부

    return (
        <Stack align="center" m="10%">
            <FormProvider {...methods}>
                <FormLayout title="회원가입" onSubmit={onSignupSubmit} isValid={isValid}>
                    <FormField<SignupCredential> name="username" label="아이디" />
                    <FormField<SignupCredential> name="email" label="이메일" />
                    <FormField<SignupCredential> name="password" label="비밀번호" isPassword />
                    <FormField<SignupCredential>
                        name="confirmPassword"
                        label="비밀번호 확인"
                        isPassword
                    />
                </FormLayout>
            </FormProvider>
        </Stack>
    );
}
