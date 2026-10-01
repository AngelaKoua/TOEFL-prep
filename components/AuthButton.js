"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";

export default function AuthButton() {
  const [user, setUser] = useState(null);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  if (user) {
    return (
      <div className="btn-row">
        <span className="small muted">
          Progression synchronisee : {user.email}
        </span>
        <button className="btn ghost small" onClick={() => signOut(auth)}>
          Se deconnecter
        </button>
      </div>
    );
  }

  return (
    <button
      className="btn small"
      onClick={() => signInWithPopup(auth, googleProvider).catch(() => {})}
    >
      Se connecter avec Google
    </button>
  );
}
