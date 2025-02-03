import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { forgotPassword } from "@/entities/auth";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "@/entities/auth/api/dto";

export default function useForgotPasswordFetch() {
    const [response, setResponse] = useState<ForgotPasswordResponse>();

    const { mutate } = useMutation({
        mutationFn: forgotPassword,
        onSuccess: async (data) => {
            setResponse(data); // 비밀번호 재설정 코드 전송 성공 시 응답 데이터 저장
        },
    });

    const submit = (data: ForgotPasswordRequest) => {
        mutate(data);
    };

    return { submit, response };
}
