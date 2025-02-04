import { useMutation } from "@tanstack/react-query";

import { resetPassword, dto } from "@/entities/auth";

export default function useResetPasswordFetch() {
    const { mutateAsync } = useMutation({
        mutationFn: resetPassword,
    });

    const submit = async (data: dto.ResetPasswordRequest) => {
        return await mutateAsync(data);
    };

    return { submit };
}
