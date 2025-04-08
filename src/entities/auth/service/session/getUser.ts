import { jwtDecode } from "jwt-decode";

import getTokens from "./getTokens";

type User = {
    sub: string;
    "cognito:username": string;
};

/**
 * 인증된 사용자의 정보를 JWT 토큰을 디코딩하여 가져옵니다.
 *
 * @async
 * @function
 * @returns {Promise<{ id: string; username: string }>} 사용자 ID와 사용자 이름을 포함하는 객체를 반환합니다.
 * @throws 토큰을 가져올 수 없거나 JWT 토큰을 디코딩할 수 없는 경우 오류를 발생시킵니다.
 */
export default async function getUser(): Promise<{ id: string; username: string }> {
    const { idToken } = await getTokens();

    const user = jwtDecode<User>(idToken!);

    return {
        id: user.sub,
        username: user["cognito:username"],
    };
}
