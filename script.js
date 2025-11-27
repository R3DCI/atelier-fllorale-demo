document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const data = new FormData(form);

            const budget = data.get("budget");
            const couleurs = data.get("couleurs");
            const style = data.get("style");
            const occasion = data.get("occasion");
            const date = data.get("date");
            const heure = data.get("heure");
            const adresse = data.get("adresse");

            const message =
                `Demande de bouquet sur mesure:%0A` +
                `Budget : ${budget}%0A` +
                `Couleurs : ${couleurs}%0A` +
                `Style : ${style}%0A` +
                `Occasion : ${occasion}%0A` +
                `Date : ${date}%0A` +
                `Heure : ${heure}%0A` +
                `Adresse : ${adresse || "Non précisé"}`;

            window.location.href = `https://wa.me/2250700000000?text=${message}`;
        });
    }
});
