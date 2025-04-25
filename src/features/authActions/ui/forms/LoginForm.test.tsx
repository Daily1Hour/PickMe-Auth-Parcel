import { beforeEach, describe, expect, it, Mock, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { renderWithChakra } from "@/__test-utils__";

import { useLoginFetch } from "../../api";
import LoginForm from "./LoginForm";

vi.mock("../../api", () => ({
    useLoginFetch: vi.fn(),
}));

describe("LoginForm 컴포넌트", () => {
    const mockSubmit = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useLoginFetch as Mock).mockReturnValue({ submit: mockSubmit });
    });

    it("폼 렌더링 확인", () => {
        const { getByRole, getByLabelText } = renderWithChakra(<LoginForm />);

        const usernameField = getByRole("textbox", { name: /아이디/i });
        const passwordField = getByLabelText(/비밀번호/i);
        expect(usernameField).toBeInTheDocument();
        expect(passwordField).toBeInTheDocument();
    });

    it("폼 제출 시 submit 함수 호출", () => {
        const { getByRole } = renderWithChakra(<LoginForm />);

        const form = getByRole("form");
        fireEvent.submit(form);

        expect(mockSubmit).toHaveBeenCalled();
    });
});
