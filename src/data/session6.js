// src/data/session6.js
export const session6 = [
  // === SELECCIÓN SIMPLE ===
  {
    type: "single",
    question: "¿Qué es un entorno de ejecución en el contexto de los lenguajes de programación?",
    options: [
      "Un conjunto de bibliotecas externas",
      "La infraestructura que administra la ejecución de un programa",
      "Un compilador especializado para ejecutar código",
      "El conjunto de variables globales en un programa"
    ],
    answer: "La infraestructura que administra la ejecución de un programa",
    explanation: "El entorno de ejecución gestiona recursos, memoria y flujo de ejecución del programa."
  },
  {
    type: "single",
    question: "¿Cuál de las siguientes estructuras gestiona el almacenamiento temporal de variables locales?",
    options: ["Heap", "Pila", "Registro", "Buffer"],
    answer: "Pila",
    explanation: "La pila de ejecución se usa para almacenar variables locales y direcciones de retorno."
  },
  {
    type: "single",
    question: "¿Qué área de memoria se usa para almacenar objetos creados dinámicamente?",
    options: ["Stack", "Heap", "Registro", "ROM"],
    answer: "Heap",
    explanation: "El heap permite la asignación dinámica de memoria en tiempo de ejecución."
  },
  {
    type: "single",
    question: "¿Cuál es el propósito del recolector de basura (garbage collector)?",
    options: [
      "Liberar memoria ocupada por objetos no referenciados",
      "Aumentar la velocidad de ejecución del programa",
      "Eliminar variables locales automáticamente",
      "Evitar errores de sintaxis"
    ],
    answer: "Liberar memoria ocupada por objetos no referenciados",
    explanation: "El recolector de basura gestiona automáticamente la memoria no utilizada."
  },
  {
    type: "single",
    question: "¿Qué técnica de optimización busca evitar el cálculo repetido de expresiones?",
    options: [
      "Eliminación de subexpresiones comunes",
      "Expansión de bucles",
      "Propagación de constantes",
      "Reordenamiento de instrucciones"
    ],
    answer: "Eliminación de subexpresiones comunes",
    explanation: "Esta optimización evita recalcular valores que ya se conocen."
  },

  // === SELECCIÓN MÚLTIPLE ===
  {
    type: "multiple",
    question: "Selecciona las principales áreas de memoria usadas durante la ejecución de un programa.",
    options: ["Stack", "Heap", "Código", "Datos globales", "Cache L3"],
    answer: ["Stack", "Heap", "Código", "Datos globales"],
    explanation: "Estas son las secciones fundamentales en el modelo de memoria de un programa."
  },
  {
    type: "multiple",
    question: "Selecciona las tareas realizadas por un entorno de ejecución.",
    options: [
      "Gestión de memoria",
      "Carga de bibliotecas",
      "Manejo de excepciones",
      "Análisis sintáctico",
      "Interpretación o ejecución del código"
    ],
    answer: [
      "Gestión de memoria",
      "Carga de bibliotecas",
      "Manejo de excepciones",
      "Interpretación o ejecución del código"
    ],
    explanation: "El entorno de ejecución controla la memoria, las excepciones y la ejecución del programa."
  },
  {
    type: "multiple",
    question: "Selecciona ejemplos de optimización de código a nivel de compilador.",
    options: [
      "Eliminación de código muerto",
      "Desenrollamiento de bucles",
      "Cambio de estilo de codificación",
      "Propagación de constantes"
    ],
    answer: [
      "Eliminación de código muerto",
      "Desenrollamiento de bucles",
      "Propagación de constantes"
    ],
    explanation: "Estas técnicas mejoran el rendimiento del programa generado."
  },
  {
    type: "multiple",
    question: "Selecciona los beneficios de la recolección automática de basura.",
    options: [
      "Reduce fugas de memoria",
      "Simplifica la administración de memoria",
      "Elimina errores lógicos",
      "Evita accesos a memoria liberada"
    ],
    answer: [
      "Reduce fugas de memoria",
      "Simplifica la administración de memoria",
      "Evita accesos a memoria liberada"
    ],
    explanation: "La gestión automática de memoria previene errores comunes en la asignación manual."
  },

  // === VERDADERO / FALSO ===
  {
    type: "boolean",
    question: "El recolector de basura se ejecuta manualmente por el programador.",
    answer: false,
    explanation: "El recolector se activa automáticamente en entornos gestionados como Java o .NET."
  },
  {
    type: "boolean",
    question: "El heap es más rápido que la pila en operaciones de acceso.",
    answer: false,
    explanation: "El acceso al heap es más lento debido a su naturaleza dinámica."
  },
  {
    type: "boolean",
    question: "La optimización de código puede realizarse tanto en compiladores como en intérpretes.",
    answer: true,
    explanation: "Ambos pueden optimizar el rendimiento mediante distintas técnicas."
  },
  {
    type: "boolean",
    question: "En la memoria estática se almacenan variables globales y constantes.",
    answer: true,
    explanation: "Las variables globales y constantes se ubican en la región de datos estáticos."
  },
  {
    type: "boolean",
    question: "La propagación de constantes es una técnica de análisis léxico.",
    answer: false,
    explanation: "Es una técnica de optimización, no de análisis léxico."
  },

  // === COMPLETAR ===
  {
    type: "fill",
    question: "El área de memoria donde se almacenan variables locales se llama ________.",
    answer: "pila",
    explanation: "La pila o stack contiene variables locales y direcciones de retorno."
  },
  {
    type: "fill",
    question: "El proceso de recuperar memoria no utilizada se conoce como ________.",
    answer: "recolección de basura",
    explanation: "También llamado garbage collection."
  },
  {
    type: "fill",
    question: "Las variables creadas dinámicamente se almacenan en la región llamada ________.",
    answer: "heap",
    explanation: "El heap se usa para asignaciones dinámicas de memoria."
  },
  {
    type: "fill",
    question: "La técnica que reemplaza variables constantes directamente en el código se llama ________.",
    answer: "propagación de constantes",
    explanation: "Esta técnica reduce el número de operaciones en tiempo de ejecución."
  },
  {
    type: "fill",
    question: "La estructura que mantiene información sobre las funciones activas se denomina ________.",
    answer: "pila de ejecución",
    explanation: "Contiene los registros de activación de cada función en ejecución."
  },

  // === EMPAREJAR ===
  {
    type: "match",
    question: "Relaciona el segmento de memoria con su función.",
    pairs: {
      left: ["Código", "Datos", "Heap", "Stack"],
      right: [
        "Contiene las instrucciones del programa",
        "Guarda variables globales y estáticas",
        "Almacena objetos dinámicos",
        "Guarda variables locales y direcciones de retorno"
      ]
    },
    answer: {
      "Código": "Contiene las instrucciones del programa",
      "Datos": "Guarda variables globales y estáticas",
      "Heap": "Almacena objetos dinámicos",
      "Stack": "Guarda variables locales y direcciones de retorno"
    },
    explanation: "Cada segmento tiene una función específica dentro del modelo de memoria."
  },
  {
    type: "match",
    question: "Relaciona la técnica de optimización con su descripción.",
    pairs: {
      left: [
        "Eliminación de código muerto",
        "Propagación de constantes",
        "Desenrollamiento de bucles",
        "Reordenamiento de instrucciones"
      ],
      right: [
        "Suprime instrucciones que nunca se ejecutan",
        "Reemplaza variables constantes por sus valores",
        "Duplica iteraciones para reducir saltos",
        "Reorganiza código para mejorar rendimiento"
      ]
    },
    answer: {
      "Eliminación de código muerto": "Suprime instrucciones que nunca se ejecutan",
      "Propagación de constantes": "Reemplaza variables constantes por sus valores",
      "Desenrollamiento de bucles": "Duplica iteraciones para reducir saltos",
      "Reordenamiento de instrucciones": "Reorganiza código para mejorar rendimiento"
    },
    explanation: "Estas optimizaciones son comunes en compiladores modernos."
  },
  {
    type: "match",
    question: "Empareja el componente del entorno de ejecución con su función.",
    pairs: {
      left: ["Loader", "Linker", "Runtime", "JIT Compiler"],
      right: [
        "Carga el programa en memoria",
        "Combina módulos y bibliotecas",
        "Administra ejecución y memoria dinámica",
        "Optimiza código en tiempo de ejecución"
      ]
    },
    answer: {
      "Loader": "Carga el programa en memoria",
      "Linker": "Combina módulos y bibliotecas",
      "Runtime": "Administra ejecución y memoria dinámica",
      "JIT Compiler": "Optimiza código en tiempo de ejecución"
    },
    explanation: "Estos componentes forman parte del ciclo de ejecución en sistemas modernos."
  }
];
