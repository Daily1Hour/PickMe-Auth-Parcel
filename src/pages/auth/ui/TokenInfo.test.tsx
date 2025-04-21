import { describe, it, expect, vi } from "vitest";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithChakra } from "@/__test-utils__";

import useTokens from "../hook/useTokens";
import TokenInfo from "./TokenInfo";

vi.mock("../hook/useTokens", () => ({
    default: vi.fn(),
}));

describe("TokenInfo 컴포넌트", () => {
    beforeEach(() => {
        Object.assign(navigator, {
            clipboard: {
                writeText: vi.fn(),
            },
        });

        vi.mocked(useTokens).mockReturnValue({
            idToken: "test-id-token",
            accessToken: "test-access-token",
            refreshToken: "test-refresh-token",
        });

        renderWithChakra(<TokenInfo />);
    });

    it("idToken이 클립보드에 잘 복사되는지 확인", () => {
        // Act
        const buttons = screen.getAllByRole("button");
        fireEvent.click(buttons[0]);

        // Assert
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test-id-token");
    });

    it("accessToken이 클립보드에 잘 복사되는지 확인", () => {
        const buttons = screen.getAllByRole("button");
        fireEvent.click(buttons[1]);

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test-access-token");
    });

    it("refreshToken이 클립보드에 잘 복사되는지 확인", () => {
        const buttons = screen.getAllByRole("button");
        fireEvent.click(buttons[2]);

        expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test-refresh-token");
    });
});
