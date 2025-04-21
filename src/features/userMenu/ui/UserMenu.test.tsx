import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithChakra from "@/__test-utils__/renderWithChakra";

import { useUserInfo, useLoggedIn } from "../api";
import UserMenu from "./UserMenu";

vi.mock("../api", () => ({
    useUserInfo: vi.fn(),
    useLoggedIn: vi.fn(),
}));

describe("UserMenu 컴포넌트", () => {
    const mockUserInfo = {
        "cognito:username": "테스트유저",
        email: "testuser@example.com",
        isSuccess: true,
    };
    const mockOnLogout = vi.fn();

    beforeEach(() => {
        vi.mocked(useUserInfo).mockReturnValue(mockUserInfo);
        vi.mocked(useLoggedIn).mockReturnValue({ isLoggedIn: true, onLogout: mockOnLogout });
    });

    it("사용자 이름과 이메일이 올바르게 렌더링되는지 확인", () => {
        renderWithChakra(<UserMenu />);

        const username = screen.getByText(mockUserInfo["cognito:username"]);
        const email = screen.getByText(mockUserInfo.email);

        expect(username).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    });

    it("로그아웃 버튼 클릭 시 onLogout 함수가 호출되는지 확인", () => {
        renderWithChakra(<UserMenu />);

        const logoutButton = screen.getByText("로그아웃");
        expect(logoutButton).toBeInTheDocument();

        fireEvent.click(logoutButton);
        expect(mockOnLogout).toHaveBeenCalledTimes(1);
    });
});
