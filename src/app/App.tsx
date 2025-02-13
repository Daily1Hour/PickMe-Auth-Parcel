import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider as ChakraProvider } from "@/third-party/chakra-ui";

import AuthPage from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <AuthPage />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
