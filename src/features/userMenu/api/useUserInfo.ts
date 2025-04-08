import jwt from "jsonwebtoken";
import { useQuery } from "@tanstack/react-query";

import { dto, getTokens } from "@/entities/auth";

interface UserInfo extends jwt.JwtPayload {
    isSuccess: boolean;
}

/**
 * JWT 토큰을 디코딩하여 사용자 정보를 가져오는 커스텀 훅입니다.
 *
 * 이 훅은 `useQuery`를 사용하여 사용자 토큰을 가져오고, `idToken`을 디코딩하여
 * 사용자 정보를 추출합니다. 쿼리가 성공하면 디코딩된 토큰 페이로드와 성공 상태를 반환하며,
 * 실패하면 실패 상태를 나타내는 객체를 반환합니다.
 *
 * @returns {UserInfo} 디코딩된 사용자 정보와 성공 상태를 포함하는 객체입니다.
 *
 * @remarks
 * - `useQuery` 훅은 `["tokens"]` 키로 토큰을 가져옵니다.
 * - 디코딩된 토큰 페이로드는 타입 안전성을 위해 `jwt.JwtPayload`로 캐스팅됩니다.
 */
export default function useUserInfo(): UserInfo {
    const { data, isSuccess } = useQuery<dto.UserTokens>({
        queryKey: ["tokens"],
        queryFn: getTokens,
    });

    if (isSuccess) {
        const { idToken } = data;

        const decodedToken = jwt.decode(idToken, { complete: true });

        return { ...(decodedToken?.payload as jwt.JwtPayload), isSuccess };
    } else {
        return { isSuccess: false };
    }
}
