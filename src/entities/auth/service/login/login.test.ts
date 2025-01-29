import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";

import { CognitoUser, AuthenticationDetails, CognitoUserSession } from "amazon-cognito-identity-js";

import login from "./login";
import userPool from "../../config/userPool";
import { LoginRequest, LoginResponse } from "../../api/dto";

vi.mock("amazon-cognito-identity-js");

describe("login", () => {
    const username = "testuser";
    const password = "testpassword";
    const loginRequest: LoginRequest = { username, password };

    let authenticateUserMock: Mock;

    beforeEach(() => {
        authenticateUserMock = vi.fn();
        (CognitoUser as Mock).mockImplementation(() => ({
            authenticateUser: authenticateUserMock,
        }));
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("로그인 성공 시 토큰 반환", async () => {
        const idToken = "idToken";
        const accessToken = "accessToken";
        const refreshToken = "refreshToken";

        // Arrange
        authenticateUserMock.mockImplementation((_details, callbacks) => {
            callbacks.onSuccess({
                getIdToken: () => ({ getJwtToken: () => idToken }),
                getAccessToken: () => ({ getJwtToken: () => accessToken }),
                getRefreshToken: () => ({ getToken: () => refreshToken }),
            } as CognitoUserSession);
        });

        // Act
        const response: LoginResponse = await login(loginRequest);

        // Assert
        expect(response).toEqual({ idToken, accessToken, refreshToken });
        expect(CognitoUser).toHaveBeenCalledWith({ Username: username, Pool: userPool });
        expect(AuthenticationDetails).toHaveBeenCalledWith({
            Username: username,
            Password: password,
        });
    });

    it("로그인 실패 시 에러 반환", async () => {
        const errorMessage = "Authentication failed";

        // Arrange
        authenticateUserMock.mockImplementation((_details, callbacks) => {
            callbacks.onFailure(new Error(errorMessage));
        });

        // Act & Assert
        await expect(login(loginRequest)).rejects.toThrow(errorMessage);
    });
});
