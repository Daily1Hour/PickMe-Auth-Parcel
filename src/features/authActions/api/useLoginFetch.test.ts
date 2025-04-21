import { vi, describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

import { refetchQueriesMock } from "@/__mocks__";
import { createWrapper } from "@/__test-utils__";

import { dto } from "@/entities/auth";
import useLoginFetch from "./useLoginFetch";

describe("useLoginFetch", () => {
    const mockLoginData: dto.LoginRequest = { username: "testuser", password: "1234" };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("submit을 호출하면 login 후 refetchQueries가 실행", () => {
        // Arrange
        const { result } = renderHook(useLoginFetch, {
            wrapper: createWrapper(),
        });

        // Act
        act(() => {
            result.current.submit(mockLoginData);
        });

        // Assert
        expect(refetchQueriesMock).toHaveBeenCalledWith({
            queryKey: ["isLoggedIn"],
        });
    });
});
