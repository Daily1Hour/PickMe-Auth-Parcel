import { useQuery } from "@tanstack/react-query";

import { getTokens, dto } from "@/entities/auth";

/**
 * 사용자 인증 토큰을 가져오는 커스텀 훅입니다.
 *
 * 이 훅은 쿼리를 사용하여 사용자의 ID 토큰, 액세스 토큰, 리프레시 토큰을 가져옵니다.
 * 쿼리가 성공하면 토큰이 반환되며, 그렇지 않으면 각 토큰에 대해 `null` 값이 반환됩니다.
 *
 * @returns 다음 속성을 포함하는 객체를 반환합니다:
 * - `idToken`: 문자열로 된 ID 토큰, 또는 사용할 수 없는 경우 `null`.
 * - `accessToken`: 문자열로 된 액세스 토큰, 또는 사용할 수 없는 경우 `null`.
 * - `refreshToken`: 문자열로 된 리프레시 토큰, 또는 사용할 수 없는 경우 `null`.
 */
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
