import { useMutation } from "@tanstack/react-query";

import { resetPassword, dto } from "@/entities/auth";

export default function useResetPasswordFetch() {
    const { mutate } = useMutation({
        mutationFn: resetPassword,
        onSuccess: async ({ message }: dto.ResetPasswordResponse) => {
            console.log(message);
        },
    });

    const submit = (data: dto.ResetPasswordRequest) => {
        mutate(data);
    };

    return { submit };
}
