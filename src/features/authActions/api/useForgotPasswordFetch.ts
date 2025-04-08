import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { forgotPassword, dto } from "@/entities/auth";

/**
 * 비밀번호 재설정 기능을 처리하기 위한 커스텀 훅입니다.
 *
 * 이 훅은 비밀번호 재설정 프로세스를 시작하기 위한 `submit` 함수를 제공하며,
 * 응답 데이터와 사용자명을 외부에서 사용할 수 있도록 노출합니다.
 *
 * @returns 다음을 포함하는 객체를 반환합니다:
 * - `submit`: 비밀번호 재설정 요청을 제출하는 함수.
 * - `response`: 비밀번호 재설정 API 호출의 응답 데이터.
 * - `username`: 비밀번호 재설정 요청과 관련된 사용자명.
 */
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
