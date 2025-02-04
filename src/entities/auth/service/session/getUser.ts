import { jwtDecode } from "jwt-decode";

import getTokens from "./getTokens";

type User = {
    sub: string;
    "cognito:username": string;
};

export default async function getUser() {
    const { idToken } = await getTokens();

    // JWT 토큰 디코딩
    const user = jwtDecode<User>(idToken!);

    return {
        id: user.sub,
        username: user["cognito:username"],
    };
}
