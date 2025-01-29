import { useMutation } from "@tanstack/react-query";

import { SignupCredential } from "@/entities/auth/model";
import { signup } from "@/entities/auth/service";

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
