import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { Stack, Button } from "@chakra-ui/react";

import { SignupCredential } from "@/entities/auth";
import FormField from "./FormField";

export default function SignupPresentation({
    methods,
    onSubmit,
}: {
    methods: UseFormReturn<SignupCredential>;
    onSubmit: (data: SignupCredential) => void;
}): React.ReactElement {
    return (
        <Stack align="center" mx="10%" mt="20%">
            <FormProvider {...methods}>
                <form style={{ width: "100%" }} onSubmit={methods.handleSubmit(onSubmit)}>
                    <Stack gap="4" align="flex-start">
                        <FormField name="username" label="아이디" />
                        <FormField name="email" label="이메일" />
                        <FormField name="password" label="비밀번호" isPassword />
                        <FormField name="confirmPassword" label="비밀번호 확인" isPassword />
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
                        회원가입
                    </Button>
                </form>
            </FormProvider>
        </Stack>
    );
}
