import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMutation } from "@tanstack/react-query";

import createWrapper from "@/test-utils/createWrapper";

import { dto } from "@/entities/auth";
import useSignupFetch from "./useSignupFetch";

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useMutation: vi.fn(),
    };
});

vi.mock("@/entities/auth", () => ({
    signup: vi.fn(),
}));

describe("useSignupFetch", () => {
    const mockRequest: dto.SignupRequest = {
        username: "testuser",
        password: "1234",
        confirmPassword: "1234",
        email: "test@email.com",
    };
    const mockResponse = "success";

    const mutateMock = vi.fn();

    beforeEach(() => {
        (useMutation as Mock).mockImplementation(({ onSuccess }) => ({
            mutate: (data: dto.SignupRequest) => {
                onSuccess?.(mockResponse); // simulate success
                mutateMock(data);
            },
        }));

        vi.clearAllMocks();
    });

    it("submit 호출 시 mutate가 실행되고 response가 설정돼야 함", async () => {
        const { result } = renderHook(() => useSignupFetch(), {
            wrapper: createWrapper(),
        });

        await act(async () => {
            result.current.submit(mockRequest);
        });

        expect(mutateMock).toHaveBeenCalledWith(mockRequest);
        expect(result.current.response).toEqual(mockResponse);
    });

    it("응답이 falsy한 경우 에러를 throw해야 함", async () => {
        (useMutation as Mock).mockImplementation(({ onSuccess }) => ({
            mutate: () => {
                expect(() => onSuccess?.(null as unknown as dto.SignupResponse)).toThrowError(
                    "회원가입에 실패했습니다.",
                );
            },
        }));

        renderHook(() => useSignupFetch(), {
            wrapper: createWrapper(),
        });
    });
});
