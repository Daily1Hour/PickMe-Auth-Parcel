import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPasswordFieldValues, ResetPasswordSchema } from "../model";

/**
 * 비밀번호 재설정을 위한 폼을 관리하기 위한 커스텀 훅입니다.
 *
 * 이 훅은 폼 상태와 유효성 검사를 관리하며 스키마 기반 유효성 검사를 수행합니다.
 *
 * @template ResetPasswordFieldValues - 폼 필드 값의 타입입니다.
 *
 * @returns {UseFormReturn<ResetPasswordFieldValues>} 유효성 검사와 상태 관리를 포함한 폼 인스턴스입니다.
 */
export default function useResetPasswordForm(): UseFormReturn<ResetPasswordFieldValues> {
    return useForm<ResetPasswordFieldValues>({
        // 유효성 검사
        resolver: yupResolver(ResetPasswordSchema),
        mode: "onChange",
    });
}
