import "dotenv/config";
import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import { SignupRequest, SignupResponse } from "../types";

export default async function signup({
    username,
    password,
    email,
}: SignupRequest): Promise<SignupResponse> {
    // Required attributes를 추가
    const requiredAttribute: ICognitoUserAttributeData = {
        Name: "email",
        Value: email,
    };
    const attributes = [new CognitoUserAttribute(requiredAttribute)];

    return new Promise((resolve: (value: SignupResponse) => void, reject) => {
        // 가입 요청
        userPool.signUp(
            username,
            password,
            attributes,
            attributes,
            (err: Error | undefined, _result: ISignUpResult | undefined): void => {
                if (err) {
                    reject({ message: err.message || JSON.stringify(err) });
                } else resolve({ message: "success" });
            },
        );
    });
}
