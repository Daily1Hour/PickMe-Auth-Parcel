import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ConfirmResponse, ConfirmRequest } from "../../api/dto";

/**
 * 사용자의 등록을 확인 코드로 확인합니다.
 *
 * @param {ConfirmRequest} params - 사용자 이름과 확인 코드를 포함하는 요청 객체.
 * @param params.username - 확인할 사용자의 사용자 이름.
 * @param params.code - 사용자에게 전송된 확인 코드.
 * @returns {Promise<ConfirmResponse>} 확인 메시지를 포함하는 확인 응답과 함께 Promise를 반환합니다.
 *
 * @throws {Error} 확인 프로세스가 실패하면, Promise는 오류 메시지와 함께 거부됩니다.
 */
export default async function confirm({ username, code }: ConfirmRequest): Promise<ConfirmResponse> {
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
