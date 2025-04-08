/**
 * 사용자의 로그인 자격 증명을 나타냅니다.
 */
export default class LoginCredential {
    /**
     * @param username - 사용자의 사용자 이름.
     * @param password - 사용자의 비밀번호.
     */
    constructor(public username: string, public password: string) {}
}
