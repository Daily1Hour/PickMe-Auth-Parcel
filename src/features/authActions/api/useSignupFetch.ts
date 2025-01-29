import { useMutation } from "@tanstack/react-query";

import { SignupCredential, signup } from "@/entities/auth";

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
