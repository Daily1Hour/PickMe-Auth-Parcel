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

export interface SignupResponse {
    message: string;
}

export interface ForgotPasswordRequest {
    username: string;
}

export interface ForgotPasswordResponse {
    AttributeName: string;
    DeliveryMedium: string;
    Destination: string;
}
