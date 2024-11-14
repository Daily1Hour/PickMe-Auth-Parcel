import { Provider as ChakraProvider } from "@/shared/chakra-ui/provider";

import AuthPage from "@/pages/auth";

function App() {
    return (
        <ChakraProvider>
            <AuthPage />
        </ChakraProvider>
    );
}

export default App;
