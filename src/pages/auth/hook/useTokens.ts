import { useQuery } from "@tanstack/react-query";

import { getTokens, UserTokens } from "@/entities/auth";

export default function useTokens(): {
    idToken: string | null;
    accessToken: string | null;
    refreshToken: string | null;
} {
    const { data, isSuccess } = useQuery<UserTokens>({
        queryKey: ["tokens"],
        queryFn: getTokens,
    });

    const { idToken, accessToken, refreshToken } = isSuccess
        ? data
        : { idToken: null, accessToken: null, refreshToken: null };

    return { idToken, accessToken, refreshToken };
}
