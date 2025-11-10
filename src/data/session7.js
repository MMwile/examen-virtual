// src/data/session7.js
export const session7 = [
  // === SELECCIÓN SIMPLE ===
  {
    type: "single",
    question: "¿Qué representa la raíz de un árbol de análisis sintáctico?",
    options: [
      "El símbolo inicial de la gramática",
      "El primer token del programa",
      "El último símbolo derivado",
      "Una hoja terminal"
    ],
    answer: "El símbolo inicial de la gramática",
    explanation: "La raíz del árbol de análisis corresponde al símbolo inicial desde el cual se genera toda la derivación."
  },
  {
    type: "single",
    question: "¿Qué indica el metasímbolo ⇒ en una derivación?",
    options: [
      "La sustitución de un símbolo no terminal por una producción",
      "El fin de la derivación",
      "Una operación aritmética",
      "Una ambigüedad en la gramática"
    ],
    answer: "La sustitución de un símbolo no terminal por una producción",
    explanation: "⇒ se usa para mostrar que se ha aplicado una producción a un símbolo no terminal."
  },
  {
    type: "single",
    question: "¿Cómo se llama el proceso de reemplazar no terminales por producciones hasta obtener solo terminales?",
    options: ["Derivación", "Optimización", "Compilación", "Ejecución"],
    answer: "Derivación",
    explanation: "Una derivación es la secuencia de reemplazos que genera una cadena válida del lenguaje."
  },
  {
    type: "single",
    question: "¿Qué indica que una gramática es ambigua?",
    options: [
      "Que produce más de un árbol de análisis para una cadena",
      "Que contiene símbolos terminales repetidos",
      "Que tiene producciones recursivas",
      "Que no genera ninguna cadena"
    ],
    answer: "Que produce más de un árbol de análisis para una cadena",
    explanation: "La ambigüedad ocurre cuando una misma cadena puede derivarse de múltiples formas."
  },
  {
    type: "single",
    question: "¿Cuál es la forma sentencial final en una derivación?",
    options: [
      "La que contiene solo símbolos terminales",
      "La primera forma generada",
      "La más a la derecha",
      "La que contiene solo no terminales"
    ],
    answer: "La que contiene solo símbolos terminales",
    explanation: "La forma sentencial final es aquella compuesta únicamente por terminales."
  },

  // === SELECCIÓN MÚLTIPLE ===
  {
    type: "multiple",
    question: "Selecciona los elementos que componen una derivación.",
    options: [
      "Símbolo inicial",
      "Producciones aplicadas",
      "Formas sentenciales intermedias",
      "Árbol de ejecución"
    ],
    answer: [
      "Símbolo inicial",
      "Producciones aplicadas",
      "Formas sentenciales intermedias"
    ],
    explanation: "Una derivación incluye el símbolo inicial, las producciones y las formas intermedias."
  },
  {
    type: "multiple",
    question: "Selecciona las afirmaciones verdaderas sobre árboles de análisis sintáctico.",
    options: [
      "Las hojas son símbolos terminales",
      "Cada nodo interno representa una producción",
      "La raíz corresponde a un token",
      "Pueden representar derivaciones más a la izquierda o más a la derecha"
    ],
    answer: [
      "Las hojas son símbolos terminales",
      "Cada nodo interno representa una producción",
      "Pueden representar derivaciones más a la izquierda o más a la derecha"
    ],
    explanation: "El árbol refleja la estructura derivacional del programa según las reglas gramaticales."
  },
  {
    type: "multiple",
    question: "Selecciona las formas de derivación posibles en una gramática libre de contexto.",
    options: [
      "Derivación más a la izquierda",
      "Derivación más a la derecha",
      "Derivación mixta",
      "Derivación circular"
    ],
    answer: [
      "Derivación más a la izquierda",
      "Derivación más a la derecha",
      "Derivación mixta"
    ],
    explanation: "Una derivación puede tomar distintas estrategias según el no terminal que se expanda."
  },
  {
    type: "multiple",
    question: "Selecciona las consecuencias de una gramática ambigua.",
    options: [
      "Múltiples árboles de análisis para la misma cadena",
      "Dificultad para construir un parser determinista",
      "Menor eficiencia de ejecución",
      "Inconsistencias en la interpretación del código"
    ],
    answer: [
      "Múltiples árboles de análisis para la misma cadena",
      "Dificultad para construir un parser determinista",
      "Inconsistencias en la interpretación del código"
    ],
    explanation: "La ambigüedad complica la construcción de analizadores sintácticos fiables."
  },

  // === VERDADERO / FALSO ===
  {
    type: "boolean",
    question: "Una derivación más a la izquierda expande siempre el no terminal más a la derecha.",
    answer: false,
    explanation: "Por definición, una derivación más a la izquierda expande el no terminal más a la izquierda."
  },
  {
    type: "boolean",
    question: "Una gramática puede ser ambigua y aun así generar un lenguaje válido.",
    answer: true,
    explanation: "La ambigüedad no impide generar cadenas válidas; solo dificulta el análisis sintáctico."
  },
  {
    type: "boolean",
    question: "El árbol de análisis sintáctico es único para cada cadena del lenguaje.",
    answer: false,
    explanation: "Solo las gramáticas no ambiguas producen un árbol único por cadena."
  },
  {
    type: "boolean",
    question: "El metasímbolo ⇒* significa derivación en cero o más pasos.",
    answer: true,
    explanation: "⇒* representa una secuencia de cero o más derivaciones aplicadas."
  },
  {
    type: "boolean",
    question: "Las hojas del árbol de análisis representan símbolos terminales.",
    answer: true,
    explanation: "Las hojas son el resultado final de las derivaciones: los terminales del lenguaje."
  },

  // === COMPLETAR ===
  {
    type: "fill",
    question: "Una ________ muestra cómo se generan las cadenas de un lenguaje a partir del símbolo inicial.",
    answer: "gramática libre de contexto",
    explanation: "La gramática define las reglas para derivar cadenas sintácticamente válidas."
  },
  {
    type: "fill",
    question: "Una secuencia de reemplazos de no terminales se denomina ________.",
    answer: "derivación",
    explanation: "La derivación transforma paso a paso el símbolo inicial en una cadena terminal."
  },
  {
    type: "fill",
    question: "El conjunto de símbolos que resultan después de cada paso de una derivación se llama forma ________.",
    answer: "sentencial",
    explanation: "Cada estado intermedio de una derivación es una forma sentencial."
  },
  {
    type: "fill",
    question: "Cuando una gramática permite más de un árbol para la misma cadena, se dice que es ________.",
    answer: "ambigua",
    explanation: "Una gramática ambigua produce múltiples árboles sintácticos para una misma entrada."
  },
  {
    type: "fill",
    question: "El proceso de representar gráficamente las derivaciones se realiza mediante un árbol de ________.",
    answer: "análisis sintáctico",
    explanation: "El árbol de análisis muestra visualmente las producciones aplicadas en la derivación."
  },

  // === EMPAREJAR ===
  {
    type: "match",
    question: "Relaciona el término con su descripción.",
    pairs: {
      left: ["Derivación", "Forma sentencial", "Árbol de análisis", "Ambigüedad"],
      right: [
        "Secuencia de sustituciones de no terminales",
        "Cadena intermedia generada durante el análisis",
        "Representación jerárquica de una derivación",
        "Múltiples árboles posibles para una misma cadena"
      ]
    },
    answer: {
      "Derivación": "Secuencia de sustituciones de no terminales",
      "Forma sentencial": "Cadena intermedia generada durante el análisis",
      "Árbol de análisis": "Representación jerárquica de una derivación",
      "Ambigüedad": "Múltiples árboles posibles para una misma cadena"
    },
    explanation: "Estos conceptos son fundamentales para comprender la estructura sintáctica del lenguaje."
  },
  {
    type: "match",
    question: "Relaciona la estrategia de derivación con su descripción.",
    pairs: {
      left: ["Más a la izquierda", "Más a la derecha", "Mixta", "Canónica"],
      right: [
        "Expande siempre el no terminal más a la izquierda",
        "Expande siempre el no terminal más a la derecha",
        "Alterna entre distintos no terminales",
        "Derivación más a la derecha empleada comúnmente por analizadores"
      ]
    },
    answer: {
      "Más a la izquierda": "Expande siempre el no terminal más a la izquierda",
      "Más a la derecha": "Expande siempre el no terminal más a la derecha",
      "Mixta": "Alterna entre distintos no terminales",
      "Canónica": "Derivación más a la derecha empleada comúnmente por analizadores"
    },
    explanation: "Los analizadores suelen usar la derivación canónica más a la derecha para procesar cadenas."
  },
  {
    type: "match",
    question: "Empareja los elementos del árbol con su función.",
    pairs: {
      left: ["Raíz", "Nodo interno", "Hoja", "Producción"],
      right: [
        "Símbolo inicial de la gramática",
        "Representa un no terminal reemplazado",
        "Símbolo terminal obtenido",
        "Regla usada para generar hijos del nodo"
      ]
    },
    answer: {
      "Raíz": "Símbolo inicial de la gramática",
      "Nodo interno": "Representa un no terminal reemplazado",
      "Hoja": "Símbolo terminal obtenido",
      "Producción": "Regla usada para generar hijos del nodo"
    },
    explanation: "Cada parte del árbol corresponde a un componente de la gramática aplicada en la derivación."
  }
];
