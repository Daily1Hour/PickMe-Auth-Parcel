import React from "react";
import { FormProvider } from "react-hook-form";

import { SignupFieldValues } from "../model";
import { useSignupForm } from "../hook";
import { useSignupFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";

export default function SignupForm(): React.ReactElement {
    const methods = useSignupForm(); // 회원가입 폼 상태 및 제출 메서드
    const { submit: submitSignup } = useSignupFetch(); // 회원가입 API 호출 메서드

    return (
        <FormProvider {...methods}>
            <FormLayout<SignupFieldValues> title="signup" onSubmit={submitSignup}>
                <FormField<SignupFieldValues> name="username" />
                <FormField<SignupFieldValues> name="email" />
                <FormField<SignupFieldValues> name="password" isPassword />
                <FormField<SignupFieldValues> name="confirmPassword" isPassword />
            </FormLayout>
        </FormProvider>
    );
}
