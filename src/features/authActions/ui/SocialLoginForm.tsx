import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { chakra, HStack } from "@chakra-ui/react";

import { PmProviderIconButton } from "@/shared/ui";

export default function SocialLoginForm(): React.ReactElement {
    const NaverIcon = chakra(SiNaver, { base: { boxSize: "1rem" } });

    return (
        <HStack justify="center" mx="10%" mt="10%">
            <PmProviderIconButton size="xl" bg="#FFFFFF" color="#FF0000" aria-label="google">
                <FcGoogle />
            </PmProviderIconButton>
            <PmProviderIconButton size="xl" bg="#06CC80" color="#FFFFFF" aria-label="naver">
                <NaverIcon />
            </PmProviderIconButton>
            <PmProviderIconButton size="xl" bg="#FEE500" color="#191919" aria-label="kakao">
                <RiKakaoTalkFill />
            </PmProviderIconButton>
        </HStack>
    );
}
