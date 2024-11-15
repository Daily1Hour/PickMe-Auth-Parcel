import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import LoginCredential from "@/entities/LoginCredential";

export default function useLoginForm() {
    return useForm<LoginCredential>({
        // 유효성 검사
        resolver: yupResolver(LoginCredential.validateSchema),
        mode: "onChange",
    });
}
