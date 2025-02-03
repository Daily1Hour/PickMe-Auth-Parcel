import { useMutation } from "@tanstack/react-query";

import { resetPassword } from "@/entities/auth";
import { ResetPasswordRequest, ResetPasswordResponse } from "@/entities/auth/api/dto";

export default function useResetPasswordFetch() {
    const { mutate } = useMutation({
        mutationFn: resetPassword,
        onSuccess: async ({ message }: ResetPasswordResponse) => {
            console.log(message);
        },
    });

    const submit = (data: ResetPasswordRequest) => {
        mutate(data);
    };

    return { submit };
}
