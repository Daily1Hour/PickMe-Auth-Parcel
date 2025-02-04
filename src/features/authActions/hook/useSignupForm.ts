import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Signup, SignupSchema } from "../model";

export default function useSignupForm() {
    return useForm<Signup>({
        // 유효성 검사
        resolver: yupResolver(SignupSchema),
        mode: "onChange",
    });
}
