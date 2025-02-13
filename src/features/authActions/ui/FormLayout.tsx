import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { Fieldset, Button } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans-ko";

export default function FormLayout<T extends FieldValues>({
    title,
    onSubmit,
    children, // 폼 필드들
}: {
    title: string;
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
                <Fieldset.Legend display="none">{FormTitleDictionary["login"]}</Fieldset.Legend>
                <Fieldset.Content>{children}</Fieldset.Content>
            </Fieldset.Root>

            <Button
                type="submit"
                colorPalette="green"
                w="100%"
                borderRadius="lg"
                mt={5}
                bg={{ base: "colorPalette.700", _dark: "colorPalette.400" }}
                disabled={!isValid}
            >
                {title}
            </Button>
        </form>
    );
}
