import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook } from "@testing-library/react";
import { useMutation } from "@tanstack/react-query";

import createWrapper from "@/test-utils/createWrapper";

import { dto } from "@/entities/auth";
import useResetPasswordFetch from "./useResetPasswordFetch";

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useMutation: vi.fn(),
    };
});

vi.mock("@/entities/auth", () => ({
    resetPassword: vi.fn(),
}));

describe("useResetPasswordFetch", () => {
    const mockData: dto.ResetPasswordRequest = {
        username: "mockUser",
        password: "newPassword",
        confirmPassword: "newPassword",
        code: "123456",
    };
    const mutateAsyncMock = vi.fn();

    beforeEach(() => {
        (useMutation as Mock).mockReturnValue({
            mutateAsync: mutateAsyncMock,
        });
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
