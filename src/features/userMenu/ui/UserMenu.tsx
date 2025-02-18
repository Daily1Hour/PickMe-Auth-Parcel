import React from "react";
import { MdLogout } from "react-icons/md";
import { Box, Icon, Separator, Text } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/third-party/chakra-ui";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/third-party/chakra-ui";

import { useUserInfo, useLoggedIn } from "../api";

export default function UserMenu(): React.ReactElement {
    const { "cognito:username": username, email } = useUserInfo();
    const { onLogout } = useLoggedIn();

    return (
        <MenuRoot>
            <MenuTrigger>
                <AvatarGroup>
                    <Avatar name={username} cursor="pointer" />
                </AvatarGroup>
            </MenuTrigger>

            <MenuContent
                colorPalette="pickme-primary"
                bg="colorPalette.solid"
                color="colorPalette.contrast"
                boxShadow="0px 0px 10px #444"
            >
                <Box p={3}>
                    <Text textStyle="lg">{username}</Text>
                    <Text textStyle="xs">{email}</Text>
                </Box>

                <Separator />
                <MenuItem
                    value="logout"
                    cursor="pointer"
                    justifyContent="center"
                    color="colorPalette.contrast"
                    onClick={onLogout}
                >
                    <Icon>
                        <MdLogout />
                    </Icon>
                    로그아웃
                </MenuItem>
            </MenuContent>
        </MenuRoot>
    );
}
