import React from "react";
import { useAtomValue } from "jotai";

import { Stack } from "@chakra-ui/react";

import ActionType from "@/shared/ActionType";
import {
    PopoverLayout,
    ActionLayout,
    LoginForm,
    ForgotPasswordForm,
    SocialLoginForm,
    SignupForm,
} from "./ui";
import { actionTypeAtom } from "./atom";

export default function AuthActions(): React.ReactElement {
    const actionType = useAtomValue(actionTypeAtom);

    const renderComponent = (() => {
        switch (actionType) {
            case ActionType.Login:
                return (
                    <ActionLayout>
                        <LoginForm />
                        <SocialLoginForm />
                    </ActionLayout>
                );
            case ActionType.Signup:
                return (
                    <ActionLayout>
                        <SignupForm />
                        <SocialLoginForm />
                    </ActionLayout>
                );
            case ActionType.ForgotPassword:
                return (
                    <ActionLayout>
                        <ForgotPasswordForm />
                    </ActionLayout>
                );
        }
    })();

    return (
        <PopoverLayout title="로그인">
            <Stack align="center" mx="10%" mt="10%">
                {renderComponent}
            </Stack>
        </PopoverLayout>
    );
}
