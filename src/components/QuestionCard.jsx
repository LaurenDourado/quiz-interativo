import React from "react";

export default function QuestionCard({ q, selected, onSelect, showResult }) {
  return (
    <div className="card-quiz">
      <div className="question-quiz">{q.question}</div>

      <div className="options-quiz">
        {q.options.map((opt, i) => {
          let cls = "option-quiz";
          if (showResult) {
            if (i === q.answer) cls += " correct-quiz";
            else if (selected === i) cls += " wrong-quiz";
          }

          return (
            <div
              key={i}
              className={cls}
              onClick={() => !showResult && onSelect(i)}
            >
              {opt}
            </div>
          );
        })}
      </div>
    </div>
  );
}
