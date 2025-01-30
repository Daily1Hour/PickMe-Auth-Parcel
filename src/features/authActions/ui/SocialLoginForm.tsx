import React from "react";
import { FcGoogle } from "react-icons/fc";
import { SiNaver } from "react-icons/si";
import { RiKakaoTalkFill } from "react-icons/ri";
import { defineStyle, HStack, IconButton } from "@chakra-ui/react";

export default function SocialLoginForm(): React.ReactElement {
    const googleRing = defineStyle({
        colorPalette: "grey",
        outlineWidth: "1px",
        outlineColor: "colorPalette.300",
        outlineOffset: "1px",
        outlineStyle: "solid",
    });

    return (
        <HStack justify="center" mx="10%" mt="10%" fontSize={50}>
            <IconButton size="2xl" bg="#FEE500" color="#191919" rounded="full" aria-label="kakao">
                <RiKakaoTalkFill size="48px" />
            </IconButton>
            <IconButton size="2xl" bg="#06CC80" color="white" rounded="full" aria-label="naver">
                <SiNaver />
            </IconButton>
            <IconButton size="2xl" bg="white" css={googleRing} rounded="full" aria-label="google">
                <FcGoogle />
            </IconButton>
        </HStack>
    );
}
