import { Fieldset, Button } from "@chakra-ui/react";

export default function FormLayout({
    title,
    onSubmit, // 폼 제출 메서드
    isValid, // 폼 유효 여부
    children, // 폼 필드들
}: {
    title: string;
    onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
    isValid: boolean;
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <form onSubmit={onSubmit}>
            <Fieldset.Root>
                <Fieldset.Legend display="none">{title}</Fieldset.Legend>
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
