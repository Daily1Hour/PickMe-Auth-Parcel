import React from "react";
import { MdLogout } from "react-icons/md";
import { Box, Icon, Separator, Text } from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@/third-party/chakra-ui";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "@/third-party/chakra-ui";

import { useUserInfo, useLoggedIn } from "../api";

/**
 * `UserMenu` 컴포넌트는 사용자 정보와 로그아웃 옵션을 포함한 사용자 메뉴 인터페이스를 렌더링합니다.
 *
 * @returns {React.ReactElement} 사용자 메뉴를 나타내는 React 요소.
 *
 * @remarks
 * - 메뉴에는 사용자 이름을 표시하는 아바타와 사용자 세부 정보 및 로그아웃 버튼이 포함된 드롭다운 메뉴가 있습니다.
 * - 로그아웃 버튼은 `useLoggedIn` 훅에서 제공하는 `onLogout` 함수를 트리거합니다.
 */
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
