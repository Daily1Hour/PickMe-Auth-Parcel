import login from "./login";

(async function () {
    try {
        const resultMessage = await login({
            username: "testuser",
            password: "Abcde12345**",
        });

        console.log(resultMessage);
    } catch (e) {
        console.error(e);
    }
})();
