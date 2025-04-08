import {
    CodeDeliveryDetails,
    ICognitoUserSessionData,
    ISignUpResult,
} from "amazon-cognito-identity-js";

/**
 * 이 타입은 로그인 요청의 구조를 정의하는 데 사용됩니다.
 *
 * @property username - 사용자의 사용자 이름입니다.
 * @property password - 사용자의 비밀번호입니다.
 */
export type LoginRequest = {
    username: string;
    password: string;
};
/**
 * 로그인 작업에 대한 응답 데이터를 나타냅니다.
 * Cognito 사용자의 세션 관련 정보를 포함합니다.
 *
 * @property IdToken - 사용자의 ID 토큰입니다.
 * @property AccessToken - 사용자의 액세스 토큰입니다.
 * @property RefreshToken - 사용자의 갱신 토큰입니다.
 */
export type LoginResponse = ICognitoUserSessionData;

/**
 * 사용자 회원가입 요청에 필요한 dto입니다.
 *
 * @property username - 새 계정에 사용할 사용자 이름입니다.
 * @property password - 새 계정의 비밀번호입니다.
 * @property confirmPassword - 비밀번호 확인용으로, 비밀번호가 정확한지 확인합니다.
 * @property email - 새 계정과 연결된 이메일 주소입니다.
 */
export type SignupRequest = {
    username: string;
    password: string;
    confirmPassword: string;
    email: string;
};
/**
 * 회원가입 작업에 대한 응답 유형을 나타냅니다.
 * `ISignUpResult` 객체이거나, 결과가 없는 경우 `undefined`일 수 있습니다.
 *
 * @property user - 회원가입된 사용자의 정보입니다.
 * @property userConfirmed - 사용자가 확인되었는지 여부를 나타냅니다.
 * @property userSub - 사용자의 고유 식별자입니다.
 * @property codeDeliveryDetails - 코드 전송 세부정보입니다.
 */
export type SignupResponse = ISignUpResult | undefined;

/**
 * 회원가입 확인 요청에 필요한 dto입니다.
 *
 * @property username - 작업을 확인하려는 사용자의 사용자 이름입니다.
 * @property code - 사용자에게 제공된 확인 코드입니다.
 */
export type ConfirmRequest = {
    username: string;
    code: string;
};
/**
 * 회원가입 확인 작업 후 반환되는 응답을 나타냅니다.
 *
 * @property message - 확인 작업의 결과 메시지입니다.
 */
export type ConfirmResponse = {
    message: string;
};

/**
 * 비밀번호 찾기 요청에 필요한 dto입니다.
 *
 * @property username - 비밀번호 재설정을 요청하는 계정의 사용자 이름입니다.
 */
export type ForgotPasswordRequest = {
    username: string;
};
/**
 * 비밀번호 찾기 요청에 대한 응답을 나타냅니다.
 *
 * @property AttributeName - 비밀번호 재설정 코드가 전송된 속성 이름입니다.
 * @property DeliveryMedium - 비밀번호 재설정 코드가 전송된 매체입니다.
 * @property Destination - 비밀번호 재설정 코드가 전송된 대상입니다.
 */
export type ForgotPasswordResponse = CodeDeliveryDetails;

/**
 * 사용자의 비밀번호 재설정을 요청하는 dto입니다.
 *
 * @property username - 비밀번호를 재설정할 계정의 사용자 이름입니다.
 * @property password - 계정에 설정할 새 비밀번호입니다.
 * @property confirmPassword - 새 비밀번호 확인용으로, 비밀번호가 일치하는지 확인합니다.
 * @property code - 비밀번호 재설정을 승인하기 위한 인증 코드입니다.
 */
export type ResetPasswordRequest = {
    username: string;
    password: string;
    confirmPassword: string;
    code: string;
};
/**
 * 비밀번호 재설정 작업이 성공적으로 완료된 후 반환되는 응답을 나타냅니다.
 */
export type ResetPasswordResponse = {
    message: string;
};

/**
 * 인증 목적으로 사용자와 연결된 토큰을 나타냅니다.
 *
 * @property idToken - 사용자의 ID 토큰입니다.
 * @property accessToken - 사용자의 액세스 토큰입니다.
 * @property refreshToken - 사용자의 갱신 토큰입니다.
 */
export type UserTokens = {
    idToken: string;
    accessToken: string;
    refreshToken: string;
};
