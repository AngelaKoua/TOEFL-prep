"use client";

import { useState } from "react";
import { ResultBar, TestNav, Countdown } from "@/components/Shared";
import { useProgress, toBand } from "@/lib/progress";

function countWords(text) {
  return (text.trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
}

/* ------------------------------------------------------------ Build a sentence */

function BuildTask({ test, total }) {
  const [lines, setLines] = useState({});
  const [checked, setChecked] = useState(false);
  const { save } = useProgress();

  function placed(i) {
    return lines[i] || [];
  }

  function add(i, chunk) {
    setLines((p) => ({ ...p, [i]: [...(p[i] || []), chunk] }));
  }

  function removeAt(i, idx) {
    setLines((p) => ({ ...p, [i]: (p[i] || []).filter((_, k) => k !== idx) }));
  }

  const correct = test.items.reduce((n, it, i) => {
    const built = placed(i).join(" ").replace(/\s+/g, " ").trim();
    return n + (built.toLowerCase() === it.answer.toLowerCase() ? 1 : 0);
  }, 0);

  const answeredAll = test.items.every(
    (it, i) => placed(i).length === it.chunks.length
  );

  function check() {
    setChecked(true);
    save("writing", test.id, correct / test.items.length);
  }

  return (
    <>
      {checked ? (
        <ResultBar
          correct={correct}
          total={test.items.length}
          band={toBand(correct / test.items.length)}
        >
          <button
            className="btn ghost small"
            onClick={() => {
              setChecked(false);
              setLines({});
            }}
          >
            Refaire ce test
          </button>
        </ResultBar>
      ) : null}

      <div className="panel">
        <p className="muted small">{test.instructions}</p>
        <hr className="divider" />
        {test.items.map((it, i) => {
          const used = placed(i);
          const built = used.join(" ").replace(/\s+/g, " ").trim();
          const right = built.toLowerCase() === it.answer.toLowerCase();
          const remaining = [...it.chunks];
          used.forEach((u) => {
            const k = remaining.indexOf(u);
            if (k > -1) remaining.splice(k, 1);
          });

          return (
            <div className="q" key={i}>
              <div className="q-text">
                <span className="q-index">{i + 1}.</span>
                <span>{it.context}</span>
              </div>
              <div
                className="chunk-line"
                style={
                  checked
                    ? {
                        borderColor: right ? "var(--good)" : "var(--bad)",
                        background: right ? "var(--good-bg)" : "var(--bad-bg)",
                      }
                    : undefined
                }
              >
                {used.length === 0 ? (
                  <span className="small muted">
                    Cliquez les groupes de mots dans l'ordre.
                  </span>
                ) : null}
                {used.map((c, k) => (
                  <button
                    key={`${c}-${k}`}
                    className="chunk"
                    disabled={checked}
                    onClick={() => removeAt(i, k)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="chunk-bank">
                {remaining.map((c, k) => (
                  <button
                    key={`${c}-bank-${k}`}
                    className="chunk"
                    disabled={checked}
                    onClick={() => add(i, c)}
                  >
                    {c}
                  </button>
                ))}
                {remaining.length === 0 ? (
                  <span className="small muted">Tous les blocs sont places.</span>
                ) : null}
              </div>
              {checked ? (
                <div className="explain">
                  Phrase correcte : {it.answer}
                  {it.note ? ` ${it.note}` : ""}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {!checked ? (
        <div className="btn-row" style={{ marginTop: 18 }}>
          <button className="btn" onClick={check} disabled={!answeredAll}>
            Corriger
          </button>
        </div>
      ) : null}

      <TestNav section="writing" id={test.id} total={total} />
    </>
  );
}

/* --------------------------------------------------- Email and discussion */

function ProseTask({ test, total }) {
  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticked, setTicked] = useState({});
  const { save } = useProgress();

  const words = countWords(text);
  const rubric = test.rubric;
  const ticks = rubric.filter((_, i) => ticked[i]).length;

  function submit() {
    setSubmitted(true);
    setStarted(false);
  }

  function saveSelf() {
    save("writing", test.id, ticks / rubric.length);
  }

  return (
    <>
      <div className="panel">
        {test.type === "email" ? (
          <>
            <h3>Situation</h3>
            <p className="passage">{test.situation}</p>
            <h3>Ce que l'email doit faire</h3>
            <ul className="checklist">
              {test.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <div className="post teacher">
              <div className="post-who">{test.professor.who}</div>
              <div className="passage">{test.professor.text}</div>
            </div>
            {test.posts.map((p, i) => (
              <div className="post" key={i}>
                <div className="post-who">{p.who}</div>
                <div className="passage">{p.text}</div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="panel">
        <div className="btn-row" style={{ marginBottom: 12 }}>
          <Countdown
            seconds={test.minutes * 60}
            running={started && !submitted}
            autoKey={submitted}
          />
          {!started && !submitted ? (
            <button className="btn small" onClick={() => setStarted(true)}>
              Lancer le chrono ({test.minutes} min)
            </button>
          ) : null}
          <span className="small muted">Objectif : {test.targetWords} mots minimum</span>
        </div>

        <textarea
          className="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={
            test.type === "email"
              ? "Dear ..., I am writing because ..."
              : "In my view, ..."
          }
          aria-label="Zone de redaction"
        />
        <div className="editor-bar">
          <span>
            {words} mots{" "}
            {words >= test.targetWords ? "(objectif atteint)" : ""}
          </span>
          <span>{text.length} caracteres</span>
        </div>

        {!submitted ? (
          <div className="btn-row" style={{ marginTop: 14 }}>
            <button className="btn" onClick={submit} disabled={words < 20}>
              Rendre et comparer
            </button>
          </div>
        ) : null}
      </div>

      {submitted ? (
        <>
          <div className="panel">
            <h3>Auto-evaluation</h3>
            <p className="small muted">
              Relisez votre texte et cochez honnetement ce qui est reellement
              present. Le score de la section reprend ce total.
            </p>
            <ul className="checklist">
              {rubric.map((r, i) => (
                <li key={i} data-met={!!ticked[i]}>
                  <label style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <input
                      type="checkbox"
                      checked={!!ticked[i]}
                      onChange={() =>
                        setTicked((p) => ({ ...p, [i]: !p[i] }))
                      }
                    />
                    <span>{r}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className="btn-row" style={{ marginTop: 14 }}>
              <button className="btn" onClick={saveSelf}>
                Enregistrer : {ticks}/{rubric.length}, bande{" "}
                {toBand(ticks / rubric.length).toFixed(1)}
              </button>
            </div>
          </div>

          <details className="reveal" open>
            <summary>Reponse modele</summary>
            <div className="passage">
              {test.model.split("\n").map((l, i) => (
                <p key={i}>{l}</p>
              ))}
            </div>
          </details>

          <details className="reveal">
            <summary>Tournures utiles</summary>
            <div>
              <ul className="checklist">
                {test.phrases.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          </details>
        </>
      ) : null}

      <TestNav section="writing" id={test.id} total={total} />
    </>
  );
}

export default function WritingRunner({ test, total }) {
  return (
    <div>
      <div className="page-head">
        <span className="crumb">Writing, test {test.id} sur {total}</span>
        <h1>{test.title}</h1>
        <div className="btn-row" style={{ marginTop: 14 }}>
          <span className="tag">{test.taskLabel}</span>
          <span className="tag neutral">{test.level}</span>
          <span className="tag neutral">{test.topic}</span>
        </div>
      </div>
      {test.type === "build" ? (
        <BuildTask test={test} total={total} />
      ) : (
        <ProseTask test={test} total={total} />
      )}
    </div>
  );
}
