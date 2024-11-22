import "dotenv/config";
import { CognitoUserPool, ICognitoUserPoolData } from "amazon-cognito-identity-js";

// Cognito User Pool 정보
const userPoolData: ICognitoUserPoolData = {
    UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

// CognitoUserPool 인스턴스를 생성
const userPool = new CognitoUserPool(userPoolData);

export default userPool;
