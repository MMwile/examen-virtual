export const session6 = [
  {
    type: "single",
    question: "¿Qué estudia la sintaxis en un lenguaje de programación?",
    options: [
      "La estructura formal del código",
      "El significado del programa",
      "El flujo de ejecución del hardware",
      "La eficiencia del compilador"
    ],
    answer: "La estructura formal del código",
    explanation: "La sintaxis define cómo deben organizarse los elementos del lenguaje."
  },

  {
    type: "boolean",
    question: "La semántica describe la forma del código, mientras que la sintaxis describe su significado.",
    answer: false,
    explanation: "Es al revés: la sintaxis describe la forma y la semántica el significado."
  },

  {
    type: "fill",
    question: "La notación formal usada para definir la sintaxis de un lenguaje se llama ____. ",
    answer: "gramática",
    explanation: "Las gramáticas formales describen las reglas sintácticas del lenguaje."
  },

  {
    type: "multiple",
    question: "Selecciona las razones por las que es importante distinguir entre sintaxis y semántica:",
    options: [
      "Facilita el aprendizaje de nuevos lenguajes",
      "Permite analizar estructuras sin interpretar significado",
      "Aumenta la velocidad de compilación",
      "Evita ambigüedades entre forma y función"
    ],
    answer: [
      "Facilita el aprendizaje de nuevos lenguajes",
      "Permite analizar estructuras sin interpretar significado",
      "Evita ambigüedades entre forma y función"
    ],
    explanation: "Separar sintaxis y semántica mejora la claridad y el análisis del lenguaje."
  },

  {
    type: "boolean",
    question: "Los lenguajes formales eliminan la posibilidad de ambigüedades en la interpretación del código.",
    answer: true,
    explanation: "El objetivo de la formalidad es especificar reglas sin ambigüedad."
  },

  {
    type: "single",
    question: "¿Qué símbolo representa la repetición en las expresiones regulares?",
    options: ["|", "*", "+", "?"],
    answer: "*",
    explanation: "La estrella de Kleene (*) indica repetición cero o más veces."
  },

  {
    type: "fill",
    question: "El símbolo que representa una o más repeticiones en EBNF se conoce como ____. ",
    answer: "Kleene plus",
    explanation: "El operador + indica una o más repeticiones."
  },

  {
    type: "boolean",
    question: "Las expresiones regulares permiten definir construcciones anidadas.",
    answer: false,
    explanation: "Las construcciones anidadas requieren gramáticas libres de contexto, no expresiones regulares."
  },

  {
    type: "single",
    question: "¿Qué tipo de lenguaje se genera al añadir recursión a las reglas formales?",
    options: [
      "Lenguaje regular",
      "Lenguaje libre de contexto",
      "Lenguaje dinámico",
      "Lenguaje semántico"
    ],
    answer: "Lenguaje libre de contexto",
    explanation: "La recursión define los lenguajes libres de contexto, base de las gramáticas."
  },

  {
    type: "multiple",
    question: "Selecciona los operadores básicos de las expresiones regulares:",
    options: ["Concatenación", "Alternancia", "Cierre de Kleene", "Recursión"],
    answer: ["Concatenación", "Alternancia", "Cierre de Kleene"],
    explanation: "Estos tres operadores son los fundamentales para construir lenguajes regulares."
  },

  {
    type: "boolean",
    question: "El cierre de Kleene permite repetir un patrón un número arbitrario de veces.",
    answer: true,
    explanation: "Es el operador de repetición en las expresiones regulares."
  },

  {
    type: "fill",
    question: "Las expresiones regulares son utilizadas por los ____ para reconocer patrones de tokens.",
    answer: "escáneres",
    explanation: "El escáner usa expresiones regulares para detectar los tokens de un programa."
  },

  {
    type: "single",
    question: "¿Qué estructura no puede ser definida por expresiones regulares?",
    options: [
      "Identificadores simples",
      "Comentarios",
      "Paréntesis anidados",
      "Números enteros"
    ],
    answer: "Paréntesis anidados",
    explanation: "Requieren reglas recursivas, por lo tanto, gramáticas libres de contexto."
  },

  {
    type: "boolean",
    question: "Los lenguajes regulares son más expresivos que los libres de contexto.",
    answer: false,
    explanation: "Los lenguajes libres de contexto tienen mayor poder expresivo que los regulares."
  },

  {
    type: "multiple",
    question: "Selecciona ejemplos de tokens típicos en lenguajes de programación:",
    options: ["Palabras clave", "Identificadores", "Números", "Espacios en blanco significativos"],
    answer: ["Palabras clave", "Identificadores", "Números"],
    explanation: "Los tokens son unidades léxicas como identificadores o símbolos, no espacios en blanco."
  },

  {
    type: "fill",
    question: "El conjunto de tokens y sus reglas se describe mediante ____ regulares.",
    answer: "expresiones",
    explanation: "Las expresiones regulares definen los patrones de tokens."
  },

  {
    type: "boolean",
    question: "Los espacios en blanco generalmente se ignoran por el analizador léxico.",
    answer: true,
    explanation: "Solo se usan para separar tokens y no afectan la estructura sintáctica."
  },

  {
    type: "single",
    question: "¿Qué significa que un lenguaje tenga un formato libre?",
    options: [
      "Que no tiene reglas de sintaxis",
      "Que ignora la posición física de los tokens",
      "Que todos los tokens deben estar en la misma línea",
      "Que no distingue entre mayúsculas y minúsculas"
    ],
    answer: "Que ignora la posición física de los tokens",
    explanation: "El formato libre se refiere a que el orden importa, pero no la ubicación en el texto."
  },

  {
    type: "multiple",
    question: "Selecciona los elementos que componen una gramática libre de contexto:",
    options: ["Terminales", "No terminales", "Producciones", "Símbolo inicial"],
    answer: ["Terminales", "No terminales", "Producciones", "Símbolo inicial"],
    explanation: "Estos cuatro elementos definen completamente una CFG."
  },

  {
    type: "boolean",
    question: "Los terminales pueden aparecer en el lado izquierdo de una producción.",
    answer: false,
    explanation: "Solo los no terminales aparecen en el lado izquierdo de una producción."
  },

  {
    type: "fill",
    question: "El símbolo del lado izquierdo de una producción se llama ____. ",
    answer: "no terminal",
    explanation: "Los no terminales representan construcciones sintácticas que se expanden en reglas."
  },

  {
    type: "single",
    question: "¿Qué notación se utiliza comúnmente para expresar gramáticas libres de contexto?",
    options: ["Forma Backus-Naur (BNF)", "Expresiones regulares", "Kleene algebra", "Lenguaje natural"],
    answer: "Forma Backus-Naur (BNF)",
    explanation: "BNF es la notación estándar para especificar gramáticas formales."
  },

  {
    type: "boolean",
    question: "BNF y EBNF tienen el mismo poder expresivo.",
    answer: true,
    explanation: "EBNF agrega conveniencia sintáctica, pero no aumenta la capacidad expresiva."
  },

  {
    type: "fill",
    question: "EBNF añade operadores como ____ para una o más repeticiones.",
    answer: "+",
    explanation: "El operador '+' indica una o más repeticiones en la notación extendida."
  },

  {
    type: "multiple",
    question: "Selecciona ventajas de la notación BNF y EBNF:",
    options: [
      "Claridad formal",
      "Definición no ambigua",
      "Facilidad para generar analizadores",
      "Aumento del rendimiento del compilador"
    ],
    answer: ["Claridad formal", "Definición no ambigua", "Facilidad para generar analizadores"],
    explanation: "BNF proporciona una base formal clara para la definición de lenguajes."
  },

  {
    type: "single",
    question: "¿Qué representa el símbolo de inicio en una gramática?",
    options: [
      "El token final del programa",
      "La construcción general del lenguaje",
      "El identificador más frecuente",
      "El terminal raíz del árbol"
    ],
    answer: "La construcción general del lenguaje",
    explanation: "El símbolo inicial define el punto de partida de todas las derivaciones."
  },

  {
    type: "boolean",
    question: "Los analizadores sintácticos distinguen entre diferentes identificadores según su ortografía.",
    answer: false,
    explanation: "El analizador semántico se encarga de esa distinción, no el sintáctico."
  },

  {
    type: "fill",
    question: "La capacidad de definir una construcción en términos de sí misma se conoce como ____. ",
    answer: "recursión",
    explanation: "La recursión permite construir estructuras sintácticas complejas."
  },

  {
    type: "match",
    question: "Relaciona los conceptos con su definición:",
    pairs: {
      left: ["Lenguaje regular", "Lenguaje libre de contexto", "Expresión regular", "Gramática BNF"],
      right: [
        "Define patrones de tokens mediante operadores básicos",
        "Permite estructuras anidadas con recursión",
        "Conjunto de cadenas generadas sin semántica",
        "Usa reglas de producción con no terminales y terminales"
      ]
    },
    answer: {
      "Expresión regular": "Define patrones de tokens mediante operadores básicos",
      "Lenguaje libre de contexto": "Permite estructuras anidadas con recursión",
      "Lenguaje regular": "Conjunto de cadenas generadas sin semántica",
      "Gramática BNF": "Usa reglas de producción con no terminales y terminales"
    },
    explanation: "Resumen de los conceptos fundamentales sobre sintaxis formal."
  }
];
