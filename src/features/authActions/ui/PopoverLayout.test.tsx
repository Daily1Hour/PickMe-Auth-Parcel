import { describe, it, expect, vi } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useBreakpointValue } from "@chakra-ui/react";

import renderWithChakra from "@/__test-utils__/renderWithChakra";

import PopoverLayout from "./PopoverLayout";

vi.mock("@chakra-ui/react", async (importActual) => {
    const actual = await importActual<typeof import("@chakra-ui/react")>();
    return {
        ...actual,
        useBreakpointValue: vi.fn(),
    };
});

describe("PopoverLayout 컴포넌트", () => {
    const title = "테스트 팝오버";
    const children = <div>팝오버 내용</div>;

    it("작은 화면(base)에서 PrimaryIconButton이 렌더링되는지 확인", () => {
        vi.mocked(useBreakpointValue).mockReturnValueOnce(
            <button aria-label={title}>아이콘 버튼</button>,
        );

        renderWithChakra(<PopoverLayout title={title}>{children}</PopoverLayout>);

        const button = screen.getByRole("button", { name: title });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("아이콘 버튼");
    });

    it("중간 및 큰 화면(md)에서 PrimaryButton이 렌더링되는지 확인", () => {
        vi.mocked(useBreakpointValue).mockReturnValueOnce(
            <button aria-label={title}>{title}</button>,
        );

        renderWithChakra(<PopoverLayout title={title}>{children}</PopoverLayout>);

        const button = screen.getByRole("button", { name: title });
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(title);
    });

    it("버튼 클릭 시 PopoverContent가 표시되는지 확인", () => {
        vi.mocked(useBreakpointValue).mockReturnValueOnce(
            <button aria-label={title}>{title}</button>,
        );

        renderWithChakra(<PopoverLayout title={title}>{children}</PopoverLayout>);

        const button = screen.getByRole("button", { name: title });
        fireEvent.click(button);

        const popoverContent = screen.getByText("팝오버 내용");
        expect(popoverContent).toBeInTheDocument();
    });
});
