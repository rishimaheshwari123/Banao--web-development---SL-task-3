document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.querySelector(".btn-primary");

    submitBtn.addEventListener("click", function () {
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");

        setTimeout(function () {
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
        }, 2000);
    });
});
