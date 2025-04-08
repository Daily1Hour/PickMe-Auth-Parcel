import * as Yup from "yup";
import { InferType } from "yup";

/**
 * 비밀번호 재설정 폼 필드를 검증하기 위한 스키마입니다.
 * 
 * 이 스키마는 다음 조건을 충족하도록 보장합니다:
 * - `username`: 필수 문자열 필드이며, 제공되지 않을 경우 검증 오류 메시지를 표시합니다.
 * - `code`: 인증 코드를 위한 필수 문자열 필드이며, 제공되지 않을 경우 검증 오류 메시지를 표시합니다.
 * - `password`: 최소 8자 이상의 필수 문자열 필드입니다.
 *   길이 요구사항을 충족하지 않거나 필드가 비어 있을 경우 검증 오류 메시지를 표시합니다.
 * - `confirmPassword`: `password` 필드의 값과 일치해야 하는 필수 문자열 필드입니다.
 *   비밀번호가 일치하지 않거나 필드가 비어 있을 경우 검증 오류 메시지를 표시합니다.
 */
const ResetPasswordSchema = Yup.object().shape({
    username: Yup.string().required("사용자 이름은 필수입니다."),
    code: Yup.string().required("인증 코드는 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호 확인은 필수입니다."),
});

export default ResetPasswordSchema;

export type ResetPasswordFieldValues = InferType<typeof ResetPasswordSchema>;
