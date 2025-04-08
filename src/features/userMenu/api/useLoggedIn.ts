import { useQuery } from "@tanstack/react-query";

import { getLoggedIn } from "@/entities/auth";

export interface LoggedInData {
    isLoggedIn: boolean;
    onLogout: () => void;
}

/**
 * 사용자가 로그인 상태인지 확인하는 커스텀 훅입니다.
 *
 * @returns {LoggedInData} 객체를 반환합니다:
 * - `isLoggedIn`: 사용자가 로그인 상태인지 나타내는 boolean 값.
 * - `onLogout`: 사용자의 로그아웃을 처리하는 함수.
 */
export default function useLoggedIn(): LoggedInData {
    const { data } = useQuery({
        queryKey: ["isLoggedIn"],
        queryFn: getLoggedIn,
    });

    return {
        isLoggedIn: data?.isLoggedIn ?? false,
        onLogout: data?.onLogout ?? (() => {}),
    };
}
