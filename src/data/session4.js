export const session4 = [
  {
    type: "single",
    question: "¿Cuál es la función principal de un compilador?",
    options: [
      "Traducir código fuente a lenguaje de máquina",
      "Ejecutar instrucciones línea por línea",
      "Almacenar programas en memoria",
      "Controlar los recursos del sistema"
    ],
    answer: "Traducir código fuente a lenguaje de máquina",
    explanation: "El compilador convierte el código fuente a un formato ejecutable."
  },

  {
    type: "boolean",
    question: "Los intérpretes ejecutan el código línea por línea sin generar un archivo ejecutable.",
    answer: true,
    explanation: "Los intérpretes traducen y ejecutan instrucciones en tiempo real."
  },

  {
    type: "single",
    question: "¿Qué hace el preprocesador en el lenguaje C?",
    options: [
      "Ejecuta el programa directamente",
      "Elimina comentarios y expande macros",
      "Traduce el código a lenguaje máquina",
      "Optimiza el rendimiento en tiempo de ejecución"
    ],
    answer: "Elimina comentarios y expande macros",
    explanation: "El preprocesador C limpia y prepara el código antes de compilarlo."
  },

  {
    type: "multiple",
    question: "Selecciona las etapas del ciclo de vida de un programa compilado:",
    options: ["Preprocesamiento", "Compilación", "Ensamblado", "Ejecución directa sin traducción"],
    answer: ["Preprocesamiento", "Compilación", "Ensamblado"],
    explanation: "Estas etapas son esenciales en la generación de un ejecutable."
  },

  {
    type: "fill",
    question: "El proceso de traducción de un lenguaje de alto nivel a otro se llama ____.",
    answer: "traducción de código fuente a código fuente",
    explanation: "Algunos compiladores, como los antiguos de C++, generaban código en C como paso intermedio."
  },

  {
    type: "boolean",
    question: "Los compiladores de C++ antiguos generaban código C como salida intermedia.",
    answer: true,
    explanation: "Era un enfoque común en las primeras implementaciones del compilador de AT&T."
  },

  {
    type: "single",
    question: "¿Qué concepto describe el proceso de un compilador que compila su propio código?",
    options: ["Microcódigo", "Bootstrapping", "Preprocesamiento", "Traducción cruzada"],
    answer: "Bootstrapping",
    explanation: "El bootstrapping ocurre cuando un compilador se ejecuta y compila a sí mismo."
  },

  {
    type: "fill",
    question: "El lenguaje intermedio común usado por .NET se denomina ____. ",
    answer: "CIL",
    explanation: "CIL significa Common Intermediate Language, utilizado en .NET."
  },

  {
    type: "boolean",
    question: "El término 'preprocesador' se usa correctamente para describir el compilador de C++ original.",
    answer: false,
    explanation: "Ese compilador analizaba la semántica y no solo transformaba el texto."
  },

  {
    type: "multiple",
    question: "¿Cuáles son ventajas de usar intérpretes?",
    options: [
      "Ejecución inmediata tras cambios",
      "Mejores diagnósticos en tiempo de ejecución",
      "Mayor velocidad que los compiladores",
      "Menor consumo de recursos"
    ],
    answer: ["Ejecución inmediata tras cambios", "Mejores diagnósticos en tiempo de ejecución"],
    explanation: "Los intérpretes son útiles durante la fase de desarrollo y depuración."
  },

  {
    type: "single",
    question: "¿Qué caracteriza a los compiladores just-in-time (JIT)?",
    options: [
      "Compilan el código completo antes de ejecutarlo",
      "Compilan el código justo antes de su ejecución",
      "Solo interpretan sin compilar",
      "Depuran código máquina directamente"
    ],
    answer: "Compilan el código justo antes de su ejecución",
    explanation: "El JIT traduce bytecode a lenguaje máquina en tiempo real."
  },

  {
    type: "boolean",
    question: "El microcódigo (firmware) se ejecuta directamente sobre el hardware.",
    answer: true,
    explanation: "El microcódigo controla operaciones de bajo nivel del hardware."
  },

  {
    type: "match",
    question: "Relaciona cada término con su descripción:",
    pairs: {
      left: ["Compilador", "Intérprete", "Bootstrapping", "CIL"],
      right: [
        "Traduce código fuente a ejecutable",
        "Ejecuta código línea por línea",
        "Compilación de un compilador con su propio código",
        "Lenguaje intermedio en .NET"
      ]
    },
    answer: {
      "Compilador": "Traduce código fuente a ejecutable",
      "Intérprete": "Ejecuta código línea por línea",
      "Bootstrapping": "Compilación de un compilador con su propio código",
      "CIL": "Lenguaje intermedio en .NET"
    },
    explanation: "Términos clave de compilación e interpretación."
  },

  {
    type: "fill",
    question: "El código intermedio de Java se llama ____. ",
    answer: "bytecode",
    explanation: "El bytecode es el formato independiente de la máquina para la JVM."
  },

  {
    type: "single",
    question: "¿Qué lenguaje utiliza un compilador JIT?",
    options: ["Java", "C", "Pascal", "Assembly"],
    answer: "Java",
    explanation: "Java usa un compilador JIT para traducir bytecode en tiempo de ejecución."
  },

  {
    type: "multiple",
    question: "Selecciona lenguajes que usan compilación JIT:",
    options: ["C#", "Java", "Python", "Prolog"],
    answer: ["C#", "Java"],
    explanation: "Ambos usan compilación JIT para mejorar la eficiencia de ejecución."
  },

  {
    type: "boolean",
    question: "Un compilador siempre traduce directamente a lenguaje máquina.",
    answer: false,
    explanation: "Puede generar lenguajes intermedios como C o bytecode."
  },

  {
    type: "single",
    question: "¿Qué permite la recopilación dinámica?",
    options: [
      "Ejecución sin compilación",
      "Compilación retrasada hasta el momento de ejecución",
      "Ejecución en hardware dedicado",
      "Depuración automática"
    ],
    answer: "Compilación retrasada hasta el momento de ejecución",
    explanation: "La compilación dinámica ocurre justo antes de la ejecución."
  },

  {
    type: "fill",
    question: "El compilador de C++ de AT&T generaba código intermedio en el lenguaje ____. ",
    answer: "C",
    explanation: "El código en C servía como paso intermedio antes del ensamblado final."
  },

  {
    type: "boolean",
    question: "El código-P en Pascal fue diseñado como un lenguaje basado en pila.",
    answer: true,
    explanation: "El código-P era un lenguaje intermedio simple basado en pila."
  },

  {
    type: "single",
    question: "¿Qué beneficio tenía el uso del código-P en los compiladores de Pascal?",
    options: [
      "Aumentar el tamaño de los programas",
      "Simplificar la portabilidad y depuración",
      "Eliminar la necesidad del intérprete",
      "Evitar la compilación cruzada"
    ],
    answer: "Simplificar la portabilidad y depuración",
    explanation: "El código-P permitía ejecutar programas en diversas plataformas mediante un intérprete."
  },

  {
    type: "multiple",
    question: "Selecciona características del bootstrapping:",
    options: [
      "Permite al compilador compilarse a sí mismo",
      "Requiere un intérprete inicial",
      "Depende de código intermedio",
      "No necesita preprocesamiento"
    ],
    answer: ["Permite al compilador compilarse a sí mismo", "Requiere un intérprete inicial"],
    explanation: "El bootstrapping usa un compilador inicial y luego genera versiones nativas."
  },

  {
    type: "fill",
    question: "El lenguaje de descripción de páginas PostScript se interpreta en las ____ láser.",
    answer: "impresoras",
    explanation: "Las impresoras láser contienen intérpretes PostScript integrados."
  },

  {
    type: "boolean",
    question: "SQL puede considerarse un lenguaje compilado porque se traduce a operaciones sobre archivos.",
    answer: true,
    explanation: "Los procesadores de consultas de bases de datos actúan como compiladores SQL."
  },

  {
    type: "single",
    question: "¿Qué ejemplo representa compilación cruzada?",
    options: [
      "Compilar un programa en C para ejecutarlo en otra arquitectura",
      "Interpretar código línea por línea en la misma máquina",
      "Generar bytecode de Java para la JVM",
      "Ejecutar un script Python directamente"
    ],
    answer: "Compilar un programa en C para ejecutarlo en otra arquitectura",
    explanation: "La compilación cruzada permite compilar para una máquina diferente a la del compilador."
  },

  {
    type: "multiple",
    question: "Selecciona ejemplos de compiladores según el texto:",
    options: ["TEX", "troff", "SQL", "PostScript"],
    answer: ["TEX", "troff", "SQL"],
    explanation: "Estos sistemas traducen descripciones o consultas en comandos o ejecuciones concretas."
  },

  {
    type: "single",
    question: "¿Qué componente ejecuta las instrucciones del microcódigo?",
    options: ["Hardware", "Intérprete externo", "Compilador", "Sistema operativo"],
    answer: "Hardware",
    explanation: "El microcódigo se ejecuta directamente en el hardware desde memoria ROM."
  },

  {
    type: "fill",
    question: "El microcódigo también se conoce como ____. ",
    answer: "firmware",
    explanation: "Firmware es el término común para el microcódigo almacenado en ROM."
  },

  {
    type: "match",
    question: "Relaciona el lenguaje con su forma intermedia:",
    pairs: {
      left: ["Java", "C#", "Pascal"],
      right: ["Bytecode", "CIL", "Código-P"]
    },
    answer: {
      "Java": "Bytecode",
      "C#": "CIL",
      "Pascal": "Código-P"
    },
    explanation: "Cada lenguaje utiliza su propio formato intermedio de ejecución."
  }
];
