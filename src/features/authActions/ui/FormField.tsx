import { Field, PasswordInput } from "@/third-party/chakra-ui";
import { Input } from "@chakra-ui/react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

export default function FormField<T extends FieldValues>({
    name,
    label,
    defaultValues,
    isPassword,
}: {
    name: Path<T>;
    label: string;
    defaultValues?: string;
    isPassword?: boolean;
}) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <Field
            label={label}
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
