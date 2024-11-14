import { signUp } from "./signUp";

// Usage
(async function () {
    try {
        const resultMessage = await signUp({
            username: "testuser",
            password: "Abcde12345**",
            email: "jwch11@gmail.com",
        });

        console.log(resultMessage);
    } catch (e) {
        console.error(e);
    }
})();
