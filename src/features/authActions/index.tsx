import React, { useState } from "react";
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

export default function AuthActions(): React.ReactElement {
    const [actionType, setActionType] = useState<ActionType>(ActionType.Login);

    const renderComponent = (() => {
        switch (actionType) {
            case ActionType.Login:
                return (
                    <ActionLayout actionType={actionType} setActionType={setActionType}>
                        <LoginForm />
                        <SocialLoginForm />
                    </ActionLayout>
                );
            case ActionType.Signup:
                return (
                    <ActionLayout actionType={actionType} setActionType={setActionType}>
                        <SignupForm />
                        <SocialLoginForm />
                    </ActionLayout>
                );
            case ActionType.ForgotPassword:
                return (
                    <ActionLayout actionType={actionType} setActionType={setActionType}>
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
