import * as Yup from "yup";
import { InferType } from "yup";

/**
 * "비밀번호 찾기" 기능을 위한 유효성 검사 스키마입니다.
 *
 * 이 스키마는 다음 조건을 충족하도록 보장합니다:
 * - `username`: 필수 문자열 필드이며, 제공되지 않을 경우 검증 오류 메시지를 표시합니다.
 */
const ForgotPasswordSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
});

export default ForgotPasswordSchema;

export type ForgotPasswordFieldValues = InferType<typeof ForgotPasswordSchema>;
