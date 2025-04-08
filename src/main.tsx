import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@/shared/styles";
import AuthPage from "@/pages/auth";
import App from "./app/App";

/**
 * 애플리케이션의 진입점입니다.
 *
 * 이 파일은 React 애플리케이션을 초기화하여 루트 컴포넌트를 DOM에 렌더링합니다.
 * React의 `StrictMode`를 사용하여 애플리케이션의 잠재적인 문제를 강조하고
 * 모범 사례를 따르도록 보장합니다.
 *
 * - `@/shared/styles`에서 글로벌 스타일을 가져옵니다.
 * - AuthPage 컴포넌트는 인증 관련 UI와 토큰 정보를 표시합니다.
 */
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App>
            <AuthPage />
        </App>
    </StrictMode>,
);
