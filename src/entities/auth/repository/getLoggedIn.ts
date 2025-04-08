import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "@/entities/auth/config/userPool";

interface LoggedInData {
    isLoggedIn: boolean;
    onLogout: () => void;
    cognitoUser: CognitoUser | null;
}

/**
 * 현재 로그인한 사용자의 정보를 가져오고 로그아웃 유틸리티를 제공합니다.
 *
 * @returns {LoggedInData} 다음을 포함하는 객체:
 * - `isLoggedIn`: 사용자가 현재 로그인 상태인지 나타내는 boolean 값.
 * - `onLogout`: 현재 사용자를 로그아웃하고 페이지를 새로고침하는 함수.
 * - `cognitoUser`: 현재 Cognito 사용자 객체 또는 사용자가 로그인하지 않은 경우 `null`.
 *
 * @remarks
 * 이 함수는 Cognito 사용자 풀을 사용하여 로그인 상태를 확인하고
 * 사용자 세션을 관리합니다. `localStorage`를 사용하여 토큰과 사용자 정보를 가져옵니다.
 */
export default function getLoggedIn(): LoggedInData {
    const cognitoUser = userPool.getCurrentUser();
    // 사용자가 로그인했는지 정의
    const isLoggedIn = !!cognitoUser;

    const onLogout = () => {
        if (cognitoUser) {
            cognitoUser.signOut();
            window.location.reload();
        }
    };

    return { isLoggedIn, onLogout, cognitoUser };
}
