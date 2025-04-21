import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import pickmeSystem from "@/shared/theme";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

describe("App 컴포넌트", () => {
    it("QueryClientProvider와 ChakraProvider가 올바르게 렌더링되는지 확인", () => {
        const queryClient = new QueryClient();
        const { container, getByText } = render(
            <QueryClientProvider client={queryClient}>
                <ChakraProvider value={pickmeSystem}>
                    <App>
                        <div>children</div>
                    </App>
                </ChakraProvider>
            </QueryClientProvider>,
        );

        const childElement = getByText("children");
        expect(childElement).toBeInTheDocument();
        expect(container).toBeInTheDocument();
    });
});
