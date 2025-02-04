import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ForgotPassword, ForgotPasswordSchema } from "../model";

export default function useForgotPasswordForm() {
    return useForm<ForgotPassword>({
        // 유효성 검사
        resolver: yupResolver(ForgotPasswordSchema),
        mode: "onChange",
    });
}
