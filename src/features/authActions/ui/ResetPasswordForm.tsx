import React from "react";
import { useSetAtom } from "jotai";
import { FormProvider } from "react-hook-form";
import { toaster } from "@/third-party/chakra-ui";

import ActionType from "@/shared/ActionType";
import { FormTitleDictionary } from "@/shared/trans-ko";
import { ResetPasswordFieldValues } from "../model";
import { actionTypeAtom } from "../atom";
import { useResetPasswordForm } from "../hook";
import { useResetPasswordFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";

export default function ResetPasswordForm({ username }: { username: string }): React.ReactElement {
    const setType = useSetAtom(actionTypeAtom);
    const methods = useResetPasswordForm(); // 비밀번호 리셋 폼 상태 및 제출 메서드
    const { submit } = useResetPasswordFetch(); // 비밀번호 리셋 API 호출 메서드
    const isValid = methods.formState.isValid; // 폼 상태 유효 여부
    const onSubmit = methods.handleSubmit(async (e) => {
        const { message } = await submit(e); // 폼 제출

        if (message === "success") {
            toaster.create({ title: "비밀번호 리셋에 성공했습니다.", type: "success" }); // 성공 토스트 메시지
            setType(ActionType.Login); // 로그인 액션으로 변경
        }
    });

    return (
        <FormProvider {...methods}>
            <FormLayout
                title={FormTitleDictionary["passwordReset"]}
                onSubmit={onSubmit}
                isValid={isValid}
            >
                <FormField<ResetPasswordFieldValues> name="username" default={username} isHidden />
                <FormField<ResetPasswordFieldValues> name="code" />
                <FormField<ResetPasswordFieldValues> name="password" isPassword />
                <FormField<ResetPasswordFieldValues> name="confirmPassword" isPassword />
            </FormLayout>
        </FormProvider>
    );
}
