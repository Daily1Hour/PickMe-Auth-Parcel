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
