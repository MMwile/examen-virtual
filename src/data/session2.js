export const session2 = [
  {
    type: "single",
    question: "¿Qué es un paradigma de programación?",
    options: [
      "Un conjunto de reglas para diseñar hardware",
      "Un estilo o modelo para organizar y expresar soluciones en código",
      "Una librería estándar",
      "Una estructura para compilar programas"
    ],
    answer: "Un estilo o modelo para organizar y expresar soluciones en código",
    explanation: "Un paradigma define cómo se estructura y organiza el pensamiento del programador."
  },

  {
    type: "boolean",
    question: "La programación imperativa se basa en modificar el estado del programa con instrucciones.",
    answer: true,
    explanation: "Su esencia es la secuencia de órdenes que alteran el estado."
  },

  {
    type: "single",
    question: "¿Qué paradigma utiliza funciones puras y evita efectos secundarios?",
    options: ["Imperativo", "Orientado a Objetos", "Funcional", "Lógico"],
    answer: "Funcional",
    explanation: "La programación funcional promueve funciones sin estado."
  },

  {
    type: "fill",
    question: "El paradigma ____ se basa en reglas y hechos para realizar inferencias.",
    answer: "lógico",
    explanation: "El paradigma lógico usa reglas y relaciones para deducir respuestas."
  },

  {
    type: "multiple",
    question: "Selecciona características del paradigma funcional:",
    options: ["Funciones puras", "Inmutabilidad", "Efectos secundarios controlados", "Variables globales obligatorias"],
    answer: ["Funciones puras", "Inmutabilidad", "Efectos secundarios controlados"],
    explanation: "La funcional busca minimizar mutaciones."
  },

  {
    type: "boolean",
    question: "La Programación Orientada a Objetos se basa en objetos que combinan datos y métodos.",
    answer: true,
    explanation: "La OOP encapsula estado y comportamiento."
  },

  {
    type: "single",
    question: "¿Cuál paradigma usa conceptos como clases, herencia y polimorfismo?",
    options: ["Lógico", "Funcional", "Orientado a Objetos", "Declarativo puro"],
    answer: "Orientado a Objetos",
    explanation: "Estos conceptos son pilares de la OOP."
  },

  {
    type: "multiple",
    question: "Identifica ventajas de la Programación Orientada a Objetos:",
    options: ["Encapsulación", "Modularidad", "Reutilización", "Evaluación diferida obligatoria"],
    answer: ["Encapsulación", "Modularidad", "Reutilización"],
    explanation: "Son atributos tradicionales de OOP."
  },

  {
    type: "boolean",
    question: "La programación imperativa describe qué debe hacerse, no cómo debe hacerse.",
    answer: false,
    explanation: "Eso es típico de la programación declarativa."
  },

  {
    type: "single",
    question: "¿Qué paradigma se expresa mejor mediante reglas y consultas?",
    options: ["Imperativo", "Funcional", "Lógico", "Concurrente"],
    answer: "Lógico",
    explanation: "Usa hechos y reglas para resolver consultas."
  },

  {
    type: "fill",
    question: "Prolog es un lenguaje representativo del paradigma ____.",
    answer: "lógico",
    explanation: "Prolog implementa programación basada en inferencias."
  },

  {
    type: "match",
    question: "Empareja el paradigma con un lenguaje representativo:",
    pairs: {
      left: ["Imperativo", "Funcional", "Lógico"],
      right: ["Prolog", "C", "Haskell"]
    },
    answer: {
      Imperativo: "C",
      Funcional: "Haskell",
      Lógico: "Prolog"
    },
    explanation: "Asociaciones clásicas."
  },

  {
    type: "boolean",
    question: "La programación funcional evita el uso de estados mutables.",
    answer: true,
    explanation: "Promueve inmutabilidad."
  },

  {
    type: "multiple",
    question: "Selecciona características de la programación lógica:",
    options: [
      "Hechos",
      "Reglas",
      "Motor de inferencia",
      "Mutación de estado"
    ],
    answer: ["Hechos", "Reglas", "Motor de inferencia"],
    explanation: "La lógica usa relaciones declarativas."
  },

  {
    type: "single",
    question: "En programación funcional, una función pura es aquella que:",
    options: [
      "Modifica variables externas",
      "Depende de estados globales",
      "Da siempre el mismo resultado para las mismas entradas",
      "Usa bucles exclusivamente"
    ],
    answer: "Da siempre el mismo resultado para las mismas entradas",
    explanation: "Las funciones puras son deterministas."
  },

  {
    type: "boolean",
    question: "La concurrencia permite ejecutar varias tareas al mismo tiempo.",
    answer: true,
    explanation: "Paralelismo o pseudo paralelismo según contexto."
  },

  {
    type: "multiple",
    question: "Selecciona características del paradigma concurrente:",
    options: ["Hilos", "Procesos", "Bloqueos", "Herencia"],
    answer: ["Hilos", "Procesos", "Bloqueos"],
    explanation: "Recursos básicos de concurrencia."
  },

  {
    type: "fill",
    question: "El paradigma ____ describe problemas basado en 'qué' debe hacerse.",
    answer: "declarativo",
    explanation: "El declarativo especifica resultados, no pasos."
  },

  {
    type: "single",
    question: "El paradigma declarativo suele evitar:",
    options: [
      "Describir resultados deseados",
      "Especificar el camino para obtener la solución",
      "Reglas de alto nivel",
      "Uso de expresiones"
    ],
    answer: "Especificar el camino para obtener la solución",
    explanation: "El cómo se resuelve queda oculto."
  },

  {
    type: "boolean",
    question: "La recursión es común en programación funcional.",
    answer: true,
    explanation: "La falta de bucles mutables hace a la recursión muy utilizada."
  },

  {
    type: "match",
    question: "Empareja concepto con paradigma:",
    pairs: {
      left: ["Encapsulación", "Funciones puras", "Reglas y hechos"],
      right: ["Funcional", "Lógico", "Orientado a Objetos"]
    },
    answer: {
      Encapsulación: "Orientado a Objetos",
      "Funciones puras": "Funcional",
      "Reglas y hechos": "Lógico"
    },
    explanation: "Asociaciones correctas."
  },

  {
    type: "multiple",
    question: "Selecciona lenguajes orientados a objetos:",
    options: ["Java", "C#", "Haskell", "Prolog"],
    answer: ["Java", "C#"],
    explanation: "Java y C# implementan OOP tradicional."
  },

  {
    type: "boolean",
    question: "La programación lógica usa deducción para resolver consultas.",
    answer: true,
    explanation: "Consulta al motor de inferencias."
  },

  {
    type: "single",
    question: "¿Qué paradigma favorece el uso de listas inmutables?",
    options: ["Lógico", "Funcional", "Imperativo", "Concurrente"],
    answer: "Funcional",
    explanation: "La inmutabilidad es un pilar funcional."
  },

  {
    type: "fill",
    question: "La herencia es un concepto clave del paradigma ____.",
    answer: "orientado a objetos",
    explanation: "Herencia, polimorfismo y encapsulación son su núcleo."
  },

  {
    type: "boolean",
    question: "La concurrencia obliga a usar múltiples CPU físicas siempre.",
    answer: false,
    explanation: "Puede ser paralelismo lógico."
  },

  {
    type: "multiple",
    question: "Selecciona lenguajes del paradigma funcional:",
    options: ["Haskell", "Scala", "Assembly", "JavaScript"],
    answer: ["Haskell", "Scala"],
    explanation: "Scala y Haskell destacan en programación funcional."
  },

  {
    type: "match",
    question: "Relaciona cada característica con su paradigma:",
    pairs: {
      left: ["Mutación de estado", "Inmutabilidad", "Hechos y reglas"],
      right: ["Imperativo", "Funcional", "Lógico"]
    },
    answer: {
      "Mutación de estado": "Imperativo",
      Inmutabilidad: "Funcional",
      "Hechos y reglas": "Lógico"
    },
    explanation: "Asignación conceptual correcta."
  },

  {
    type: "single",
    question: "¿Cuál paradigma es más adecuado para resolver problemas matemáticos complejos sin mutación?",
    options: ["Imperativo", "Funcional", "Concurrente", "Orientado a Objetos"],
    answer: "Funcional",
    explanation: "Elimina efectos secundarios."
  },

  {
    type: "boolean",
    question: "Todos los lenguajes modernos son puramente de un solo paradigma.",
    answer: false,
    explanation: "Muchos lenguajes son multiparadigma."
  }
];
