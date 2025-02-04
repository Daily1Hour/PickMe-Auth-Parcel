import forgotPassword from "./forgotPassword";

(async function () {
    try {
        const resultMessage = await forgotPassword({
            username: "testuser",
        });

        console.log(resultMessage);
    } catch (e) {
        console.error(e);
    }
})();
