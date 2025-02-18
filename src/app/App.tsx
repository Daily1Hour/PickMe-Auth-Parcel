import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { pickmeSystem } from "@/shared/thema";
import AuthPage, { AuthControls } from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    const MODE = import.meta.env.MODE;

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={pickmeSystem}>
                {MODE === "development" ? <AuthPage /> : <AuthControls />}
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
