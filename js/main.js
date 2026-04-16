// Verificación básica
console.log("Proyecto cargado correctamente");

// Animación simple al cargar
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll(".dep, .card-destino");

    elementos.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
            el.style.transition = "0.5s";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 150);
    });
});