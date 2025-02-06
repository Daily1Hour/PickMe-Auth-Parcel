import * as Yup from "yup";
import { InferType } from "yup";

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
});

export default LoginSchema;

export type LoginFieldValues = InferType<typeof LoginSchema>;
