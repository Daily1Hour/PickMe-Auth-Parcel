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

/**
 * ResetPasswordForm 컴포넌트는 비밀번호 재설정 폼을 렌더링합니다.
 *
 * @param {Object} props - props 객체입니다.
 * @param props.username - 비밀번호 재설정을 요청하는 사용자의 사용자 이름입니다.
 * 
 * @returns {React.ReactElement} 렌더링된 ResetPasswordForm 컴포넌트입니다.
 *
 * @remarks
 * - 폼에는 다음 필드가 포함됩니다:
 *   - `username`: 제공된 사용자 이름으로 미리 채워진 숨겨진 필드입니다.
 *   - `code`: 사용자에게 전송된 재설정 코드를 입력하는 필드입니다.
 *   - `password`: 새 비밀번호를 입력하는 비밀 필드입니다.
 *   - `confirmPassword`: 새 비밀번호를 확인하는 비밀 필드입니다.
 * - 확인이 성공하면 액션 타입이 `Login`으로 설정되고 성공 메시지가 표시됩니다.
 */
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
