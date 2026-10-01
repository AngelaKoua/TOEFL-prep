"use client";

import Link from "next/link";
import {
  useProgress,
  countDone,
  meanScore,
  toBand,
  bandLabel,
} from "@/lib/progress";
import AuthButton from "@/components/AuthButton";

const SECTIONS = [
  {
    slug: "reading",
    label: "Reading",
    total: 50,
    blurb: "Passages academiques, textes du quotidien, mots a completer.",
  },
  {
    slug: "listening",
    label: "Listening",
    total: 50,
    blurb: "Conversations, annonces, cours, reponses a choisir.",
  },
  {
    slug: "writing",
    label: "Writing",
    total: 50,
    blurb: "Phrases a reconstruire, emails, discussions academiques.",
  },
  {
    slug: "speaking",
    label: "Speaking",
    total: 50,
    blurb: "Repetition de phrases et entretiens sans preparation.",
  },
];

function Band({ name, value }) {
  const pct = value === null ? 0 : ((value - 1) / 5) * 100;
  return (
    <div className="band">
      <div className="band-name">{name}</div>
      <div className="band-track">
        <div className="band-fill" style={{ width: `${pct}%` }} />
        <div className="band-ticks" aria-hidden="true">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
      <div className="band-value">
        {value === null ? "-" : value.toFixed(1)}
        <small>sur 6</small>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const { store, ready, reset } = useProgress();

  const rows = SECTIONS.map((s) => {
    const done = ready ? countDone(store, s.slug) : 0;
    const mean = ready ? meanScore(store, s.slug) : null;
    return { ...s, done, band: toBand(mean) };
  });

  const totalDone = rows.reduce((n, r) => n + r.done, 0);
  const scored = rows.filter((r) => r.band !== null);
  const overall = scored.length
    ? Math.round((scored.reduce((n, r) => n + r.band, 0) / scored.length) * 2) / 2
    : null;

  const next = rows
    .slice()
    .sort((a, b) => a.done - b.done)[0];

  return (
    <div>
      <div className="page-head">
        <h1>Votre bande estimee, section par section</h1>
        <p>
          Depuis le 21 janvier 2026, le TOEFL iBT dure environ quatre-vingt-dix
          minutes et se note en bandes de 1,0 a 6,0 alignees sur le CECR. Les
          jauges ci-dessous convertissent vos resultats sur cette echelle. Elles
          sont indicatives : elles mesurent ce que vous avez fait ici, pas ce que
          fera un correcteur ETS.
        </p>
        <div style={{ marginTop: 14 }}>
          <AuthButton />
        </div>
      </div>

      <div className="panel">
        <div className="bands">
          {rows.map((r) => (
            <Band key={r.slug} name={r.label} value={r.band} />
          ))}
        </div>
        <hr className="divider" />
        <div className="btn-row">
          <span className="tag">
            Bande globale : {overall === null ? "non evaluee" : overall.toFixed(1)}
          </span>
          <span className="small muted">{bandLabel(overall)}</span>
        </div>
      </div>

      <div className="stat-grid" style={{ marginTop: 18 }}>
        <div className="stat">
          <b>{totalDone}</b>
          <span>tests termines sur 200</span>
        </div>
        <div className="stat">
          <b>{200 - totalDone}</b>
          <span>tests restants</span>
        </div>
        <div className="stat">
          <b>{next ? next.label : "-"}</b>
          <span>section la moins travaillee</span>
        </div>
      </div>

      <h2 style={{ marginTop: 34, marginBottom: 14 }}>Les quatre sections</h2>
      <div className="skill-grid">
        {rows.map((r) => (
          <Link key={r.slug} href={`/${r.slug}`} className="skill-card">
            <h3>{r.label}</h3>
            <p>{r.blurb}</p>
            <div className="skill-progress">
              <i style={{ width: `${(r.done / r.total) * 100}%` }} />
            </div>
            <div className="small muted" style={{ marginTop: 8 }}>
              {r.done} sur {r.total}
            </div>
          </Link>
        ))}
      </div>

      <div className="panel" style={{ marginTop: 26 }}>
        <h3>Comment utiliser cet atelier</h3>
        <ul className="checklist">
          <li>
            Une session utile dure trente minutes : un test de reading, un de
            listening, et une tache de production.
          </li>
          <li>
            En reading et listening, corrigez puis relisez les explications avant
            de passer au test suivant. Le gain vient de la relecture, pas du
            volume.
          </li>
          <li>
            En writing et speaking, remplissez la grille d'auto-evaluation
            honnetement. Une bande gonflee ne sert a rien.
          </li>
          <li>
            Refaites un test deja fait sans regarder : seul le meilleur score est
            conserve, mais le dernier essai est enregistre aussi.
          </li>
        </ul>
        <hr className="divider" />
        <div className="btn-row">
          <Link className="btn ghost small" href="/guide">
            Voir le format et le bareme 2026
          </Link>
          <button
            className="btn ghost small"
            onClick={() => {
              if (
                window.confirm(
                  "Effacer toute la progression enregistree (y compris celle synchronisee sur votre compte) ?"
                )
              ) {
                reset();
              }
            }}
          >
            Reinitialiser la progression
          </button>
        </div>
      </div>
    </div>
  );
}
