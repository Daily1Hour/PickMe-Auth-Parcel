import React from "react";
import { UseFormReturn } from "react-hook-form";

import { Stack, Heading, Button, Input } from "@chakra-ui/react";
import { Field } from "@/shared/chakra-ui/field";
import { PasswordInput } from "@/shared/chakra-ui/password-input";

import SignupCredential from "@/entities/SignupCredential";

interface SignupFormLayoutProps extends UseFormReturn<SignupCredential> {}

export default function SignupPresentation({
    register,
    handleSubmit,
    formState: { errors, isValid },
}: SignupFormLayoutProps): React.ReactElement {
    const onSubmit = (data: SignupCredential) => {
        console.log(data);
    };

    return (
        <Stack>
            <Heading as="h2">회원가입</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap="4" align="flex-start" maxW="sm">
                    <Field
                        label="아이디"
                        invalid={!!errors.username}
                        errorText={errors.username?.message}
                        required
                    >
                        <Input
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
                            {...register("password", {
                                required: "비밀번호 입력해주세요",
                            })}
                        />
                    </Field>

                    <Field
                        label="비밀번호 확인"
                        invalid={!!errors.conformPassword}
                        errorText={errors.conformPassword?.message}
                        required
                    >
                        <PasswordInput
                            {...register("conformPassword", {
                                required: "비밀번호를 다시 입력해주세요",
                            })}
                        />
                    </Field>
                </Stack>

                <Button
                    type="submit"
                    colorPalette="blue"
                    mt={5}
                    bg={{ base: "colorPalette.600", _dark: "colorPalette.400" }}
                    disabled={!isValid}
                >
                    제출
                </Button>
            </form>
        </Stack>
    );
}
