import { describe, it, expect } from "vitest";

import LoginSchema from "./LoginSchema";

describe("LoginSchema", () => {
    it("유효한 아이디와 비밀번호가 주어졌을 때 검증 성공", async () => {
        const validData = { username: "validUser", password: "validPass123" };
        await expect(LoginSchema.validate(validData)).resolves.toEqual(validData);
    });

    it("아이디가 비어 있을 때 검증 실패", async () => {
        const invalidData = { username: undefined, password: "validPass123" };
        await expect(LoginSchema.validate(invalidData)).rejects.toThrow("아이디는 필수입니다.");
    });

    it("비밀번호가 비어 있을 때 검증 실패", async () => {
        const invalidData = { username: "validUser", password: undefined };
        await expect(LoginSchema.validate(invalidData)).rejects.toThrow("비밀번호는 필수입니다.");
    });

    it("비밀번호가 8자 미만일 때 검증 실패", async () => {
        const invalidData = { username: "validUser", password: "short" };
        await expect(LoginSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호는 최소 8자입니다.",
        );
    });
});
