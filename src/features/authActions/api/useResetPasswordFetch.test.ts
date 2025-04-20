import { vi, describe, it, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";

import { mutateAsyncMock } from "@/__mocks__/reactQueryMock";
import createWrapper from "@/__test-utils__/createWrapper";

import { dto } from "@/entities/auth";
import useResetPasswordFetch from "./useResetPasswordFetch";

describe("useResetPasswordFetch", () => {
    const mockData: dto.ResetPasswordRequest = {
        username: "mockUser",
        password: "newPassword",
        confirmPassword: "newPassword",
        code: "123456",
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("성공적으로 mutateAsync가 호출되고 결과가 반환", async () => {
        // Arrange
        const mockResponse = { success: true };
        mutateAsyncMock.mockResolvedValue(mockResponse);

        const { result } = renderHook(useResetPasswordFetch, {
            wrapper: createWrapper(),
        });

        // Act
        const res = await result.current.submit(mockData);

        // Assert
        expect(mutateAsyncMock).toHaveBeenCalledWith(mockData);
        expect(res).toEqual(mockResponse);
    });

    it("mutateAsync가 실패할 경우 에러를 throw", async () => {
        const mockError = new Error("서버 실패");
        mutateAsyncMock.mockRejectedValue(mockError);

        const { result } = renderHook(useResetPasswordFetch, {
            wrapper: createWrapper(),
        });

        await expect(result.current.submit(mockData)).rejects.toThrow("서버 실패");
    });
});
