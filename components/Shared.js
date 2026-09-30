"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

/* ---------------------------------------------------------------- Speaker
   Reads a script aloud with the browser speech engine. No audio file needed,
   and the rate control lets you slow a passage down while your ear catches up.
------------------------------------------------------------------------- */

export function Speaker({ script, label = "Ecouter", onEnd }) {
  const [speaking, setSpeaking] = useState(false);
  const [rate, setRate] = useState(1);
  const [supported, setSupported] = useState(true);
  const [plays, setPlays] = useState(0);
  const rateId = useId();
  const rateRef = useRef(rate);
  rateRef.current = rate;

  useEffect(() => {
    setSupported(typeof window !== "undefined" && "speechSynthesis" in window);
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function pickVoice() {
    const voices = window.speechSynthesis.getVoices() || [];
    return (
      voices.find((v) => /en[-_]US/i.test(v.lang) && /natural|google|samantha/i.test(v.name)) ||
      voices.find((v) => /en[-_]US/i.test(v.lang)) ||
      voices.find((v) => /^en/i.test(v.lang)) ||
      null
    );
  }

  function play() {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(script);
    u.lang = "en-US";
    u.rate = rateRef.current;
    const v = pickVoice();
    if (v) u.voice = v;
    u.onend = () => {
      setSpeaking(false);
      setPlays((n) => n + 1);
      if (onEnd) onEnd();
    };
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(u);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  if (!supported) {
    return (
      <div className="audio-box">
        <span className="small muted">
          Ce navigateur ne lit pas la synthese vocale. Ouvrez la transcription
          plus bas et faites-la lire par un autre outil.
        </span>
      </div>
    );
  }

  return (
    <div className="audio-box">
      <button className="btn" onClick={speaking ? stop : play}>
        {speaking ? "Arreter" : label}
      </button>
      <span className="wave" data-on={speaking} aria-hidden="true">
        <i /><i /><i /><i /><i /><i /><i />
      </span>
      <div className="speed-row">
        <label htmlFor={rateId}>Vitesse</label>
        <input
          id={rateId}
          type="range"
          min="0.6"
          max="1.2"
          step="0.05"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
        />
        <span>{rate.toFixed(2)}x</span>
      </div>
      <span className="small muted">Ecoutes : {plays}</span>
    </div>
  );
}

/* ---------------------------------------------------------------- Countdown
   Used for the timed writing and speaking tasks.
------------------------------------------------------------------------- */

export function Countdown({ seconds, running, onDone, autoKey }) {
  const [left, setLeft] = useState(seconds);

  useEffect(() => {
    setLeft(seconds);
  }, [seconds, autoKey]);

  useEffect(() => {
    if (!running) return undefined;
    if (left <= 0) {
      if (onDone) onDone();
      return undefined;
    }
    const t = setTimeout(() => setLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [running, left, onDone]);

  const m = Math.floor(left / 60);
  const s = left % 60;
  return (
    <div className="timer" data-low={left <= 15} role="timer" aria-live="off">
      {m}:{String(s).padStart(2, "0")}
    </div>
  );
}

/* ---------------------------------------------------------------- Recorder
   Records your voice so you can hear yourself back. Nothing leaves the browser.
------------------------------------------------------------------------- */

export function Recorder({ maxSeconds = 45, hint }) {
  const [state, setState] = useState("idle");
  const [takes, setTakes] = useState([]);
  const [error, setError] = useState(null);
  const recRef = useRef(null);
  const chunksRef = useRef([]);
  const stopTimer = useRef(null);

  useEffect(
    () => () => {
      if (stopTimer.current) clearTimeout(stopTimer.current);
      takes.forEach((t) => URL.revokeObjectURL(t.url));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  async function start() {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const rec = new MediaRecorder(stream);
      chunksRef.current = [];
      rec.ondataavailable = (e) => e.data.size && chunksRef.current.push(e.data);
      rec.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setTakes((prev) => [{ url, at: new Date() }, ...prev].slice(0, 4));
        stream.getTracks().forEach((t) => t.stop());
        setState("idle");
      };
      recRef.current = rec;
      rec.start();
      setState("recording");
      stopTimer.current = setTimeout(stop, maxSeconds * 1000);
    } catch {
      setError(
        "Le micro n'est pas accessible. Autorisez le microphone dans le navigateur, puis reessayez."
      );
      setState("idle");
    }
  }

  function stop() {
    if (stopTimer.current) clearTimeout(stopTimer.current);
    if (recRef.current && recRef.current.state !== "inactive") {
      recRef.current.stop();
    }
  }

  return (
    <div className="recorder">
      <div className="btn-row">
        <button
          className="btn"
          onClick={state === "recording" ? stop : start}
        >
          {state === "recording" ? "Arreter l'enregistrement" : "Enregistrer ma reponse"}
        </button>
        <Countdown
          seconds={maxSeconds}
          running={state === "recording"}
          autoKey={takes.length}
        />
        {hint ? <span className="small muted">{hint}</span> : null}
      </div>

      {error ? <p className="small" style={{ color: "var(--bad)" }}>{error}</p> : null}

      {takes.map((t, i) => (
        <div className="take" key={t.url}>
          <span className="small muted">
            Prise {takes.length - i} a {t.at.toLocaleTimeString("fr-FR")}
          </span>
          <audio controls src={t.url} />
          <a className="small" href={t.url} download={`prise-${takes.length - i}.webm`}>
            Telecharger
          </a>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------- Result bar */

export function ResultBar({ correct, total, band, children }) {
  const pct = total ? Math.round((correct / total) * 100) : 0;
  return (
    <div className="result">
      <div>
        <div className="result-score">
          {correct}/{total}
          <small>{pct}% de reponses justes</small>
        </div>
      </div>
      {band !== undefined && band !== null ? (
        <div>
          <div className="result-score">
            {band.toFixed(1)}
            <small>bande estimee sur 6</small>
          </div>
        </div>
      ) : null}
      <div style={{ flex: 1, minWidth: 180 }}>{children}</div>
    </div>
  );
}

/* --------------------------------------------------------- Prev / next nav */

export function TestNav({ section, id, total }) {
  return (
    <div className="btn-row" style={{ marginTop: 32, justifyContent: "space-between" }}>
      <div className="btn-row">
        {id > 1 ? (
          <Link className="btn ghost small" href={`/${section}/${id - 1}`}>
            Test precedent
          </Link>
        ) : null}
        <Link className="btn ghost small" href={`/${section}`}>
          Liste des tests
        </Link>
      </div>
      {id < total ? (
        <Link className="btn small" href={`/${section}/${id + 1}`}>
          Test suivant
        </Link>
      ) : null}
    </div>
  );
}
