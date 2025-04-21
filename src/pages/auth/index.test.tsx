import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithChakra from "@/__test-utils__/renderWithChakra";

import { useLoggedIn } from "@/features/userMenu";
import AuthPage from "./index";

vi.mock("@/features/userMenu", () => ({
    useLoggedIn: vi.fn(),
}));

vi.mock("./ui", () => ({
    AuthControls: vi.fn(() => <div data-testid="auth-controls" />),
    TokenInfo: vi.fn(() => <div data-testid="token-info" />),
}));

describe("AuthPage 컴포넌트", () => {
    let loggedInValue = false;

    beforeEach(() => {
        vi.mocked(useLoggedIn).mockImplementation(() => ({
            isLoggedIn: loggedInValue,
            onLogout: () => {},
        }));
    });

    it("로그인 상태가 아닐 때 AuthControls만 렌더링되는지 확인", () => {
        // Arrange
        loggedInValue = false;

        // Act
        renderWithChakra(<AuthPage />);

        // Assert
        expect(screen.getByTestId("auth-controls")).toBeInTheDocument();
        expect(screen.queryByTestId("token-info")).not.toBeInTheDocument();
    });

    it("로그인 상태일 때 AuthControls와 TokenInfo가 렌더링되는지 확인", () => {
        loggedInValue = true;

        renderWithChakra(<AuthPage />);

        expect(screen.getByTestId("auth-controls")).toBeInTheDocument();
        expect(screen.getByTestId("token-info")).toBeInTheDocument();
    });
});
