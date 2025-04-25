import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

import Field from "./Field";
import { renderWithFormProvider } from "@/__test-utils__";

describe("Field 컴포넌트", () => {
    it("필드가 렌더링되는지 확인", () => {
        const { getByRole } = renderWithFormProvider(<Field name="username" />);

        const input = getByRole("textbox");
        expect(input).toBeInTheDocument();
    });

    it("비밀번호 입력 필드가 렌더링되는지 확인", () => {
        const { container } = renderWithFormProvider(<Field name="password" isSecret />);

        const input = container.querySelector("input");
        expect(input).toHaveAttribute("type", "password");
    });

    it("숨겨진 필드가 렌더링되지 않는지 확인", () => {
        const { container } = renderWithFormProvider(<Field name="hiddenField" isHidden />);

        const input = container.querySelector("label");
        expect(input).not.toBeInTheDocument();
    });
});
