import { UserTokens } from "../../api/dto";
import getTokens from "./getTokens";

// Usage
getTokens()
    .then(({ idToken, accessToken, refreshToken }: UserTokens) => {
        console.log(idToken, accessToken, refreshToken);
    })
    .catch((e) => {
        console.error(e);
    });
