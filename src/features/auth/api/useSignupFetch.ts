import { useMutation } from "@tanstack/react-query";

import { signup } from "@/entities/auth/services/signup/signup";
import SignupCredential from "@/entities/auth/models/SignupCredential";

export default function useSignupFetch() {
    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            console.log("Signup success");
        },
    });

    const handleSubmit = (data: SignupCredential) => {
        mutate(data);
    };

    return { handleSubmit };
}
