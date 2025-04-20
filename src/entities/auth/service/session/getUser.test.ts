import { describe, it, expect, vi } from "vitest";
import { jwtDecode } from "jwt-decode";

import getUser from "./getUser";
import getTokens from "./getTokens";

vi.mock("./getTokens");
vi.mock("jwt-decode");

describe("getUser", () => {
    it("JWT 토큰을 디코딩하여 사용자 정보를 반환", async () => {
        const mockIdToken = "mockIdToken";
        const mockUser = {
            sub: "12345",
            "cognito:username": "testuser",
        };

        vi.mocked(getTokens).mockResolvedValue({
            idToken: mockIdToken,
            accessToken: "",
            refreshToken: "",
        });
        vi.mocked(jwtDecode).mockReturnValue(mockUser);

        const result = await getUser();

        expect(result).toEqual({
            id: "12345",
            username: "testuser",
        });
        expect(getTokens).toHaveBeenCalled();
        expect(jwtDecode).toHaveBeenCalledWith(mockIdToken);
    });
});
