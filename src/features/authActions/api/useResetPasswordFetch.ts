import { useMutation } from "@tanstack/react-query";

import { resetPassword, dto } from "@/entities/auth";

/**
 * 비밀번호 재설정 API 호출을 처리하는 함수를 제공하는 커스텀 훅입니다.
 *
 * 이 훅은 서버에 비밀번호 재설정 요청을 보내기 위해 mutation을 사용합니다.
 *
 * @returns  다음을 포함하는 객체를 반환합니다:
 * - `submit`: 비밀번호 재설정 요청을 제출하는 함수.
 */
export default function useResetPasswordFetch() {
    const { mutateAsync } = useMutation({
        mutationFn: resetPassword,
    });

    const submit = async (data: dto.ResetPasswordRequest) => {
        return await mutateAsync(data);
    };

    return { submit };
}
