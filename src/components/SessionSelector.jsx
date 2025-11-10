// src/pages/SessionSelector.jsx
import "../styles/start.css";

export default function SessionSelector({ startSession, startUnified }) {
  return (
    <div className="start-container">
      <h1 className="title">Exámenes por Sesión</h1>
      <p className="subtitle">
        Selecciona una unidad para estudiar y poner a prueba tus conocimientos.
      </p>

      <div className="selector-grid">
        {/* Sesiones existentes */}
        <button onClick={() => startSession("session1")} className="selector-btn">
          Sesión 1 – Fundamentos
        </button>

        <button onClick={() => startSession("session2")} className="selector-btn">
          Sesión 2 – Paradigmas
        </button>

        <button onClick={() => startSession("session3")} className="selector-btn">
          Sesión 3 – Compilación e Interpretación
        </button>

        {/* Nuevas sesiones */}
        <button onClick={() => startSession("session4")} className="selector-btn">
          Sesión 4 – Análisis Sintáctico y Compiladores
        </button>

        <button onClick={() => startSession("session5")} className="selector-btn">
          Sesión 5 – Semántica y Paradigmas
        </button>

        <button onClick={() => startSession("session6")} className="selector-btn">
          Sesión 6 – Ejecución y Administración de Memoria
        </button>

        <button onClick={() => startSession("session7")} className="selector-btn">
          Sesión 7 – Derivaciones y Árboles Sintácticos
        </button>

        {/* Examen general */}
        <button onClick={startUnified} className="selector-btn unified">
          Examen General Unificado
        </button>
      </div>
    </div>
  );
}
