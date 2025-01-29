import { useMutation, useQueryClient } from "@tanstack/react-query";

import { LoginCredential } from "@/entities/auth/model";
import { login } from "@/entities/auth/service";

export default function useLoginFetch() {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: async () => {
            console.log("Login success");

            // 로그인 성공 시 isLoggedIn 쿼리를 다시 불러옴
            await queryClient.refetchQueries({
                queryKey: ["isLoggedIn"],
            });
        },
    });

    const handleSubmit = (data: LoginCredential) => {
        mutate(data);
    };

    return { handleSubmit };
}
