/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_COGNITO_USER_POOL_ID: string;
    readonly VITE_COGNITO_CLIENT_ID: string;
    readonly VITE_TEST_USERNAME: string;
    readonly VITE_TEST_PASSWORD: string;
    readonly VITE_PUBLIC_URL: string;
    readonly VITE_SERVER_PORT: number;
    readonly VITE_MF_TYPE: "application" | "parcel";
    readonly VITE_TOKEN_VIEW: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
