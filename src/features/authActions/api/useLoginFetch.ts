import { useMutation, useQueryClient } from "@tanstack/react-query";

import { login, dto } from "@/entities/auth";

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

    const submitLogin = (data: dto.LoginRequest) => {
        mutate(data);
    };

    return { submitLogin };
}
