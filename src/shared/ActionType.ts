/**
 * 인증 흐름에서 사용자의 다양한 동작 유형을 나타내는 열거형입니다.
 * 
 * @enum {number}
 * @property {number} Login - 로그인 동작을 나타냅니다.
 * @property {number} Signup - 회원가입 동작을 나타냅니다.
 * @property {number} ForgotPassword - 비밀번호 찾기 동작을 나타냅니다.
 */
enum ActionType {
    Login,
    Signup,
    ForgotPassword,
}
export default ActionType;
