import { CognitoUserPool, CognitoUserSession } from "amazon-cognito-identity-js";

import userPoolData from "@/features/auth/services/userPoolData";

export interface UserTokens {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}

export default async function getTokens(): Promise<UserTokens> {
    // CognitoUserPool 인스턴스를 생성
    const userPool = new CognitoUserPool(userPoolData);
    // 현재 로그인한 사용자를 가져옴
    // localStorage에 저장된 토큰을 사용하여 사용자 정보를 가져옴
    const cognitoUser = userPool.getCurrentUser();
    // 사용자가 로그인했는지 정의
    const isLoggedIn = !!cognitoUser;

    return new Promise((resolve, reject) => {
        if (isLoggedIn) {
            // 사용자의 세션을 가져옴
            cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
                if (err) {
                    reject(new Error("Error retrieving session: " + err));
                }

                if (session) {
                    const idToken = session.getIdToken().getJwtToken();
                    const accessToken = session.getAccessToken().getJwtToken();
                    const refreshToken = session.getRefreshToken().getToken();

                    resolve({ idToken, accessToken, refreshToken });
                } else {
                    reject(new Error("No session available."));
                }
            });
        } else {
            reject(new Error("No user is currently logged in."));
        }
    });
}
