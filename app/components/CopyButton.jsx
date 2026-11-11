"use client";

import { useState } from "react";

export default function CopyButton({ code, className = "", label }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // Ancien navigateur : méthode de secours
      const t = document.createElement("textarea");
      t.value = code;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`copy ${copied ? "is-copied" : ""} ${className}`}
      aria-label={`Copier le code ${code}`}
    >
      <span className="copy-code">{code}</span>
      <span className="copy-action" aria-live="polite">
        {copied ? "✓ Copié" : label || "Copier"}
      </span>
    </button>
  );
}
