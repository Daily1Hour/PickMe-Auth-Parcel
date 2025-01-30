import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans/ko";
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
                <FormLayout
                    title={FormTitleDictionary["signup"]}
                    onSubmit={onSignupSubmit}
                    isValid={isValid}
                >
                    <FormField<SignupCredential> name="username" />
                    <FormField<SignupCredential> name="email" />
                    <FormField<SignupCredential> name="password" isPassword />
                    <FormField<SignupCredential> name="confirmPassword" isPassword />
                </FormLayout>
            </FormProvider>
        </Stack>
    );
}
