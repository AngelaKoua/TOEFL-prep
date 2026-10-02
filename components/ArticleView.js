"use client";

import Link from "next/link";
import { useLearning } from "@/lib/learning";

/* Split "a **word** b" into text and highlighted vocabulary */
function renderParagraph(p) {
  return p.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <mark className="vocab" key={i}>
        {part.slice(2, -2)}
      </mark>
    ) : (
      part
    )
  );
}

export default function ArticleView({ article, total }) {
  const { isDone, setDone } = useLearning();
  const done = isDone("articles", article.id);

  return (
    <div>
      <Link href="/learning#articles" className="crumb">
        Learning / Articles
      </Link>
      <div className="page-head">
        <h1>{article.title}</h1>
        <p>
          <span className="tag">{article.topic}</span>{" "}
          <span className="tag neutral">{article.level}</span>
        </p>
      </div>

      <div className="panel">
        <div className="passage">
          {article.text.split("\n\n").map((p, i) => (
            <p key={i}>{renderParagraph(p)}</p>
          ))}
        </div>
      </div>

      <div className="panel">
        <h2>Vocabulaire</h2>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Mot</th>
                <th>Definition</th>
                <th>Francais</th>
              </tr>
            </thead>
            <tbody>
              {article.vocab.map(([word, def, fr]) => (
                <tr key={word}>
                  <td>
                    <b>{word}</b>
                  </td>
                  <td>{def}</td>
                  <td>{fr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="btn-row" style={{ marginTop: 18 }}>
        <button
          className={done ? "btn ghost" : "btn"}
          onClick={() => setDone("articles", article.id, !done)}
        >
          {done ? "Marquer comme non lu" : "Marquer comme lu"}
        </button>
        {article.id > 1 ? (
          <Link
            className="btn ghost"
            href={`/learning/articles/${article.id - 1}`}
          >
            Article precedent
          </Link>
        ) : null}
        {article.id < total ? (
          <Link
            className="btn ghost"
            href={`/learning/articles/${article.id + 1}`}
          >
            Article suivant
          </Link>
        ) : null}
      </div>
    </div>
  );
}
