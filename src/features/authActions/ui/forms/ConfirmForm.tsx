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
