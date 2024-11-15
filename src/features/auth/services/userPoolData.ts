import "dotenv/config";
import * as AWSCognitoIdentity from "amazon-cognito-identity-js";

// Cognito User Pool 정보
const userPoolData: AWSCognitoIdentity.ICognitoUserPoolData = {
    UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

export default userPoolData;
