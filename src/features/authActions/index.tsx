import React from "react";
import { useAtomValue } from "jotai";
import { Stack } from "@chakra-ui/react";

import ActionType from "@/shared/ActionType";
import { FormTitleDictionary } from "@/shared/trans-ko";
import { actionTypeAtom } from "./atom";
import {
    PopoverLayout,
    ActionLayout,
    LoginForm,
    ForgotPasswordForm,
    SocialLoginForm,
    SignupForm,
} from "./ui";

/**
 * AuthActions 컴포넌트는 현재 액션 타입에 따라 인증 관련 폼을 렌더링합니다.
 *
 * 컴포넌트는 `actionType`에 따라 다음 폼 중 하나를 렌더링합니다:
 * - `ActionType.Login`: 로그인 폼과 소셜 로그인 옵션을 표시합니다.
 * - `ActionType.Signup`: 회원가입 폼과 소셜 로그인 옵션을 표시합니다.
 * - `ActionType.ForgotPassword`: 비밀번호 찾기 폼을 표시합니다.
 * 렌더링된 폼은 제목과 추가 레이아웃 스타일이 포함된 `PopoverLayout`으로 감싸져 있습니다.
 *
 * @returns {React.ReactElement} 레이아웃으로 감싸진 렌더링된 인증 폼 컴포넌트.
 *
 */
export default function AuthActions(): React.ReactElement {
    const actionType = useAtomValue(actionTypeAtom); // 현재 액션 타입 상태

    const renderComponent = {
        [ActionType.Login]: (
            <Stack>
                <LoginForm />
                <SocialLoginForm />
            </Stack>
        ),
        [ActionType.Signup]: (
            <Stack>
                <SignupForm />
                <SocialLoginForm />
            </Stack>
        ),
        [ActionType.ForgotPassword]: <ForgotPasswordForm />,
    }[actionType]; // 액션 타입에 따른 렌더링할 컴포넌트

    return (
        <PopoverLayout title={FormTitleDictionary["login"]}>
            <Stack align="center" mx="10%" mt="10%">
                <ActionLayout>{renderComponent}</ActionLayout>
            </Stack>
        </PopoverLayout>
    );
}
