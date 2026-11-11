"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

export default function Gallery({ items }) {
  const [index, setIndex] = useState(null);
  const close = useCallback(() => setIndex(null), []);
  const move = useCallback(
    (d) => setIndex((i) => (i + d + items.length) % items.length),
    [items.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, move]);

  const current = index !== null ? items[index] : null;

  return (
    <>
      <div className="gallery">
        {items.map((g, i) => (
          <button key={g.src} className="gallery-item" onClick={() => setIndex(i)}>
            <Image
              src={g.src}
              alt={`${g.titre} – ${g.detail}`}
              width={400}
              height={400}
              sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 260px"
            />
            <span className="gallery-caption">
              <strong>{g.titre}</strong>
              <small>{g.date}</small>
            </span>
          </button>
        ))}
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.titre} onClick={close}>
          <button className="lb-close" onClick={close} aria-label="Fermer">×</button>
          <button className="lb-nav lb-prev" onClick={(e) => { e.stopPropagation(); move(-1); }} aria-label="Image précédente">‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <Image src={current.src} alt={current.titre} width={900} height={900} sizes="90vw" priority />
            <figcaption>
              <strong>{current.titre}</strong> · {current.detail} · {current.date}
            </figcaption>
          </figure>
          <button className="lb-nav lb-next" onClick={(e) => { e.stopPropagation(); move(1); }} aria-label="Image suivante">›</button>
        </div>
      )}
    </>
  );
}
