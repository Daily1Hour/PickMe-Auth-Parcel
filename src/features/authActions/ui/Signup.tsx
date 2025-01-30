import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Stack, Button } from "@chakra-ui/react";

import { SignupCredential } from "@/entities/auth";
import FormField from "./FormField";

interface SignupFormLayoutProps extends UseFormReturn<SignupCredential> {
    onSubmit: (data: SignupCredential) => void;
}

export default function SignupPresentation({
    register,
    handleSubmit,
    formState: { errors, isValid },
    onSubmit,
}: SignupFormLayoutProps): React.ReactElement {
    return (
        <Stack align="center" mx="10%" mt="20%">
            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="4" align="flex-start">
                    <FormField name="username" label="아이디" register={register} errors={errors} />
                    <FormField name="email" label="이메일" register={register} errors={errors} />
                    <FormField
                        name="password"
                        label="비밀번호"
                        register={register}
                        errors={errors}
                        isPassword
                    />
                    <FormField
                        name="confirmPassword"
                        label="비밀번호 확인"
                        register={register}
                        errors={errors}
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
                    회원가입
                </Button>
            </form>
        </Stack>
    );
}
