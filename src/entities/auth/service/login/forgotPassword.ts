import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ForgotPasswordResponse, ForgotPasswordRequest } from "../../api/dto";

export default async function forgotPassword({
    username,
}: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    // CognitoUser 인스턴스 생성
    const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
    });

    return new Promise((resolve, reject) => {
        // 비밀번호 재설정 코드 전송 요청
        cognitoUser.forgotPassword({
            onSuccess: function ({ response }: { response: ForgotPasswordResponse }) {
                resolve(response);
            },
            onFailure: function (err) {
                reject(err.message || JSON.stringify(err));
            },
        });
    });
}
