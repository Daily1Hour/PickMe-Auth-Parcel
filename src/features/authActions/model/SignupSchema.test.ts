import { describe, it, expect } from "vitest";

import SignupSchema from "./SignupSchema";

describe("SignupSchema", () => {
    it("유효한 데이터가 주어졌을 때 검증 성공", async () => {
        const validData = {
            username: "validUser",
            email: "user@example.com",
            password: "password123",
            confirmPassword: "password123",
        };
        await expect(SignupSchema.validate(validData)).resolves.toEqual(validData);
    });

    it("아이디가 비어 있을 때 검증 실패", async () => {
        const invalidData = {
            username: undefined,
            email: "user@example.com",
            password: "password123",
            confirmPassword: "password123",
        };
        await expect(SignupSchema.validate(invalidData)).rejects.toThrow("아이디는 필수입니다.");
    });

    it("유효하지 않은 이메일 형식일 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            email: "invalid-email",
            password: "password123",
            confirmPassword: "password123",
        };
        await expect(SignupSchema.validate(invalidData)).rejects.toThrow(
            "유효한 이메일을 입력하세요.",
        );
    });

    it("비밀번호가 8자 미만일 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            email: "user@example.com",
            password: "short",
            confirmPassword: "short",
        };
        await expect(SignupSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호는 최소 8자입니다.",
        );
    });

    it("비밀번호 확인이 비밀번호와 일치하지 않을 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            email: "user@example.com",
            password: "password123",
            confirmPassword: "differentPassword",
        };
        await expect(SignupSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호가 일치하지 않습니다.",
        );
    });

    it("비밀번호 확인이 비어 있을 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            email: "user@example.com",
            password: "password123",
            confirmPassword: undefined,
        };
        await expect(SignupSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호 확인은 필수입니다.",
        );
    });
});
