import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { LoginFieldValues, LoginSchema } from "../model";

/**
 * 로그인 기능을 위한 폼을 관리하기 위한 커스텀 훅입니다.
 *
 * 이 훅은 폼 상태와 유효성 검사를 관리하며 스키마 기반 유효성 검사를 수행합니다.
 *
 * @template LoginFieldValues - 폼 필드 값의 타입입니다.
 *
 * @returns {UseFormReturn<LoginFieldValues>} 로그인 폼을 관리하기 위한 메서드와 상태를 포함한 폼 인스턴스입니다.
 */
export default function useLoginForm(): UseFormReturn<LoginFieldValues> {
    return useForm<LoginFieldValues>({
        // 유효성 검사
        resolver: yupResolver(LoginSchema),
        mode: "onChange",
    });
}
