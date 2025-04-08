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

/**
 * SignupForm 컴포넌트는 사용자 회원가입을 위한 폼을 렌더링합니다.
 *
 * @returns {React.ReactElement} 렌더링된 회원가입 폼 컴포넌트.
 *
 * @remarks
 * - 폼에는 다음 필드가 포함됩니다:
 *  - `username`: 사용자 이름을 입력하는 필드입니다.
 *  - `email`: 사용자 이메일을 입력하는 필드입니다.
 *  - `password`: 비밀번호를 입력하는 비밀 필드입니다.
 *  - `confirmPassword`: 비밀번호 확인을 위한 비밀 필드입니다.
 * - 회원가입이 성공하면 사용자에게 인증 코드가 전송됩니다.
 */
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
