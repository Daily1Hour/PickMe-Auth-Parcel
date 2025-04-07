import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ForgotPasswordFieldValues, ForgotPasswordSchema } from "../model";

export default function useForgotPasswordForm() {
    return useForm<ForgotPasswordFieldValues>({
        // 유효성 검사
        resolver: yupResolver(ForgotPasswordSchema),
        mode: "onChange",
    });
}
