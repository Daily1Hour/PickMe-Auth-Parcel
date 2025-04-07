import { useMutation } from "@tanstack/react-query";

import { confirm, dto } from "@/entities/auth";

export default function useConfirmFetch() {
    const { mutateAsync } = useMutation({
        mutationFn: confirm,
    });

    const submit = async (data: dto.ConfirmReuest) => {
        return await mutateAsync(data);
    };

    return { submit };
}
