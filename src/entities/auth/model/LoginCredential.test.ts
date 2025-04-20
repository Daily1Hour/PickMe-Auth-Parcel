import { describe, it, expect } from "vitest";

import LoginCredential from "./LoginCredential";

describe("LoginCredential", () => {
    it("username과 password가 제공되지 않으면 오류를 발생", () => {
        expect(() => new LoginCredential("", "")).toThrowError(
            "Username and password are required.",
        );
        expect(() => new LoginCredential("username", "")).toThrowError(
            "Username and password are required.",
        );
        expect(() => new LoginCredential("", "password")).toThrowError(
            "Username and password are required.",
        );
    });
});
