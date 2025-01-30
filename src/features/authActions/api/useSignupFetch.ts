import { useMutation } from "@tanstack/react-query";

import { SignupCredential, signup } from "@/entities/auth";

export default function useSignupFetch() {
    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: () => {
            console.log("Signup success");
        },
    });

    const submitSignup = (data: SignupCredential) => {
        mutate(data);
    };

    return { submitSignup };
}
