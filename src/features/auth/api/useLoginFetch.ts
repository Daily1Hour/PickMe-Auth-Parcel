import { useMutation } from "@tanstack/react-query";

import LoginCredential from "@/entities/auth/model/LoginCredential";
import login from "@/entities/auth/service/login/login";

export default function useLoginFetch() {
    const { mutate } = useMutation({
        mutationFn: login,
        onSuccess: () => {
            console.log("Login success");
        },
    });

    const handleSubmit = (data: LoginCredential) => {
        mutate(data);
    };

    return { handleSubmit };
}
