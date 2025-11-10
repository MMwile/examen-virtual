// src/components/Question.jsx
import { useEffect, useMemo, useState } from "react";
import "../styles/exam.css";

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function Question({ question, index, total, onAnswer, goBack }) {
  const [selected, setSelected] = useState([]);     // para multiple
  const [filled, setFilled] = useState("");         // para fill
  const [matchAns, setMatchAns] = useState({});     // para match
  const rightPoolInitial = useMemo(
    () => (question?.type === "match" ? shuffle(question.pairs.right) : []),
    // usar question.question como “key” de cambio
    [question?.question]
  );
  const [rightPool, setRightPool] = useState(rightPoolInitial);

  // Resetear inputs al cambiar de pregunta
  useEffect(() => {
    setSelected([]);
    setFilled("");
    setMatchAns({});
    setRightPool(rightPoolInitial);
  }, [question?.question, rightPoolInitial]);

  // ---- handlers ----
  const handleSingle = (opt) => onAnswer(opt);

  const toggleMultiple = (opt) => {
    setSelected((prev) =>
      prev.includes(opt) ? prev.filter((x) => x !== opt) : [...prev, opt]
    );
  };

  const submitMultiple = () => onAnswer(selected);

  const submitFill = () => onAnswer(filled);

  // Drag & Drop Match
  const onDragStart = (e, item) => {
    e.dataTransfer.setData("text/plain", item);
  };

  const onDropToLeft = (leftKey, e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.getData("text/plain");
    if (!dropped) return;

    setMatchAns((prev) => {
      const updated = { ...prev };

      // ✅ 1. Quitar ese item de cualquier slot donde ya esté
      for (const key in updated) {
        if (updated[key] === dropped) {
          delete updated[key];
        }
      }

      // ✅ 2. Si el slot actual ya tenía uno, devolverlo al pool
      if (updated[leftKey]) {
        const old = updated[leftKey];
        setRightPool((pool) =>
          pool.includes(old) ? pool : [...pool, old]
        );
      }

      // ✅ 3. Asignar el nuevo al slot actual
      updated[leftKey] = dropped;

      return updated;
    });

    // ✅ 4. Quitar el item del pool si está ahí
    setRightPool((prev) => prev.filter((r) => r !== dropped));
  };

  const onDropToPool = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.getData("text/plain");
    if (!dropped) return;

    // ✅ liberar del slot actual
    setMatchAns((prev) => {
      const updated = { ...prev };
      for (const key in updated) {
        if (updated[key] === dropped) {
          delete updated[key];
        }
      }
      return updated;
    });

    // ✅ asegurarse de que vuelve al pool UNA sola vez
    setRightPool((prev) =>
      prev.includes(dropped) ? prev : [...prev, dropped]
    );
  };

  const allowDrop = (e) => e.preventDefault();

  const submitMatch = () => onAnswer(matchAns);

  return (
    <div className="exam-container">
      <div className="exam-header">
        <button className="back-btn" onClick={goBack}>Volver</button>
        <span className="progress">Pregunta {index + 1} de {total}</span>
      </div>

      <h2 className="question-text">{question.question}</h2>

      {/* Selección simple */}
      {question.type === "single" && (
        <div className="options-container">
          {question.options.map((opt) => (
            <button key={opt} className="option-btn" onClick={() => handleSingle(opt)}>
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Selección múltiple */}
      {question.type === "multiple" && (
        <>
          <div className="options-container">
            {question.options.map((opt) => (
              <button
                key={opt}
                className={`option-btn ${selected.includes(opt) ? "selected" : ""}`}
                onClick={() => {
                  setSelected(prev =>
                    prev.includes(opt)
                      ? prev.filter(x => x !== opt)
                      : [...prev, opt]
                  );
                }}
              >
                {opt}
              </button>
            ))}
          </div>

          <div className="actions">
            <button
              className="submit-btn"
              disabled={selected.length === 0}
              onClick={() => onAnswer(selected)}
            >
              Confirmar selección
            </button>
          </div>
        </>
      )}

      {/* Verdadero/Falso */}
      {question.type === "boolean" && (
        <div className="options-container">
          <button className="option-btn" onClick={() => onAnswer(true)}>Verdadero</button>
          <button className="option-btn" onClick={() => onAnswer(false)}>Falso</button>
        </div>
      )}

      {/* Completación */}
      {question.type === "fill" && (
        <div className="fill-wrap">
          <input
            type="text"
            className="fill-input"
            placeholder="Escribe tu respuesta…"
            value={filled}
            onChange={(e) => setFilled(e.target.value)}
          />
          <button
            className="submit-btn"
            onClick={submitFill}
            disabled={!filled.trim()}
          >
            Confirmar
          </button>
        </div>
      )}

      {/* Emparejamiento (drag & drop tipo ‘papelitos’) */}
      {question.type === "match" && (
        <>
          <div className="match-board">
            <div className="match-left-col">
              {question.pairs.left.map((left) => (
                <div
                  key={left}
                  className="slot"
                  onDragOver={allowDrop}
                  onDrop={(e) => onDropToLeft(left, e)}
                >
                  <div className="slot-title">{left}</div>
                  <div className="slot-content">
                    {matchAns[left] ? (
                      <span
                        className="pill"
                        draggable
                        onDragStart={(e) => onDragStart(e, matchAns[left])}
                        title="Arrastra para liberar"
                      >
                        {matchAns[left]}
                      </span>
                    ) : (
                      <span className="slot-placeholder">Suelta aquí</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="match-pool"
              onDragOver={allowDrop}
              onDrop={onDropToPool}
              title="Arrastra elementos aquí para liberar"
            >
              <div className="pool-title">Opciones</div>
              <div className="pool-content">
                {rightPool.map((r) => (
                  <span
                    key={r}
                    className="pill"
                    draggable
                    onDragStart={(e) => onDragStart(e, r)}
                    title="Arrastra para emparejar"
                  >
                    {r}
                  </span>
                ))}
                {rightPool.length === 0 && (
                  <span className="pool-empty">No hay elementos libres</span>
                )}
              </div>
            </div>
          </div>

          {/* ✅ Botón de confirmación (SOLUCIÓN) */}
          <div className="actions" style={{ marginTop: "20px" }}>
            <button
              className="submit-btn"
              disabled={Object.keys(matchAns).length !== question.pairs.left.length}
              onClick={() => onAnswer({ ...matchAns })}
            >
              Confirmar emparejamiento
            </button>
          </div>
        </>
      )}
    </div>
  );
}
