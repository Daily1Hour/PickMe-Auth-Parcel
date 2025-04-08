/**
 * 사용자의 로그인 자격 증명을 나타냅니다.
 *
 * @class LoginCredential
 * @constructor
 * @param {string} username - 사용자의 사용자 이름.
 * @param {string} password - 사용자의 비밀번호.
 */
export default class LoginCredential {
    constructor(public username: string, public password: string) {}
}
