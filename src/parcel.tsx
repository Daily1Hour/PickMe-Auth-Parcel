import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact, { ReactAppOrParcel } from "single-spa-react";

import { AuthControls } from "@/pages/auth";
import App from "./app/App";

/**
 * single-spa-react를 사용하여 React 애플리케이션을 통합하기 위한 parcel을 생성합니다.
 *
 * 이 parcel은 React 애플리케이션을 single-spa 환경에서 사용할 수 있도록 래핑합니다.
 * AuthControls 컴포넌트는 인증 관련 UI를 제공합니다.
 *
 * @constant
 * @type {ReactAppOrParcel}
 *
 * @property {React.ComponentType} rootComponent - 렌더링할 루트 React 컴포넌트입니다.
 * @property {Function} errorBoundary - 렌더링 중 발생한 오류를 처리하는 함수입니다.
 * @param {Error} err - 발생한 오류입니다.
 * @param {React.ErrorInfo} info - 오류에 대한 추가 정보입니다.
 * @param {Object} props - parcel에 전달된 props입니다.
 * @returns {JSX.Element} 오류 발생 시 "Error"를 표시하는 대체 UI를 반환합니다.
 */
export const parcel: ReactAppOrParcel<Record<string, unknown>> = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: () => (
        <App>
            <AuthControls />
        </App>
    ),
    errorBoundary(err, info, props) {
        console.error(err, info, props);
        return <div>Error</div>;
    },
});

export { getTokens, getUser } from "@/entities/auth/service";
