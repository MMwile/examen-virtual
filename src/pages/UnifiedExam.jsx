import { useState } from "react";
import Question from "../components/Question.jsx";
import Results from "../components/Results.jsx";

import { session1 } from "../data/session1.js";
import { session2 } from "../data/session2.js";
import { session3 } from "../data/session3.js";
import { session4 } from "../data/session4.js";
import { session5 } from "../data/session5.js";
import { session6 } from "../data/session6.js";
import { session7 } from "../data/session7.js";

function pick(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

export default function UnifiedExam({ goBack }) {
  const [questions] = useState(() => {
    const s1 = pick(session1, 10);
    const s2 = pick(session2, 10);
    const s3 = pick(session3, 10);
    const s4 = pick(session4, 10);
    const s5 = pick(session5, 10);
    const s6 = pick(session6, 10);
    const s7 = pick(session7, 10);
    return [...s1, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7].sort(() => Math.random() - 0.5);
  });

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers((prev) => [...prev, answer ?? null]);

    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return <Results questions={questions} answers={answers} goBack={goBack} />;
  }

  return (
    <Question
      key={index}
      question={questions[index]}
      index={index}
      total={questions.length}
      onAnswer={handleAnswer}
      goBack={goBack}
    />
  );
}
