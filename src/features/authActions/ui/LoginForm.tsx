import React from "react";
import { FormProvider } from "react-hook-form";

import { LoginFieldValues } from "../model";
import { useLoginForm } from "../hook";
import { useLoginFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";

const testUsername = import.meta.env.VITE_TEST_USERNAME;
const testPassword = import.meta.env.VITE_TEST_PASSWORD;

export default function LoginForm(): React.ReactElement {
    const methods = useLoginForm(); // 로그인 폼 상태 및 제출 메서드
    const { submit: submitLogin } = useLoginFetch(); // 로그인 API 호출 메서드

    return (
        <FormProvider {...methods}>
            <FormLayout<LoginFieldValues> title="login" onSubmit={submitLogin}>
                <FormField<LoginFieldValues> name="username" default={testUsername} />
                <FormField<LoginFieldValues> name="password" default={testPassword} isPassword />
            </FormLayout>
        </FormProvider>
    );
}
