import { describe, it, expect } from "vitest";

import ResetPasswordSchema from "./ResetPasswordSchema";

describe("ResetPasswordSchema", () => {
    it("유효한 데이터가 주어졌을 때 검증 성공", async () => {
        const validData = {
            username: "validUser",
            code: "123456",
            password: "validPassword123",
            confirmPassword: "validPassword123",
        };
        await expect(ResetPasswordSchema.validate(validData)).resolves.toEqual(validData);
    });

    it("사용자 이름이 비어 있을 때 검증 실패", async () => {
        const invalidData = {
            username: "",
            code: "123456",
            password: "validPassword123",
            confirmPassword: "validPassword123",
        };
        await expect(ResetPasswordSchema.validate(invalidData)).rejects.toThrow(
            "사용자 이름은 필수입니다.",
        );
    });

    it("인증 코드가 비어 있을 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            code: "",
            password: "validPassword123",
            confirmPassword: "validPassword123",
        };
        await expect(ResetPasswordSchema.validate(invalidData)).rejects.toThrow(
            "인증 코드는 필수입니다.",
        );
    });

    it("비밀번호가 8자 미만일 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            code: "123456",
            password: "short",
            confirmPassword: "short",
        };
        await expect(ResetPasswordSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호는 최소 8자입니다.",
        );
    });

    it("비밀번호 확인이 비밀번호와 일치하지 않을 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            code: "123456",
            password: "validPassword123",
            confirmPassword: "differentPassword123",
        };
        await expect(ResetPasswordSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호가 일치하지 않습니다.",
        );
    });

    it("비밀번호 확인이 비어 있을 때 검증 실패", async () => {
        const invalidData = {
            username: "validUser",
            code: "123456",
            password: "validPassword123",
            confirmPassword: undefined,
        };
        await expect(ResetPasswordSchema.validate(invalidData)).rejects.toThrow(
            "비밀번호 확인은 필수입니다.",
        );
    });
});
