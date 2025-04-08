import React from "react";
import { useAtom } from "jotai";
import { HStack, Link } from "@chakra-ui/react";

import ActionType from "@/shared/ActionType";
import { ActionTypeDictionary } from "@/shared/trans-ko";
import { actionTypeAtom } from "../atom";

/**
 * ActionLayout 컴포넌트는 다양한 인증 작업을 처리하기 위한 레이아웃 컴포넌트입니다.
 *
 * 이 컴포넌트는 로그인, 회원가입, 비밀번호 찾기와 같은 인증 작업을 위한 레이아웃을 제공합니다.
 * 다른 작업 유형으로 전환할 수 있는 링크를 표시합니다.
 *
 * @param {Object} props - 컴포넌트의 props입니다.
 * @param {React.ReactNode} props.children - 레이아웃 내에서 렌더링할 자식 컴포넌트입니다.
 * @returns {React.ReactElement} 렌더링된 레이아웃 컴포넌트입니다.
 */
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
