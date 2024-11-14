import "dotenv/config";
import * as AWSCognitoIdentity from "amazon-cognito-identity-js";

// Cognito User Pool 정보
const userPoolData: AWSCognitoIdentity.ICognitoUserPoolData = {
    UserPoolId: process.env.USER_POOL_ID as string,
    ClientId: process.env.CLIENT_ID as string,
};

export default userPoolData;
