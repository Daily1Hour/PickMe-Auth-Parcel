import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    CognitoAccessToken,
    CognitoIdToken,
    CognitoRefreshToken,
} from "amazon-cognito-identity-js";

import createWrapper from "@/test-utils/createWrapper";

import { dto } from "@/entities/auth";
import useLoginFetch from "./useLoginFetch";

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useMutation: vi.fn(),
        useQueryClient: vi.fn(),
    };
});

vi.mock("@/entities/auth", () => ({
    login: vi.fn(),
}));

describe("useLoginFetch", () => {
    const refetchQueriesMock = vi.fn();
    const mockLoginData: dto.LoginRequest = { username: "testuser", password: "1234" };
    const mockTokens: dto.LoginResponse = {
        AccessToken: new CognitoAccessToken({ AccessToken: "token" }),
        RefreshToken: new CognitoRefreshToken({ RefreshToken: "token" }),
        IdToken: new CognitoIdToken({ IdToken: "token" }),
    };

    beforeEach(() => {
        (useQueryClient as Mock).mockReturnValue({
            refetchQueries: refetchQueriesMock,
        });
        (useMutation as Mock).mockImplementation(({ onSuccess }) => ({
            mutate: () => {
                onSuccess?.(mockTokens);
            },
        }));

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
