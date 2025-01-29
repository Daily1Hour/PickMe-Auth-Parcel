import { Stack, Heading, ClipboardRoot, HStack } from "@chakra-ui/react";
import { ClipboardLink } from "@/shared/chakra-ui";

import useTokens from "@/features/tokens/api/useTokens";

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
