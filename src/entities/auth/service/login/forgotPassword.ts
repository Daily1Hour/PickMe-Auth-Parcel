import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { ForgotPasswordResponse, ForgotPasswordRequest } from "../../api/dto";

/**
 * 사용자의 비밀번호 재설정을 시작하는 과정을 처리합니다.
 * 이 함수는 AWS Cognito의 `forgotPassword` 메서드를 사용하여
 * 사용자의 등록된 이메일로 비밀번호 재설정 코드를 전송합니다.
 *
 * @param {ForgotPasswordRequest} params - 사용자 이름을 포함하는 요청 객체입니다.
 * @param params.username - 비밀번호 재설정을 요청하는 사용자의 사용자 이름입니다.
 * @returns {Promise<ForgotPasswordResponse>} 비밀번호 재설정 요청의 응답을 포함하는
 * Promise 객체를 반환하며, 실패 시 에러 메시지와 함께 거부됩니다.
 *
 * @throws 비밀번호 재설정 요청이 실패한 경우, 에러 메시지 또는 문자열화된
 * 에러 객체와 함께 Promise가 거부됩니다.
 */
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
