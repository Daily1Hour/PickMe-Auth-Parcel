import getTokens from "@/entities/auth/service/session/getTokens";
import { UserTokens } from "@/entities/auth/service/types";
import { useQuery } from "@tanstack/react-query";

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
