import "../styles/start.css";

export default function StartScreen({ onStart }) {
  return (
    <div className="startscreen-container">
      <div className="startscreen-card">
        <h1 className="start-title">Examen Virtual Interactivo</h1>
        <p className="start-desc">
          Aprende, practica y evalúa tus conocimientos de forma dinámica y agradable.
        </p>

        <button className="start-btn" onClick={onStart}>
          Comenzar
        </button>
      </div>
    </div>
  );
}
