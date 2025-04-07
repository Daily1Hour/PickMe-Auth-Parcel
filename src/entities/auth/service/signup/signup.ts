import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { SignupRequest } from "../../api/dto";

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
