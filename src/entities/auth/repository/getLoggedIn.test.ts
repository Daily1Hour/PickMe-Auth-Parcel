import { describe, it, expect, vi } from "vitest";
import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "@/entities/auth/config/userPool";
import getLoggedIn from "./getLoggedIn";

vi.mock("@/entities/auth/config/userPool", () => ({
    default: {
        getCurrentUser: vi.fn(),
    },
}));

describe("getLoggedIn", () => {
    it("사용자가 로그인하지 않은 경우 isLoggedIn이 false이고 cognitoUser가 null", () => {
        (userPool.getCurrentUser as jest.Mock).mockReturnValue(null);

        const result = getLoggedIn();

        expect(result.isLoggedIn).toBe(false);
        expect(result.cognitoUser).toBeNull();
    });

    it("사용자가 로그인한 경우 isLoggedIn이 true이고 cognitoUser가 반환", () => {
        const mockCognitoUser = { signOut: vi.fn() } as unknown as CognitoUser;
        (userPool.getCurrentUser as jest.Mock).mockReturnValue(mockCognitoUser);

        const result = getLoggedIn();

        expect(result.isLoggedIn).toBe(true);
        expect(result.cognitoUser).toBe(mockCognitoUser);
    });

    it("onLogout이 호출되면 사용자가 로그아웃되고 페이지가 새로고침", () => {
        const mockSignOut = vi.fn();
        const mockReload = vi.fn();
        const mockCognitoUser = { signOut: mockSignOut } as unknown as CognitoUser;

        (userPool.getCurrentUser as jest.Mock).mockReturnValue(mockCognitoUser);
        Object.defineProperty(global, "window", {
            value: { location: { reload: mockReload } },
            writable: true,
        });

        const { onLogout } = getLoggedIn();
        onLogout();

        expect(mockSignOut).toHaveBeenCalled();
        expect(mockReload).toHaveBeenCalled();
    });
});
