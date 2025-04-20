import { vi, describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";

import { mockUseQuery } from "@/__mocks__/reactQueryMock";
import createWrapper from "@/__test-utils__/createWrapper";

import useLoggedIn from "./useLoggedIn";

describe("useLoggedIn Hook", () => {
    it("로그인 상태가 true일 때 데이터를 반환", async () => {
        // Arrange
        const mockData = {
            isLoggedIn: true,
            onLogout: vi.fn(),
        };

        mockUseQuery.mockReturnValue({ data: mockData });

        // Act
        const { result } = renderHook(useLoggedIn, {
            wrapper: createWrapper(),
        });

        // Assert
        expect(result.current.isLoggedIn).toBe(true);
        expect(result.current.onLogout).toBe(mockData.onLogout);
    });

    it("로그인 상태가 false일 때 데이터를 반환", () => {
        mockUseQuery.mockReturnValue({ data: undefined });

        const { result } = renderHook(useLoggedIn, {
            wrapper: createWrapper(),
        });

        expect(result.current.isLoggedIn).toBe(false);
        expect(result.current.onLogout).toBeInstanceOf(Function);
    });
});
