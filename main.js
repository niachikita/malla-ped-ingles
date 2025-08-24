// Estructura: nombre, requisitos, semestre
const ramos = [
  // Primer año
  { nombre: "Contextos Socioculturales de los Procesos Educativos", requisitos: [], semestre: "I Semestre" },
  { nombre: "Trayectorias de Vida y Desarrollo Psicológico", requisitos: [], semestre: "I Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Elemental", requisitos: [], semestre: "I Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Elemental", requisitos: [], semestre: "I Semestre" },
  { nombre: "Civilización y Cultura de los Pueblos de Habla Inglesa I", requisitos: [], semestre: "I Semestre" },
  { nombre: "Fortalecimiento de Habilidades de Entrada", requisitos: [], semestre: "I Semestre" },

  { nombre: "Reflexión Crítica y Filosófica de los Procesos Educativos", requisitos: ["Contextos Socioculturales de los Procesos Educativos"], semestre: "II Semestre" },
  { nombre: "Psicología del Aprendizaje y Transformación Educativa", requisitos: ["Trayectorias de Vida y Desarrollo Psicológico"], semestre: "II Semestre" },
  { nombre: "Políticas Educacionales y Relaciones de Poder", requisitos: [], semestre: "II Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Pre-Intermedio", requisitos: ["Discurso Oral de la Lengua Inglesa Elemental"], semestre: "II Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Pre-Intermedio", requisitos: ["Discurso Escrito de la Lengua Inglesa Elemental"], semestre: "II Semestre" },
  { nombre: "Civilización y Cultura de los Pueblos de Habla Inglesa II", requisitos: ["Civilización y Cultura de los Pueblos de Habla Inglesa I"], semestre: "II Semestre" },

  // Segundo año
  { nombre: "Gestión e Innovación Educativa", requisitos: [], semestre: "III Semestre" },
  { nombre: "Lingüística General", requisitos: [], semestre: "III Semestre" },
  { nombre: "Introducción a la Fonética Inglesa", requisitos: ["Discurso Oral de la Lengua Inglesa Pre-Intermedio"], semestre: "III Semestre" },
  { nombre: "Introducción a la Gramática Inglesa", requisitos: ["Discurso Escrito de la Lengua Inglesa Pre-Intermedio"], semestre: "III Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Intermedio", requisitos: ["Discurso Oral de la Lengua Inglesa Pre-Intermedio"], semestre: "III Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Intermedio", requisitos: ["Discurso Escrito de la Lengua Inglesa Pre-Intermedio"], semestre: "III Semestre" },
  { nombre: "Segundo Idioma I", requisitos: [], semestre: "III Semestre" },
  { nombre: "Curso de Formación Integral I", requisitos: [], semestre: "III Semestre" },

  { nombre: "Principios Metodológicos de la Investigación", requisitos: [], semestre: "IV Semestre" },
  { nombre: "Lingüística Aplicada: Perspectivas Sociales y Críticas", requisitos: ["Lingüística General"], semestre: "IV Semestre" },
  { nombre: "Fonética Inglesa Segmental", requisitos: ["Introducción a la Fonética Inglesa"], semestre: "IV Semestre" },
  { nombre: "Morfosintaxis de la Lengua Inglesa", requisitos: ["Introducción a la Gramática Inglesa"], semestre: "IV Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Post-Intermedio I", requisitos: ["Discurso Oral de la Lengua Inglesa Intermedio"], semestre: "IV Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Post-Intermedio I", requisitos: ["Discurso Escrito de la Lengua Inglesa Intermedio"], semestre: "IV Semestre" },
  { nombre: "Segundo Idioma II", requisitos: ["Segundo Idioma I"], semestre: "IV Semestre" },
  { nombre: "Curso de Formación Integral II", requisitos: ["Curso de Formación Integral I"], semestre: "IV Semestre" },

  // Tercer año
  { nombre: "Práctica I: Identidad Docente en Orientación y Jefatura", requisitos: ["Principios Metodológicos de la Investigación"], semestre: "V Semestre" },
  { nombre: "Fundamentos Lingüísticos en el Aprendizaje del Inglés como Lengua Extranjera", requisitos: ["Lingüística Aplicada: Perspectivas Sociales y Críticas"], semestre: "V Semestre" },
  { nombre: "Fonética Inglesa Acentual", requisitos: ["Fonética Inglesa Segmental"], semestre: "V Semestre" },
  { nombre: "Gramática Inglesa: Oraciones Simples y Compuestas", requisitos: ["Morfosintaxis de la Lengua Inglesa"], semestre: "V Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Post-Intermedio II", requisitos: ["Discurso Oral de la Lengua Inglesa Post-Intermedio I"], semestre: "V Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Post-Intermedio II", requisitos: ["Discurso Escrito de la Lengua Inglesa Post-Intermedio I"], semestre: "V Semestre" },
  { nombre: "Segundo Idioma III", requisitos: ["Segundo Idioma II"], semestre: "V Semestre" },
  { nombre: "Curso de Formación Integral III", requisitos: ["Curso de Formación Integral II"], semestre: "V Semestre" },

  { nombre: "Práctica II: Identidad Docente en Estrategias en TEFL", requisitos: ["Práctica I: Identidad Docente en Orientación y Jefatura"], semestre: "VI Semestre" },
  { nombre: "Estrategias Metodológicas en TEFL", requisitos: ["Fundamentos Lingüísticos en el Aprendizaje del Inglés como Lengua Extranjera"], semestre: "VI Semestre" },
  { nombre: "Fonética Inglesa Entonacional", requisitos: ["Fonética Inglesa Acentual"], semestre: "VI Semestre" },
  { nombre: "Gramática Inglesa: Oraciones Complejas y Estructuración de Información", requisitos: ["Gramática Inglesa: Oraciones Simples y Compuestas"], semestre: "VI Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Pre-Avanzado", requisitos: ["Discurso Oral de la Lengua Inglesa Post-Intermedio II"], semestre: "VI Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Pre-Avanzado", requisitos: ["Discurso Escrito de la Lengua Inglesa Post-Intermedio II"], semestre: "VI Semestre" },
  { nombre: "Introducción a la Literatura Inglesa", requisitos: [], semestre: "VI Semestre" },
  { nombre: "Curso de Formación Integral IV", requisitos: ["Curso de Formación Integral III"], semestre: "VI Semestre" },

  // Cuarto año
  { nombre: "Práctica III: Implementación en Estrategias en TEFL", requisitos: ["Práctica II: Identidad Docente en Estrategias en TEFL"], semestre: "VII Semestre" },
  { nombre: "Currículum en TEFL", requisitos: ["Gestión e Innovación Educativa"], semestre: "VII Semestre" },
  { nombre: "Diseños Metodológicos en TEFL", requisitos: ["Estrategias Metodológicas en TEFL"], semestre: "VII Semestre" },
  { nombre: "Clima de Aula y Competencias Socio-Afectivas", requisitos: ["Discurso Oral de la Lengua Inglesa Pre-Avanzado", "Discurso Escrito de la Lengua Inglesa Pre-Avanzado"], semestre: "VII Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Avanzado I", requisitos: ["Discurso Oral de la Lengua Inglesa Pre-Avanzado"], semestre: "VII Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Avanzado I", requisitos: ["Discurso Escrito de la Lengua Inglesa Pre-Avanzado"], semestre: "VII Semestre" },
  { nombre: "Hitos de la Literatura Inglesa: Género Narrativo", requisitos: ["Introducción a la Literatura Inglesa"], semestre: "VII Semestre" },
  { nombre: "Curso de Formación Integral IV", requisitos: ["Curso de Formación Integral IV"], semestre: "VII Semestre" },

  { nombre: "Práctica IV: Diseño y Evaluación en TEFL", requisitos: ["Práctica III: Implementación en Estrategias en TEFL"], semestre: "VIII Semestre" },
  { nombre: "Evaluación en TEFL", requisitos: ["Currículum en TEFL"], semestre: "VIII Semestre" },
  { nombre: "Seminario de Investigación Aplicada", requisitos: ["Principios Metodológicos de la Investigación"], semestre: "VIII Semestre" },
  { nombre: "Estrategias de Manejo de Aula", requisitos: ["Clima de Aula y Competencias Socio-Afectivas"], semestre: "VIII Semestre" },
  { nombre: "Discurso Oral de la Lengua Inglesa Avanzado II", requisitos: ["Discurso Oral de la Lengua Inglesa Avanzado I"], semestre: "VIII Semestre" },
  { nombre: "Discurso Escrito de la Lengua Inglesa Avanzado II", requisitos: ["Discurso Escrito de la Lengua Inglesa Avanzado I"], semestre: "VIII Semestre" },
  { nombre: "Hitos de la Literatura Inglesa: Poesía y Drama", requisitos: ["Hitos de la Literatura Inglesa: Género Narrativo"], semestre: "VIII Semestre" },

  // Quinto año
  { nombre: "Práctica Profesional", requisitos: [
    "Reflexión Crítica y Filosófica de los Procesos Educativos",
    "Psicología del Aprendizaje y Transformación Educativa",
    "Políticas Educacionales y Relaciones de Poder",
    "Civilización y Cultura de los Pueblos de Habla Inglesa II",
    "Segundo Idioma III",
    "Fonética Inglesa Entonacional",
    "Gramática Inglesa: Oraciones Complejas y Estructuración de Información",
    "Diseños Metodológicos en TEFL",
    "Clima de Aula y Competencias Socio-Afectivas",
    "Práctica IV: Diseño y Evaluación en TEFL",
    "Evaluación en TEFL",
    "Seminario de Investigación Aplicada",
    "Estrategias de Manejo de Aula",
    "Discurso Oral de la Lengua Inglesa Avanzado II",
    "Discurso Escrito de la Lengua Inglesa Avanzado II",
    "Hitos de la Literatura Inglesa: Poesía y Drama",
    "Curso de Formación Integral IV",
    "Fortalecimiento de Habilidades de Egreso"
  ], semestre: "IX Semestre" },
  { nombre: "Memoria o Seminario de Título", requisitos: [
    "Reflexión Crítica y Filosófica de los Procesos Educativos",
    "Psicología del Aprendizaje y Transformación Educativa",
    "Políticas Educacionales y Relaciones de Poder",
    "Civilización y Cultura de los Pueblos de Habla Inglesa II",
    "Segundo Idioma III",
    "Fonética Inglesa Entonacional",
    "Gramática Inglesa: Oraciones Complejas y Estructuración de Información",
    "Diseños Metodológicos en TEFL",
    "Clima de Aula y Competencias Socio-Afectivas",
    "Práctica IV: Diseño y Evaluación en TEFL",
    "Evaluación en TEFL",
    "Seminario de Investigación Aplicada",
    "Estrategias de Manejo de Aula",
    "Discurso Oral de la Lengua Inglesa Avanzado II",
    "Discurso Escrito de la Lengua Inglesa Avanzado II",
    "Hitos de la Literatura Inglesa: Poesía y Drama",
    "Curso de Formación Integral IV",
    "Fortalecimiento de Habilidades de Egreso"
  ], semestre: "IX Semestre" },
  { nombre: "Fortalecimiento de Habilidades de Egreso", requisitos: [
    "Reflexión Crítica y Filosófica de los Procesos Educativos",
    "Psicología del Aprendizaje y Transformación Educativa",
    "Políticas Educacionales y Relaciones de Poder",
    "Civilización y Cultura de los Pueblos de Habla Inglesa II",
    "Segundo Idioma III",
    "Fonética Inglesa Entonacional",
    "Gramática Inglesa: Oraciones Complejas y Estructuración de Información",
    "Diseños Metodológicos en TEFL",
    "Clima de Aula y Competencias Socio-Afectivas",
    "Práctica IV: Diseño y Evaluación en TEFL",
    "Evaluación en TEFL",
    "Seminario de Investigación Aplicada",
    "Estrategias de Manejo de Aula",
    "Discurso Oral de la Lengua Inglesa Avanzado II",
    "Discurso Escrito de la Lengua Inglesa Avanzado II",
    "Hitos de la Literatura Inglesa: Poesía y Drama",
    "Curso de Formación Integral IV"
  ], semestre: "IX Semestre" },
  { nombre: "Memoria, Seminario de Título o Tesis", requisitos: [
    "Reflexión Crítica y Filosófica de los Procesos Educativos",
    "Psicología del Aprendizaje y Transformación Educativa",
    "Políticas Educacionales y Relaciones de Poder",
    "Civilización y Cultura de los Pueblos de Habla Inglesa II",
    "Segundo Idioma III",
    "Fonética Inglesa Entonacional",
    "Gramática Inglesa: Oraciones Complejas y Estructuración de Información",
    "Diseños Metodológicos en TEFL",
    "Clima de Aula y Competencias Socio-Afectivas",
    "Práctica IV: Diseño y Evaluación en TEFL",
    "Evaluación en TEFL",
    "Seminario de Investigación Aplicada",
    "Estrategias de Manejo de Aula",
    "Discurso Oral de la Lengua Inglesa Avanzado II",
    "Discurso Escrito de la Lengua Inglesa Avanzado II",
    "Hitos de la Literatura Inglesa: Poesía y Drama",
    "Curso de Formación Integral IV"
  ], semestre: "X Semestre" }
];

