document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-menu");
    const nav = document.querySelector("nav");

    // Ouvrir
    toggle.addEventListener("click", () => {
        nav.classList.add("active");
    });

    // Fermer
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
    });

    // Fermer en cliquant un lien
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
        });
    });
});
