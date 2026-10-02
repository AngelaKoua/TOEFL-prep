"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useLearning } from "@/lib/learning";
import { articles } from "@/data/learning/articles";
import { videos } from "@/data/learning/videos";
import { speeches } from "@/data/learning/speeches";

const TABS = [
  { slug: "articles", label: "Articles", total: articles.length },
  { slug: "videos", label: "Videos", total: videos.length },
  { slug: "speeches", label: "Discours", total: speeches.length },
];

const STATUS = {
  articles: { on: "Lu", off: "Non lu" },
  videos: { on: "Vu", off: "Non vu" },
  speeches: { on: "Appris", off: "Non appris" },
};

function StatusFilter({ section, value, onChange }) {
  const s = STATUS[section];
  return (
    <>
      {[
        ["all", "Tout"],
        ["todo", s.off],
        ["done", s.on],
      ].map(([v, label]) => (
        <button
          key={v}
          className="chip"
          data-on={value === v}
          onClick={() => onChange(v)}
        >
          {label}
        </button>
      ))}
    </>
  );
}

function Toggle({ section, id, learning }) {
  const done = learning.isDone(section, id);
  const s = STATUS[section];
  return (
    <button
      className="status-toggle"
      data-done={done}
      aria-pressed={done}
      onClick={() => learning.setDone(section, id, !done)}
    >
      {done ? s.on : s.off}
    </button>
  );
}

function keep(filter, done) {
  if (filter === "done") return done;
  if (filter === "todo") return !done;
  return true;
}

/* ------------------------------------------------------------- Articles */

function ArticlesTab({ learning }) {
  const [filter, setFilter] = useState("all");
  const [topic, setTopic] = useState("Tous");

  const topics = useMemo(
    () => ["Tous", ...Array.from(new Set(articles.map((a) => a.topic))).sort()],
    []
  );

  const rows = articles.filter(
    (a) =>
      (topic === "Tous" || a.topic === topic) &&
      keep(filter, learning.isDone("articles", a.id))
  );

  return (
    <>
      <p className="muted small learn-intro">
        Cent textes courts sur les themes des passages academiques du TOEFL.
        Chaque article met en evidence six ou sept mots a retenir, avec leur
        definition en anglais et leur traduction.
      </p>
      <div className="filters">
        <StatusFilter section="articles" value={filter} onChange={setFilter} />
        <select
          className="tpl-input learn-select"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          aria-label="Filtrer par theme"
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="test-list">
        {rows.map((a) => {
          const done = learning.isDone("articles", a.id);
          return (
            <Link
              key={a.id}
              href={`/learning/articles/${a.id}`}
              className="test-row"
              data-done={done}
            >
              <span className="test-num">{String(a.id).padStart(3, "0")}</span>
              <span>
                <span className="test-title">{a.title}</span>
                <br />
                <span className="test-meta">
                  {a.topic} · {a.level} · {a.vocab.length} mots
                </span>
              </span>
              <span className={done ? "test-score" : "test-score todo"}>
                {done ? "lu" : "a lire"}
              </span>
            </Link>
          );
        })}
      </div>
      {rows.length === 0 ? <Empty /> : null}
    </>
  );
}

/* --------------------------------------------------------------- Videos */

function VideosTab({ learning }) {
  const [filter, setFilter] = useState("all");
  const rows = videos.filter((v) => keep(filter, learning.isDone("videos", v.id)));

  return (
    <>
      <p className="muted small learn-intro">
        Cinquante conferences TED, de 3 a 20 minutes, sur des sujets proches
        des cours magistraux du test. Ecoutez une premiere fois sans
        sous-titres, puis une seconde avec la transcription anglaise disponible
        sur la page de la video.
      </p>
      <div className="filters">
        <StatusFilter section="videos" value={filter} onChange={setFilter} />
      </div>
      <div className="test-list">
        {rows.map((v) => (
          <div
            key={v.id}
            className="test-row learn-row"
            data-done={learning.isDone("videos", v.id)}
          >
            <span className="test-num">{String(v.id).padStart(2, "0")}</span>
            <span>
              <a
                className="test-title learn-link"
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {v.title}
              </a>
              <br />
              <span className="test-meta">
                {v.speaker} · {v.topic}
              </span>
            </span>
            <Toggle section="videos" id={v.id} learning={learning} />
          </div>
        ))}
      </div>
      {rows.length === 0 ? <Empty /> : null}
    </>
  );
}

/* ------------------------------------------------------------- Speeches */

function SpeechesTab({ learning }) {
  const [filter, setFilter] = useState("all");
  const current = speeches.find((s) => !learning.isDone("speeches", s.id));
  const rows = speeches.filter((s) =>
    keep(filter, learning.isDone("speeches", s.id))
  );

  return (
    <>
      <p className="muted small learn-intro">
        Un discours par semaine, du plus court au plus long. Pour les discours
        longs, la ligne a apprendre indique le passage a memoriser. Ecoutez
        l'enregistrement, repetez phrase par phrase en imitant le rythme, puis
        recitez sans le texte.
      </p>

      {current ? (
        <div className="panel learn-current">
          <span className="tag">Semaine {current.id}</span>
          <h3>
            {current.speaker}, {current.title}
          </h3>
          <p className="small muted" style={{ margin: 0 }}>
            A apprendre : {current.learn}
          </p>
        </div>
      ) : null}

      <div className="filters">
        <StatusFilter section="speeches" value={filter} onChange={setFilter} />
      </div>
      <div className="test-list">
        {rows.map((s) => (
          <div
            key={s.id}
            className="test-row learn-row"
            data-done={learning.isDone("speeches", s.id)}
          >
            <span className="test-num">S{String(s.id).padStart(2, "0")}</span>
            <span>
              <a
                className="test-title learn-link"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.title}
              </a>
              <br />
              <span className="test-meta">
                {s.speaker} · {s.year} · environ {s.minutes} min
              </span>
              <br />
              <span className="test-meta">A apprendre : {s.learn}</span>
            </span>
            <Toggle section="speeches" id={s.id} learning={learning} />
          </div>
        ))}
      </div>
      {rows.length === 0 ? <Empty /> : null}
    </>
  );
}

function Empty() {
  return (
    <p className="muted" style={{ marginTop: 18 }}>
      Rien ne correspond a ce filtre.
    </p>
  );
}

/* ---------------------------------------------------------------- Board */

export default function LearningBoard() {
  const learning = useLearning();
  const [tab, setTab] = useState("articles");

  /* The active tab lives in the URL hash so links can point to /learning#videos */
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (TABS.some((t) => t.slug === fromHash)) setTab(fromHash);
  }, []);

  function open(slug) {
    setTab(slug);
    window.history.replaceState(null, "", `#${slug}`);
  }

  return (
    <>
      <div className="stat-grid" style={{ marginBottom: 24 }}>
        {TABS.map((t) => (
          <div className="stat" key={t.slug}>
            <b>
              {learning.ready ? learning.countDone(t.slug) : 0}/{t.total}
            </b>
            <span>
              {t.slug === "articles"
                ? "articles lus"
                : t.slug === "videos"
                ? "videos vues"
                : "discours appris"}
            </span>
          </div>
        ))}
      </div>

      <div className="learn-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.slug}
            role="tab"
            aria-selected={tab === t.slug}
            className="learn-tab"
            data-on={tab === t.slug}
            onClick={() => open(t.slug)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "articles" ? <ArticlesTab learning={learning} /> : null}
      {tab === "videos" ? <VideosTab learning={learning} /> : null}
      {tab === "speeches" ? <SpeechesTab learning={learning} /> : null}
    </>
  );
}
