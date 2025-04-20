import React from "react";
import { FormProvider } from "react-hook-form";

import { LoginFieldValues, LoginSchema } from "../../model";
import { useFormBy } from "../../hook";
import { useLoginFetch } from "../../api";
import FormLayout from "./Layout";
import Field from "./Field";

const testUsername = import.meta.env.VITE_TEST_USERNAME;
const testPassword = import.meta.env.VITE_TEST_PASSWORD;

/**
 * LoginForm 컴포넌트는 사용자 인증을 위한 로그인 프로세스를 처리합니다.
 *
 * @returns {React.ReactElement} 렌더링된 로그인 폼 컴포넌트.
 *
 * @remarks
 * - 폼에는 두 개의 필드가 포함되어 있습니다:
 *   - `username`: 기본값이 있는 텍스트 입력 필드.
 *   - `password`: 기본값이 있는 비밀번호 입력 필드(비밀로 표시됨).
 */
export default function LoginForm(): React.ReactElement {
    const methods = useFormBy<LoginFieldValues>(LoginSchema); // 로그인 폼 상태 및 제출 메서드
    const { submit } = useLoginFetch(); // 로그인 API 호출 메서드

    return (
        <FormProvider {...methods}>
            <FormLayout<LoginFieldValues> title="login" onSubmit={submit}>
                <Field<LoginFieldValues> name="username" default={testUsername} />
                <Field<LoginFieldValues> name="password" default={testPassword} isSecret />
            </FormLayout>
        </FormProvider>
    );
}
