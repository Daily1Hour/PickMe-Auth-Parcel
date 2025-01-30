import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Stack, Button, Box, Link } from "@chakra-ui/react";

import { LoginCredential } from "@/entities/auth";
import FormField from "./FormField";

const testUsername = import.meta.env.VITE_TEST_USERNAME;
const testPassword = import.meta.env.VITE_TEST_PASSWORD;

interface LoginFormLayoutProps extends UseFormReturn<LoginCredential> {
    onSubmit: (data: LoginCredential) => void;
}

export default function LoginPresentation({
    register,
    handleSubmit,
    formState: { errors, isValid },
    onSubmit,
}: LoginFormLayoutProps): React.ReactElement {
    return (
        <Stack align="center" mx="10%" mt="20%">
            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="4" align="flex-start">
                    <FormField
                        name="username"
                        label="아이디"
                        register={register}
                        errors={errors}
                        defaultValues={testUsername}
                    />
                    <FormField
                        name="password"
                        label="이메일"
                        register={register}
                        errors={errors}
                        defaultValues={testPassword}
                        isPassword
                    />
                </Stack>

                <Button
                    type="submit"
                    colorPalette="green"
                    w="100%"
                    borderRadius="lg"
                    mt={5}
                    bg={{ base: "colorPalette.700", _dark: "colorPalette.400" }}
                    disabled={!isValid}
                >
                    로그인
                </Button>
            </form>

            <Box w="100%" textAlign="left" mt="20px" fontSize={10}>
                <Link>비밀번호 찾기</Link>
            </Box>
        </Stack>
    );
}
