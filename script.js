document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".btn-primary");
    const inputField = document.querySelector(".input-large");

    submitBtn.addEventListener("click", function () {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");

        inputField.disabled = true;

        setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
        }, 2000);

        setTimeout(function () {
            inputField.disabled = false;
        }, 3000000);
    });
});
