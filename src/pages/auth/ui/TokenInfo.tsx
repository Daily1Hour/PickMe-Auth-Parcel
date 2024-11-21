import { Stack, Heading, ClipboardRoot, HStack } from "@chakra-ui/react";
import { ClipboardLink } from "@/shared/chakra-ui/clipboard";

import useTokens from "@/features/tokens/api/useTokens";

export default function TokenInfo(): React.ReactElement {
    const { idToken, accessToken, refreshToken } = useTokens();

    return (
        <Stack mt={10}>
            <HStack>
                <Heading>idToken:</Heading>
                <ClipboardRoot value={idToken || ""}>
                    <ClipboardLink />
                </ClipboardRoot>
            </HStack>
            <HStack>
                <Heading>accessToken:</Heading>
                <ClipboardRoot value={accessToken || ""}>
                    <ClipboardLink />
                </ClipboardRoot>
            </HStack>
            <HStack>
                <Heading>refreshToken:</Heading>
                <ClipboardRoot value={refreshToken || ""}>
                    <ClipboardLink />
                </ClipboardRoot>
            </HStack>
        </Stack>
    );
}
