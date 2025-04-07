import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { ConfirmFieldValues, ConfirmSchema } from "../model";

export default function useConfirmForm() {
    return useForm<ConfirmFieldValues>({
        // 유효성 검사
        resolver: yupResolver(ConfirmSchema),
        mode: "onChange",
    });
}
