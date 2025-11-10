// src/pages/SessionExam.jsx
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

export default function SessionExam({ session, goBack }) {
  const map = { session1, session2, session3, session4, session5, session6, session7 };

  function getRandomQuestions(totalList, amount = 20) {
    const shuffled = [...totalList].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, amount);
  }

  const fullBank = map[session] || [];
  const [questions] = useState(getRandomQuestions(fullBank, 20));
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer) => {
    const safeAnswer = answer === undefined ? null : answer;

    setAnswers((prev) => [...prev, safeAnswer]);

    if (index + 1 < questions.length) {
      setIndex((n) => n + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) return (
    <Results questions={questions} answers={answers} goBack={goBack} />
  );

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
