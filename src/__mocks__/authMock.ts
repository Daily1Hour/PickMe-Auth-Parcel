import { vi } from "vitest";

vi.mock("@/entities/auth", () => ({
    login: vi.fn(),
    signup: vi.fn(),
    confirm: vi.fn(),
    forgotPassword: vi.fn(),
    resetPassword: vi.fn(),
}));
