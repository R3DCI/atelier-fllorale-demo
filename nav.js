document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-menu");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
        nav.classList.add("active");
        closeBtn.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
        closeBtn.classList.remove("active");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            closeBtn.classList.remove("active");
        });
    });
});
