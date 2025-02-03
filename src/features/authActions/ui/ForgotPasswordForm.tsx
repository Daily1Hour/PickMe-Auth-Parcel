import React from "react";

import { Button, Stack, Text } from "@chakra-ui/react";
import { useForgotPasswordFetch } from "../api";

const testUsername = import.meta.env.VITE_TEST_USERNAME;

export default function ForgotPasswordForm(): React.ReactElement {
    const { submit, response } = useForgotPasswordFetch(); // 비밀번호 찾기 API 호출 메서드

    return (
        <Stack>
            <Button
                colorPalette="green"
                w="100%"
                borderRadius="lg"
                mt={5}
                bg={{ base: "colorPalette.700", _dark: "colorPalette.400" }}
                onClick={() => submit({ username: testUsername })}
            >
                비밀번호 찾기
            </Button>

            {response && (
                <Stack>
                    <Text>{response?.Destination}로 비밀번호 재설정 코드가 전송되었습니다.</Text>
                </Stack>
            )}
        </Stack>
    );
}
