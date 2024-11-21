import { useQuery } from "@tanstack/react-query";

import getLoggedIn from "@/entities/auth/repository/getLoggedIn";

export interface LoggedInData {
    isLoggedIn: boolean;
    onLogout: () => void;
}

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
