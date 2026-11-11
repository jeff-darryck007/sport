"use client";

import Link from "next/link";
import { useState } from "react";
import { getBookmaker } from "@/lib/data";

const top = getBookmaker("1xbet");

const liens = [
  { href: "/#1xbet", label: "1xBet" },
  { href: "/#codes", label: "Codes promo" },
  { href: "/#comparatif", label: "Comparatif" },
  { href: "/#etapes", label: "Inscription" },
  { href: "/#gains", label: "Gains" },
  { href: "/#whatsapp", label: "WhatsApp" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo-mark">1</span>TOP<b>5</b>
        </Link>

        <button
          className="burger"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav ${open ? "is-open" : ""}`}>
          {liens.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a
            href={top.lien}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="btn btn-sm"
            onClick={() => setOpen(false)}
          >
            S'inscrire sur {top.nom}
          </a>
        </nav>
      </div>
    </header>
  );
}
