"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useProgress, countDone } from "@/lib/progress";

const SECTIONS = [
  { slug: "reading", label: "Reading", total: 50 },
  { slug: "listening", label: "Listening", total: 50 },
  { slug: "writing", label: "Writing", total: 50 },
  { slug: "speaking", label: "Speaking", total: 50 },
];

export default function Rail() {
  const pathname = usePathname();
  const { store, ready } = useProgress();

  return (
    <nav className="rail" aria-label="Navigation principale">
      <Link href="/" className="rail-brand">
        Atelier TOEFL
      </Link>
      <div className="rail-sub">Format iBT 2026, bandes 1 a 6</div>

      <div className="rail-group">
        <div className="rail-heading">Entrainement</div>
        <div className="rail-nav">
          {SECTIONS.map((s) => {
            const done = ready ? countDone(store, s.slug) : 0;
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="rail-link"
                data-active={pathname.startsWith(`/${s.slug}`)}
              >
                <span>{s.label}</span>
                <span className="rail-count">
                  {done}/{s.total}
                </span>
              </Link>
            );
          })}
          <Link
            href="/templates"
            className="rail-link"
            data-active={pathname.startsWith("/templates")}
          >
            <span>Writing templates</span>
          </Link>
          <Link
            href="/learning"
            className="rail-link"
            data-active={pathname.startsWith("/learning")}
          >
            <span>Learning</span>
          </Link>
        </div>
      </div>

      <div className="rail-group">
        <div className="rail-heading">Reperes</div>
        <div className="rail-nav">
          <Link href="/" className="rail-link" data-active={pathname === "/"}>
            <span>Tableau de bord</span>
          </Link>
          <Link
            href="/guide"
            className="rail-link"
            data-active={pathname.startsWith("/guide")}
          >
            <span>Format et bareme</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
