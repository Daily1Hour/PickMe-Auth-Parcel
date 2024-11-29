import React from "react";

import { useLoggedIn } from "@/features/userMenu";
import AuthControls from "./ui/AuthControls";
import TokenInfo from "./ui/TokenInfo";

const isDevMode = import.meta.env.MODE === "development";

export default function AuthPage(): React.ReactElement {
    const { isLoggedIn } = useLoggedIn();

    return (
        <>
            <AuthControls />
            {isDevMode && isLoggedIn && <TokenInfo />}
        </>
    );
}

export { AuthControls };
