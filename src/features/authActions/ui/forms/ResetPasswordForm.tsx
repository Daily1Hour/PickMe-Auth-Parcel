import React from "react";
import { useSetAtom } from "jotai";
import { FormProvider } from "react-hook-form";
import { toaster } from "@/third-party/chakra-ui";

import ActionType from "@/shared/ActionType";
import { dto } from "@/entities/auth";
import { ResetPasswordFieldValues } from "../../model";
import { actionTypeAtom } from "../../atom";
import { useResetPasswordForm } from "../../hook";
import { useResetPasswordFetch } from "../../api";
import FormLayout from "./Layout";
import Field from "./Field";

export default function ResetPasswordForm({ username }: { username: string }): React.ReactElement {
    const setType = useSetAtom(actionTypeAtom);
    const methods = useResetPasswordForm(); // 비밀번호 리셋 폼 상태 및 제출 메서드
    const { submit } = useResetPasswordFetch(); // 비밀번호 리셋 API 호출 메서드
    const onSubmit = async (e: dto.ResetPasswordRequest) => {
        const { message } = await submit(e); // 폼 제출

        if (message === "success") {
            toaster.create({ title: "비밀번호 리셋에 성공했습니다.", type: "success" }); // 성공 토스트 메시지
            setType(ActionType.Login); // 로그인 액션으로 변경
        }
    };

    return (
        <FormProvider {...methods}>
            <FormLayout<ResetPasswordFieldValues> title="passwordReset" onSubmit={onSubmit}>
                <Field<ResetPasswordFieldValues> name="username" default={username} isHidden />
                <Field<ResetPasswordFieldValues> name="code" />
                <Field<ResetPasswordFieldValues> name="password" isSecret />
                <Field<ResetPasswordFieldValues> name="confirmPassword" isSecret />
            </FormLayout>
        </FormProvider>
    );
}
