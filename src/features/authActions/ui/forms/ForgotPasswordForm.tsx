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
