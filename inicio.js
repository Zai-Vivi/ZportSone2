// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Mensaje de bienvenida en consola para desarrolladores
    console.log('ZportSone - Página 1 inicializada correctamente.');

    // Manejo de la interacción del botón "Recibir Novedades"
    const btnNoticia = document.getElementById('btnNoticia');
    if (btnNoticia) {
        btnNoticia.addEventListener('click', () => {
            btnNoticia.innerHTML = '<i class="fa-solid fa-check text-success me-1"></i> ¡Suscrito!';
            btnNoticia.classList.replace('btn-outline-light', 'btn-success');
            btnNoticia.disabled = true;
        });
    }

    // Efecto sutil para resaltar navegación activa en dispositivos móviles
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});
