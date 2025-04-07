import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { HStack } from "@chakra-ui/react";

import { CircleButton } from "@/shared/ui";

export default function SocialLoginForm(): React.ReactElement {
    return (
        <HStack justify="center" mx="10%" mt="10%" fontSize={50}>
            <CircleButton bg="#FFFFFF" aria-label="google">
                <FcGoogle style={{ width: "1.8rem", height: "1.8rem" }} />
            </CircleButton>
            <CircleButton bg="#06CC80" color="#FFFFFF" aria-label="naver">
                <SiNaver id="naver" style={{ width: "1.2rem", height: "1.2rem" }} />
            </CircleButton>
            <CircleButton bg="#FEE500" color="#191919" aria-label="kakao">
                <RiKakaoTalkFill style={{ width: "1.8rem", height: "1.8rem" }} />
            </CircleButton>
        </HStack>
    );
}
