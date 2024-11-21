import { useMutation } from "@tanstack/react-query";

import login from "@/entities/auth/services/login/login";
import LoginCredential from "@/entities/auth/models/LoginCredential";

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
