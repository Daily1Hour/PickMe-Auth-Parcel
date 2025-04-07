import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { Field as ChakraField, PasswordInput } from "@/third-party/chakra-ui";

import { FieldDictionary } from "@/shared/trans-ko";

export default function Field<T extends FieldValues>({
    name, // 필드 이름
    default: defaultValues, // 필드 기본값
    isSecret, // 비밀 필드 여부
    isHidden, // 숨김 필드 여부
}: {
    name: Path<T>;
    default?: string;
    isSecret?: boolean;
    isHidden?: boolean;
}) {
    const {
        register,
        formState: { errors },
    } = useFormContext<T>(); // useFormContext를 사용하여 FormProvider로 제공된 폼 상태 및 메서드를 가져옴

    return (
        <ChakraField
            label={FieldDictionary[name as keyof typeof FieldDictionary]}
            invalid={!!errors[name]}
            errorText={errors[name]?.message as string}
            hidden={isHidden}
            required
        >
            {!isSecret ? (
                <Input {...register(name)} defaultValue={defaultValues} borderRadius="lg" />
            ) : (
                <PasswordInput {...register(name)} defaultValue={defaultValues} borderRadius="lg" />
            )}
        </ChakraField>
    );
}
