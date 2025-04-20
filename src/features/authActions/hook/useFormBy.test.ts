import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import useFormBy from "./useFormBy";

describe("useFormBy", () => {
    it("유효한 스키마로 폼을 생성", () => {
        const schema = yup.object({
            username: yup.string().required("아이디는 필수입니다."),
        });

        const { result } = renderHook(() => useFormBy(schema));

        expect(yupResolver).toHaveBeenCalledWith(schema);
        expect(useForm).toHaveBeenCalledWith({
            mode: "onChange",
        });
        expect(result.current).toEqual(
            expect.objectContaining({
                register: expect.any(Function),
                handleSubmit: expect.any(Function),
                formState: expect.objectContaining({
                    isSubmitting: expect.any(Boolean),
                }),
                control: expect.any(Object),
            }),
        );
    });
});
