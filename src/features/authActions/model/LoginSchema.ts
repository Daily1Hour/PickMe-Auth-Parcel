import * as Yup from "yup";
import { InferType } from "yup";

/**
 * 로그인 폼에 대한 유효성 검사를 정의하는 스키마입니다. (Yup 사용)
 *
 * 이 스키마는 다음 조건을 충족하도록 보장합니다:
 * - `username`: 필수 문자열 필드이며, 제공되지 않을 경우 검증 오류 메시지를 표시합니다.
 * - `password`: 필수 문자열 필드이며, 최소 8자 이상이어야 합니다.
 */
const LoginSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
});

export default LoginSchema;

export type LoginFieldValues = InferType<typeof LoginSchema>;
