import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import ConfirmSchema from "../model/ConfirmSchema";

export default function useConfirmForm() {
    return useForm({
        // 유효성 검사
        resolver: yupResolver(ConfirmSchema),
        mode: "onChange",
    });
}
