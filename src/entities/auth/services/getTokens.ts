import { CognitoUserSession } from "amazon-cognito-identity-js";

import getLoggedIn from "@/entities/auth/repository/getLoggedIn";

export interface UserTokens {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}

export default async function getTokens(): Promise<UserTokens> {
    const { cognitoUser } = getLoggedIn();

    return new Promise((resolve, reject) => {
        // 사용자의 세션을 가져옴
        cognitoUser?.getSession((err: Error | null, session: CognitoUserSession | null) => {
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
        reject(new Error("No user is currently logged in."));
    });
}
