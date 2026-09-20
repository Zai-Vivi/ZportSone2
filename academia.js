// Base de datos de conceptos y lecciones de la Academia ZportSone
const modulosAcademia = [
    {
        id: 1,
        categoria: 'futbol',
        titulo: 'Fuera de Juego (Offside)',
        nivel: 'Principiante',
        descripcion: 'Un jugador se encuentra en fuera de juego si está más cerca de la línea de meta contraria que el balón y el penúltimo adversario en el momento en que se le pasa el balón.',
        icono: 'fa-solid fa-bullseye'
    },
    {
        id: 2,
        categoria: 'futbol',
        titulo: 'Sistema VAR',
        nivel: 'Intermedio',
        descripcion: 'Árbitro Asistente de Video utilizado para revisar decisiones sobre goles, penaltis, tarjetas rojas directas e identificación errónea de jugadores.',
        icono: 'fa-solid fa-tv'
    },
    {
        id: 3,
        categoria: 'nfl',
        titulo: 'Downs y Avance de 10 Yardas',
        nivel: 'Principiante',
        descripcion: 'El equipo ofensivo dispone de 4 oportunidades (downs) para avanzar al menos 10 yardas mediante pases o acarreos y renovar sus 4 oportunidades.',
        icono: 'fa-solid fa-arrows-left-right'
    },
    {
        id: 4,
        categoria: 'nfl',
        titulo: 'Puntuaciones: Touchdown & Field Goal',
        nivel: 'Principiante',
        descripcion: 'Un Touchdown vale 6 puntos (ingresando con balón a zona de anotación) y un Gol de Campo vale 3 puntos (pateando entre los postes).',
        icono: 'fa-solid fa-trophy'
    },
    {
        id: 5,
        categoria: 'f1',
        titulo: 'Sistema DRS (Drag Reduction System)',
        nivel: 'Avanzado',
        descripcion: 'Apertura del alerón trasero para reducir la resistencia del aire y aumentar la velocidad punta al intentar adelantar a menos de 1 segundo del auto de adelante.',
        icono: 'fa-solid fa-gauge-high'
    },
    {
        id: 6,
        categoria: 'f1',
        titulo: 'Estrategia de Neumáticos (Slicks vs Rain)',
        nivel: 'Intermedio',
        descripcion: 'Gestión de compuestos Blandos (Rojos), Medios (Amarillos) y Duros (Blancos), obligando al menos a realizar una parada en boxes por carrera en seco.',
        icono: 'fa-solid fa-circle-dot'
    }
];

let categoriaActual = 'todas';

// Función para renderizar los módulos
function renderizarModulos(lista) {
    const contenedor = document.getElementById('gridAcademia');
    contenedor.innerHTML = '';

    if (lista.length === 0) {
        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary fs-5">No se encontraron conceptos para tu búsqueda.</p>
            </div>`;
        return;
    }

    lista.forEach(item => {
        let badgeColor = 'bg-info text-dark';
        if (item.nivel === 'Principiante') badgeColor = 'bg-success text-dark';
        if (item.nivel === 'Avanzado') badgeColor = 'bg-danger text-white';

        contenedor.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="course-card">
                    <div>
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="course-icon">
                                <i class="${item.icono}"></i>
                            </div>
                            <span class="badge ${badgeColor} rounded-pill px-3 py-2">${item.nivel}</span>
                        </div>
                        <h4 class="fw-bold mb-3">${item.titulo}</h4>
                        <p class="text-secondary small mb-3">${item.descripcion}</p>
                    </div>
                    <div class="pt-3 border-top border-secondary border-opacity-10 text-end">
                        <button class="btn btn-sm btn-outline-info rounded-pill px-3" onclick="marcarCompletado(this)">
                            <i class="fa-regular fa-circle-check me-1"></i> Entendido
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

// Filtrado por categoría
function filtrarCategoria(cat, boton) {
    categoriaActual = cat;
    document.querySelectorAll('.btn-academy-filter').forEach(btn => btn.classList.remove('active'));
    boton.classList.add('active');

    aplicarFiltros();
}

// Búsqueda en vivo mediante input
function aplicarFiltros() {
    const textoBusqueda = document.getElementById('inputBuscador').value.toLowerCase();

    const filtrados = modulosAcademia.filter(item => {
        const coincideCategoria = categoriaActual === 'todas' || item.categoria === categoriaActual;
        const coincideTexto = item.titulo.toLowerCase().includes(textoBusqueda) || 
                              item.descripcion.toLowerCase().includes(textoBusqueda);
        
        return coincideCategoria && coincideTexto;
    });

    renderizarModulos(filtrados);
}

// Acción visual para marcar tema completado
function marcarCompletado(btn) {
    btn.classList.replace('btn-outline-info', 'btn-success');
    btn.innerHTML = '<i class="fa-solid fa-check me-1"></i> Aprendido';
    btn.disabled = true;
}

// Inicialización de Eventos
document.addEventListener('DOMContentLoaded', () => {
    renderizarModulos(modulosAcademia);

    const buscador = document.getElementById('inputBuscador');
    if (buscador) {
        buscador.addEventListener('input', aplicarFiltros);
    }
});
