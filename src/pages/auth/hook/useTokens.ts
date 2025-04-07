import { useQuery } from "@tanstack/react-query";

import { getTokens, dto } from "@/entities/auth";

export default function useTokens(): {
    idToken: string | null;
    accessToken: string | null;
    refreshToken: string | null;
} {
    const { data, isSuccess } = useQuery<dto.UserTokens>({
        queryKey: ["tokens"],
        queryFn: getTokens,
    });

    const { idToken, accessToken, refreshToken } = isSuccess
        ? data
        : { idToken: null, accessToken: null, refreshToken: null };

    return { idToken, accessToken, refreshToken };
}
