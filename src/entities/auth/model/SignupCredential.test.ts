import { describe, it, expect } from "vitest";

import SignupCredential from "./SignupCredential";

describe("SignupCredential", () => {
    it("모든 필드가 제공되는지 확인", () => {
        // Arrange
        const username = "user";
        const password = "password123";
        const confirmPassword = "password123";

        // Act & Assert
        expect(() => new SignupCredential(username, password, confirmPassword, "")).toThrowError(
            "Username, password, confirmPassword, and email are required.",
        );
    });

    it("password와 confirmPassword가 동일한지 확인", () => {
        // Arrange
        const username = "user";
        const password = "password123";
        const confirmPassword = "differentPassword";
        const email = "user@example.com";

        // Act & Assert
        expect(() => new SignupCredential(username, password, confirmPassword, email)).toThrowError(
            "Password and confirm password do not match.",
        );
    });
});
