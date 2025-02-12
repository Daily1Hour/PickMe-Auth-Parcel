import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, SystemContext } from "@chakra-ui/react";

import { AuthControls } from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    const [chakraUiSystem, setChakraUiSystem] = useState<SystemContext | null>(null);

    useEffect(() => {
        import("@styleguide/react").then((mod) => {
            setChakraUiSystem(mod.default.chakraUiSystem);
        });
    }, []);

    if (!chakraUiSystem) return <div>Loading Chakra...</div>;

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={chakraUiSystem}>
                <AuthControls />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export const parcel = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div>Error</div>;
    },
});

export { getTokens, getUser } from "@/entities/auth/service";
