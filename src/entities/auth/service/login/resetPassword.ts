import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ResetPasswordRequest, ResetPasswordResponse } from "../../api/dto";

/**
 * Cognito 사용자 풀에서 사용자의 비밀번호를 재설정합니다.
 *
 * @param {ResetPasswordRequest} params - 비밀번호 재설정을 위한 매개변수.
 * @param {string} params.username - 비밀번호를 재설정할 사용자의 사용자 이름.
 * @param {string} params.code - 비밀번호 재설정을 위해 사용자에게 전송된 확인 코드.
 * @param {string} params.password - 사용자에게 설정할 새 비밀번호.
 * @returns {Promise<ResetPasswordResponse>} 성공 메시지로 resolve되거나
 * 오류 메시지로 reject되는 Promise.
 *
 * @throws {string} 비밀번호 재설정에 실패할 경우 오류 메시지를 throw합니다.
 */
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
