import { afterEach, describe, expect, it, vi } from "vitest";
import { CognitoUser } from "amazon-cognito-identity-js";

import { LoginRequest, LoginResponse } from "../../api/dto";
import login from "./login";

describe("login", () => {
    const idToken = "idToken";
    const accessToken = "accessToken";
    const refreshToken = "refreshToken";

    // getClientId Mocking
    vi.mock("../../config/userPool", () => ({
        default: { getClientId: () => "mock-client-id" },
    }));

    // authenticateUser Mocking
    const mockAuth = vi
        .spyOn(CognitoUser.prototype, "authenticateUser")
        .mockImplementation((_details, callbacks) => {
            callbacks.onSuccess({
                getIdToken: vi.fn().mockReturnValue(idToken),
                getAccessToken: vi.fn().mockReturnValue(accessToken),
                getRefreshToken: vi.fn().mockReturnValue(refreshToken),
                isValid: vi.fn(),
            });
        });

    afterEach(() => {
        mockAuth.mockRestore();
        vi.clearAllMocks();
    });

    it("로그인 성공 시 토큰 반환", async () => {
        // Arrange
        const username = "testuser";
        const password = "testpassword";
        const loginRequest: LoginRequest = { username, password };

        // Act
        const response: LoginResponse = await login(loginRequest);

        // Assert
        expect(response).toEqual({
            IdToken: idToken,
            AccessToken: accessToken,
            RefreshToken: refreshToken,
        });
    });
});
