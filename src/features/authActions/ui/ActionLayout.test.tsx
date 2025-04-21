import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useAtom } from "jotai";

import { renderWithChakra } from "@/__test-utils__";

import ActionType from "@/shared/ActionType";
import { ActionTypeDictionary } from "@/shared/trans-ko";
import ActionLayout from "./ActionLayout";

vi.mock("jotai");

describe("ActionLayout", () => {
    const mockSetActionType = vi.fn();

    beforeEach(() => {
        mockSetActionType.mockClear();
    });

    it("현재 액션 타입을 제외한 나머지 두 개의 링크를 렌더링", () => {
        // Arrange
        (useAtom as Mock).mockReturnValue([ActionType.Login, mockSetActionType]);

        // Act
        renderWithChakra(
            <ActionLayout>
                <div>children</div>
            </ActionLayout>,
        );

        // Assert
        expect(screen.getByText("children")).toBeInTheDocument();
        expect(screen.getByText(ActionTypeDictionary[ActionType.Signup])).toBeInTheDocument();
        expect(
            screen.getByText(ActionTypeDictionary[ActionType.ForgotPassword]),
        ).toBeInTheDocument();
        expect(screen.queryByText(ActionTypeDictionary[ActionType.Login])).not.toBeInTheDocument();
    });

    it("링크 클릭 시 setActionType이 호출", () => {
        (useAtom as Mock).mockReturnValue([ActionType.Signup, mockSetActionType]);

        renderWithChakra(<ActionLayout>내용</ActionLayout>);

        fireEvent.click(screen.getByText(ActionTypeDictionary[ActionType.Login]));
        expect(mockSetActionType).toHaveBeenCalledWith(ActionType.Login);

        fireEvent.click(screen.getByText(ActionTypeDictionary[ActionType.ForgotPassword]));
        expect(mockSetActionType).toHaveBeenCalledWith(ActionType.ForgotPassword);
    });
});
