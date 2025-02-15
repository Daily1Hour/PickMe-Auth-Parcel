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
