import React from "react";
import jwt from "jsonwebtoken";

import { Button, Stack, Text } from "@chakra-ui/react";
import { ProgressCircleRing, ProgressCircleRoot } from "@/shared/chakra-ui/progress-circle";

export interface Parameters extends jwt.JwtPayload {
    isLoggedIn: boolean;
    onLogoutClick: () => void;
}

export default function UserInfoPResentation({
    "cognito:username": username,
    email,
    isSuccess,
    onLogoutClick,
}: Parameters): React.ReactElement {
    return (
        <>
            {isSuccess ? (
                <Stack w="100%">
                    <Button onClick={onLogoutClick}>로그아웃</Button>
                    <Text>아이디: {username}</Text>
                    <Text>이메일: {email}</Text>
                </Stack>
            ) : (
                <ProgressCircleRoot value={null}>
                    <ProgressCircleRing />
                </ProgressCircleRoot>
            )}
        </>
    );
}
