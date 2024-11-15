import userPoolData from "@/features/auth/services/userPoolData";
import { CognitoUserPool } from "amazon-cognito-identity-js";

export default function getLoggedIn(): { isLoggedIn: boolean; logout: () => void } {
    // CognitoUserPool 인스턴스를 생성
    const userPool = new CognitoUserPool(userPoolData);
    // 현재 로그인한 사용자를 가져옴
    // localStorage에 저장된 토큰을 사용하여 사용자 정보를 가져옴
    const cognitoUser = userPool.getCurrentUser();
    // 사용자가 로그인했는지 정의
    const isLoggedIn = !!cognitoUser;

    const logout = () => {
        if (cognitoUser) {
            cognitoUser.signOut();
            window.location.reload();
        }
    };

    return { isLoggedIn, logout };
}
