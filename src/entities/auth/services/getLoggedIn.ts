import { CognitoUser } from "amazon-cognito-identity-js";

import userPool from "@/entities/auth/config/userPool";

interface LoggedInData {
    isLoggedIn: boolean;
    onLogout: () => void;
    cognitoUser: CognitoUser | null;
}

export default function getLoggedIn(): LoggedInData {
    // 현재 로그인한 사용자를 가져옴
    // localStorage에 저장된 토큰을 사용하여 사용자 정보를 가져옴
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
