import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ConfirmResponse, ConfirmReuest } from "../../api/dto";

export default async function confirm({ username, code }: ConfirmReuest): Promise<ConfirmResponse> {
    // CognitoUser 객체 생성
    const cognitoUser = new CognitoUser({
        Username: username,
        Pool: userPool,
    });

    return new Promise((resolve: ({ message }: ConfirmResponse) => void, reject) => {
        // 인증 코드 확인 요청
        cognitoUser.confirmRegistration(code, true, (err, result) => {
            if (err) {
                reject({ message: err.message || JSON.stringify(err) });
            } else {
                resolve({ message: result });
            }
        });
    });
}
