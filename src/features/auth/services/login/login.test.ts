import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails,
    CognitoUserSession,
} from "amazon-cognito-identity-js";

import { login, Parameters, Response } from "./login";

jest.mock("amazon-cognito-identity-js");

describe("login 함수 테스트", () => {
    beforeEach(() => {
        (CognitoUserPool as jest.Mock).mockClear();
        (CognitoUser as jest.Mock).mockClear();
        (AuthenticationDetails as jest.Mock).mockClear();

        const mockCognitoUserSession = {
            getIdToken: jest.fn().mockReturnValue({ getJwtToken: () => "testIdToken" }),
            getAccessToken: jest.fn().mockReturnValue({ getJwtToken: () => "testAccessToken" }),
            getRefreshToken: jest.fn().mockReturnValue({ getToken: () => "testRefreshToken" }),
        } as unknown as CognitoUserSession;

        (CognitoUser.prototype.authenticateUser as jest.Mock).mockImplementation(
            (details, callbacks) => {
                callbacks.onSuccess(mockCognitoUserSession);
            },
        );
    });

    it("로그인 성공", async () => {
        // Arrange
        const params: Parameters = {
            username: "testuser",
            password: "testpassword",
        };

        // Act
        const response: Response = await login(params);

        // Assert
        expect(response).toEqual({
            idToken: "testIdToken",
            accessToken: "testAccessToken",
            refreshToken: "testRefreshToken",
        });
    });
});
