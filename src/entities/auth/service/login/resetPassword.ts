import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ResetPasswordRequest, ResetPasswordResponse } from "../../api/dto";

export default async function resetPassword({
    username,
    code,
    password,
}: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    // CognitoUser 인스턴스 생성
    const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
    });

    return new Promise((resolve, reject) => {
        // 비밀번호 재설정
        cognitoUser.confirmPassword(code, password, {
            onSuccess: function () {
                resolve({ message: "success" });
            },
            onFailure: function (err) {
                reject(err.message || JSON.stringify(err));
            },
        });
    });
}
