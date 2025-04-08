import { useMutation } from "@tanstack/react-query";

import { confirm, dto } from "@/entities/auth";

/**
 * 확인 요청을 제출하는 함수를 제공하는 커스텀 훅입니다.
 *
 * 이 훅은 비동기 확인 요청을 처리하기 위해 mutation 함수를 사용합니다.
 *
 * @returns `submit` 함수를 포함하는 객체를 반환합니다.
 *
 * @function submit
 * @param data - `dto.ConfirmRequest` 타입의 확인 요청 데이터입니다.
 * @returns mutation 결과로 해결되는 promise를 반환합니다.
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
