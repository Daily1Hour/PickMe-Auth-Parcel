import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMutation } from "@tanstack/react-query";

import createWrapper from "@/test-utils/createWrapper";

import { dto } from "@/entities/auth";
import useForgotPasswordFetch from "./useForgotPasswordFetch";

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useMutation: vi.fn(),
    };
});

vi.mock("@/entities/auth", () => ({
    forgotPassword: vi.fn(),
}));

describe("useForgotPasswordFetch", () => {
    const mockRequest: dto.ForgotPasswordRequest = { username: "testuser" };
    const mockResponse: dto.ForgotPasswordResponse = {
        Destination: "test@email.com",
        DeliveryMedium: "EMAIL",
        AttributeName: "testAttribute",
    };
    const mutateMock = vi.fn();

    beforeEach(() => {
        (useMutation as Mock).mockImplementation(({ onSuccess }) => ({
            mutate: (data: dto.ForgotPasswordRequest) => {
                onSuccess?.(mockResponse);
                mutateMock(data);
            },
        }));

        vi.clearAllMocks();
    });

    it("submit 호출 시 username과 response가 설정", async () => {
        const { result } = renderHook(useForgotPasswordFetch, {
            wrapper: createWrapper(),
        });

        await act(async () => {
            result.current.submit(mockRequest);
        });

        expect(mutateMock).toHaveBeenCalledWith(mockRequest);
        expect(result.current.username).toBe("testuser");
        expect(result.current.response).toEqual(mockResponse);
    });
});
