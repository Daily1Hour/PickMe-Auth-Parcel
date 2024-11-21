export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    idToken: string;
    accessToken: string;
    refreshToken: string;
}

export interface SignupResponse {
    message: string;
}
