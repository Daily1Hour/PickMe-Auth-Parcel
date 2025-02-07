import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import chakraUiSystem from "@styleguide/chakra-ui-system";

import AuthPage from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={chakraUiSystem}>
                <AuthPage />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
