import { useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignupFieldValues, SignupSchema } from "../model";

/**
 * 회원가입 폼을 관리하기 위한 커스텀 훅입니다.
 *
 * 이 훅은 폼 상태와 유효성 검사를 관리하며 스키마 기반 유효성 검사를 수행합니다.
 *
 * @template SignupFieldValues - 폼 필드 값의 타입입니다.
 *
 * @returns {UseFormReturn<SignupFieldValues>} 유효성 검사와 상태 관리를 포함한 폼 인스턴스입니다.
 */
export default function useSignupForm(): UseFormReturn<SignupFieldValues> {
    return useForm<SignupFieldValues>({
        // 유효성 검사
        resolver: yupResolver(SignupSchema),
        mode: "onChange",
    });
}
