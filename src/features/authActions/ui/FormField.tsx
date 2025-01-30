import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { Field, PasswordInput } from "@/third-party/chakra-ui";

import { FieldDictionary } from "@/shared/trans-ko";

export default function FormField<T extends FieldValues>({
    name, // 필드 이름
    default: defaultValues, // 필드 기본값
    isPassword, // 비밀번호 필드 여부
}: {
    name: Path<T>;
    default?: string;
    isPassword?: boolean;
}) {
    const {
        register,
        formState: { errors },
    } = useFormContext<T>(); // useFormContext를 사용하여 FormProvider로 제공된 폼 상태 및 메서드를 가져옴

    return (
        <Field
            label={FieldDictionary[name as keyof typeof FieldDictionary]}
            invalid={!!errors[name]}
            errorText={errors[name]?.message as string}
            required
        >
            {!isPassword ? (
                <Input {...register(name)} defaultValue={defaultValues} borderRadius="lg" />
            ) : (
                <PasswordInput {...register(name)} defaultValue={defaultValues} borderRadius="lg" />
            )}
        </Field>
    );
}
