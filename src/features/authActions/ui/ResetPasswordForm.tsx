import React from "react";
import { FormProvider } from "react-hook-form";

import { FormTitleDictionary } from "@/shared/trans-ko";
import { ResetPasswordRequest } from "@/entities/auth/api/dto";
import useResetPasswordFetch from "../api/useResetPasswordFetch";
import { useResetPasswordForm } from "../hook";
import FormField from "./FormField";
import FormLayout from "./FormLayout";

export default function ResetPasswordForm({ username }: { username: string }): React.ReactElement {
    const methods = useResetPasswordForm(); // 비밀번호 리셋 폼 상태 및 제출 메서드
    const { submit } = useResetPasswordFetch(); // 비밀번호 리셋 API 호출 메서드
    const onSubmit = methods.handleSubmit(submit); // 폼 제출
    const isValid = methods.formState.isValid; // 폼 상태 유효 여부

    return (
        <FormProvider {...methods}>
            <FormLayout
                title={FormTitleDictionary["passwordReset"]}
                onSubmit={onSubmit}
                isValid={isValid}
            >
                <FormField<ResetPasswordRequest> name="username" default={username} isHidden />
                <FormField<ResetPasswordRequest> name="code" />
                <FormField<ResetPasswordRequest> name="password" isPassword />
                <FormField<ResetPasswordRequest> name="confirmPassword" isPassword />
            </FormLayout>
        </FormProvider>
    );
}
