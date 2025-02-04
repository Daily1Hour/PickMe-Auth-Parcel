import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPassword, ResetPasswordSchema } from "../model";

export default function useResetPasswordForm() {
    return useForm<ResetPassword>({
        // 유효성 검사
        resolver: yupResolver(ResetPasswordSchema),
        mode: "onChange",
    });
}
