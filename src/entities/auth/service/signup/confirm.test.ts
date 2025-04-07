import { describe, it, expect, vi, Mock } from "vitest";
import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "../../config/userPool";
import confirm from "./confirm";

vi.mock("amazon-cognito-identity-js", () => {
    return {
        CognitoUser: vi.fn().mockImplementation(() => ({
            confirmRegistration: vi.fn(),
        })),
    };
});

vi.mock("../../config/userPool", () => ({
    default: {},
}));

describe("confirm", () => {
    const mockUsername = "testuser";
    const mockCode = "123456";

    it("확인이 성공적으로 완료되면 성공 메시지", async () => {
        const mockConfirmRegistration = vi.fn((_code, _forceAliasCreation, callback) => {
            callback(null, "SUCCESS");
        });
        (CognitoUser as Mock).mockImplementation(() => ({
            confirmRegistration: mockConfirmRegistration,
        }));

        const result = await confirm({ username: mockUsername, code: mockCode });

        expect(result).toEqual({ message: "SUCCESS" });
        expect(CognitoUser).toHaveBeenCalledWith({
            Username: mockUsername,
            Pool: userPool,
        });
        expect(mockConfirmRegistration).toHaveBeenCalledWith(mockCode, true, expect.any(Function));
    });
});
