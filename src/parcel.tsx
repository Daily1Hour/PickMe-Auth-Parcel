import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/third-party/chakra-ui";

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
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div>Error</div>;
    },
});

export { getTokens, getUser } from "@/entities/auth/service";
