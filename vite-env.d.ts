/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_COGNITO_USER_POOL_ID: string;
    VITE_COGNITO_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
