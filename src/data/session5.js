// src/data/session5.js
export const session5 = [
  // === SELECCIÓN SIMPLE ===
  {
    type: "single",
    question: "¿Cuál es el propósito principal del análisis semántico en un compilador?",
    options: [
      "Detectar errores de gramática",
      "Verificar la corrección de tipos y significados en el código",
      "Optimizar el rendimiento del programa",
      "Generar código intermedio"
    ],
    answer: "Verificar la corrección de tipos y significados en el código",
    explanation: "El análisis semántico valida que las operaciones del programa sean coherentes con los tipos y declaraciones."
  },
  {
    type: "single",
    question: "¿Qué paradigma de programación se basa en la composición de funciones sin estado ni efectos secundarios?",
    options: [
      "Programación estructurada",
      "Programación funcional",
      "Programación lógica",
      "Programación orientada a objetos"
    ],
    answer: "Programación funcional",
    explanation: "El paradigma funcional se basa en funciones puras y evita cambios de estado."
  },
  {
    type: "single",
    question: "¿Cuál de los siguientes lenguajes es un ejemplo de lenguaje funcional?",
    options: ["Python", "Lisp", "C++", "Java"],
    answer: "Lisp",
    explanation: "Lisp fue uno de los primeros lenguajes diseñados para el paradigma funcional."
  },
  {
    type: "single",
    question: "¿Qué característica distingue principalmente la programación lógica?",
    options: [
      "Uso de clases y objetos",
      "Declaración de hechos y reglas",
      "Estructuras de control secuencial",
      "Encapsulación de datos"
    ],
    answer: "Declaración de hechos y reglas",
    explanation: "La programación lógica se basa en expresar relaciones mediante hechos y reglas lógicas."
  },
  {
    type: "single",
    question: "¿Qué estructura de datos representa mejor una base de conocimiento en Prolog?",
    options: ["Árbol binario", "Hechos y reglas", "Lista enlazada", "Tabla hash"],
    answer: "Hechos y reglas",
    explanation: "Prolog organiza el conocimiento en hechos y reglas lógicas para hacer inferencias."
  },

  // === SELECCIÓN MÚLTIPLE ===
  {
    type: "multiple",
    question: "Selecciona los paradigmas de programación más comunes.",
    options: [
      "Imperativo",
      "Funcional",
      "Lógico",
      "Declarativo",
      "Cuántico"
    ],
    answer: ["Imperativo", "Funcional", "Lógico", "Declarativo"],
    explanation: "Los paradigmas más estudiados son imperativo, funcional, lógico y declarativo."
  },
  {
    type: "multiple",
    question: "Selecciona las características de la programación orientada a objetos.",
    options: [
      "Herencia",
      "Encapsulación",
      "Inmutabilidad",
      "Polimorfismo"
    ],
    answer: ["Herencia", "Encapsulación", "Polimorfismo"],
    explanation: "Estos son pilares fundamentales del paradigma orientado a objetos."
  },
  {
    type: "multiple",
    question: "Selecciona los elementos semánticos que el compilador debe verificar.",
    options: [
      "Tipos de datos en expresiones",
      "Uso de variables no declaradas",
      "Errores de indentación",
      "Cantidad de parámetros en funciones"
    ],
    answer: [
      "Tipos de datos en expresiones",
      "Uso de variables no declaradas",
      "Cantidad de parámetros en funciones"
    ],
    explanation: "El análisis semántico detecta estos errores de significado y coherencia del código."
  },
  {
    type: "multiple",
    question: "Selecciona los beneficios de la programación funcional.",
    options: [
      "Evita efectos secundarios",
      "Facilita la depuración",
      "Favorece el paralelismo",
      "Depende del orden de ejecución"
    ],
    answer: [
      "Evita efectos secundarios",
      "Facilita la depuración",
      "Favorece el paralelismo"
    ],
    explanation: "Las funciones puras mejoran la confiabilidad y paralelización del código."
  },

  // === VERDADERO / FALSO ===
  {
    type: "boolean",
    question: "En la programación funcional las variables son mutables por defecto.",
    answer: false,
    explanation: "Las variables son inmutables; su valor no cambia una vez asignado."
  },
  {
    type: "boolean",
    question: "El análisis semántico se realiza después del análisis sintáctico.",
    answer: true,
    explanation: "El compilador verifica la sintaxis antes de analizar el significado."
  },
  {
    type: "boolean",
    question: "El polimorfismo permite utilizar una misma función con diferentes tipos de datos.",
    answer: true,
    explanation: "Es una de las bases de la orientación a objetos."
  },
  {
    type: "boolean",
    question: "Los lenguajes lógicos utilizan inferencia para resolver consultas.",
    answer: true,
    explanation: "Prolog, por ejemplo, usa inferencia lógica para derivar conclusiones."
  },
  {
    type: "boolean",
    question: "En el paradigma declarativo, el programador especifica cómo realizar una tarea paso a paso.",
    answer: false,
    explanation: "El programador indica qué se debe lograr, no cómo hacerlo."
  },

  // === COMPLETAR ===
  {
    type: "fill",
    question: "La programación ________ se basa en la definición de clases y objetos.",
    answer: "orientada a objetos",
    explanation: "La POO organiza el código en entidades que combinan datos y comportamiento."
  },
  {
    type: "fill",
    question: "El paradigma ________ describe los problemas mediante hechos y reglas.",
    answer: "lógico",
    explanation: "Los lenguajes lógicos como Prolog utilizan hechos y reglas para representar conocimiento."
  },
  {
    type: "fill",
    question: "Una función ________ no tiene efectos secundarios y produce siempre el mismo resultado.",
    answer: "pura",
    explanation: "Las funciones puras son una característica esencial de la programación funcional."
  },
  {
    type: "fill",
    question: "El proceso de asignar significado a las estructuras sintácticas se llama análisis ________.",
    answer: "semántico",
    explanation: "Esta fase del compilador valida la coherencia semántica del código."
  },
  {
    type: "fill",
    question: "El concepto de ________ permite ocultar la implementación interna de un objeto.",
    answer: "encapsulación",
    explanation: "La encapsulación protege los datos del acceso directo."
  },

  // === EMPAREJAR ===
  {
    type: "match",
    question: "Relaciona el paradigma con su característica principal.",
    pairs: {
      left: ["Imperativo", "Funcional", "Lógico", "Orientado a objetos"],
      right: [
        "Secuencia de instrucciones y cambios de estado",
        "Uso de funciones puras",
        "Uso de hechos y reglas",
        "Modela entidades con atributos y métodos"
      ]
    },
    answer: {
      "Imperativo": "Secuencia de instrucciones y cambios de estado",
      "Funcional": "Uso de funciones puras",
      "Lógico": "Uso de hechos y reglas",
      "Orientado a objetos": "Modela entidades con atributos y métodos"
    },
    explanation: "Cada paradigma tiene una forma distinta de expresar la solución de un problema."
  },
  {
    type: "match",
    question: "Relaciona el concepto con su descripción.",
    pairs: {
      left: ["Herencia", "Polimorfismo", "Encapsulación", "Abstracción"],
      right: [
        "Reutilización de comportamiento en subclases",
        "Un mismo método actúa diferente según el contexto",
        "Ocultar detalles internos",
        "Representar solo los aspectos esenciales"
      ]
    },
    answer: {
      "Herencia": "Reutilización de comportamiento en subclases",
      "Polimorfismo": "Un mismo método actúa diferente según el contexto",
      "Encapsulación": "Ocultar detalles internos",
      "Abstracción": "Representar solo los aspectos esenciales"
    },
    explanation: "Estos son los cuatro pilares fundamentales de la programación orientada a objetos."
  },
  {
    type: "match",
    question: "Empareja el lenguaje con su paradigma principal.",
    pairs: {
      left: ["Prolog", "Haskell", "C++", "Python"],
      right: [
        "Lógico",
        "Funcional",
        "Orientado a objetos",
        "Multiparadigma"
      ]
    },
    answer: {
      "Prolog": "Lógico",
      "Haskell": "Funcional",
      "C++": "Orientado a objetos",
      "Python": "Multiparadigma"
    },
    explanation: "Cada lenguaje puede seguir uno o más paradigmas según su diseño."
  }
];
