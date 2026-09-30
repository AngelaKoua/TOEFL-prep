"use client";

import { useCallback, useEffect, useState } from "react";

const KEY = "toefl-prep:progress:v1";

/* Shape stored in localStorage:
   { reading: { "12": { score: 0.75, ts: 1730000000000 } }, listening: {...}, ... } */

function readStore() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}

function writeStore(next) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("toefl-progress"));
  } catch {
    /* storage can be unavailable in private mode; practice still works */
  }
}

export function useProgress() {
  const [store, setStore] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStore(readStore());
    setReady(true);
    const sync = () => setStore(readStore());
    window.addEventListener("toefl-progress", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("toefl-progress", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const save = useCallback((section, id, score) => {
    const next = readStore();
    next[section] = next[section] || {};
    const prev = next[section][String(id)];
    next[section][String(id)] = {
      score: prev && prev.score > score ? prev.score : score,
      last: score,
      attempts: (prev?.attempts || 0) + 1,
      ts: Date.now(),
    };
    writeStore(next);
    setStore(next);
  }, []);

  const reset = useCallback(() => {
    writeStore({});
    setStore({});
  }, []);

  return { store, ready, save, reset };
}

/** Section completion: how many tests have a recorded result. */
export function countDone(store, section) {
  return Object.keys(store?.[section] || {}).length;
}

/** Mean best score of a section, 0 to 1, or null when nothing is done. */
export function meanScore(store, section) {
  const entries = Object.values(store?.[section] || {});
  if (!entries.length) return null;
  return entries.reduce((sum, e) => sum + (e.score || 0), 0) / entries.length;
}

/** Map a 0 to 1 accuracy onto the 2026 TOEFL band scale (1.0 to 6.0). */
export function toBand(ratio) {
  if (ratio === null || ratio === undefined) return null;
  const band = 1 + ratio * 5;
  return Math.round(band * 2) / 2;
}

export function bandLabel(band) {
  if (band === null) return "Pas encore evalue";
  if (band >= 5.5) return "C1 et plus";
  if (band >= 4.5) return "B2 solide";
  if (band >= 3.5) return "B2 en construction";
  if (band >= 2.5) return "B1";
  return "A2 vers B1";
}
