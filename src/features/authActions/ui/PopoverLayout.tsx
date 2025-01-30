import { Button } from "@chakra-ui/react";
import {
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
    PopoverTrigger,
} from "@/third-party/chakra-ui";

export default function PopoverLayout({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}): React.ReactElement {
    return (
        <PopoverRoot>
            <PopoverTrigger asChild>
                <Button colorPalette="teal">{title}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody>{children}</PopoverBody>
            </PopoverContent>
        </PopoverRoot>
    );
}
