import React from "react";
import { useAtom } from "jotai";
import { HStack, Link } from "@chakra-ui/react";

import ActionType from "@/shared/ActionType";
import { ActionTypeDictionary } from "@/shared/trans-ko";
import { actionTypeAtom } from "../atom";

export default function ActionLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactElement {
    const [actionType, setActionType] = useAtom(actionTypeAtom);

    const types = [ActionType.ForgotPassword, ActionType.Login, ActionType.Signup];

    return (
        <>
            {children}

            <HStack w="100%" justify="space-between" fontSize={12}>
                {types
                    .filter((type) => type !== actionType) // 현재 액션 타입을 제외한 필터링
                    .map((type) => (
                        <Link key={type} onClick={() => setActionType(type)}>
                            {ActionTypeDictionary[type]}
                        </Link>
                    ))}
            </HStack>
        </>
    );
}
