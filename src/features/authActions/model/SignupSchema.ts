import * as Yup from "yup";
import { InferType } from "yup";

const SignupSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
    email: Yup.string().email("유효한 이메일을 입력하세요.").required("이메일은 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호 확인은 필수입니다."),
});

export default SignupSchema;

export type Signup = InferType<typeof SignupSchema>;
