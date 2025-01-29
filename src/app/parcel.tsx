import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/shared/chakra-ui/provider";

import { AuthControls } from "@/pages/auth";

const queryClient = new QueryClient();

export const parcel = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: () => (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <AuthControls />
            </ChakraProvider>
        </QueryClientProvider>
    ),
});

export { getTokens } from "@/entities/auth/service";
