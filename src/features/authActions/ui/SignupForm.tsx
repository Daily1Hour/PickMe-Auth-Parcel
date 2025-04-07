import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Text } from "@chakra-ui/react";

import { SignupFieldValues } from "../model";
import { useSignupForm } from "../hook";
import { useSignupFetch } from "../api";
import FormLayout from "./FormLayout";
import FormField from "./FormField";
import ConfirmForm from "./ConfirmForm";

export default function SignupForm(): React.ReactElement {
    const methods = useSignupForm(); // 회원가입 폼 상태 및 제출 메서드
    const { submit: submitSignup, response, username, email } = useSignupFetch(); // 회원가입 API 호출 메서드

    return (
        <Stack>
            <FormProvider {...methods}>
                <FormLayout<SignupFieldValues> title="signup" onSubmit={submitSignup}>
                    <FormField<SignupFieldValues> name="username" />
                    <FormField<SignupFieldValues> name="email" />
                    <FormField<SignupFieldValues> name="password" isSecret />
                    <FormField<SignupFieldValues> name="confirmPassword" isSecret />
                </FormLayout>
            </FormProvider>

            {response && (
                <Stack>
                    <Text>{email}로 인증 코드가 전송되었습니다.</Text>

                    <ConfirmForm username={username!} />
                </Stack>
            )}
        </Stack>
    );
}
