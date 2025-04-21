import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import pickmeSystem from "@/shared/theme";

export default function renderWithChakra(children: ReactElement) {
    return render(<ChakraProvider value={pickmeSystem}>{children}</ChakraProvider>);
}
