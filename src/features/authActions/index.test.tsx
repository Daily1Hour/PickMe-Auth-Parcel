import { vi, describe, it, expect, Mock } from "vitest";
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { useAtomValue } from "jotai";

import renderWithChakra from "@/__test-utils__/renderWithChakra";

import ActionType from "@/shared/ActionType";
import AuthActions from ".";

vi.mock("jotai", async (importOriginal) => {
    const actual = await importOriginal<typeof import("jotai")>();
    return {
        ...actual,
        useAtomValue: vi.fn(),
    };
});

vi.mock("@/features/authActions/ui", () => ({
    PopoverLayout: ({ children }: { children: ReactElement }) => <div>{children}</div>,
    ActionLayout: ({ children }: { children: ReactElement }) => <div>{children}</div>,
    LoginForm: () => <div data-testid="login-form" />,
    ForgotPasswordForm: () => <div data-testid="forgot-password-form" />,
    SignupForm: () => <div data-testid="signup-form" />,
    SocialLoginForm: () => <div data-testid="social-login-form" />,
}));

describe("AuthActions", () => {
    beforeAll(() => {
        window.matchMedia =
            window.matchMedia ||
            (() => ({
                matches: false,
                media: "",
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            }));
    });

    it("액션 타입이 Login일 때 로그인 폼과 소셜 로그인 폼을 렌더링", () => {
        (useAtomValue as Mock).mockReturnValue(ActionType.Login);

        renderWithChakra(<AuthActions />);

        expect(screen.getByTestId("login-form")).toBeInTheDocument();
        expect(screen.getByTestId("social-login-form")).toBeInTheDocument();
    });

    it("액션 타입이 Signup일 때 회원가입 폼과 소셜 로그인 폼을 렌더링", () => {
        (useAtomValue as Mock).mockReturnValue(ActionType.Signup);
        renderWithChakra(<AuthActions />);

        expect(screen.getByTestId("signup-form")).toBeInTheDocument();
        expect(screen.getByTestId("social-login-form")).toBeInTheDocument();
    });

    it("액션 타입이 ForgotPassword일 때 비밀번호 찾기 폼을 렌더링", () => {
        (useAtomValue as Mock).mockReturnValue(ActionType.ForgotPassword);
        renderWithChakra(<AuthActions />);

        expect(screen.getByTestId("forgot-password-form")).toBeInTheDocument();
    });
});
