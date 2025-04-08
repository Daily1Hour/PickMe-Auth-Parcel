import { Stack, Heading, ClipboardRoot, HStack } from "@chakra-ui/react";
import { ClipboardLink } from "@/third-party/chakra-ui";

import useTokens from "../hook/useTokens";

/**
 * TokenInfo 컴포넌트는 인증 토큰 정보를 표시합니다.
 *
 * 각 토큰은 클립보드 복사 링크와 함께 표시됩니다.
 *
 * @returns {React.ReactElement} 토큰 정보를 표시하는 렌더링된 컴포넌트입니다.
 */
export default function TokenInfo(): React.ReactElement {
    const { idToken, accessToken, refreshToken } = useTokens();

    return (
        <Stack m={10}>
            <HStack>
                <Heading>idToken:</Heading>
                <ClipboardRoot value={idToken || ""}>
                    <ClipboardLink cursor="pointer" />
                </ClipboardRoot>
            </HStack>
            <HStack>
                <Heading>accessToken:</Heading>
                <ClipboardRoot value={accessToken || ""}>
                    <ClipboardLink cursor="pointer" />
                </ClipboardRoot>
            </HStack>
            <HStack>
                <Heading>refreshToken:</Heading>
                <ClipboardRoot value={refreshToken || ""}>
                    <ClipboardLink cursor="pointer" />
                </ClipboardRoot>
            </HStack>
        </Stack>
    );
}
