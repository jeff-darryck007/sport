import Image from "next/image";
import Link from "next/link";
import CopyButton from "./CopyButton";

export default function BookmakerCard({ b, featured = false }) {
  return (
    <article className={`bk-card ${featured ? "is-featured" : ""}`} style={{ "--bk": b.couleur }}>
      {featured && <span className="ribbon">★ Notre choix n°1</span>}

      {b.image && (
        <a
          href={b.lien}
          target="_blank"
          rel="sponsored nofollow noopener"
          className="bk-banner"
          aria-label={`S'inscrire sur ${b.nom} avec le code ${b.codes[0]}`}
        >
          {/* fond flouté + image entière par-dessus : aucun texte coupé, quel que soit le format */}
          <Image src={b.image} alt="" fill sizes="80px" className="bk-banner-bg" aria-hidden="true" />
          <Image
            src={b.image}
            alt={`${b.nom} : inscription avec le code promo ${b.codes[0]}`}
            fill
            sizes="(max-width: 600px) 95vw, (max-width: 1200px) 48vw, 580px"
            className="bk-banner-img"
          />
        </a>
      )}
      <header className="bk-head">
        <span className="bk-avatar" aria-hidden="true">{b.nom.slice(0, 2)}</span>
        <div>
          <h3>{b.nom}</h3>
          <p>{b.accroche}</p>
        </div>
      </header>

      <div className="bk-codes">
        <span className="label">{b.codes.length > 1 ? "Codes promo (au choix)" : "Code promo"}</span>
        {b.codes.map((c) => <CopyButton key={c} code={c} />)}
      </div>

      <ul className="checklist">
        {b.points.map((p) => <li key={p}>{p}</li>)}
      </ul>

      <div className="bk-actions">
        <a className="btn btn-block" href={b.lien} target="_blank" rel="sponsored nofollow noopener">
          S'inscrire sur {b.nom} →
        </a>
        <Link className="link-more" href={`/bookmakers/${b.slug}`}>Guide d'inscription {b.nom}</Link>
      </div>
    </article>
  );
}
