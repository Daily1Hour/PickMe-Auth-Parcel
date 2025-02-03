import * as Yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({ username: Yup.string().required("아이디는 필수입니다.") });

export default function useForgotPasswordForm() {
    return useForm<{ username: string }>({
        // 유효성 검사
        resolver: yupResolver(schema),
        mode: "onChange",
    });
}
