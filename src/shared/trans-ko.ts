import ActionType from "./ActionType";

export const FormTitleDictionary = {
    login: "로그인",
    signup: "회원가입",
    confirm: "인증",
    passwordForgot: "비밀번호 찾기",
    passwordReset: "비밀번호 재설정",
} as const;

export const FieldDictionary = {
    username: "아이디",
    password: "비밀번호",
    confirmPassword: "비밀번호 확인",
    email: "이메일",
    code: "인증 코드",
} as const;

export const ActionTypeDictionary = {
    [ActionType.Login]: "로그인",
    [ActionType.Signup]: "회원가입",
    [ActionType.ForgotPassword]: "비밀번호 찾기",
} as const;
