import React from "react";
import { Flex } from "@chakra-ui/react";

import { useLoggedIn } from "@/features/userMenu";
import { AuthControls, TokenInfo } from "./ui";

/**
 * 애플리케이션의 인증 페이지를 나타냅니다.
 *
 * 이 컴포넌트는 인증 컨트롤을 표시하며, 사용자가 로그인한 경우 추가적인 토큰 정보를 표시합니다.
 *
 * @returns {React.ReactElement} 렌더링된 인증 페이지 컴포넌트입니다.
 */
export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <Flex w="100%" p={3} justifyContent="right" bg="pink.700">
                <AuthControls />
            </Flex>

            {isLoggedIn && <TokenInfo />}
        </>
    );
}

export { AuthControls };
