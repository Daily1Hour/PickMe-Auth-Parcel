import { afterEach, describe, expect, it, vi } from "vitest";
import { CognitoUser } from "amazon-cognito-identity-js";

import forgotPassword from "./forgotPassword";

describe("forgotPassword", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("성공 시 응답", async () => {
        const mockResponse = { message: "Success" };

        vi.spyOn(CognitoUser.prototype, "forgotPassword").mockImplementation(function (callbacks) {
            callbacks.onSuccess({ response: mockResponse });
        });

        const result = forgotPassword({ username: "testuser" });
        await expect(result).resolves.toBe(mockResponse);
    });

    it("실패 시 오류", async () => {
        const errorMessage = "User not found";

        vi.spyOn(CognitoUser.prototype, "forgotPassword").mockImplementation(function (callbacks) {
            callbacks.onFailure(new Error(errorMessage));
        });

        const result = forgotPassword({ username: "invaliduser" });
        await expect(result).rejects.toBe(errorMessage);
    });
});
