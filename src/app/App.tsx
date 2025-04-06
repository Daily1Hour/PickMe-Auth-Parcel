import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import pickmeSystem from "@/shared/thema";

const queryClient = new QueryClient();

function App({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={pickmeSystem}>{children}</ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
