import { BiLogInCircle } from "react-icons/bi";
import { useBreakpointValue } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/third-party/chakra-ui";
import { PmButton, PmIconButton } from "@/shared/ui";

export default function PopoverLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}): React.ReactElement {
    const button = useBreakpointValue({
        base: (
            <PmIconButton aria-label={title}>
                <BiLogInCircle />
            </PmIconButton>
        ),
        md: <PmButton aria-label={title}>{title}</PmButton>,
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
