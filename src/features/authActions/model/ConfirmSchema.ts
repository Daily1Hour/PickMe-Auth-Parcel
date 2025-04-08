import * as Yup from "yup";
import { InferType } from "yup";

/**
 * Yup을 사용하여 코드 확인을 위한 유효성 검사 스키마입니다.
 * 
 * 이 스키마는 다음 조건을 충족하도록 보장합니다:
 * - `code`: 필수 문자열 필드이며, 6자 길이의 인증 코드를 요구합니다.
 *   필드가 비어 있거나 길이가 6자가 아닌 경우 검증 오류 메시지를 표시합니다.
 */
const ConfirmSchema = Yup.object().shape({
    code: Yup.string()
        .min(6, "인증 코드는 6자입니다.")
        .max(6, "인증 코드는 6자입니다.")
        .required("필수 항목입니다."),
});

export default ConfirmSchema;

export type ConfirmFieldValues = InferType<typeof ConfirmSchema>;
