import { useMutation } from "@tanstack/react-query";

import { signup } from "@/features/auth/services/signup/signup";
import SignupCredential from "@/entities/SignupCredential";

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
