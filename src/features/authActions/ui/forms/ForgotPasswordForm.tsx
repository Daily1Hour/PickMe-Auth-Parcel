import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Text } from "@chakra-ui/react";

import { ForgotPasswordFieldValues } from "../../model";
import { useForgotPasswordForm } from "../../hook";
import { useForgotPasswordFetch } from "../../api";
import FormLayout from "./Layout";
import Field from "./Field";
import ResetPasswordForm from "./ResetPasswordForm";

const testUsername = import.meta.env.VITE_TEST_USERNAME;

/**
 * ForgotPasswordForm 컴포넌트는 비밀번호 찾기 프로세스를 처리합니다.
 * 폼 상태 관리 및 API 호출을 통해 비밀번호 복구 프로세스를 처리합니다.
 *
 * @returns {React.ReactElement} 렌더링된 ForgotPasswordForm 컴포넌트.
 *
 * @remarks
 * - 이 컴포넌트는 폼 상태와 메서드를 관리하고 API 호출을 처리합니다.
 * - API 응답을 받으면, 사용자에게 재설정 코드가 전송되었음을 알리는 메시지를 표시합니다.
 */
export default function ForgotPasswordForm(): React.ReactElement {
    const methods = useForgotPasswordForm(); // 비밀번호 찾기 폼 상태 및 제출 메서드
    const { submit, response, username } = useForgotPasswordFetch(); // 비밀번호 찾기 API 호출 메서드

    return (
        <Stack>
            <FormProvider {...methods}>
                <FormLayout<ForgotPasswordFieldValues> title="passwordForgot" onSubmit={submit}>
                    <Field<ForgotPasswordFieldValues> name="username" default={testUsername} />
                </FormLayout>
            </FormProvider>

            {response && (
                <Stack>
                    <Text>{response?.Destination}로 비밀번호 재설정 코드가 전송되었습니다.</Text>

                    <ResetPasswordForm username={username!} />
                </Stack>
            )}
        </Stack>
    );
}
