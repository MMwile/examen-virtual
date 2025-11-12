export const session5 = [
  {
    type: "single",
    question: "¿Cuál es el objetivo principal de la fase de compilación?",
    options: [
      "Transformar código fuente en un programa ejecutable",
      "Depurar errores en tiempo de ejecución",
      "Ejecutar código directamente sin análisis",
      "Simplificar la interfaz de usuario"
    ],
    answer: "Transformar código fuente en un programa ejecutable",
    explanation: "El proceso de compilación traduce y prepara el código fuente para su ejecución."
  },

  {
    type: "boolean",
    question: "Las primeras fases del compilador conforman el front-end.",
    answer: true,
    explanation: "Incluyen análisis léxico, sintáctico y semántico."
  },

  {
    type: "fill",
    question: "El front-end de un compilador se encarga de analizar el significado del ____ fuente.",
    answer: "programa",
    explanation: "El front-end comprende el código fuente y genera representaciones intermedias."
  },

  {
    type: "multiple",
    question: "Selecciona las fases que forman parte del proceso de compilación:",
    options: [
      "Análisis léxico",
      "Análisis sintáctico",
      "Generación de código intermedio",
      "Ejecución en máquina virtual"
    ],
    answer: ["Análisis léxico", "Análisis sintáctico", "Generación de código intermedio"],
    explanation: "Estas son fases fundamentales del proceso de compilación."
  },

  {
    type: "boolean",
    question: "Un pase puede contener una o varias fases del compilador.",
    answer: true,
    explanation: "Los pases agrupan fases secuenciales dentro del proceso de compilación."
  },

  {
    type: "single",
    question: "¿Qué tarea realiza el análisis léxico?",
    options: [
      "Agrupa caracteres en tokens",
      "Verifica tipos de datos",
      "Genera el código máquina",
      "Optimiza la memoria"
    ],
    answer: "Agrupa caracteres en tokens",
    explanation: "El escáner convierte caracteres en unidades significativas llamadas tokens."
  },

  {
    type: "fill",
    question: "El análisis léxico también se conoce como ____.",
    answer: "escaneo",
    explanation: "El escaneo identifica y agrupa los símbolos del código fuente."
  },

  {
    type: "boolean",
    question: "El escáner elimina comentarios y caracteres innecesarios del código fuente.",
    answer: true,
    explanation: "Esto simplifica la tarea del analizador sintáctico."
  },

  {
    type: "single",
    question: "¿Qué produce el análisis sintáctico?",
    options: [
      "Árbol de análisis sintáctico",
      "Código de máquina",
      "Tabla de símbolos",
      "Ejecutable optimizado"
    ],
    answer: "Árbol de análisis sintáctico",
    explanation: "El parser organiza los tokens en estructuras jerárquicas basadas en la gramática."
  },

  {
    type: "multiple",
    question: "Selecciona características de una gramática libre de contexto:",
    options: [
      "Define la sintaxis del lenguaje",
      "Utiliza reglas recursivas",
      "Representa la semántica de ejecución",
      "Permite árboles sintácticos"
    ],
    answer: ["Define la sintaxis del lenguaje", "Utiliza reglas recursivas", "Permite árboles sintácticos"],
    explanation: "Las gramáticas libres de contexto definen cómo se construyen las estructuras válidas."
  },

  {
    type: "boolean",
    question: "El análisis sintáctico comprueba el significado del programa.",
    answer: false,
    explanation: "Solo verifica la estructura sintáctica; el significado lo analiza la semántica."
  },

  {
    type: "single",
    question: "¿Qué estructura usa el compilador para registrar información de los identificadores?",
    options: ["Tabla de símbolos", "Árbol binario", "Pila de ejecución", "Heap"],
    answer: "Tabla de símbolos",
    explanation: "La tabla de símbolos almacena los identificadores, sus tipos y ámbitos."
  },

  {
    type: "fill",
    question: "El análisis que determina el significado del código se llama análisis ____.",
    answer: "semántico",
    explanation: "El análisis semántico valida el uso coherente de los identificadores y tipos."
  },

  {
    type: "boolean",
    question: "El analizador semántico puede verificar si un identificador se usa antes de ser declarado.",
    answer: true,
    explanation: "Esta es una de las funciones clave de la fase semántica."
  },

  {
    type: "multiple",
    question: "Selecciona reglas que se verifican durante el análisis semántico:",
    options: [
      "Cada identificador debe declararse antes de usarse",
      "El número y tipo de argumentos debe coincidir",
      "Las variables pueden usarse sin valor asignado",
      "El tipo de retorno debe coincidir con la función"
    ],
    answer: [
      "Cada identificador debe declararse antes de usarse",
      "El número y tipo de argumentos debe coincidir",
      "El tipo de retorno debe coincidir con la función"
    ],
    explanation: "El analizador semántico garantiza la coherencia lógica del programa."
  },

  {
    type: "single",
    question: "¿Qué estructura genera el analizador semántico a partir del árbol de análisis?",
    options: ["Árbol de sintaxis abstracta (AST)", "Código máquina", "Diagrama UML", "Árbol binario sin nodos"],
    answer: "Árbol de sintaxis abstracta (AST)",
    explanation: "El AST elimina detalles innecesarios del árbol de análisis concreto."
  },

  {
    type: "fill",
    question: "El árbol de sintaxis abstracta se conoce comúnmente por sus siglas ____. ",
    answer: "AST",
    explanation: "AST significa Abstract Syntax Tree."
  },

  {
    type: "boolean",
    question: "El árbol de análisis y el árbol de sintaxis abstracta contienen exactamente la misma información.",
    answer: false,
    explanation: "El AST es una versión simplificada del árbol de análisis."
  },

  {
    type: "single",
    question: "¿Qué fase transforma el árbol sintáctico en código intermedio?",
    options: ["Generación de código intermedio", "Optimización", "Preprocesamiento", "Escaneo"],
    answer: "Generación de código intermedio",
    explanation: "Esta fase crea una representación ideal para el back-end del compilador."
  },

  {
    type: "multiple",
    question: "Selecciona características del código intermedio:",
    options: [
      "Puede ser compartido entre varios compiladores",
      "Es independiente de la máquina",
      "Se asemeja al ensamblador",
      "Es ejecutable directamente"
    ],
    answer: [
      "Puede ser compartido entre varios compiladores",
      "Es independiente de la máquina",
      "Se asemeja al ensamblador"
    ],
    explanation: "El código intermedio facilita la portabilidad y modularidad del compilador."
  },

  {
    type: "boolean",
    question: "El generador de código traduce la forma intermedia al lenguaje de destino.",
    answer: true,
    explanation: "Esta fase convierte el AST o código intermedio en código máquina o ensamblador."
  },

  {
    type: "single",
    question: "¿Qué fase asigna ubicaciones de memoria a las variables?",
    options: ["Generación de código", "Análisis léxico", "Optimización", "Semántica dinámica"],
    answer: "Generación de código",
    explanation: "El generador de código recorre la tabla de símbolos y asigna direcciones a las variables."
  },

  {
    type: "fill",
    question: "La fase de mejora del código también se conoce como ____.",
    answer: "optimización",
    explanation: "Busca mejorar la eficiencia del código sin alterar su resultado."
  },

  {
    type: "boolean",
    question: "La optimización garantiza un código perfecto en términos absolutos.",
    answer: false,
    explanation: "Rara vez produce un código óptimo en sentido absoluto; solo mejora el existente."
  },

  {
    type: "single",
    question: "¿Qué tipo de optimización requiere conocimiento del hardware de destino?",
    options: [
      "Optimización dependiente de máquina",
      "Optimización independiente de máquina",
      "Optimización léxica",
      "Optimización estática"
    ],
    answer: "Optimización dependiente de máquina",
    explanation: "Algunas optimizaciones dependen de la arquitectura del procesador."
  },

  {
    type: "multiple",
    question: "Selecciona fases típicas del back-end del compilador:",
    options: [
      "Generación de código intermedio",
      "Generación de código de destino",
      "Optimización de código",
      "Análisis léxico"
    ],
    answer: ["Generación de código de destino", "Optimización de código"],
    explanation: "El back-end se centra en producir y mejorar el código ejecutable."
  },

  {
    type: "fill",
    question: "Las reglas semánticas que solo se pueden verificar en ejecución pertenecen a la semántica ____. ",
    answer: "dinámica",
    explanation: "La semántica dinámica requiere validación en tiempo de ejecución."
  },

  {
    type: "match",
    question: "Relaciona cada fase con su propósito:",
    pairs: {
      left: [
        "Análisis léxico",
        "Análisis sintáctico",
        "Análisis semántico",
        "Generación de código",
        "Optimización"
      ],
      right: [
        "Agrupa caracteres en tokens",
        "Construye el árbol de análisis",
        "Comprueba el significado del programa",
        "Traduce a lenguaje de destino",
        "Mejora el rendimiento"
      ]
    },
    answer: {
      "Análisis léxico": "Agrupa caracteres en tokens",
      "Análisis sintáctico": "Construye el árbol de análisis",
      "Análisis semántico": "Comprueba el significado del programa",
      "Generación de código": "Traduce a lenguaje de destino",
      "Optimización": "Mejora el rendimiento"
    },
    explanation: "Resumen de las fases del compilador y sus funciones principales."
  }
];
