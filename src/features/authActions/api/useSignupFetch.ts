import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { signup, dto } from "@/entities/auth";

export default function useSignupFetch() {
    const [response, setResponse] = useState<dto.SignupResponse>();
    const [username, setUsername] = useState<string>();
    const [email, setEmail] = useState<string>();

    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: (response: dto.SignupResponse) => {
            if (!response) {
                console.error("회원가입에 실패했습니다.");
                return;
            }

            setResponse(response); // 회원가입 성공 시 응답 데이터 저장
        },
    });

    const submit = (data: dto.SignupRequest) => {
        setUsername(data.username);
        setEmail(data.email);
        mutate(data);
    };

    return { submit, response, username, email };
}
