import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Stack, Button, Box, Link } from "@chakra-ui/react";

import { LoginCredential } from "@/entities/auth";
import FormField from "./FormField";

const testUsername = import.meta.env.VITE_TEST_USERNAME;
const testPassword = import.meta.env.VITE_TEST_PASSWORD;

export default function LoginPresentation({
    methods,
    onSubmit,
}: {
    methods: UseFormReturn<LoginCredential>;
    onSubmit: (data: LoginCredential) => void;
}): React.ReactElement {
    return (
        <Stack align="center" mx="10%" mt="20%">
            <FormProvider {...methods}>
                <form style={{ width: "100%" }} onSubmit={methods.handleSubmit(onSubmit)}>
                    <Stack gap="4" align="flex-start">
                        <FormField name="username" label="아이디" defaultValues={testUsername} />
                        <FormField
                            name="password"
                            label="이메일"
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
                        disabled={!methods.formState.isValid}
                    >
                        로그인
                    </Button>
                </form>
            </FormProvider>

            <Box w="100%" textAlign="left" mt="20px" fontSize={10}>
                <Link>비밀번호 찾기</Link>
            </Box>
        </Stack>
    );
}
