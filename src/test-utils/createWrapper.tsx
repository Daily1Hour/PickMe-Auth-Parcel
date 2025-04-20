import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const CreateWrapper = () => {
    const client = new QueryClient();
    return ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
};

export default CreateWrapper;
