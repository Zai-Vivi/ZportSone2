// Base de datos de marcadores deportivos simulada
const marcadoresBD = [
    {
        deporte: 'futbol',
        liga: 'Champions League',
        equipoLocal: 'Real Madrid',
        equipoVisitante: 'Man. City',
        marcador: '3 - 2',
        estado: 'Finalizado',
        fecha: 'Hoy'
    },
    {
        deporte: 'futbol',
        liga: 'LaLiga',
        equipoLocal: 'FC Barcelona',
        equipoVisitante: 'Atlético de Madrid',
        marcador: '1 - 1',
        estado: 'En Vivo (75\')',
        fecha: 'Hoy'
    },
    {
        deporte: 'baloncesto',
        liga: 'NBA Regular Season',
        equipoLocal: 'L.A. Lakers',
        equipoVisitante: 'Golden State Warriors',
        marcador: '112 - 108',
        estado: 'Finalizado',
        fecha: 'Hoy'
    },
    {
        deporte: 'baloncesto',
        liga: 'EuroLeague',
        equipoLocal: 'Real Madrid Baloncesto',
        equipoVisitante: 'Panathinaikos',
        marcador: '85 - 82',
        estado: 'Finalizado',
        fecha: 'Ayer'
    },
    {
        deporte: 'tenis',
        liga: 'Grand Slam Final',
        equipoLocal: 'Carlos Alcaraz',
        equipoVisitante: 'Jannik Sinner',
        marcador: '3 - 2 (Sets)',
        estado: 'Finalizado',
        fecha: 'Ayer'
    },
    {
        deporte: 'tenis',
        liga: 'ATP Masters 1000',
        equipoLocal: 'Novak Djokovic',
        equipoVisitante: 'Daniil Medvedev',
        marcador: '2 - 0 (Sets)',
        estado: 'Finalizado',
        fecha: 'Hace 2 días'
    }
];

// Función para renderizar los marcadores en pantalla
function mostrarResultados(lista) {
    const contenedor = document.getElementById('gridResultados');
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary fs-5">No hay marcadores disponibles para este deporte.</p>
            </div>`;
        return;
    }

    lista.forEach(match => {
        const esEnVivo = match.estado.includes('En Vivo');
        const badgeColor = esEnVivo ? 'bg-danger' : 'bg-secondary';

        contenedor.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="match-card">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <small class="text-secondary fw-bold">${match.liga}</small>
                        <span class="match-badge ${badgeColor}">${match.estado}</span>
                    </div>
                    <div class="row align-items-center text-center my-3">
                        <div class="col-5">
                            <h6 class="mb-0 fw-bold">${match.equipoLocal}</h6>
                        </div>
                        <div class="col-2 px-0">
                            <span class="score-box">${match.marcador}</span>
                        </div>
                        <div class="col-5">
                            <h6 class="mb-0 fw-bold">${match.equipoVisitante}</h6>
                        </div>
                    </div>
                    <div class="text-end mt-3">
                        <small class="text-muted"><i class="fa-regular fa-clock me-1"></i>${match.fecha}</small>
                    </div>
                </div>
            </div>`;
    });
}

// Función para filtrar marcadores según el botón presionado
function filtrarDeporte(deporte, boton) {
    // Cambiar la clase activa entre botones
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');

    // Filtrar los datos
    if (deporte === 'todos') {
        mostrarResultados(marcadoresBD);
    } else {
        const filtrados = marcadoresBD.filter(m => m.deporte === deporte);
        mostrarResultados(filtrados);
    }
}

// Cargar todos los resultados al iniciar
document.addEventListener('DOMContentLoaded', () => {
    mostrarResultados(marcadoresBD);
});
