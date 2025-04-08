import { CognitoUserSession } from "amazon-cognito-identity-js";

import { UserTokens } from "../../api/dto";
import getLoggedIn from "../../repository/getLoggedIn";

/**
 * 현재 로그인된 사용자의 인증 토큰을 가져옵니다.
 *
 * 이 함수는 Cognito 사용자 객체를 사용하여 사용자의 세션을 가져오고,
 * 세션에서 ID 토큰, 액세스 토큰, 리프레시 토큰을 추출합니다.
 * 세션이 없거나 세션을 가져오는 중 오류가 발생하면, 해당 오류와 함께 Promise를 거부합니다.
 *
 * @returns {Promise<UserTokens>} 사용자의 토큰을 포함하는 Promise를 반환합니다:
 * - `idToken`: JWT 문자열로 된 ID 토큰.
 * - `accessToken`: JWT 문자열로 된 액세스 토큰.
 * - `refreshToken`: 문자열로 된 리프레시 토큰.
 *
 * @throws {Error} 세션을 가져오는 중 오류가 발생하거나 세션이 없는 경우.
 */
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
