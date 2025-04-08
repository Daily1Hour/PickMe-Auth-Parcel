import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";

import pickmeSystem from "@/shared/theme";

const queryClient = new QueryClient();

/**
 * `App` 컴포넌트는 애플리케이션의 루트 컴포넌트로 동작합니다.
 * 자식 컴포넌트를 필수 프로바이더로 감싸 상태 관리와 스타일링을 제공합니다.
 *
 * @param children - 애플리케이션 내에서 렌더링될 React 노드들입니다.
 *
 * @remarks
 * 이 컴포넌트는 다음을 포함합니다:
 * - `QueryClientProvider`: 서버 상태 관리를 위한 React Query 클라이언트를 제공합니다.
 * - `ChakraProvider`: 사용자 정의 테마를 사용하는 Chakra UI 스타일링 시스템을 제공합니다.
 */
function App({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider value={pickmeSystem}>{children}</ChakraProvider>
        </QueryClientProvider>
    );
}

export default App;
