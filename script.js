document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("customForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const budget = form.budget.value + " CFA";
        const couleurs = form.couleurs.value;
        const style = form.style.value;
        const occasion = form.occasion.value;
        const date = form.date.value;
        const heure = form.heure.value;
        const adresse = form.adresse.value || "Non précisé";

        const message = 
`Bonjour, je souhaite commander un bouquet sur mesure :
Budget : ${budget}
Couleurs : ${couleurs}
Style : ${style}
Occasion : ${occasion}
Date : ${date}
Heure : ${heure}
Adresse : ${adresse}`;

        const url = "https://wa.me/2250700000000?text=" + encodeURIComponent(message);
        window.open(url, "_blank");
    });
});
