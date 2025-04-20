import { describe, it, expect } from "vitest";

import ForgotPasswordSchema from "./ForgotPasswordSchema";

describe("ForgotPasswordSchema", () => {
    it("유효한 아이디가 주어졌을 때 검증 성공", async () => {
        const validData = { username: "validUser" };
        await expect(ForgotPasswordSchema.validate(validData)).resolves.toEqual(validData);
    });

    it("아이디가 비어 있을 때 검증 실패", async () => {
        const invalidData = { username: undefined };
        await expect(ForgotPasswordSchema.validate(invalidData)).rejects.toThrow(
            "아이디는 필수입니다.",
        );
    });

    it("아이디가 빈 문자열일 때 검증 실패", async () => {
        const invalidData = { username: "" };
        await expect(ForgotPasswordSchema.validate(invalidData)).rejects.toThrow(
            "아이디는 필수입니다.",
        );
    });
});
