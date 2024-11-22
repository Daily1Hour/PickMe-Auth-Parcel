import { useMutation } from "@tanstack/react-query";

import SignupCredential from "@/entities/auth/model/SignupCredential";
import signup from "@/entities/auth/service/signup/signup";

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
