export const session7 = [
  {
    type: "single",
    question: "¿Qué muestra una gramática libre de contexto?",
    options: [
      "Cómo generar una cadena sintácticamente válida",
      "Cómo ejecutar código máquina directamente",
      "Cómo optimizar un compilador",
      "Cómo traducir un lenguaje de alto nivel"
    ],
    answer: "Cómo generar una cadena sintácticamente válida",
    explanation: "Una GLC define cómo derivar cadenas válidas a partir del símbolo inicial."
  },

  {
    type: "boolean",
    question: "El símbolo de inicio en una gramática libre de contexto se reemplaza por producciones para generar cadenas.",
    answer: true,
    explanation: "Ese es el punto de partida del proceso de derivación."
  },

  {
    type: "fill",
    question: "El metasímbolo ____ se usa para indicar que una producción ha reemplazado un no terminal.",
    answer: "⇒",
    explanation: "El símbolo ⇒ representa el proceso de derivación en una gramática."
  },

  {
    type: "single",
    question: "¿Qué indica una derivación en un análisis sintáctico?",
    options: [
      "Una secuencia de reemplazos de no terminales",
      "Una secuencia de ejecuciones del programa",
      "Un error de compilación",
      "Una traducción semántica"
    ],
    answer: "Una secuencia de reemplazos de no terminales",
    explanation: "Cada paso reemplaza símbolos no terminales por sus producciones."
  },

  {
    type: "multiple",
    question: "Selecciona los tipos de derivación mencionados en la teoría:",
    options: ["Más a la derecha", "Más a la izquierda", "Simétrica", "Intermedia"],
    answer: ["Más a la derecha", "Más a la izquierda", "Intermedia"],
    explanation: "Las derivaciones pueden realizarse en diferentes órdenes según el símbolo reemplazado."
  },

  {
    type: "boolean",
    question: "La derivación más a la derecha también se llama derivación canónica.",
    answer: true,
    explanation: "Es un tipo estándar de derivación utilizada en analizadores."
  },

  {
    type: "single",
    question: "¿Qué representa el rendimiento (yield) de una derivación?",
    options: [
      "La forma sentencial final compuesta solo por terminales",
      "La primera producción aplicada",
      "El árbol sintáctico intermedio",
      "El símbolo inicial de la gramática"
    ],
    answer: "La forma sentencial final compuesta solo por terminales",
    explanation: "El rendimiento es la cadena final sin símbolos no terminales."
  },

  {
    type: "multiple",
    question: "¿Qué elementos forman parte de un árbol de análisis sintáctico?",
    options: ["Raíz", "Nodos internos", "Hojas", "Compilador"],
    answer: ["Raíz", "Nodos internos", "Hojas"],
    explanation: "Estos componentes representan producciones y terminales."
  },

  {
    type: "boolean",
    question: "La raíz del árbol de análisis representa el símbolo inicial de la gramática.",
    answer: true,
    explanation: "De ahí parte toda la estructura derivada."
  },

  {
    type: "fill",
    question: "Cada nodo interno de un árbol de análisis representa el uso de una ___.",
    answer: "producción",
    explanation: "Cada producción aplicada genera nuevos nodos."
  },

  {
    type: "single",
    question: "¿Qué indica que una gramática es ambigua?",
    options: [
      "Una cadena tiene más de un árbol de análisis posible",
      "Una producción no puede aplicarse",
      "El símbolo inicial no genera terminales",
      "No existen derivaciones posibles"
    ],
    answer: "Una cadena tiene más de un árbol de análisis posible",
    explanation: "La ambigüedad implica múltiples estructuras válidas."
  },

  {
    type: "boolean",
    question: "La ambigüedad de una gramática puede generar problemas en la construcción del analizador.",
    answer: true,
    explanation: "Provoca múltiples interpretaciones para una misma entrada."
  },

  {
    type: "single",
    question: "¿Qué estrategia de derivación sigue el reemplazo del símbolo no terminal más a la derecha?",
    options: [
      "Derivación canónica",
      "Derivación más a la izquierda",
      "Derivación ambigua",
      "Derivación abstracta"
    ],
    answer: "Derivación canónica",
    explanation: "Es la derivación estándar empleada por muchos analizadores."
  },

  {
    type: "multiple",
    question: "Selecciona los términos relacionados con las derivaciones:",
    options: ["Forma sentencial", "Producción", "Símbolo inicial", "Compilador"],
    answer: ["Forma sentencial", "Producción", "Símbolo inicial"],
    explanation: "Son los elementos que intervienen en el proceso de derivación."
  },

  {
    type: "boolean",
    question: "El árbol de análisis muestra visualmente cómo se generan las cadenas desde la gramática.",
    answer: true,
    explanation: "Cada rama representa una aplicación de producción."
  },

  {
    type: "fill",
    question: "Una serie de operaciones de reemplazo desde el símbolo de inicio se llama ___.",
    answer: "derivación",
    explanation: "Así se denomina el proceso de generación de cadenas."
  },

  {
    type: "single",
    question: "¿Qué simboliza el metasímbolo ⇒*?",
    options: [
      "Rinde después de cero o más reemplazos",
      "Representa una derivación inválida",
      "Marca un error sintáctico",
      "Indica un paso único"
    ],
    answer: "Rinde después de cero o más reemplazos",
    explanation: "⇒* significa derivación en múltiples pasos."
  },

  {
    type: "boolean",
    question: "Si una cadena tiene solo una forma sentencial posible, la gramática es no ambigua.",
    answer: true,
    explanation: "Una única estructura elimina la ambigüedad."
  },

  {
    type: "single",
    question: "¿Qué muestran las hojas del árbol de análisis sintáctico?",
    options: [
      "Los símbolos terminales generados",
      "Los símbolos no terminales iniciales",
      "Las reglas de derivación",
      "Los errores sintácticos"
    ],
    answer: "Los símbolos terminales generados",
    explanation: "Son el resultado final del proceso de derivación."
  },

  {
    type: "multiple",
    question: "¿Qué indica la existencia de múltiples árboles de análisis para una misma cadena?",
    options: [
      "Ambigüedad",
      "Errores semánticos",
      "Redundancia de producción",
      "Dependencia del compilador"
    ],
    answer: ["Ambigüedad"],
    explanation: "Significa que hay más de una interpretación válida."
  },

  {
    type: "fill",
    question: "La gramática que genera más de un árbol de análisis para la misma cadena es ____.",
    answer: "ambigua",
    explanation: "Esa es la definición formal de ambigüedad."
  },

  {
    type: "boolean",
    question: "Las derivaciones más a la izquierda siempre producen el mismo resultado que las más a la derecha.",
    answer: false,
    explanation: "No siempre, especialmente en gramáticas ambiguas."
  },

  {
    type: "single",
    question: "¿Qué representan las formas sentenciales intermedias?",
    options: [
      "Cadenas con símbolos terminales y no terminales",
      "Errores del compilador",
      "El código ejecutable",
      "Una gramática sin producciones"
    ],
    answer: "Cadenas con símbolos terminales y no terminales",
    explanation: "Son los pasos intermedios en una derivación."
  },

  {
    type: "multiple",
    question: "Selecciona las características del árbol sintáctico:",
    options: [
      "Raíz como símbolo inicial",
      "Producciones como nodos internos",
      "Hojas terminales",
      "Independencia semántica"
    ],
    answer: ["Raíz como símbolo inicial", "Producciones como nodos internos", "Hojas terminales"],
    explanation: "Estos son sus componentes básicos."
  },

  {
    type: "boolean",
    question: "La ambigüedad es irrelevante para el análisis sintáctico.",
    answer: false,
    explanation: "Puede afectar la interpretación y la construcción del analizador."
  },

  {
    type: "single",
    question: "¿Cuál de los siguientes términos se asocia con el análisis sintáctico?",
    options: ["Derivación", "Semántica", "Compilador", "Tokenización"],
    answer: "Derivación",
    explanation: "Es el proceso de generación de cadenas según la gramática."
  },

  {
    type: "fill",
    question: "El árbol de análisis representa la estructura ____ de una oración.",
    answer: "sintáctica",
    explanation: "Refleja cómo se organizan los símbolos según las reglas gramaticales."
  },

  {
    type: "match",
    question: "Relaciona los conceptos con sus definiciones:",
    pairs: {
      left: ["Derivación", "Forma sentencial", "Rendimiento", "Ambigüedad"],
      right: [
        "Proceso de reemplazos",
        "Cadena intermedia",
        "Cadena final de terminales",
        "Múltiples árboles posibles"
      ]
    },
    answer: {
      "Derivación": "Proceso de reemplazos",
      "Forma sentencial": "Cadena intermedia",
      "Rendimiento": "Cadena final de terminales",
      "Ambigüedad": "Múltiples árboles posibles"
    },
    explanation: "Cada término tiene un papel específico en el análisis sintáctico."
  },

  {
    type: "boolean",
    question: "Los analizadores sintácticos suelen buscar una derivación más a la derecha o más a la izquierda.",
    answer: true,
    explanation: "Estas estrategias son las más comunes en parsers."
  },

  {
    type: "single",
    question: "¿Qué provoca la ambigüedad en una gramática?",
    options: [
      "Más de una manera de derivar una cadena válida",
      "Falta de producciones",
      "Ausencia del símbolo inicial",
      "Errores de compilación"
    ],
    answer: "Más de una manera de derivar una cadena válida",
    explanation: "Es la definición formal de ambigüedad en GLC."
  }
];
