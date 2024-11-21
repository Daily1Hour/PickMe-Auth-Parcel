import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/shared/chakra-ui/avatar";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/shared/chakra-ui/menu";

import useUserInfo from "../api/useUserInfo";
import useLoggedIn from "../api/useLoggedIn";

export default function UserInfo(): React.ReactElement {
    const { "cognito:username": username, email } = useUserInfo();
    const { onLogout } = useLoggedIn();

    return (
        <MenuRoot>
            <MenuTrigger>
                <AvatarGroup>
                    <Avatar name={username} cursor="pointer" />
                </AvatarGroup>
            </MenuTrigger>
            <MenuContent>
                <Box p={3}>
                    <Heading>{username}</Heading>
                    <Text>{email}</Text>
                </Box>
                <MenuItem value="logout" onClick={onLogout} cursor="pointer">
                    로그아웃
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
}
