import { Input } from "@chakra-ui/react";
import { Field, PasswordInput } from "@/third-party/chakra-ui";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

interface FieldLayoutProps<T extends FieldValues> {
    name: Path<T>;
    label: string;
    register: UseFormRegister<T>;
    errors: FieldErrors;
    defaultValues?: string;
    isPassword?: boolean;
}

export default function FormField<T extends FieldValues>({
    name,
    label,
    register,
    errors,
    defaultValues,
    isPassword,
}: FieldLayoutProps<T>) {
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
