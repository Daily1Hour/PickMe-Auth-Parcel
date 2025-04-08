/**
 * 사용자 회원가입에 필요한 자격 증명을 나타냅니다.
 */
export default class SignupCredential {
    /**
     * SignupCredential의 인스턴스를 생성합니다.
     *
     * @param username - 선택한 사용자 이름
     * @param password - 비밀번호
     * @param confirmPassword - 비밀번호 확인
     * @param email - 이메일 주소
     */
    constructor(
        public username: string,
        public password: string,
        public confirmPassword: string,
        public email: string,
    ) {}
}
