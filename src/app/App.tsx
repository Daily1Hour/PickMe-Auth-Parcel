import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { pickmeSystem } from "@/shared/thema";
import AuthPage from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={pickmeSystem}>
                <AuthPage />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
