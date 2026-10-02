"use client";

import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const KEY = "toefl-prep:learning:v1";

/* Shape stored in localStorage and mirrored to Firestore at learning/{uid}:
   { articles: { "12": { done: true, ts } }, videos: {...}, speeches: {...} }
   Unticking keeps the entry with done: false so the newer state wins on sync. */

function pushRemote(next) {
  const user = auth.currentUser;
  if (!user) return;
  setDoc(doc(db, "learning", user.uid), next).catch(() => {});
}

/* Keep the most recent entry for each item when local and remote disagree */
function merge(local, remote) {
  const out = { ...remote };
  for (const [section, items] of Object.entries(local)) {
    out[section] = { ...(out[section] || {}) };
    for (const [id, entry] of Object.entries(items)) {
      const other = out[section][id];
      if (!other || (entry.ts || 0) > (other.ts || 0)) out[section][id] = entry;
    }
  }
  return out;
}

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
    window.dispatchEvent(new Event("toefl-learning"));
  } catch {
    /* storage can be unavailable in private mode */
  }
  pushRemote(next);
}

export function useLearning() {
  const [store, setStore] = useState({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStore(readStore());
    setReady(true);
    const sync = () => setStore(readStore());
    window.addEventListener("toefl-learning", sync);
    window.addEventListener("storage", sync);
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      try {
        const snap = await getDoc(doc(db, "learning", user.uid));
        const merged = snap.exists() ? merge(readStore(), snap.data()) : readStore();
        writeStore(merged);
        setStore(merged);
      } catch {
        /* offline or rules not deployed yet; keep the local copy */
      }
    });
    return () => {
      window.removeEventListener("toefl-learning", sync);
      window.removeEventListener("storage", sync);
      unsub();
    };
  }, []);

  const setDone = useCallback((section, id, done) => {
    const next = readStore();
    next[section] = next[section] || {};
    next[section][String(id)] = { done, ts: Date.now() };
    writeStore(next);
    setStore(next);
  }, []);

  const isDone = useCallback(
    (section, id) => !!store?.[section]?.[String(id)]?.done,
    [store]
  );

  const countDone = useCallback(
    (section) =>
      Object.values(store?.[section] || {}).filter((e) => e.done).length,
    [store]
  );

  return { ready, isDone, setDone, countDone };
}
