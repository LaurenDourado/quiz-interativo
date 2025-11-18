import React, { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import { QUESTIONS } from "../data/questions";

export default function Quiz({ onLogout, user }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = QUESTIONS[index];

  function handleSelect(i) {
    if (showResult) return;

    setSelected(i);
    setShowResult(true);

    if (i === question.answer) setScore(score + 1);
  }

  function next() {
    if (index < QUESTIONS.length - 1) {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    }
  }

  function restart() {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  }

  const finished = index === QUESTIONS.length - 1 && showResult;

  return (
    <div className="container-quiz">
      <div className="topbar-quiz">
        <div className="logo-small">QZ</div>

        <div>
          <div className="title-quiz">Quiz Interativo</div>
          <div className="meta-quiz">
            Olá <strong>{user}</strong> — Pergunta {index + 1}/{QUESTIONS.length}
          </div>
        </div>

        <button className="btn-logout" onClick={onLogout}>
          Sair
        </button>
      </div>

      <QuestionCard
        q={question}
        selected={selected}
        onSelect={handleSelect}
        showResult={showResult}
      />

      {!finished ? (
        <button className="btn-action" onClick={next}>
          Próxima Pergunta
        </button>
      ) : (
        <div>
          <h2>Resultado Final: {score}/{QUESTIONS.length}</h2>
          <button className="btn-action" onClick={restart}>
            Jogar novamente
          </button>
        </div>
      )}
    </div>
  );
}
