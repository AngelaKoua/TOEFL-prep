"use client";

import { useState } from "react";
import { Speaker, Recorder, TestNav } from "@/components/Shared";
import { useProgress, toBand } from "@/lib/progress";

export default function SpeakingRunner({ test, total }) {
  const isRepeat = test.type === "repeat";
  const [ticked, setTicked] = useState({});
  const [revealed, setRevealed] = useState({});
  const { save } = useProgress();

  const rubric = test.rubric;
  const ticks = rubric.filter((_, i) => ticked[i]).length;

  return (
    <div>
      <div className="page-head">
        <span className="crumb">Speaking, test {test.id} sur {total}</span>
        <h1>{test.title}</h1>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <span className="tag">{test.taskLabel}</span>
          <span className="tag neutral">{test.level}</span>
          <span className="tag neutral">{test.topic}</span>
        </div>
        <p className="small muted" style={{ marginTop: 12 }}>
          {isRepeat
            ? "Ecoutez la phrase une seule fois, puis repetez-la immediatement. Visez le rythme et les liaisons, pas seulement les mots."
            : "Format 2026 : aucune preparation. Vous parlez des la fin de la question, 45 secondes par reponse."}
        </p>
      </div>

      <div className="panel">
        <p className="muted small">{test.instructions}</p>
        <hr className="divider" />

        {test.items.map((it, i) => (
          <div className="q" key={i}>
            <div className="q-text">
              <span className="q-index">{i + 1}.</span>
              <span>
                {isRepeat ? "Ecoutez puis repetez" : it.q}
              </span>
            </div>

            <div style={{ marginBottom: 12 }}>
              <Speaker
                script={isRepeat ? it.sentence : it.q}
                label={isRepeat ? "Ecouter la phrase" : "Ecouter la question"}
              />
            </div>

            <Recorder
              maxSeconds={isRepeat ? 15 : 45}
              hint={isRepeat ? "15 secondes" : "45 secondes"}
            />

            <div className="btn-row" style={{ marginTop: 10 }}>
              <button
                className="btn ghost small"
                onClick={() => setRevealed((p) => ({ ...p, [i]: !p[i] }))}
              >
                {revealed[i] ? "Masquer l'aide" : isRepeat ? "Voir le texte" : "Voir des pistes"}
              </button>
            </div>

            {revealed[i] ? (
              <div className="explain">
                {isRepeat ? (
                  <>
                    <b>{it.sentence}</b>
                    {it.focus ? <div>Point de prononciation : {it.focus}</div> : null}
                  </>
                ) : (
                  <ul className="checklist">
                    {it.tips.map((t, k) => (
                      <li key={k}>{t}</li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="panel">
        <h3>Auto-evaluation</h3>
        <p className="small muted">
          Reecoutez vos prises, puis cochez ce qui est vrai. Soyez severe : c'est
          la seule facon d'obtenir une bande realiste.
        </p>
        <ul className="checklist">
          {rubric.map((r, i) => (
            <li key={i} data-met={!!ticked[i]}>
              <label style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <input
                  type="checkbox"
                  checked={!!ticked[i]}
                  onChange={() => setTicked((p) => ({ ...p, [i]: !p[i] }))}
                />
                <span>{r}</span>
              </label>
            </li>
          ))}
        </ul>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <button
            className="btn"
            onClick={() => save("speaking", test.id, ticks / rubric.length)}
          >
            Enregistrer : {ticks}/{rubric.length}, bande{" "}
            {toBand(ticks / rubric.length).toFixed(1)}
          </button>
        </div>
      </div>

      <TestNav section="speaking" id={test.id} total={total} />
    </div>
  );
}
