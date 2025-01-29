import { CognitoUser, AuthenticationDetails, CognitoUserSession } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { LoginRequest, LoginResponse } from "../../api/dto";

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
                    // 사용자 인증 정보를 포함한 토큰
                    // 클라이언트에서 사용자 정보를 가져올 때 사용
                    idToken: result.getIdToken().getJwtToken(),
                    // API 접근 권한을 증명하는 토큰
                    // 백엔드 서비스에 접근할 때 사용
                    accessToken: result.getAccessToken().getJwtToken(),
                    // 사용자 인증 정보를 갱신하는 토큰
                    //  idToken, accessToken 만료 시 갱신에 사용
                    refreshToken: result.getRefreshToken().getToken(),
                };

                resolve(response);
            },
            onFailure: function (err) {
                reject(err.message || JSON.stringify(err));
            },
        });
    });
}
