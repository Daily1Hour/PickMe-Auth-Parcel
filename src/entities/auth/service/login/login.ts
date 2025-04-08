import { CognitoUser, AuthenticationDetails, CognitoUserSession } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { LoginRequest, LoginResponse } from "../../api/dto";

/**
 * AWS Cognito를 사용하여 사용자를 인증하고 인증 토큰을 반환합니다.
 *
 * @param {LoginRequest} params - 사용자 이름과 비밀번호를 포함하는 객체.
 * @param {string} params.username - 로그인하려는 사용자의 사용자 이름.
 * @param {string} params.password - 로그인하려는 사용자의 비밀번호.
 * @returns {Promise<LoginResponse>} 인증 토큰을 포함하는 Promise:
 * - `IdToken`: 사용자 인증 정보를 포함한 토큰으로, 클라이언트에서 사용자 정보를 가져올 때 사용.
 * - `AccessToken`: API 접근 권한을 증명하는 토큰으로, 백엔드 서비스에 접근할 때 사용.
 * - `RefreshToken`: `IdToken` 및 `AccessToken`이 만료되었을 때 갱신에 사용되는 토큰.
 * @throws 인증에 실패할 경우 에러 메시지와 함께 거부됩니다.
 */
export default async function login({ username, password }: LoginRequest): Promise<LoginResponse> {
    // CognitoUser 인스턴스 생성
    const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
    });

    // username, password 정보를 담은 AuthenticationDetails 객체 생성
    const details = new AuthenticationDetails({
        Username: username,
        Password: password,
    });

    return new Promise((resolve, reject) => {
        cognitoUser.authenticateUser(details, {
            onSuccess: function (result: CognitoUserSession) {
                const response = {
                    IdToken: result.getIdToken(),
                    AccessToken: result.getAccessToken(),
                    RefreshToken: result.getRefreshToken(),
                };

                resolve(response);
            },
            onFailure: function (err) {
                reject(err.message || JSON.stringify(err));
            },
        });
    });
}
