import { describe, it, expect, vi, beforeEach } from "vitest";

import signup from "./signup";
import userPool from "../../config/userPool";
import { SignupRequest } from "../../api/dto";

vi.mock("../../config/userPool");

describe("signup", () => {
    const mockSignUp = userPool.signUp as jest.Mock;
    const username = "testuser";
    const password = "testpassword";
    const confirmPassword = "testpassword";
    const email = "testuser@example.com";
    const signupRequest: SignupRequest = { username, password, confirmPassword, email };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("회원가입 성공 시 확인", async () => {
        // Arrange
        mockSignUp.mockImplementation(
            (_username, _password, _attributes, _validationData, callback) => {
                callback(undefined, { message: "success" });
            },
        );

        // Act & Assert
        await expect(signup(signupRequest)).resolves.toEqual({ message: "success" });
    });

    it("회원가입 실패 시 에러", async () => {
        // Arrange
        const errorMessage = "Signup failed";
        mockSignUp.mockImplementation(
            (_username, _password, _attributes, _validationData, callback) => {
                callback(new Error(errorMessage), undefined);
            },
        );

        // Act & Assert
        await expect(signup(signupRequest)).rejects.toEqual({ message: errorMessage });
    });
});
