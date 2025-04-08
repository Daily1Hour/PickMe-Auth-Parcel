import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login, dto } from "@/entities/auth";

/**
 * React Query의 `useMutation`을 사용하여 로그인 API 호출을 처리하는 커스텀 훅입니다.
 *
 * 이 훅은 로그인 변이를 트리거하기 위한 `submit` 함수를 제공하며,
 * 성공 시 인증 상태를 업데이트합니다.
 *
 * @returns 다음을 포함하는 객체를 반환합니다:
 * - `submit`: 로그인 변이를 트리거하는 함수. `dto.LoginRequest` 객체를 입력으로 받습니다.
 */
export default function useLoginFetch() {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: async (tokens: dto.LoginResponse) => {
            console.log("Login success", tokens);

            // 로그인 성공 시 isLoggedIn 쿼리를 다시 불러옴
            await queryClient.refetchQueries({
                queryKey: ["isLoggedIn"],
            });
        },
    });

    const submit = (data: dto.LoginRequest) => {
        mutate(data);
    };

    return { submit };
}
