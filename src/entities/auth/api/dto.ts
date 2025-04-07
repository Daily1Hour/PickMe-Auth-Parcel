import {
    CodeDeliveryDetails,
    IAuthenticationDetailsData,
    ICognitoUserSessionData,
    ISignUpResult,
} from "amazon-cognito-identity-js";

export type LoginRequest = {
    [K in keyof IAuthenticationDetailsData as Lowercase<K & string>]: IAuthenticationDetailsData[K];
};
export type LoginResponse = ICognitoUserSessionData;

export type SignupRequest = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
};
export type SignupResponse = ISignUpResult | undefined;

export type ConfirmReuest = {
    username: string;
    code: string;
};
export type ConfirmResponse = {
    message: string;
};

export type ForgotPasswordRequest = {
    username: string;
};
export type ForgotPasswordResponse = CodeDeliveryDetails;

export type ResetPasswordRequest = {
    username: string;
    password: string;
    confirmPassword: string;
    code: string;
};
export type ResetPasswordResponse = {
    message: string;
};

export type UserTokens = {
    idToken: string;
    accessToken: string;
    refreshToken: string;
};
