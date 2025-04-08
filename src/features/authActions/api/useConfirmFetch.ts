import { useMutation } from "@tanstack/react-query";

import { confirm, dto } from "@/entities/auth";

/**
 * 확인 요청을 제출하는 함수를 제공하는 커스텀 훅입니다.
 *
 * 이 훅은 비동기 확인 요청을 처리하기 위해 mutation 함수를 사용합니다.
 *
 * @returns 다음을 포함하는 객체를 반환합니다:
 * - `submit`: 확인 요청을 제출하는 함수.
 */
export default function useConfirmFetch() {
    const { mutateAsync } = useMutation({
        mutationFn: confirm,
    });

    const submit = async (data: dto.ConfirmRequest) => {
        return await mutateAsync(data);
    };

    return { submit };
}
