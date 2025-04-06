import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AuthPage from "@/pages/auth";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App>
            <AuthPage />
        </App>
    </StrictMode>,
);
