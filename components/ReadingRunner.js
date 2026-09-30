"use client";

import { useState } from "react";
import Mcq, { scoreMcq } from "@/components/Mcq";
import { ResultBar, TestNav, Countdown } from "@/components/Shared";
import { useProgress, toBand } from "@/lib/progress";

export default function ReadingRunner({ test, total }) {
  const isComplete = test.type === "complete";
  const items = isComplete ? test.items : test.questions;
  const [picked, setPicked] = useState({});
  const [typed, setTyped] = useState({});
  const [checked, setChecked] = useState(false);
  const [started, setStarted] = useState(false);
  const { save } = useProgress();

  const correct = isComplete
    ? items.reduce((n, it, i) => {
        const full = it.answer.slice(0, it.given) + (typed[i] || "");
        return n + (full.trim().toLowerCase() === it.answer.toLowerCase() ? 1 : 0);
      }, 0)
    : scoreMcq(items, picked);

  const answeredAll = isComplete
    ? items.every((_, i) => (typed[i] || "").trim().length > 0)
    : items.every((_, i) => picked[i] !== undefined);

  function check() {
    setChecked(true);
    save("reading", test.id, correct / items.length);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function retry() {
    setChecked(false);
    setPicked({});
    setTyped({});
  }

  return (
    <div>
      <div className="page-head">
        <span className="crumb">Reading, test {test.id} sur {total}</span>
        <h1>{test.title}</h1>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <span className="tag">{test.taskLabel}</span>
          <span className="tag neutral">{test.level}</span>
          <span className="tag neutral">{test.topic}</span>
          <span className="small muted">Temps conseille : {test.minutes} min</span>
          <Countdown
            seconds={test.minutes * 60}
            running={started && !checked}
            autoKey={checked}
          />
          {!started ? (
            <button className="btn small" onClick={() => setStarted(true)}>
              Lancer le chrono
            </button>
          ) : null}
        </div>
      </div>

      {checked ? (
        <ResultBar
          correct={correct}
          total={items.length}
          band={toBand(correct / items.length)}
        >
          <div className="btn-row">
            <button className="btn ghost small" onClick={retry}>
              Refaire ce test
            </button>
          </div>
        </ResultBar>
      ) : null}

      {isComplete ? (
        <div className="panel">
          <p className="muted small">
            {test.instructions}
          </p>
          <hr className="divider" />
          {items.map((it, i) => {
            const [before, after] = it.text.split("___");
            const full = it.answer.slice(0, it.given) + (typed[i] || "");
            const right = full.trim().toLowerCase() === it.answer.toLowerCase();
            return (
              <div className="gap-line" key={i} style={{ marginBottom: 10 }}>
                <span className="q-index">{i + 1}.</span> {before}
                <span className="stem">{it.answer.slice(0, it.given)}</span>
                <input
                  className="gap-input"
                  data-state={checked ? (right ? "right" : "wrong") : undefined}
                  value={typed[i] || ""}
                  disabled={checked}
                  aria-label={`Completer le mot ${i + 1}`}
                  onChange={(e) =>
                    setTyped((p) => ({ ...p, [i]: e.target.value }))
                  }
                />
                {after}
                {checked && !right ? (
                  <span className="small" style={{ color: "var(--bad)" }}>
                    {"  "}reponse : {it.answer}
                  </span>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="panel">
            <div className="passage">
              {test.passage.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
          <div className="panel">
            <Mcq
              questions={items}
              picked={picked}
              setPicked={setPicked}
              checked={checked}
            />
          </div>
        </>
      )}

      {!checked ? (
        <div className="btn-row" style={{ marginTop: 18 }}>
          <button className="btn" onClick={check} disabled={!answeredAll}>
            Corriger
          </button>
          {!answeredAll ? (
            <span className="small muted">Repondez a tout pour corriger.</span>
          ) : null}
        </div>
      ) : null}

      {checked && test.vocabulary ? (
        <details className="reveal">
          <summary>Vocabulaire a retenir</summary>
          <div>
            <ul className="checklist">
              {test.vocabulary.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </details>
      ) : null}

      <TestNav section="reading" id={test.id} total={total} />
    </div>
  );
}
