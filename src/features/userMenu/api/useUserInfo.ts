import jwt from "jsonwebtoken";
import { useQuery } from "@tanstack/react-query";

import { getTokens, UserTokens } from "@/entities/auth";

interface UserInfo extends jwt.JwtPayload {
    isSuccess: boolean;
}

export default function useUserInfo(): UserInfo {
    const { data, isSuccess } = useQuery<UserTokens>({
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
