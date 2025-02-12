import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider, SystemContext } from "@chakra-ui/react";

import AuthPage from "@/pages/auth";

const queryClient = new QueryClient();

function App() {
    const [chakraUiSystem, setChakraUiSystem] = useState<SystemContext | null>(null);

    // Chakra UI 시스템의 비동기 로딩 처리
    useEffect(() => {
        import("@styleguide/react").then((mod) => {
            setChakraUiSystem(mod.chakraUiSystem);
        });
    }, []);

    if (!chakraUiSystem) return <div>Loading UI...</div>;

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={chakraUiSystem}>
                <AuthPage />
            </ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
