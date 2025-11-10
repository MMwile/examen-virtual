// src/data/session4.js
export const session4 = [
  // === SELECCIÓN SIMPLE ===
  {
    type: "single",
    question: "¿Cuál es el objetivo principal del análisis léxico en un compilador?",
    options: [
      "Traducir código fuente a código máquina directamente",
      "Convertir secuencias de caracteres en tokens significativos",
      "Optimizar el rendimiento del programa",
      "Analizar la estructura gramatical del código fuente"
    ],
    answer: "Convertir secuencias de caracteres en tokens significativos",
    explanation: "El análisis léxico identifica los componentes básicos (tokens) del código fuente, como palabras clave, identificadores y operadores."
  },
  {
    type: "single",
    question: "¿Qué estructura de datos se utiliza típicamente para implementar una pila de ejecución en un lenguaje de programación?",
    options: ["Cola", "Lista enlazada", "Árbol binario", "Pila"],
    answer: "Pila",
    explanation: "La pila de ejecución guarda el contexto de llamadas a funciones, permitiendo el control del flujo de ejecución."
  },
  {
    type: "single",
    question: "¿Qué hace un analizador sintáctico (parser)?",
    options: [
      "Ejecuta el programa",
      "Verifica la estructura del código fuente según la gramática",
      "Optimiza el código intermedio",
      "Traduce directamente a lenguaje máquina"
    ],
    answer: "Verifica la estructura del código fuente según la gramática",
    explanation: "El parser valida la estructura sintáctica de las expresiones de acuerdo con las reglas del lenguaje."
  },
  {
    type: "single",
    question: "¿Cuál de los siguientes NO es un tipo de error detectado durante la compilación?",
    options: ["Error léxico", "Error sintáctico", "Error semántico", "Error lógico"],
    answer: "Error lógico",
    explanation: "Los errores lógicos no son detectados por el compilador; se evidencian durante la ejecución."
  },
  {
    type: "single",
    question: "¿Qué componente del compilador se encarga de verificar los tipos de datos?",
    options: [
      "Analizador léxico",
      "Analizador sintáctico",
      "Analizador semántico",
      "Generador de código"
    ],
    answer: "Analizador semántico",
    explanation: "El análisis semántico asegura que las operaciones sean válidas para los tipos de datos involucrados."
  },

  // === SELECCIÓN MÚLTIPLE ===
  {
    type: "multiple",
    question: "Selecciona las fases que componen un compilador tradicional.",
    options: [
      "Análisis léxico",
      "Análisis sintáctico",
      "Análisis semántico",
      "Depuración",
      "Generación de código"
    ],
    answer: [
      "Análisis léxico",
      "Análisis sintáctico",
      "Análisis semántico",
      "Generación de código"
    ],
    explanation: "Un compilador incluye estas fases principales: léxico, sintáctico, semántico y generación de código."
  },
  {
    type: "multiple",
    question: "Selecciona los tipos de gramáticas válidas en el contexto de lenguajes formales.",
    options: [
      "Gramática regular",
      "Gramática libre de contexto",
      "Gramática sensible al contexto",
      "Gramática dependiente del tiempo"
    ],
    answer: [
      "Gramática regular",
      "Gramática libre de contexto",
      "Gramática sensible al contexto"
    ],
    explanation: "Las gramáticas de Chomsky clasifican los lenguajes según su complejidad."
  },
  {
    type: "multiple",
    question: "Selecciona los tipos de errores que un analizador semántico puede detectar.",
    options: [
      "Uso de variables no declaradas",
      "Asignaciones de tipo incompatible",
      "Falta de punto y coma",
      "Invocaciones de funciones con argumentos incorrectos"
    ],
    answer: [
      "Uso de variables no declaradas",
      "Asignaciones de tipo incompatible",
      "Invocaciones de funciones con argumentos incorrectos"
    ],
    explanation: "Los errores semánticos se relacionan con el significado y uso de los elementos del programa."
  },
  {
    type: "multiple",
    question: "Selecciona las ventajas del análisis sintáctico descendente.",
    options: [
      "Es fácil de implementar",
      "Funciona bien con gramáticas recursivas por la izquierda",
      "Permite una interpretación más rápida",
      "Se puede combinar con el análisis léxico"
    ],
    answer: ["Es fácil de implementar", "Se puede combinar con el análisis léxico"],
    explanation: "El análisis descendente es simple y puede integrarse con el análisis léxico (como en los parsers recursivos)."
  },

  // === VERDADERO / FALSO ===
  {
    type: "boolean",
    question: "El análisis semántico ocurre antes del análisis sintáctico.",
    answer: false,
    explanation: "Primero se analiza la estructura (sintaxis) y luego el significado (semántica)."
  },
  {
    type: "boolean",
    question: "Un autómata finito determinista puede reconocer cualquier lenguaje libre de contexto.",
    answer: false,
    explanation: "Los autómatas finitos solo reconocen lenguajes regulares."
  },
  {
    type: "boolean",
    question: "Un compilador puede generar código intermedio independiente de la máquina destino.",
    answer: true,
    explanation: "El código intermedio facilita la portabilidad entre distintas arquitecturas."
  },
  {
    type: "boolean",
    question: "El analizador sintáctico utiliza las reglas gramaticales para construir árboles de derivación.",
    answer: true,
    explanation: "El parser genera un árbol sintáctico según las reglas de la gramática."
  },
  {
    type: "boolean",
    question: "Las expresiones regulares pueden describir lenguajes no regulares.",
    answer: false,
    explanation: "Por definición, las expresiones regulares describen exactamente los lenguajes regulares."
  },

  // === COMPLETAR ===
  {
    type: "fill",
    question: "El proceso de convertir código fuente a código máquina se conoce como ________.",
    answer: "compilación",
    explanation: "La compilación transforma el código de alto nivel en un formato ejecutable."
  },
  {
    type: "fill",
    question: "El árbol que representa la estructura gramatical de una sentencia se llama ________.",
    answer: "árbol sintáctico",
    explanation: "El árbol sintáctico o de derivación refleja la estructura jerárquica del código."
  },
  {
    type: "fill",
    question: "El conjunto de reglas que define la estructura del lenguaje se denomina ________.",
    answer: "gramática",
    explanation: "Una gramática especifica la sintaxis del lenguaje."
  },
  {
    type: "fill",
    question: "La fase del compilador que traduce el código intermedio a código máquina es la ________.",
    answer: "generación de código",
    explanation: "La generación de código produce el programa ejecutable final."
  },
  {
    type: "fill",
    question: "Los analizadores léxicos reconocen patrones definidos por ________.",
    answer: "expresiones regulares",
    explanation: "Los tokens se identifican mediante expresiones regulares."
  },

  // === EMPAREJAR ===
  {
    type: "match",
    question: "Relaciona la fase del compilador con su función principal.",
    pairs: {
      left: ["Análisis léxico", "Análisis sintáctico", "Análisis semántico", "Generación de código"],
      right: [
        "Verifica la estructura gramatical",
        "Traduce a código máquina",
        "Valida tipos de datos y significado",
        "Identifica tokens"
      ]
    },
    answer: {
      "Análisis léxico": "Identifica tokens",
      "Análisis sintáctico": "Verifica la estructura gramatical",
      "Análisis semántico": "Valida tipos de datos y significado",
      "Generación de código": "Traduce a código máquina"
    },
    explanation: "Cada fase del compilador tiene una función específica en la traducción del código fuente."
  },
  {
    type: "match",
    question: "Relaciona el tipo de error con el ejemplo correspondiente.",
    pairs: {
      left: ["Error léxico", "Error sintáctico", "Error semántico", "Error lógico"],
      right: [
        "Uso de variable no declarada",
        "Olvido de un punto y coma",
        "Suma de número con texto",
        "División por cero no controlada"
      ]
    },
    answer: {
      "Error léxico": "Suma de número con texto",
      "Error sintáctico": "Olvido de un punto y coma",
      "Error semántico": "Uso de variable no declarada",
      "Error lógico": "División por cero no controlada"
    },
    explanation: "Cada tipo de error se detecta en una fase distinta del proceso de compilación o ejecución."
  },
  {
    type: "match",
    question: "Empareja el concepto con su definición.",
    pairs: {
      left: ["Token", "Gramática", "Producción", "Símbolo terminal"],
      right: [
        "Unidad básica del análisis léxico",
        "Conjunto de reglas de derivación",
        "Regla que define cómo se deriva una sentencia",
        "Elemento del alfabeto del lenguaje"
      ]
    },
    answer: {
      "Token": "Unidad básica del análisis léxico",
      "Gramática": "Conjunto de reglas de derivación",
      "Producción": "Regla que define cómo se deriva una sentencia",
      "Símbolo terminal": "Elemento del alfabeto del lenguaje"
    },
    explanation: "Estos son los elementos básicos de la teoría de lenguajes formales."
  }
];
