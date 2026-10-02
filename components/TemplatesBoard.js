"use client";

import { useState } from "react";
import { useTemplates } from "@/lib/templates";

const KINDS = [
  { slug: "email", label: "Write an Email" },
  { slug: "discussion", label: "Academic Discussion" },
  { slug: "other", label: "Autre" },
];

const EMPTY = { id: null, title: "", kind: "email", body: "" };

function countWords(text) {
  return (text.trim().match(/[A-Za-z0-9'’-]+/g) || []).length;
}

function kindLabel(slug) {
  return KINDS.find((k) => k.slug === slug)?.label || "Autre";
}

function formatDate(ts) {
  return new Date(ts).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function Editor({ draft, setDraft, onSave, onCancel }) {
  const canSave = draft.title.trim() && draft.body.trim();

  return (
    <div className="panel">
      <h2>{draft.id ? "Modifier le template" : "Nouveau template"}</h2>
      <div className="tpl-fields">
        <label className="tpl-field">
          <span className="small muted">Titre</span>
          <input
            className="tpl-input"
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Ex. Email de reclamation a un professeur"
            autoFocus
          />
        </label>
        <label className="tpl-field">
          <span className="small muted">Tache</span>
          <select
            className="tpl-input"
            value={draft.kind}
            onChange={(e) => setDraft({ ...draft, kind: e.target.value })}
          >
            {KINDS.map((k) => (
              <option key={k.slug} value={k.slug}>
                {k.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <textarea
        className="editor"
        value={draft.body}
        onChange={(e) => setDraft({ ...draft, body: e.target.value })}
        placeholder="Redigez votre reponse modele ici..."
        spellCheck
      />
      <div className="editor-bar">
        <span>{countWords(draft.body)} mots</span>
        <div className="btn-row">
          <button className="btn ghost small" onClick={onCancel}>
            Annuler
          </button>
          <button className="btn small" onClick={onSave} disabled={!canSave}>
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesBoard() {
  const { templates, ready, upsert, remove } = useTemplates();
  const [draft, setDraft] = useState(null);
  const [filter, setFilter] = useState("all");

  const shown =
    filter === "all" ? templates : templates.filter((t) => t.kind === filter);

  function save() {
    upsert({
      id: draft.id,
      title: draft.title.trim(),
      kind: draft.kind,
      body: draft.body,
    });
    setDraft(null);
  }

  function confirmRemove(t) {
    if (window.confirm(`Supprimer le template « ${t.title} » ?`)) {
      remove(t.id);
      if (draft?.id === t.id) setDraft(null);
    }
  }

  return (
    <>
      {draft ? (
        <Editor
          draft={draft}
          setDraft={setDraft}
          onSave={save}
          onCancel={() => setDraft(null)}
        />
      ) : (
        <div className="btn-row">
          <button className="btn" onClick={() => setDraft({ ...EMPTY })}>
            Nouveau template
          </button>
        </div>
      )}

      <div className="filters" style={{ marginTop: 28 }}>
        <button
          className="chip"
          data-on={filter === "all"}
          onClick={() => setFilter("all")}
        >
          Tous ({templates.length})
        </button>
        {KINDS.map((k) => (
          <button
            key={k.slug}
            className="chip"
            data-on={filter === k.slug}
            onClick={() => setFilter(k.slug)}
          >
            {k.label} ({templates.filter((t) => t.kind === k.slug).length})
          </button>
        ))}
      </div>

      {ready && shown.length === 0 ? (
        <div className="panel">
          <p className="muted small" style={{ margin: 0 }}>
            {templates.length === 0
              ? "Aucun template pour l'instant. Commencez par en rediger un."
              : "Aucun template dans cette categorie."}
          </p>
        </div>
      ) : null}

      <div className="tpl-list">
        {shown.map((t) => (
          <article className="panel tpl-card" key={t.id}>
            <div className="tpl-head">
              <div>
                <h3>{t.title}</h3>
                <div className="test-meta">
                  {kindLabel(t.kind)} · {countWords(t.body)} mots · modifie le{" "}
                  {formatDate(t.ts)}
                </div>
              </div>
              <div className="btn-row">
                <button
                  className="btn ghost small"
                  onClick={() => {
                    setDraft({ id: t.id, title: t.title, kind: t.kind, body: t.body });
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Modifier
                </button>
                <button
                  className="btn ghost small tpl-delete"
                  onClick={() => confirmRemove(t)}
                >
                  Supprimer
                </button>
              </div>
            </div>
            <div className="tpl-body">{t.body}</div>
          </article>
        ))}
      </div>
    </>
  );
}
