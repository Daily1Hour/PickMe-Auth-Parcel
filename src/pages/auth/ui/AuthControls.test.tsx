import { describe, it, expect, vi, beforeEach } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import renderWithChakra from "@/__test-utils__/renderWithChakra";

import { useLoggedIn } from "@/features/userMenu";
import AuthControls from "./AuthControls";

vi.mock("@/features/authActions", () => ({
    default: () => <div data-testid="auth-controls" />,
}));
vi.mock("@/features/userMenu", () => ({
    default: () => <div data-testid="user-menu" />,
    useLoggedIn: vi.fn(),
}));

describe("AuthControls", () => {
    let loggedInValue = false;

    beforeEach(() => {
        vi.mocked(useLoggedIn).mockImplementation(() => ({
            isLoggedIn: loggedInValue,
            onLogout: () => {},
        }));
    });

    it("로그인하지 않았을 때 AuthActions를 표시", () => {
        // Arrange
        loggedInValue = false;

        // Act
        renderWithChakra(<AuthControls />);

        // Assert
        expect(screen.getByTestId("auth-controls")).toBeInTheDocument();
    });

    it("로그인했을 때 UserMenu를 표시", () => {
        loggedInValue = true;

        renderWithChakra(<AuthControls />);

        expect(screen.getByTestId("user-menu")).toBeInTheDocument();
    });
});
