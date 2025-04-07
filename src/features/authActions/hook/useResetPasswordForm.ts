import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPasswordFieldValues, ResetPasswordSchema } from "../model";

export default function useResetPasswordForm() {
    return useForm<ResetPasswordFieldValues>({
        // 유효성 검사
        resolver: yupResolver(ResetPasswordSchema),
        mode: "onChange",
    });
}
