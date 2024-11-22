import getTokens from "./getTokens";
import { UserTokens } from "../types";

// Usage
getTokens()
    .then(({ idToken, accessToken, refreshToken }: UserTokens) => {
        console.log(idToken, accessToken, refreshToken);
    })
    .catch((e) => {
        console.error(e);
    });
