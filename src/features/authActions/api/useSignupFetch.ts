import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { signup, dto } from "@/entities/auth";

/**
 * 회원가입 프로세스를 처리하기 위한 커스텀 훅입니다.
 *
 * @returns 다음을 포함하는 객체를 반환합니다:
 * - `submit`: 제공된 데이터를 사용하여 회원가입 프로세스를 트리거하는 함수.
 * - `response`: 회원가입 프로세스가 성공했을 때의 응답 데이터.
 *
 * @throws 회원가입 프로세스가 실패하면 에러를 던집니다.
 */
export default function useSignupFetch() {
    const [response, setResponse] = useState<dto.SignupResponse>();

    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: (response: dto.SignupResponse) => {
            if (!response) {
                throw Error("회원가입에 실패했습니다.");
            }

            setResponse(response); // 회원가입 성공 시 응답 데이터 저장
        },
    });

    const submit = (data: dto.SignupRequest) => {
        mutate(data);
    };

    return { submit, response };
}
