import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Text } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans-ko";
import { useForgotPasswordForm } from "../hook";
import { useForgotPasswordFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";
import ResetPasswordForm from "./ResetPasswordForm";

const testUsername = import.meta.env.VITE_TEST_USERNAME;

export default function ForgotPasswordForm(): React.ReactElement {
    const methods = useForgotPasswordForm(); // 비밀번호 찾기 폼 상태 및 제출 메서드
    const { submit, response, username } = useForgotPasswordFetch(); // 비밀번호 찾기 API 호출 메서드
    const onPasswordResetSubmit = methods.handleSubmit(submit); // 로그인 폼 제출
    const isValid = methods.formState.isValid; // 폼 상태 유효 여부

    return (
        <Stack>
            <FormProvider {...methods}>
                <FormLayout
                    title={FormTitleDictionary["passwordForgot"]}
                    onSubmit={onPasswordResetSubmit}
                    isValid={isValid}
                >
                    <FormField<{ username: string }> name="username" default={testUsername} />
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
