import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import SignupCredential from "@/entities/auth/models/SignupCredential";

export default function useSignupForm() {
    return useForm<SignupCredential>({
        // 유효성 검사
        resolver: yupResolver(SignupCredential.validateSchema),
        mode: "onChange",
    });
}