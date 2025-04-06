/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COGNITO_USER_POOL_ID: string;
    readonly VITE_COGNITO_CLIENT_ID: string;
    readonly VITE_TEST_USERNAME: string;
    readonly VITE_TEST_PASSWORD: string;
    readonly VITE_PUBLIC_URL: string;
    readonly VITE_SERVER_PORT: number;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
