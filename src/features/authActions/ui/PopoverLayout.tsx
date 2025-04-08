import { BiLogInCircle } from "react-icons/bi";
import { useBreakpointValue } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/third-party/chakra-ui";

import { PrimaryButton, PrimaryIconButton } from "@/shared/ui";

/**
 * PopoverLayout 컴포넌트는 팝오버 레이아웃을 렌더링합니다.
 *
 * 이 컴포넌트는 화면 크기에 따라 반응형 스타일을 사용하여 외형을 조정합니다:
 * - 작은 화면(`base`)에서는 기본 아이콘 버튼을 표시합니다.
 * - 중간 및 더 큰 화면(`md`)에서는 제목 텍스트가 포함된 기본 버튼을 표시합니다.
 *
 * @param {Object} props - PopoverLayout 컴포넌트의 속성입니다.
 * @param props.title - 팝오버의 제목으로, 접근성과 표시를 위해 사용됩니다.
 * @param {React.ReactNode} props.children - 팝오버 본문에 표시될 콘텐츠입니다.
 * @returns {React.ReactElement} 팝오버 레이아웃을 나타내는 React 엘리먼트를 반환합니다.
 */
export default function PopoverLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}): React.ReactElement {
    // 반응형 스타일
    const button = useBreakpointValue({
        base: (
            <PrimaryIconButton aria-label={title}>
                <BiLogInCircle />
            </PrimaryIconButton>
        ),
        md: <PrimaryButton aria-label={title}>{title}</PrimaryButton>,
    });
    const size = {
        w: { base: "calc(100vw - 15px)", md: "auto" },
        h: { base: "calc(100vh - 70px)", md: "auto" },
    };

    return (
        <PopoverRoot>
            <PopoverTrigger asChild>{button}</PopoverTrigger>
            <PopoverContent {...size}>
                <PopoverArrow />
                <PopoverBody>{children}</PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    );
}
