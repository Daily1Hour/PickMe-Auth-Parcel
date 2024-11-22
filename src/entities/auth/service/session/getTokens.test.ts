import { describe, it, expect, vi, beforeEach, afterEach, Mock } from "vitest";

import { CognitoUserSession } from "amazon-cognito-identity-js";

import getTokens from "./getTokens";
import getLoggedIn from "../../repository/getLoggedIn";

vi.mock("@/entities/auth/repository/getLoggedIn");

describe("getTokens", () => {
    const mockGetSession = vi.fn();
    const mockCognitoUser = { getSession: mockGetSession };
    const mockGetLoggedIn = getLoggedIn as Mock;

    beforeEach(() => {
        mockGetLoggedIn.mockReturnValue({ cognitoUser: mockCognitoUser });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("세션 가능시 토큰 반환", async () => {
        const mockSession = {
            getIdToken: () => ({ getJwtToken: () => "mockIdToken" }),
            getAccessToken: () => ({ getJwtToken: () => "mockAccessToken" }),
            getRefreshToken: () => ({ getToken: () => "mockRefreshToken" }),
        } as CognitoUserSession;

        mockGetSession.mockImplementation(
            (callback: (err: Error | null, session: CognitoUserSession | null) => void) => {
                callback(null, mockSession);
            },
        );

        const tokens = await getTokens();

        expect(tokens).toEqual({
            idToken: "mockIdToken",
            accessToken: "mockAccessToken",
            refreshToken: "mockRefreshToken",
        });
    });

    it("세션 불가시 에러 발생", async () => {
        mockGetSession.mockImplementation(
            (callback: (err: Error | null, session: CognitoUserSession | null) => void) => {
                callback(new Error("Session error"), null);
            },
        );

        await expect(getTokens()).rejects.toThrow("Error retrieving session: Error: Session error");
    });

    it("세션이 없을시 에러 발생", async () => {
        mockGetSession.mockImplementation(
            (callback: (err: Error | null, session: CognitoUserSession | null) => void) => {
                callback(null, null);
            },
        );

        await expect(getTokens()).rejects.toThrow("No session available");
    });
});
