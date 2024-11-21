import { useState, useEffect } from "react";

import { Stack, Text } from "@chakra-ui/react";

import getTokens from "@/entities/auth/services/sessions/getTokens";
import useUserInfo from "@/features/userInfo/api/useUserInfo";

export default function TokenInfo(): React.ReactElement {
    const [tokens, setTokens] = useState<{
        idToken: string;
        accessToken: string;
        refreshToken: string;
    } | null>(null);
    const { isSuccess } = useUserInfo();

    useEffect(() => {
        if (isSuccess) {
            (async () => {
                const { idToken, accessToken, refreshToken } = await getTokens();
                setTokens({ idToken, accessToken, refreshToken });
                console.log(idToken, accessToken, refreshToken); // Ensure all elements are used
            })();
        }
    }, [isSuccess]);

    return (
        <Stack w="100%">
            <Text>idToken: {tokens?.idToken}</Text>
            <Text>accessToken: {tokens?.accessToken}</Text>
            <Text>refreshToken: {tokens?.refreshToken}</Text>
        </Stack>
    );
}
