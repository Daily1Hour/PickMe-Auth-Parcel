import { yupResolver } from "@hookform/resolvers/yup";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { AnyObjectSchema } from "yup";

type SchemaFor<T> = AnyObjectSchema & {
    __outputType?: T;
};

/**
 * 주어진 `schema`를 기반으로 `react-hook-form`의 `useForm` 훅을 생성합니다.
 *
 * @template T - 폼 필드 값의 타입을 나타내는 제네릭 타입.
 * @param schema - `yup`을 사용하여 정의된 폼 검증 스키마.
 * @returns `useForm` 훅의 반환값으로, 폼 상태와 메서드를 포함합니다.
 */
export default function useFormBy<T extends FieldValues>(schema: SchemaFor<T>): UseFormReturn<T> {
    return useForm<T>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
}
