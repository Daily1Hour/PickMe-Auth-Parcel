import "dotenv/config";
import {
    ICognitoUserAttributeData,
    ISignUpResult,
    CognitoUserAttribute,
} from "amazon-cognito-identity-js";

import SignupCredential from "@/entities/SignupCredential";
import userPool from "../userPool";
import SignupResponse from "../../model/SignupResponse";

export async function signup({ username, password, email }: SignupCredential): Promise<SignupResponse> {
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
