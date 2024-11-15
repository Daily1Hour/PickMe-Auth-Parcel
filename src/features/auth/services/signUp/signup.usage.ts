import { signup } from "./signup";

// Usage
(async function () {
    try {
        const resultMessage = await signup({
            username: "testuser",
            password: "Abcde12345**",
            confirmPassword: "Abcde12345**",
            email: "jwch11@gmail.com",
        });

        console.log(resultMessage);
    } catch (e) {
        console.error(e);
    }
})();
