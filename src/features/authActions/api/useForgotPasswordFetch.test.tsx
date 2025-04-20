import { vi, describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { mockUseMutation } from "@/__mocks__/reactQueryMock";
import createWrapper from "@/test-utils/createWrapper";

import { dto } from "@/entities/auth";
import useForgotPasswordFetch from "./useForgotPasswordFetch";

describe("useForgotPasswordFetch", () => {
    const mockRequest: dto.ForgotPasswordRequest = { username: "testuser" };
    const mockResponse = "success";
    const mutateMock = vi.fn();

    beforeEach(() => {
        mockUseMutation.mockImplementation(({ onSuccess }) => ({
            mutate: (data: dto.ForgotPasswordRequest) => {
                onSuccess?.(mockResponse);
                mutateMock(data);
            },
        }));

        vi.clearAllMocks();
    });

    it("submit 호출 시 username과 response가 설정", async () => {
        // Arrange
        const { result } = renderHook(useForgotPasswordFetch, {
            wrapper: createWrapper(),
        });

        // Act
        await act(async () => {
            result.current.submit(mockRequest);
        });

        // Assert
        expect(mutateMock).toHaveBeenCalledWith(mockRequest);
        expect(result.current.username).toBe("testuser");
        expect(result.current.response).toEqual(mockResponse);
    });
});
