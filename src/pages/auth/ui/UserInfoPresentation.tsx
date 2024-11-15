
import React from "react";

import { Button, Stack, Text } from "@chakra-ui/react";
import { ProgressCircleRing, ProgressCircleRoot } from "@/shared/chakra-ui/progress-circle";

export interface Parameters {
    idToken?: string;
    accessToken?: string;
    refreshToken?: string;
    isLoading: boolean;
    logoutClick: () => void;
}

export default function UserInfoPResentation({
    idToken,
    accessToken,
    refreshToken,
    isLoading,
    logoutClick,
}: Parameters): React.ReactElement {
    return (
        <>
            {isLoading ? (
                <ProgressCircleRoot>
                    <ProgressCircleRing />
                </ProgressCircleRoot>
            ) : (
                <Stack w="100%">
                    <Button onClick={logoutClick}>로그아웃</Button>
                    <Text>idToken: {idToken}</Text>
                    <Text>accessToken: {accessToken}</Text>
                    <Text>refreshToken: {refreshToken}</Text>
                </Stack>
            )}
        </>
    );
}
