import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { Fieldset } from "@chakra-ui/react";

import { FormTitleDictionary } from "@/shared/trans-ko";
import { SecondaryButton } from "@/shared/ui";

/**
 * 다양한 인증 관련 폼을 처리하기 위한 제네릭 폼 레이아웃 컴포넌트입니다.
 *
 * @template T - `react-hook-form`의 `FieldValues`를 확장하는 폼 필드 값의 타입입니다.
 *
 * @param {Object} props - props 객체입니다.
 * @param {"login" | "signup" | "confirm" | "passwordForgot" | "passwordReset"} props.title
 * 폼의 목적을 결정하고 적절한 레이블을 표시하기 위해 사용되는 폼의 제목입니다.
 * 
 * @param {SubmitHandler<T>} props.onSubmit
 * 폼 제출을 처리하기 위한 콜백 함수입니다. 이 함수는 폼 데이터를 인수로 받습니다.
 * 
 * @param {React.ReactNode} props.children
 * 폼 내부에 렌더링될 폼 필드를 나타내는 자식 컴포넌트입니다.
 *
 * @returns {React.ReactElement} 렌더링된 폼 레이아웃 컴포넌트입니다.
 */
export default function FormLayout<T extends FieldValues>({
    title,
    onSubmit,
    children, // 폼 필드들
}: {
    title: "login" | "signup" | "confirm" | "passwordForgot" | "passwordReset";
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
