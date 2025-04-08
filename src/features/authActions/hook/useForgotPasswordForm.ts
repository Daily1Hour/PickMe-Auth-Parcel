import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ForgotPasswordFieldValues, ForgotPasswordSchema } from "../model";

/**
 * 비밀번호 찾기 기능을 위한 폼을 관리하기 위한 커스텀 훅입니다.
 *
 * 이 훅은 폼 상태와 유효성 검사를 관리하며 스키마 기반 유효성 검사를 수행합니다.
 *
 * @template ForgotPasswordFieldValues - 폼 필드 값의 타입입니다.
 *
 * @returns {UseFormReturn<ForgotPasswordFieldValues>} 유효성 검사 및 상태 관리가 포함된 폼 인스턴스.
 */
export default function useForgotPasswordForm(): UseFormReturn<ForgotPasswordFieldValues> {
    return useForm<ForgotPasswordFieldValues>({
        // 유효성 검사
        resolver: yupResolver(ForgotPasswordSchema),
        mode: "onChange",
    });
}
