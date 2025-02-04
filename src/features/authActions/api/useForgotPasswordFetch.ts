import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { forgotPassword, dto } from "@/entities/auth";

export default function useForgotPasswordFetch() {
    const [response, setResponse] = useState<dto.ForgotPasswordResponse>();
    const [username, setUsername] = useState<string>();

    const { mutate } = useMutation({
        mutationFn: forgotPassword,
        onSuccess: async (data) => {
            setResponse(data); // 비밀번호 재설정 코드 전송 성공 시 응답 데이터 저장
        },
    });

    const submit = (data: dto.ForgotPasswordRequest) => {
        setUsername(data.username); // 사용자명 저장
        mutate(data);
    };

    return { submit, response, username };
}
