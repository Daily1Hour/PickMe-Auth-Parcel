import { describe, it, expect } from "vitest";

import ConfirmSchema from "./ConfirmSchema";

describe("ConfirmSchema", () => {
    it("유효한 인증 코드가 주어졌을 때 검증 성공", async () => {
        const validData = { code: "123456" };
        await expect(ConfirmSchema.validate(validData)).resolves.toEqual(validData);
    });

    it("인증 코드가 비어 있을 때 검증 실패", async () => {
        const invalidData = { code: undefined };
        await expect(ConfirmSchema.validate(invalidData)).rejects.toThrow("필수 항목입니다.");
    });

    it("인증 코드가 6자보다 짧을 때 검증 실패", async () => {
        const invalidData = { code: "123" };
        await expect(ConfirmSchema.validate(invalidData)).rejects.toThrow("인증 코드는 6자입니다.");
    });

    it("인증 코드가 6자보다 길 때 검증 실패", async () => {
        const invalidData = { code: "1234567" };
        await expect(ConfirmSchema.validate(invalidData)).rejects.toThrow("인증 코드는 6자입니다.");
    });
});
