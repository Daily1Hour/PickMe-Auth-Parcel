import { vi, describe, it, expect, beforeEach, Mock } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useMutation } from "@tanstack/react-query";

import { mockUseMutation } from "@/__mocks__";
import { createWrapper } from "@/__test-utils__";

import { dto } from "@/entities/auth";
import useSignupFetch from "./useSignupFetch";

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
        mockUseMutation.mockImplementation(({ onSuccess }) => ({
            mutate: (data: dto.SignupRequest) => {
                onSuccess?.(mockResponse);
                mutateMock(data);
            },
        }));

        vi.clearAllMocks();
    });

    it("submit 호출 시 mutate가 실행", async () => {
        const { result } = renderHook(useSignupFetch, {
            wrapper: createWrapper(),
        });

        await act(async () => {
            result.current.submit(mockRequest);
        });

        expect(mutateMock).toHaveBeenCalledWith(mockRequest);
        expect(result.current.response).toEqual(mockResponse);
    });

    it("응답이 falsy한 경우 에러를 throw", async () => {
        (useMutation as Mock).mockImplementation(({ onSuccess }) => ({
            mutate: () => {
                expect(() => onSuccess?.(null)).toThrowError("회원가입에 실패했습니다.");
            },
        }));

        renderHook(useSignupFetch, {
            wrapper: createWrapper(),
        });
    });
});
