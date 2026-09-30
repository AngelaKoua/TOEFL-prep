"use client";

import { useState } from "react";

const KEYS = ["A", "B", "C", "D", "E"];

export default function Mcq({ questions, picked, setPicked, checked }) {
  return (
    <div>
      {questions.map((q, qi) => {
        const choice = picked[qi];
        return (
          <div className="q" key={qi}>
            <div className="q-text">
              <span className="q-index">{qi + 1}.</span>
              <span>{q.q}</span>
            </div>
            <div className="options" role="group">
              {q.options.map((opt, oi) => {
                let state = "";
                if (checked) {
                  if (oi === q.answer) state = "right";
                  else if (oi === choice) state = "wrong";
                } else if (oi === choice) {
                  state = "picked";
                }
                return (
                  <button
                    key={oi}
                    className="option"
                    data-state={state || undefined}
                    disabled={checked}
                    onClick={() =>
                      setPicked((prev) => ({ ...prev, [qi]: oi }))
                    }
                  >
                    <span className="option-key">{KEYS[oi]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {checked && q.explanation ? (
              <div className="explain">{q.explanation}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export function scoreMcq(questions, picked) {
  return questions.reduce(
    (n, q, i) => n + (picked[i] === q.answer ? 1 : 0),
    0
  );
}

export { KEYS };
