document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const closeBtn = document.querySelector(".close-menu");
    const nav = document.querySelector("nav");

    // OUVRIR LE MENU
    toggle.addEventListener("click", () => {
        nav.classList.add("active");
        closeBtn.classList.add("active");
    });

    // FERMER LE MENU AVEC X
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("active");
        closeBtn.classList.remove("active");
    });

    // FERMER APRÈS CLIC SUR UN LIEN
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            closeBtn.classList.remove("active");
        });
    });
});
