import { vi, describe, it, expect, Mock } from "vitest";
import { renderHook } from "@testing-library/react";
import jwt from "jsonwebtoken";

import { createWrapper } from "@/__test-utils__";

import useUserInfo from "./useUserInfo";

vi.mock("jsonwebtoken", () => ({
    default: {
        decode: vi.fn(),
    },
}));

describe("useUserInfo", () => {
    it("쿼리가 성공했을 때 디코딩된 사용자 정보를 반환", () => {
        // Arrange
        const fakePayload = { sub: "12345", name: "John Doe" };
        (jwt.decode as Mock).mockReturnValue({
            payload: fakePayload,
        });

        // Act
        const { result } = renderHook(useUserInfo, {
            wrapper: createWrapper(),
        });

        // Assert
        expect(result.current).toEqual({
            ...fakePayload,
            isSuccess: true,
        });
    });
});
