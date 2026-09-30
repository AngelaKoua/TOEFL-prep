"use client";

import { useState } from "react";
import Mcq, { scoreMcq, KEYS } from "@/components/Mcq";
import { Speaker, ResultBar, TestNav } from "@/components/Shared";
import { useProgress, toBand } from "@/lib/progress";

export default function ListeningRunner({ test, total }) {
  const isResponse = test.type === "response";
  const items = isResponse ? test.items : test.questions;
  const [picked, setPicked] = useState({});
  const [checked, setChecked] = useState(false);
  const { save } = useProgress();

  const correct = isResponse
    ? items.reduce((n, it, i) => n + (picked[i] === it.answer ? 1 : 0), 0)
    : scoreMcq(items, picked);

  const answeredAll = items.every((_, i) => picked[i] !== undefined);

  function check() {
    setChecked(true);
    save("listening", test.id, correct / items.length);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <div className="page-head">
        <span className="crumb">Listening, test {test.id} sur {total}</span>
        <h1>{test.title}</h1>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <span className="tag">{test.taskLabel}</span>
          <span className="tag neutral">{test.level}</span>
          <span className="tag neutral">{test.topic}</span>
        </div>
        <p className="small muted" style={{ marginTop: 12 }}>
          Ecoutez d'abord sans lire la transcription. Prenez des notes courtes :
          idee principale, deux details, attitude du locuteur.
        </p>
      </div>

      {checked ? (
        <ResultBar
          correct={correct}
          total={items.length}
          band={toBand(correct / items.length)}
        >
          <div className="btn-row">
            <button
              className="btn ghost small"
              onClick={() => {
                setChecked(false);
                setPicked({});
              }}
            >
              Refaire ce test
            </button>
          </div>
        </ResultBar>
      ) : null}

      {isResponse ? (
        <div className="panel">
          <p className="muted small">{test.instructions}</p>
          <hr className="divider" />
          {items.map((it, i) => {
            const choice = picked[i];
            return (
              <div className="q" key={i}>
                <div className="q-text">
                  <span className="q-index">{i + 1}.</span>
                  <span>Ecoutez, puis choisissez la reponse la plus naturelle.</span>
                </div>
                <div style={{ marginBottom: 12 }}>
                  <Speaker script={it.prompt} label="Ecouter la phrase" />
                </div>
                <div className="options">
                  {it.options.map((opt, oi) => {
                    let state = "";
                    if (checked) {
                      if (oi === it.answer) state = "right";
                      else if (oi === choice) state = "wrong";
                    } else if (oi === choice) state = "picked";
                    return (
                      <button
                        key={oi}
                        className="option"
                        data-state={state || undefined}
                        disabled={checked}
                        onClick={() => setPicked((p) => ({ ...p, [i]: oi }))}
                      >
                        <span className="option-key">{KEYS[oi]}</span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
                {checked ? (
                  <div className="explain">
                    On entendait : {it.prompt} {it.explanation ? `- ${it.explanation}` : ""}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="panel">
            <Speaker script={test.script} label="Lancer l'enregistrement" />
            <details className="reveal">
              <summary>Afficher la transcription</summary>
              <div className="passage">
                {test.script.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </details>
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

      {checked && test.notes ? (
        <details className="reveal">
          <summary>Expressions a reutiliser</summary>
          <div>
            <ul className="checklist">
              {test.notes.map((n, i) => (
                <li key={i}>{n}</li>
              ))}
            </ul>
          </div>
        </details>
      ) : null}

      <TestNav section="listening" id={test.id} total={total} />
    </div>
  );
}
