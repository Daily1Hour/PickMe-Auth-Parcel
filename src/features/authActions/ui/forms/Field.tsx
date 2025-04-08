import { FieldValues, Path, useFormContext } from "react-hook-form";
import { Input } from "@chakra-ui/react";
import { Field as ChakraField, PasswordInput } from "@/third-party/chakra-ui";

import { FieldDictionary } from "@/shared/trans-ko";

/**
 * Field 컴포넌트는 폼 필드를 렌더링합니다.
 *
 * @template T - `react-hook-form`의 `FieldValues`를 확장하는 폼 값의 타입입니다.
 *
 * @param {Object} props - props 객체입니다.
 * @param {Path<T>} props.name - `react-hook-form`에 필드를 등록하는 데 사용되는 필드 이름입니다.
 * @param {string} [props.default] - 필드의 기본값입니다.
 * @param {boolean} [props.isSecret] - 필드가 비밀번호 입력인지 여부입니다.
 * @param {boolean} [props.isHidden] - 필드가 숨겨져야 하는지 여부입니다.
 *
 * @returns {React.ReactElement} 렌더링된 폼 필드 컴포넌트입니다.
 */
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
}): React.ReactElement {
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
