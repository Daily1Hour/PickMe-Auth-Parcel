import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Login, LoginSchema } from "../model";

export default function useLoginForm() {
    return useForm<Login>({
        // 유효성 검사
        resolver: yupResolver(LoginSchema),
        mode: "onChange",
    });
}
