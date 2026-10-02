"use client";

import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

const KEY = "toefl-prep:templates:v1";

/* Shape stored in localStorage and mirrored to Firestore at templates/{uid}:
   { items: { "<id>": { id, title, kind, body, created, ts, deleted? } } }
   Deleted templates are kept as tombstones so a sync cannot bring them back. */

function pushRemote(next) {
  const user = auth.currentUser;
  if (!user) return;
  setDoc(doc(db, "templates", user.uid), next).catch(() => {});
}

/* Keep the most recent version of each template when local and remote disagree */
function merge(local, remote) {
  const items = { ...(remote.items || {}) };
  for (const [id, entry] of Object.entries(local.items || {})) {
    const other = items[id];
    if (!other || (entry.ts || 0) > (other.ts || 0)) items[id] = entry;
  }
  return { items };
}

function readStore() {
  if (typeof window === "undefined") return { items: {} };
  try {
    const parsed = JSON.parse(window.localStorage.getItem(KEY) || "{}");
    return { items: parsed.items || {} };
  } catch {
    return { items: {} };
  }
}

function writeStore(next) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
    window.dispatchEvent(new Event("toefl-templates"));
  } catch {
    /* storage can be unavailable in private mode */
  }
  pushRemote(next);
}

function newId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function useTemplates() {
  const [store, setStore] = useState({ items: {} });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStore(readStore());
    setReady(true);
    const sync = () => setStore(readStore());
    window.addEventListener("toefl-templates", sync);
    window.addEventListener("storage", sync);
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      try {
        const snap = await getDoc(doc(db, "templates", user.uid));
        const merged = snap.exists() ? merge(readStore(), snap.data()) : readStore();
        writeStore(merged);
        setStore(merged);
      } catch {
        /* offline or rules not deployed yet; keep the local copy */
      }
    });
    return () => {
      window.removeEventListener("toefl-templates", sync);
      window.removeEventListener("storage", sync);
      unsub();
    };
  }, []);

  const commit = useCallback((change) => {
    const next = readStore();
    change(next.items);
    writeStore(next);
    setStore(next);
  }, []);

  /** Create a template when `id` is missing, otherwise update it. Returns the id. */
  const upsert = useCallback(
    ({ id, title, kind, body }) => {
      const key = id || newId();
      commit((items) => {
        const now = Date.now();
        items[key] = {
          id: key,
          title,
          kind,
          body,
          created: items[key]?.created || now,
          ts: now,
        };
      });
      return key;
    },
    [commit]
  );

  const remove = useCallback(
    (id) => {
      commit((items) => {
        items[id] = { id, deleted: true, ts: Date.now() };
      });
    },
    [commit]
  );

  const templates = Object.values(store.items)
    .filter((t) => !t.deleted)
    .sort((a, b) => (b.ts || 0) - (a.ts || 0));

  return { templates, ready, upsert, remove };
}
