import { describe, it, expect } from "vitest";

import { mockUseQuery } from "@/__mocks__/reactQueryMock";

import useTokens from "./useTokens";

describe("useTokens", () => {
    it("쿼리가 성공하면 토큰 데이터를 반환", () => {
        const { idToken, accessToken, refreshToken } = useTokens();

        expect(idToken).toBe("mockIdToken");
        expect(accessToken).toBe("mockAccessToken");
        expect(refreshToken).toBe("mockRefreshToken");
    });

    it("쿼리가 실패하면 토큰들은 null 값을 반환", () => {
        mockUseQuery.mockReturnValue({
            data: null,
            isSuccess: false,
        });

        const { idToken, accessToken, refreshToken } = useTokens();

        expect(idToken).toBeNull();
        expect(accessToken).toBeNull();
        expect(refreshToken).toBeNull();
    });
});
