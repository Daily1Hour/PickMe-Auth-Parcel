import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SignupFieldValues, SignupSchema } from "../model";

export default function useSignupForm() {
    return useForm<SignupFieldValues>({
        // 유효성 검사
        resolver: yupResolver(SignupSchema),
        mode: "onChange",
    });
}
