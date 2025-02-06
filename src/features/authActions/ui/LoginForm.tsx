import React from "react";
import { FormProvider } from "react-hook-form";

import { FormTitleDictionary } from "@/shared/trans-ko";
import { LoginFieldValues } from "../model";
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
        <FormProvider {...methods}>
            <FormLayout
                title={FormTitleDictionary["login"]}
                onSubmit={onLoginSubmit}
                isValid={isValid}
            >
                <FormField<LoginFieldValues> name="username" default={testUsername} />
                <FormField<LoginFieldValues> name="password" default={testPassword} isPassword />
            </FormLayout>
        </FormProvider>
    );
}
