import "dotenv/config";
import { CognitoUserPool, ICognitoUserPoolData } from "amazon-cognito-identity-js";

/**
 * Cognito User Pool을 위한 설정 객체입니다.
 *
 * 이 객체는 Amazon Cognito User Pool을 초기화하고 상호작용하는 데 필요한
 * 데이터를 포함하고 있으며, Pool의 고유 식별자와 클라이언트 애플리케이션 ID를
 * 포함합니다.
 *
 * @property {string} UserPoolId - Cognito User Pool의 고유 식별자입니다.
 * @property {string} ClientId - Cognito User Pool과 연관된 클라이언트 애플리케이션 ID입니다.
 */
const userPoolData: ICognitoUserPoolData = {
    UserPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,
    ClientId: import.meta.env.VITE_COGNITO_CLIENT_ID,
};

/**
 * 제공된 구성 데이터를 사용하여 초기화된 Cognito User Pool 인스턴스를 나타냅니다.
 *
 * 이 객체는 AWS Cognito 서비스 내에서 사용자 인증 및 관련 작업을 관리하는 데 사용됩니다.
 *
 * @constant
 * @type {CognitoUserPool}
 */
const userPool: CognitoUserPool = new CognitoUserPool(userPoolData);

export default userPool;
