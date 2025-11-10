export const session3 = [
  {
    type: "single",
    question: "¿Qué hace un compilador?",
    options: [
      "Traduce el código fuente línea por línea en tiempo real",
      "Convierte todo el código fuente a lenguaje máquina antes de ejecutarse",
      "Ejecuta directamente instrucciones en memoria",
      "Controla procesos concurrentes"
    ],
    answer: "Convierte todo el código fuente a lenguaje máquina antes de ejecutarse",
    explanation: "El compilador produce un programa objeto antes de ejecutarse."
  },

  {
    type: "boolean",
    question: "Un intérprete ejecuta el código línea por línea directamente.",
    answer: true,
    explanation: "La interpretación evalúa cada instrucción en tiempo de ejecución."
  },

  {
    type: "multiple",
    question: "Selecciona ventajas de la compilación:",
    options: [
      "Mejor rendimiento",
      "Independencia total del sistema operativo",
      "Optimización del código",
      "Diagnóstico detallado durante ejecución"
    ],
    answer: ["Mejor rendimiento", "Optimización del código"],
    explanation: "La compilación suele ser más rápida al eliminar decisiones en tiempo de ejecución."
  },

  {
    type: "single",
    question: "¿Cuál es una ventaja de la interpretación?",
    options: [
      "Mayor velocidad",
      "Mejor diagnóstico y flexibilidad",
      "Generación de código objeto",
      "Uso mínimo de memoria"
    ],
    answer: "Mejor diagnóstico y flexibilidad",
    explanation: "Los intérpretes permiten mensajes de error más claros."
  },

  {
    type: "fill",
    question: "La primera fase del proceso de compilación suele ser el ____.",
    answer: "análisis léxico",
    explanation: "El análisis léxico convierte caracteres en tokens."
  },

  {
    type: "multiple",
    question: "¿Cuáles son fases de un compilador?",
    options: [
      "Análisis léxico",
      "Análisis sintáctico",
      "Análisis semántico",
      "Interpretación dinámica"
    ],
    answer: ["Análisis léxico", "Análisis sintáctico", "Análisis semántico"],
    explanation: "Estas forman parte clásica del front-end."
  },

  {
    type: "boolean",
    question: "El intérprete permanece en memoria durante la ejecución del programa.",
    answer: true,
    explanation: "Controla la ejecución directamente."
  },

  {
    type: "single",
    question: "¿Qué genera típicamente el compilador?",
    options: [
      "Código objeto",
      "Consultas lógicas",
      "Funciones puras",
      "Reglas de inferencia"
    ],
    answer: "Código objeto",
    explanation: "Es la salida típica para luego enlazar."
  },

  {
    type: "fill",
    question: "El análisis ____ verifica la estructura del programa mediante gramáticas.",
    answer: "sintáctico",
    explanation: "El parser valida la estructura del código."
  },

  {
    type: "single",
    question: "¿Qué etapa revisa que variables y tipos tengan sentido?",
    options: ["Léxico", "Sintáctico", "Semántico", "Código intermedio"],
    answer: "Semántico",
    explanation: "La fase semántica revisa consistencia lógica."
  },

  {
    type: "boolean",
    question: "La compilación suele producir una representación intermedia del programa.",
    answer: true,
    explanation: "El IR es común para optimización."
  },

  {
    type: "multiple",
    question: "Selecciona tareas del análisis léxico:",
    options: [
      "Eliminar comentarios",
      "Generar tokens",
      "Evaluar semántica",
      "Verificar tipos"
    ],
    answer: ["Eliminar comentarios", "Generar tokens"],
    explanation: "El léxico limpia entrada y produce tokens."
  },

  {
    type: "single",
    question: "¿Qué hace la optimización de código?",
    options: [
      "Reduce la complejidad del hardware",
      "Mejora el rendimiento sin alterar el resultado",
      "Aumenta el tamaño del programa",
      "Elimina funciones innecesarias automáticamente"
    ],
    answer: "Mejora el rendimiento sin alterar el resultado",
    explanation: "Optimiza el IR o el código."
  },

  {
    type: "boolean",
    question: "Un intérprete no produce código objeto.",
    answer: true,
    explanation: "Interpreta directamente."
  },

  {
    type: "fill",
    question: "La etapa de ____ genera un programa ensamblador o máquina.",
    answer: "generación de código",
    explanation: "Traduce IR a instrucciones finales."
  },

  {
    type: "match",
    question: "Relaciona cada fase del compilador:",
    pairs: {
      left: ["Análisis léxico", "Análisis sintáctico", "Análisis semántico"],
      right: ["Revisión de significado", "Tokenización", "Validación de estructura"]
    },
    answer: {
      "Análisis léxico": "Tokenización",
      "Análisis sintáctico": "Validación de estructura",
      "Análisis semántico": "Revisión de significado"
    },
    explanation: "Las fases del front-end se organizan así."
  },

  {
    type: "boolean",
    question: "El enlazador se encarga de unir código objeto y librerías.",
    answer: true,
    explanation: "Es el link-stage."
  },

  {
    type: "multiple",
    question: "Selecciona desventajas de la interpretación:",
    options: [
      "Menor rendimiento",
      "Mayor uso de memoria",
      "Dificultad para diagnosticar errores",
      "Necesita permanecer en memoria"
    ],
    answer: ["Menor rendimiento", "Necesita permanecer en memoria"],
    explanation: "La ejecución dinámica suele ser más lenta."
  },

  {
    type: "single",
    question: "El análisis sintáctico se basa en:",
    options: ["Árboles de derivación", "Relaciones lógicas", "Inferencias", "Funciones puras"],
    answer: "Árboles de derivación",
    explanation: "Construye el AST."
  },

  {
    type: "fill",
    question: "La representación intermedia suele abreviarse como ____.",
    answer: "IR",
    explanation: "Intermediate Representation."
  },

  {
    type: "boolean",
    question: "Un compilador desaparece después de generar el código objeto.",
    answer: true,
    explanation: "No participa en ejecución."
  },

  {
    type: "match",
    question: "Relaciona tecnología con su tipo:",
    pairs: {
      left: ["Python", "Java", "C"],
      right: ["Interpretado", "Compilado", "Bytecode"]
    },
    answer: {
      Python: "Interpretado",
      Java: "Bytecode",
      C: "Compilado"
    },
    explanation: "C es compilado, Java usa bytecode, Python usualmente interpretado."
  },

  {
    type: "single",
    question: "¿Cuál es una desventaja de la compilación?",
    options: ["Lentitud inicial por compilado", "Poco rendimiento", "Errores difíciles de detectar", "Dependencia de intérprete"],
    answer: "Lentitud inicial por compilado",
    explanation: "Compilar requiere tiempo previo."
  },

  {
    type: "boolean",
    question: "Un programa compilado suele ser más rápido que uno interpretado.",
    answer: true,
    explanation: "Se ejecuta directamente en máquina."
  },

  {
    type: "multiple",
    question: "Selecciona tareas comunes de los back-ends del compilador:",
    options: ["Optimización", "Generación de código", "Verificación de tipos", "Construcción del AST"],
    answer: ["Optimización", "Generación de código"],
    explanation: "Verificación y AST son tareas del front-end."
  },

  {
    type: "fill",
    question: "El análisis ____ comprueba consistencia lógica entre tipos y operaciones.",
    answer: "semántico",
    explanation: "Detecta errores como suma entre booleanos, etc."
  },

  {
    type: "boolean",
    question: "Un intérprete permite probar código rápidamente sin compilar.",
    answer: true,
    explanation: "Útil para prototipado."
  },

  {
    type: "single",
    question: "El preprocesamiento se encarga de:",
    options: [
      "Eliminar comentarios y macros",
      "Verificar reglas semánticas",
      "Optimizar IR",
      "Armar el árbol sintáctico"
    ],
    answer: "Eliminar comentarios y macros",
    explanation: "Es la primera etapa antes del análisis léxico."
  },

  {
    type: "match",
    question: "Empareja cada concepto:",
    pairs: {
      left: ["AST", "Tokens", "IR"],
      right: ["Representación intermedia", "Estructura sintáctica", "Unidades léxicas"]
    },
    answer: {
      AST: "Estructura sintáctica",
      Tokens: "Unidades léxicas",
      IR: "Representación intermedia"
    },
    explanation: "Son representaciones distintas del código."
  },

  {
    type: "multiple",
    question: "Selecciona desventajas de la interpretación:",
    options: [
      "Más lenta",
      "Debe permanecer en memoria",
      "No produce binarios portables",
      "La optimización es limitada"
    ],
    answer: ["Más lenta", "Debe permanecer en memoria", "La optimización es limitada"],
    explanation: "Interpretar implica decisiones en runtime."
  }
];
