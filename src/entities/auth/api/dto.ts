import { ISignUpResult } from "amazon-cognito-identity-js";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}

export interface SignupRequest {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
}

export interface ConfirmReuest {
    username: string;
    code: string;
}

export type SignupResponse = ISignUpResult | undefined;

export interface ForgotPasswordRequest {
    username: string;
}

export interface ForgotPasswordResponse {
    AttributeName: string;
    DeliveryMedium: string;
    Destination: string;
}

export interface ResetPasswordRequest {
    username: string;
    code: string;
    password: string;
    confirmPassword: string;
}

export interface ResetPasswordResponse {
    message: string;
}
