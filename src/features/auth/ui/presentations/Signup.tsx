import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Stack, Button, Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { PasswordInput } from "@/shared/chakra-ui/password-input";

import SignupCredential from "@/entities/auth/model/SignupCredential";

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
                    <Field
                        label="아이디"
                        invalid={!!errors.username}
                        errorText={errors.username?.message}
                        required
                    >
                        <Input
                            borderRadius="lg"
                            {...register("username", {
                                required: "아이디를 입력해주세요",
                            })}
                        />
                    </Field>

                    <Field
                        label="이메일"
                        invalid={!!errors.email}
                        errorText={errors.email?.message}
                        required
                    >
                        <Input
                            borderRadius="lg"
                            {...register("email", {
                                required: "이메일을 입력해주세요",
                            })}
                        />
                    </Field>

                    <Field
                        label="비밀번호"
                        invalid={!!errors.password}
                        errorText={errors.password?.message}
                        required
                    >
                        <PasswordInput
                            borderRadius="lg"
                            {...register("password", {
                                required: "비밀번호 입력해주세요",
                            })}
                        />
                    </Field>

                    <Field
                        label="비밀번호 확인"
                        invalid={!!errors.confirmPassword}
                        errorText={errors.confirmPassword?.message}
                        required
                    >
                        <PasswordInput
                            borderRadius="lg"
                            {...register("confirmPassword", {
                                required: "비밀번호를 다시 입력해주세요",
                            })}
                        />
                    </Field>
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
