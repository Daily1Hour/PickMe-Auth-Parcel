import React from "react";
import { FormProvider } from "react-hook-form";
import { useSetAtom } from "jotai";

import ActionType from "@/shared/ActionType";
import { ConfirmFieldValues } from "../../model";
import { useConfirmForm } from "../../hook";
import { useConfirmFetch } from "../../api";
import { actionTypeAtom } from "../../atom";
import FormLayout from "./Layout";
import Field from "./Field";

/**
 * ConfirmForm 컴포넌트는 사용자 인증을 위한 확인 프로세스를 처리합니다.
 * 사용자가 인증 코드를 입력하고 이를 검증하기 위해 제출할 수 있도록 합니다.
 *
 * @param {Object} props - props 객체입니다.
 * @param {string} props.username - 계정을 확인하려는 사용자의 사용자 이름입니다.
 * 
 * @returns {React.ReactElement} 렌더링된 ConfirmForm 컴포넌트입니다.
 *
 * @remarks
 * - 이 컴포넌트는 폼 상태와 메서드를 관리하고 API 호출을 처리합니다.
 * - 확인이 성공하면 액션 타입이 `Login`으로 설정되고 성공 메시지가 표시됩니다.
 */
export default function ConfirmForm({ username }: { username: string }): React.ReactElement {
    const setActionType = useSetAtom(actionTypeAtom);
    const methods = useConfirmForm(); // 회원가입 폼 상태 및 제출 메서드
    const { submit } = useConfirmFetch(); // 회원가입 API 호출 메서드
    const onSubmit = async (e: ConfirmFieldValues) => {
        const { message } = await submit({ ...e, username }); // 폼 제출

        if (message === "SUCCESS") {
            setActionType(ActionType.Login); // 액션 타입을 로그인으로 변경
            alert("인증 코드가 확인되었습니다."); // 성공 토스트 메시지
        }
    };

    return (
        <FormProvider {...methods}>
            <FormLayout<ConfirmFieldValues> title="confirm" onSubmit={onSubmit}>
                <Field<ConfirmFieldValues> name="code" isSecret />
            </FormLayout>
        </FormProvider>
    );
}
