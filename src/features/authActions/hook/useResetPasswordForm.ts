import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ResetPasswordRequest } from "@/entities/auth/api/dto";

const schema = Yup.object().shape({
    username: Yup.string().required("사용자 이름은 필수입니다."),
    code: Yup.string().required("인증 코드는 필수입니다."),
    password: Yup.string().min(8, "비밀번호는 최소 8자입니다.").required("비밀번호는 필수입니다."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호 확인은 필수입니다."),
});

export default function useResetPasswordForm() {
    return useForm<ResetPasswordRequest>({
        // 유효성 검사
        resolver: yupResolver(schema),
        mode: "onChange",
    });
}
