export default class SignupCredential {
    constructor(
        public username: string,
        public password: string,
        public conformPassword: string,
        public email: string,
    ) {}
}
