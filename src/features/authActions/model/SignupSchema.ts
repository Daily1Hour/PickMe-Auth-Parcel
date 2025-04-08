import * as Yup from "yup";
import { InferType } from "yup";

/**
 * 회원가입 폼의 유효성 검사를 정의하는 Yup 스키마입니다.
 *
 * 이 스키마는 다음 조건을 충족하도록 보장합니다:
 * - `username`: 필수 문자열 필드이며, 제공되지 않을 경우 검증 오류 메시지를 표시합니다.
 * - `email`: 유효한 이메일 형식이어야 하며, 필수입니다.
 * - `password`: 최소 8자 이상의 필수 문자열 필드입니다.
 * - `confirmPassword`: `password` 필드의 값과 일치해야 하는 필수 문자열 필드입니다.
 *   비밀번호가 일치하지 않거나 필드가 비어 있을 경우 검증 오류 메시지를 표시합니다.
 */
const SignupSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
    email: Yup.string().email("유효한 이메일을 입력하세요.").required("이메일은 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호 확인은 필수입니다."),
});

export default SignupSchema;

export type SignupFieldValues = InferType<typeof SignupSchema>;
