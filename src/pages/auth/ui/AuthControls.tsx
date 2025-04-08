import React from "react";
import { Flex } from "@chakra-ui/react";
import { Toaster } from "@/third-party/chakra-ui";

import AuthActions from "@/features/authActions";
import UserMenu, { useLoggedIn } from "@/features/userMenu";

/**
 * `AuthControls` 컴포넌트는 사용자의 인증 상태에 따라 로그인 또는 사용자 메뉴를 렌더링합니다.
 *
 * - 사용자가 로그인하지 않은 경우 `AuthActions` 컴포넌트를 표시합니다.
 * - 사용자가 로그인한 경우 `UserMenu` 컴포넌트를 표시합니다.
 *
 * @returns {React.ReactElement} 렌더링된 인증 컨트롤.
 *
 * @remarks
 * - 알림을 표시하기 위한 `Toaster` 컴포넌트를 포함합니다.
 */
export default function AuthControls(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <Flex p={3}>
            {!isLoggedIn ? <AuthActions /> : <UserMenu />}

            <Toaster />
        </Flex>
    );
}
