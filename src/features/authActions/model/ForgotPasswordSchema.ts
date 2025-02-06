import * as Yup from "yup";
import { InferType } from "yup";

const ForgotPasswordSchema = Yup.object().shape({
    username: Yup.string().required("아이디는 필수입니다."),
});

export default ForgotPasswordSchema;

export type ForgotPasswordFieldValues = InferType<typeof ForgotPasswordSchema>;
