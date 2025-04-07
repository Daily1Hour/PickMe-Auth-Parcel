import React from "react";
import { FormProvider } from "react-hook-form";
import { Stack, Text } from "@chakra-ui/react";

import { dto } from "@/entities/auth";
import { SignupFieldValues } from "../../model";
import { useSignupForm } from "../../hook";
import { useSignupFetch } from "../../api";
import FormLayout from "./Layout";
import Field from "./Field";
import ConfirmForm from "./ConfirmForm";

export default function SignupForm(): React.ReactElement {
    const methods = useSignupForm(); // 회원가입 폼 상태 및 제출 메서드
    const { submit, response } = useSignupFetch(); // 회원가입 API 호출 메서드

    return (
        <Stack>
            <FormProvider {...methods}>
                <FormLayout<SignupFieldValues> title="signup" onSubmit={submit}>
                    <Field<SignupFieldValues> name="username" />
                    <Field<SignupFieldValues> name="email" />
                    <Field<SignupFieldValues> name="password" isSecret />
                    <Field<SignupFieldValues> name="confirmPassword" isSecret />
                </FormLayout>
            </FormProvider>

            {response && <Confirm {...response} />}
        </Stack>
    );
}

function Confirm({
    codeDeliveryDetails: { Destination: email },
    user,
}: Exclude<dto.SignupResponse, undefined>): React.ReactElement {
    return (
        <Stack>
            <Text>{email}로 인증 코드가 전송되었습니다.</Text>

            <ConfirmForm username={user.getUsername()} />
        </Stack>
    );
}
