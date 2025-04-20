import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";

import { dto } from "@/entities/auth";
import useConfirmFetch from "./useConfirmFetch";

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useMutation: vi.fn(),
    };
});

vi.mock("@/entities/auth", () => ({
    confirm: vi.fn(),
}));

const createWrapper = () => {
    const client = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

describe("useConfirmFetch", () => {
    const mockData: dto.ConfirmRequest = { username: "mockUser", code: "123456" };
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

        const { result } = renderHook(useConfirmFetch, {
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

        const { result } = renderHook(useConfirmFetch, {
            wrapper: createWrapper(),
        });

        await expect(result.current.submit(mockData)).rejects.toThrow("서버 실패");
    });
});
