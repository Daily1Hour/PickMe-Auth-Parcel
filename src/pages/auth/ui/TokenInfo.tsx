import { Stack, Text } from "@chakra-ui/react";

import useTokens from "@/features/tokens/api/useTokens";

export default function TokenInfo(): React.ReactElement {
    const { idToken, accessToken, refreshToken } = useTokens();

    return (
        <Stack w="100%">
            <Text>idToken: {idToken}</Text>
            <Text>accessToken: {accessToken}</Text>
            <Text>refreshToken: {refreshToken}</Text>
        </Stack>
    );
}
