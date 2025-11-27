document.addEventListener("DOMContentLoaded", () => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".fade, .fade-up, .fade-delay img").forEach(el => {
        observer.observe(el);
    });
});
