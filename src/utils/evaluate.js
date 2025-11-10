export function normalizeText(str = "") {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

export function evaluateOne(question, answer) {
  if (!question) return false;

  const type = question.type;

  // SINGLE
  if (type === "single") return answer === question.answer;

  // MULTIPLE
  if (type === "multiple") {
    if (!Array.isArray(answer)) return false;        // ✅ blindaje
    if (!Array.isArray(question.answer)) return false;

    const a = [...new Set(answer)].sort().join("||");
    const b = [...new Set(question.answer)].sort().join("||");
    return a === b;
  }

  // BOOLEAN
  if (type === "boolean") return Boolean(answer) === Boolean(question.answer);

  // FILL
  if (type === "fill") {
    return normalizeText(answer) === normalizeText(question.answer);
  }

  // MATCH
  if (type === "match") {
    if (!answer || typeof answer !== "object") return false; // ✅ blindaje
    const keys = Object.keys(question.answer);
    return keys.every((k) => answer[k] === question.answer[k]);
  }

  return false;
}

export function evaluateAll(questions, answers) {
  const results = questions.map((q, i) => {
    const ans = answers[i] !== undefined ? answers[i] : null;
    return evaluateOne(q, ans);
  });

  const score = results.filter(Boolean).length;
  return { results, score };
}
