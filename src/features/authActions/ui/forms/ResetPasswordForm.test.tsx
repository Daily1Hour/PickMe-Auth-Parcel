import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";

import { renderWithChakra } from "@/__test-utils__";

import { toaster } from "@/third-party/chakra-ui";
import ActionType from "@/shared/ActionType";
import { useResetPasswordFetch } from "../../api";
import ResetPasswordForm from "./ResetPasswordForm";

vi.mock("../../api", () => ({
    useResetPasswordFetch: vi.fn(),
}));

describe("ResetPasswordForm 컴포넌트", () => {
    const mockSetType = vi.fn();
    const mockSubmit = vi.fn();

    beforeEach(() => {
        vi.mocked(useResetPasswordFetch).mockReturnValue({ submit: mockSubmit });
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("폼 렌더링 확인", () => {
        const { getByTestId } = renderWithChakra(<ResetPasswordForm username="testUser" />);

        const usernameField = getByTestId("username");
        const codeField = getByTestId("code");
        const passwordField = getByTestId("password");

        expect(usernameField).toHaveAttribute("type", "text");
        expect(codeField).toHaveAttribute("type", "text");
        expect(passwordField).toHaveAttribute("type", "password");
    });

    it("폼 제출 시 성공 메시지가 표시되고 액션 타입이 변경되는지 확인", async () => {
        mockSubmit.mockResolvedValueOnce({ message: "success" });

        const { getByRole,getByLabelText } = renderWithChakra(<ResetPasswordForm username="testUser" />);
        fireEvent.change(getByLabelText(/인증 코드/), { target: { value: "123456" } });
        fireEvent.change(getByLabelText(/비밀번호\*/), { target: { value: "newPassword" } });
        fireEvent.change(getByLabelText(/비밀번호 확인/), { target: { value: "newPassword" } });
        fireEvent.submit(getByRole("form"));

        expect(mockSubmit).toHaveBeenCalledWith({
            username: "testUser",
            code: "",
            password: "",
            confirmPassword: "",
        });
        await vi.waitFor(() => {
            expect(toaster.create).toHaveBeenCalledWith({
                title: "비밀번호 리셋에 성공했습니다.",
                type: "success",
            });
            expect(mockSetType).toHaveBeenCalledWith(ActionType.Login);
        });
    });

    // it("폼 제출 시 실패 메시지가 표시되지 않는지 확인", async () => {
    //     mockSubmit.mockResolvedValueOnce({ message: "error" });

    //     render(<ResetPasswordForm username="testUser" />);

    //     fireEvent.submit(screen.getByRole("form"));

    //     expect(mockSubmit).toHaveBeenCalled();
    //     await vi.waitFor(() => {
    //         expect(toaster.create).not.toHaveBeenCalledWith({
    //             title: "비밀번호 리셋에 성공했습니다.",
    //             type: "success",
    //         });
    //         expect(mockSetType).not.toHaveBeenCalledWith(ActionType.Login);
    //     });
    // });
});
