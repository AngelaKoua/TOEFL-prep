"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useProgress, countDone, meanScore, toBand } from "@/lib/progress";

export default function TestIndex({ section, title, intro, tests }) {
  const { store, ready } = useProgress();
  const [filter, setFilter] = useState("Tout");
  const [hideDone, setHideDone] = useState(false);

  const labels = useMemo(
    () => ["Tout", ...Array.from(new Set(tests.map((t) => t.taskLabel)))],
    [tests]
  );

  const done = ready ? countDone(store, section) : 0;
  const mean = ready ? meanScore(store, section) : null;
  const band = toBand(mean);

  const rows = tests.filter((t) => {
    if (filter !== "Tout" && t.taskLabel !== filter) return false;
    if (hideDone && store?.[section]?.[String(t.id)]) return false;
    return true;
  });

  return (
    <div>
      <div className="page-head">
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>

      <div className="stat-grid" style={{ marginBottom: 24 }}>
        <div className="stat">
          <b>
            {done}/{tests.length}
          </b>
          <span>tests termines</span>
        </div>
        <div className="stat">
          <b>{band === null ? "-" : band.toFixed(1)}</b>
          <span>bande moyenne sur 6</span>
        </div>
        <div className="stat">
          <b>{mean === null ? "-" : Math.round(mean * 100) + "%"}</b>
          <span>reussite moyenne</span>
        </div>
      </div>

      <div className="filters">
        {labels.map((l) => (
          <button
            key={l}
            className="chip"
            data-on={filter === l}
            onClick={() => setFilter(l)}
          >
            {l}
          </button>
        ))}
        <button
          className="chip"
          data-on={hideDone}
          onClick={() => setHideDone((v) => !v)}
        >
          Masquer les tests faits
        </button>
      </div>

      <div className="test-list">
        {rows.map((t) => {
          const entry = store?.[section]?.[String(t.id)];
          return (
            <Link
              key={t.id}
              href={`/${section}/${t.id}`}
              className="test-row"
              data-done={!!entry}
            >
              <span className="test-num">{String(t.id).padStart(2, "0")}</span>
              <span>
                <span className="test-title">{t.title}</span>
                <br />
                <span className="test-meta">
                  {t.taskLabel} · {t.topic} · {t.level}
                </span>
              </span>
              <span className={entry ? "test-score" : "test-score todo"}>
                {entry
                  ? `bande ${toBand(entry.score).toFixed(1)}`
                  : "a faire"}
              </span>
            </Link>
          );
        })}
      </div>

      {rows.length === 0 ? (
        <p className="muted" style={{ marginTop: 18 }}>
          Aucun test ne correspond a ce filtre. Retirez un filtre pour revoir la
          liste.
        </p>
      ) : null}
    </div>
  );
}
