import { useMutation } from "@tanstack/react-query";

import { signup, dto } from "@/entities/auth";

export default function useSignupFetch() {
    const { mutate } = useMutation({
        mutationFn: signup,
        onSuccess: ({ message }: dto.SignupResponse) => {
            console.log(message);
        },
    });

    const submitSignup = (data: dto.SignupRequest) => {
        mutate(data);
    };

    return { submitSignup };
}
