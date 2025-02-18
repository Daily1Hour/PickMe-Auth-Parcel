import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { Fieldset } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans-ko";
import { SecondaryButton } from "@/shared/ui";

export default function FormLayout<T extends FieldValues>({
    title,
    onSubmit,
    children, // 폼 필드들
}: {
    title: "login" | "signup" | "passwordForgot" | "passwordReset";
    onSubmit: SubmitHandler<T>;
    children: React.ReactNode;
}): React.ReactElement {
    const {
        handleSubmit, // 제출 핸들러
        formState: { isValid }, // 폼 유효 여부
    } = useFormContext<T>(); // 프로바이더로 제공

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Fieldset.Root>
                <Fieldset.Legend display="none">{FormTitleDictionary[title]}</Fieldset.Legend>
                <Fieldset.Content>{children}</Fieldset.Content>
            </Fieldset.Root>

            <SecondaryButton type="submit" mt={5} w="100%" disabled={!isValid}>
                {FormTitleDictionary[title]}
            </SecondaryButton>
        </form>
    );
}
