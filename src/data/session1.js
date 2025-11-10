export const session1 = [
  {
    type: "single",
    question: "¿Qué es un lenguaje de programación?",
    options: [
      "Un conjunto de instrucciones para comunicarse con la máquina",
      "Un dispositivo físico que ejecuta código",
      "Una librería de funciones gráficas",
      "Un modelo matemático de computación"
    ],
    answer: "Un conjunto de instrucciones para comunicarse con la máquina",
    explanation: "Un lenguaje de programación sirve para indicar tareas a la computadora."
  },

  {
    type: "boolean",
    question: "Los lenguajes de bajo nivel están más cerca del hardware.",
    answer: true,
    explanation: "Los de bajo nivel se aproximan al lenguaje máquina."
  },

  {
    type: "single",
    question: "¿Cuál de los siguientes es un lenguaje de alto nivel?",
    options: ["Ensamblador", "Python", "Código máquina", "MARIE"],
    answer: "Python",
    explanation: "Python es altamente abstracto."
  },

  {
    type: "fill",
    question: "El lenguaje ____ es considerado de alto nivel y muy usado para aplicaciones científicas.",
    answer: "Python",
    explanation: "Python es versátil y ampliamente usado en desarrollo científico."
  },

  {
    type: "multiple",
    question: "¿Cuáles elementos definen un lenguaje de programación?",
    options: ["Sintaxis", "Semántica", "Hardware físico", "Estilos visuales"],
    answer: ["Sintaxis", "Semántica"],
    explanation: "Todo lenguaje define una sintaxis y semántica."
  },

  {
    type: "boolean",
    question: "Los lenguajes de alto nivel permiten mayor abstracción.",
    answer: true,
    explanation: "Se enfocan en lógica sin detalles del hardware."
  },

  {
    type: "single",
    question: "Una ventaja clave de la abstracción es:",
    options: [
      "Acercar el código al hardware",
      "Reducir el ruido y centrarse en la lógica",
      "Forzar un paradigma específico",
      "Hacer el código incomprensible"
    ],
    answer: "Reducir el ruido y centrarse en la lógica",
    explanation: "La abstracción aleja detalles técnicos."
  },

  {
    type: "multiple",
    question: "Selecciona lenguajes de bajo nivel:",
    options: ["C", "Assembly", "Python", "Java"],
    answer: ["C", "Assembly"],
    explanation: "C y Assembly son cercanos al hardware."
  },

  {
    type: "boolean",
    question: "Un lenguaje portable puede ejecutarse en varios sistemas.",
    answer: true,
    explanation: "Portabilidad implica independencia de plataforma."
  },

  {
    type: "fill",
    question: "El lenguaje ____ está considerado como de bajo nivel pero portable.",
    answer: "C",
    explanation: "C está cerca del hardware y es portable."
  },

  {
    type: "single",
    question: "La semántica de un lenguaje define:",
    options: ["Significado del programa", "El color del editor", "El tamaño de archivo", "Solo la sintaxis"],
    answer: "Significado del programa",
    explanation: "La semántica da significado a las estructuras sintácticas."
  },

  {
    type: "multiple",
    question: "¿Cuáles características pertenecen a lenguajes modernos?",
    options: ["Portabilidad", "Abstracción", "Dependencia total del hardware", "Poca sintaxis"],
    answer: ["Portabilidad", "Abstracción"],
    explanation: "Son propiedades fundamentales."
  },

  {
    type: "boolean",
    question: "La sintaxis determina la forma del código.",
    answer: true,
    explanation: "Es la estructura válida de instrucciones."
  },

  {
    type: "match",
    question: "Relaciona cada lenguaje según su categoría:",
    pairs: {
      left: ["C", "Java", "Assembly"],
      right: ["Alto nivel", "Muy bajo nivel", "Nivel intermedio"]
    },
    answer: {
      C: "Nivel intermedio",
      Java: "Alto nivel",
      Assembly: "Muy bajo nivel"
    },
    explanation: "Clasificación estándar de lenguajes."
  },

  {
    type: "single",
    question: "Un lenguaje de programación sirve para:",
    options: ["Describir algoritmos", "Administrar hardware", "Comprimir archivos", "Instalar sistemas"],
    answer: "Describir algoritmos",
    explanation: "Los lenguajes expresan algoritmos."
  },

  {
    type: "boolean",
    question: "Los lenguajes de máquina varían entre arquitecturas.",
    answer: true,
    explanation: "Cada arquitectura define su set de instrucciones."
  },

  {
    type: "multiple",
    question: "Identifica lenguajes con sintaxis simple:",
    options: ["Python", "Ruby", "Assembly", "C#"],
    answer: ["Python", "Ruby"],
    explanation: "Tienen sintaxis más limpia."
  },

  {
    type: "fill",
    question: "El nivel de un lenguaje depende de su proximidad al ____.",
    answer: "hardware",
    explanation: "Mayor cercanía implica menor nivel."
  },

  {
    type: "single",
    question: "¿Qué define la portabilidad en lenguajes?",
    options: [
      "Capacidad de reescribir código completamente",
      "Poder ejecutar código en múltiples plataformas",
      "Reducción estricta de sintaxis",
      "Uso obligatorio de intérpretes"
    ],
    answer: "Poder ejecutar código en múltiples plataformas",
    explanation: "Es la definición precisa."
  },

  {
    type: "boolean",
    question: "Un compilador incrementa por diseño la abstracción del programa.",
    answer: false,
    explanation: "Compilar no implica abstraer."
  },

  {
    type: "match",
    question: "Empareja conceptos clave:",
    pairs: {
      left: ["Sintaxis", "Semántica", "Abstracción"],
      right: ["Significado", "Estructura del código", "Ocultar detalles"]
    },
    answer: {
      Sintaxis: "Estructura del código",
      Semántica: "Significado",
      Abstracción: "Ocultar detalles"
    },
    explanation: "Fundamentos del diseño de lenguajes."
  },

  {
    type: "single",
    question: "¿Cuál NO es un lenguaje de programación?",
    options: ["HTML", "Python", "Java", "C#"],
    answer: "HTML",
    explanation: "HTML es un lenguaje de marcado."
  },

  {
    type: "boolean",
    question: "Mientras más alto el nivel del lenguaje, mayor es la abstracción.",
    answer: true,
    explanation: "Es una relación directa."
  },

  {
    type: "multiple",
    question: "¿Qué elementos mejoran la legibilidad del código?",
    options: ["Indentación clara", "Sintaxis limpia", "Comentarios", "Lenguaje máquina"],
    answer: ["Indentación clara", "Sintaxis limpia", "Comentarios"],
    explanation: "Estos factores ayudan a comprender el código."
  },

  {
    type: "fill",
    question: "El lenguaje ____ es famoso por su velocidad y cercanía al hardware.",
    answer: "C",
    explanation: "C es eficiente y próximo a bajo nivel."
  },

  {
    type: "single",
    question: "La sintaxis incorrecta produce:",
    options: ["Errores de compilación", "Errores lógicos", "Errores silenciosos", "Nada"],
    answer: "Errores de compilación",
    explanation: "La sintaxis define estructura válida."
  },

  {
    type: "boolean",
    question: "Los lenguajes de máquina son completamente dependientes de la arquitectura.",
    answer: true,
    explanation: "Cada CPU define su propio lenguaje."
  },

  {
    type: "single",
    question: "¿Cuál es una ventaja de los lenguajes altos?",
    options: [
      "Fáciles de aprender",
      "Mayor control sobre registros",
      "Más cercanos al hardware",
      "Menos abstracciones"
    ],
    answer: "Fáciles de aprender",
    explanation: "Abstracción permite facilidad de uso."
  },

  {
    type: "match",
    question: "Relaciona el nivel con su ejemplo:",
    pairs: {
      left: ["Alto nivel", "Bajo nivel", "Nivel medio"],
      right: ["Assembly", "Python", "C"]
    },
    answer: {
      "Alto nivel": "Python",
      "Bajo nivel": "Assembly",
      "Nivel medio": "C"
    },
    explanation: "Clasificación típica."
  },

  {
    type: "multiple",
    question: "Selecciona beneficios de los lenguajes modernos:",
    options: ["Productividad", "Portabilidad", "Abstracción", "Dependencia de hardware"],
    answer: ["Productividad", "Portabilidad", "Abstracción"],
    explanation: "Son características esenciales."
  }
];
