import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { SignupRequest } from "../../api/dto";

/**
 * Cognito 사용자 풀과 상호작용하여 사용자의 회원가입 프로세스를 처리합니다.
 *
 * @param {SignupRequest} params - 사용자 세부 정보를 포함하는 회원가입 요청.
 * @param {string} params.username - 사용자의 사용자 이름.
 * @param {string} params.password - 사용자의 비밀번호.
 * @param {string} params.email - 사용자의 이메일 주소.
 * @returns {Promise<ISignUpResult | undefined>} 회원가입 결과 또는 undefined를 반환하는 Promise.
 *
 * @throws {Error} 회원가입 프로세스 중 오류가 발생하면, 해당 오류 메시지와 함께 Promise가 거부됩니다.
 */
export default async function signup({
    username,
    password,
    email,
}: SignupRequest): Promise<ISignUpResult | undefined> {
    // Required attributes를 추가
    const requiredAttribute: ICognitoUserAttributeData = {
        Name: "email",
        Value: email,
    };
    const attributes = [new CognitoUserAttribute(requiredAttribute)];

    return new Promise((resolve: (value: ISignUpResult | undefined) => void, reject) => {
        // 가입 요청
        userPool.signUp(
            username,
            password,
            attributes,
            attributes,
            (err: Error | undefined, result: ISignUpResult | undefined): void => {
                if (err) {
                    reject({ message: err.message || JSON.stringify(err) });
                } else {
                    resolve(result);
                }
            },
        );
    });
}
