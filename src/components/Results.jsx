// src/components/Results.jsx
import "../styles/results.css";
import { evaluateAll } from "../utils/evaluate.js";

function renderUserAnswer(q, a) {
  if (a == null) return "Sin respuesta";
  switch (q.type) {
    case "single":
      return String(a);
    case "multiple":
      return Array.isArray(a) ? a.join(", ") : "Sin respuesta";
    case "boolean":
      return a ? "Verdadero" : "Falso";
    case "fill":
      return String(a);
    case "match":
      // Mostrar pares elegidos
      return Object.keys(a)
        .map((k) => `${k} → ${a[k] || "—"}`)
        .join(" | ");
    default:
      return String(a);
  }
}

function renderCorrectAnswer(q) {
  switch (q.type) {
    case "single":
      return String(q.answer);
    case "multiple":
      return Array.isArray(q.answer) ? q.answer.join(", ") : String(q.answer);
    case "boolean":
      return q.answer ? "Verdadero" : "Falso";
    case "fill":
      return String(q.answer);
    case "match":
      return Object.keys(q.answer)
        .map((k) => `${k} → ${q.answer[k]}`)
        .join(" | ");
    default:
      return String(q.answer);
  }
}

export default function Results({ questions, answers, goBack }) {
  const { results, score } = evaluateAll(questions, answers);

  return (
    <div className="results-container">
      <h1>Resultados</h1>
      <h2 className="score">Puntaje: {score} / {questions.length}</h2>

      <div className="details">
        {questions.map((q, i) => (
          <div key={i} className={`result-card ${results[i] ? "ok" : "bad"}`}>
            <p className="q"><strong>{q.question}</strong></p>
            <p className="user">
              <span className="badge">Tu respuesta</span> {renderUserAnswer(q, answers[i])}
            </p>
            <p className="correct">
              <span className="badge green">Correcta</span> {renderCorrectAnswer(q)}
            </p>
            {q.explanation && <p className="explanation">{q.explanation}</p>}
          </div>
        ))}
      </div>

      <button className="back-home" onClick={goBack}>Volver al Menú</button>
    </div>
  );
}
