import * as Yup from "yup";
import { InferType } from "yup";

const ConfirmSchema = Yup.object().shape({
    code: Yup.string()
        .min(6, "인증 코드는 6자입니다.")
        .max(6, "인증 코드는 6자입니다.")
        .required("필수 항목입니다."),
});

export default ConfirmSchema;

export type ConfirmFieldValues = InferType<typeof ConfirmSchema>;