// Estado: nombre del ramo → aprobado o no
function cargarEstado() {
  const guardado = localStorage.getItem('estadoMalla');
  if (guardado) {
    return JSON.parse(guardado);
  }
  const estadoInicial = {};
  ramos.forEach(ramo => estadoInicial[ramo.nombre] = false);
  return estadoInicial;
}

function guardarEstado(estado) {
  localStorage.setItem('estadoMalla', JSON.stringify(estado));
}

let estado = cargarEstado();

// Renderiza la malla agrupando por semestre
function renderMalla() {
  const mallaDiv = document.getElementById('malla');
  mallaDiv.innerHTML = '';

  // Agrupa por semestre
  const semestres = [...new Set(ramos.map(r => r.semestre))];
  semestres.forEach(sem => {
    // Título de semestre
    const semDiv = document.createElement('div');
    semDiv.className = 'semestre';
    semDiv.textContent = sem;
    mallaDiv.appendChild(semDiv);

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      // Verifica si está bloqueado (algún requisito no aprobado)
      const bloqueado = ramo.requisitos.length > 0 &&
        !ramo.requisitos.every(req => estado[req]);

      // Crea el cuadro del ramo
      const ramoDiv = document.createElement('div');
      ramoDiv.className = 'ramo';
      if (estado[ramo.nombre]) ramoDiv.classList.add('aprobado');
      if (bloqueado && !estado[ramo.nombre]) ramoDiv.classList.add('bloqueado');
      ramoDiv.textContent = ramo.nombre;

      // Agrega requisitos como subtítulo si existen
      if (ramo.requisitos.length > 0) {
        const reqDiv = document.createElement('div');
        reqDiv.className = 'requisitos';
        reqDiv.textContent = 'Requiere: ' + ramo.requisitos.join(', ');
        ramoDiv.appendChild(reqDiv);
      }

      // Click: permite aprobar y desaprobar si no está bloqueado
      if (!bloqueado) {
        ramoDiv.addEventListener('click', () => {
          estado[ramo.nombre] = !estado[ramo.nombre];
          guardarEstado(estado);
          renderMalla();
        });
      }

      mallaDiv.appendChild(ramoDiv);
    });
  });
}

// Inicializa la página
document.addEventListener('DOMContentLoaded', renderMalla);
