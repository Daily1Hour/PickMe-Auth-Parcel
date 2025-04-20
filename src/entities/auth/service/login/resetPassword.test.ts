import { describe, it, expect, vi, Mock } from "vitest";
import { CognitoUser } from "amazon-cognito-identity-js";

import resetPassword from "./resetPassword";
import userPool from "../../config/userPool";
import { ResetPasswordRequest } from "../../api/dto";

vi.mock("amazon-cognito-identity-js", () => ({
    CognitoUser: vi.fn(),
}));

vi.mock("../../config/userPool", () => ({
    default: {},
}));

describe("resetPassword", () => {
    it("비밀번호 재설정이 성공하면 성공 메시지를 반환", async () => {
        const confirmPasswordMock = vi.fn((_code, _password, callbacks) => {
            callbacks.onSuccess();
        });

        (CognitoUser as Mock).mockImplementation(() => ({
            confirmPassword: confirmPasswordMock,
        }));

        const params: ResetPasswordRequest = {
            username: "testuser",
            code: "123456",
            password: "newpassword",
            confirmPassword: "newpassword",
        };

        const result = await resetPassword(params);

        expect(result).toEqual({ message: "success" });
        expect(CognitoUser).toHaveBeenCalledWith({
            Username: params.username,
            Pool: userPool,
        });
        expect(confirmPasswordMock).toHaveBeenCalledWith(
            params.code,
            params.password,
            expect.any(Object),
        );
    });

    it("비밀번호 재설정이 실패하면 오류 메시지를 반환", async () => {
        const errorMessage = "Invalid confirmation code.";
        const confirmPasswordMock = vi.fn((_code, _password, callbacks) => {
            callbacks.onFailure({ message: errorMessage });
        });

        (CognitoUser as Mock).mockImplementation(() => ({
            confirmPassword: confirmPasswordMock,
        }));

        const params: ResetPasswordRequest = {
            username: "testuser",
            code: "123456",
            password: "newpassword",
            confirmPassword: "newpassword",
        };

        await expect(resetPassword(params)).rejects.toThrow(errorMessage);
        expect(CognitoUser).toHaveBeenCalledWith({
            Username: params.username,
            Pool: userPool,
        });
        expect(confirmPasswordMock).toHaveBeenCalledWith(
            params.code,
            params.password,
            expect.any(Object),
        );
    });
});
