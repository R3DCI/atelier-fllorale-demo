document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-menu");
    const nav = document.querySelector("nav");

    toggle.addEventListener("click", () => {
        nav.classList.add("active");
        closeBtn.style.opacity = "1";
        closeBtn.style.pointerEvents = "auto";
    });

    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
        closeBtn.style.opacity = "0";
        closeBtn.style.pointerEvents = "none";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            closeBtn.style.opacity = "0";
            closeBtn.style.pointerEvents = "none";
        });
    });
});
