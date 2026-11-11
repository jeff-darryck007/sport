import Image from "next/image";
import Link from "next/link";
import CopyButton from "./components/CopyButton";
import BookmakerCard from "./components/BookmakerCard";
import Gallery from "./components/Gallery";
import WhatsappSection, { WhatsappIcon } from "./components/WhatsappSection";
import { bookmakers, etapes, faq, gains, getBookmaker, site, whatsapp } from "@/lib/data";

export default function Home() {
  const top = getBookmaker("1xbet"); // le bookmaker mis en avant
  const autres = bookmakers.filter((b) => b.slug !== top.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.r },
    })),
  };

  return (
    <>
      {/* ---------- HERO : 1xBet en avant ---------- */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <span className="pill">★ Notre choix n°1 : {top.nom}</span>
            <h1>
              Inscris-toi sur {top.nom} avec le code <span className="accent">{site.codePrincipal}</span>
            </h1>
            <p className="lead">
              Copie le code, clique sur le bouton et crée ton compte {top.nom} en 2 minutes depuis ton
              téléphone, via notre lien officiel.
            </p>
            <div className="hero-code on-blue">
              <CopyButton code={site.codePrincipal} label="Copier le code" className="copy-lg" />
            </div>
            <div className="hero-actions">
              <a href={top.lien} target="_blank" rel="sponsored nofollow noopener" className="btn btn-white btn-lg">
                S'inscrire sur {top.nom} →
              </a>
              <a href="#etapes" className="btn btn-outline-white">Comment ça marche ?</a>
            </div>
            <a href={whatsapp.lien} target="_blank" rel="noopener" className="hero-wa">
              <WhatsappIcon size={20} />
              <span>
                <strong>Rejoins STATX sur WhatsApp</strong> · analyses et pronos gratuits chaque jour
              </span>
              <span className="hero-wa-go">Rejoindre →</span>
            </a>
            <p className="hero-others">
              Aussi disponible sur{" "}
              {autres.map((b, i) => (
                <span key={b.slug}>
                  {i > 0 && (i === autres.length - 1 ? " et " : ", ")}
                  <Link href={`/bookmakers/${b.slug}`}>{b.nom}</Link>
                </span>
              ))}{" "}
              avec le même code.
            </p>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="phone phone-back">
              <Image src="/images/gain-premier-league.jpg" alt="" width={360} height={360} priority />
            </div>
            <div className="phone phone-front">
              <Image src="/images/gain-ligue-champions.jpg" alt="" width={360} height={360} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CHAÎNE WHATSAPP (juste après le haut de page) ---------- */}
      <WhatsappSection />

      {/* ---------- BLOC 1XBET ---------- */}
      <section id="1xbet" className="section">
        <div className="container">
          <div className="spotlight">
            <span className="ribbon">★ Recommandé</span>
            <div>
              <h2>Pourquoi on recommande <span className="accent">{top.nom}</span></h2>
              <p className="lead">{top.accroche} Deux codes promo au choix à saisir à l'inscription :</p>
              <div className="spotlight-codes">
                {top.codes.map((c) => <CopyButton key={c} code={c} />)}
              </div>
              <ul className="checklist">
                {top.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="hero-actions">
                <a href={top.lien} target="_blank" rel="sponsored nofollow noopener" className="btn btn-lg">
                  Créer mon compte {top.nom}
                </a>
                <Link href={`/bookmakers/${top.slug}`} className="btn btn-ghost">Guide d'inscription</Link>
              </div>
            </div>
            <div className="spotlight-visual">
              <Image
                src="/images/gain-score-exact.jpg"
                alt={`Ticket gagnant sur ${top.nom}`}
                width={480}
                height={480}
                sizes="(max-width: 900px) 90vw, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- ÉTAPES ---------- */}
      <section id="etapes" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Inscription en 3 étapes</h2>
            <p>Moins de 2 minutes, depuis ton téléphone.</p>
          </div>
          <ol className="steps">
            {etapes.map((e, i) => (
              <li key={e.titre}>
                <span className="step-num">{i + 1}</span>
                <h3>{e.titre}</h3>
                <p>{e.texte}</p>
              </li>
            ))}
          </ol>
          <div className="hero-actions center" style={{ marginTop: "2rem" }}>
            <a href={top.lien} target="_blank" rel="sponsored nofollow noopener" className="btn btn-lg">
              Commencer sur {top.nom}
            </a>
          </div>
        </div>
      </section>

      {/* ---------- CODES PROMO ---------- */}
      <section id="codes" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tous nos codes promo</h2>
            <p>Copie le code, puis clique sur « S'inscrire ». Le code se saisit au moment de l'inscription.</p>
          </div>
          <div className="bk-grid">
            {bookmakers.map((b) => <BookmakerCard key={b.slug} b={b} featured={b.slug === top.slug} />)}
          </div>
        </div>
      </section>

      {/* ---------- COMPARATIF ---------- */}
      <section id="comparatif" className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Comparatif rapide</h2>
            <p>Les 4 bookmakers en un coup d'œil.</p>
          </div>
          <div className="table-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th>Bookmaker</th>
                  <th>Code promo</th>
                  <th>Idéal pour</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bookmakers.map((b) => (
                  <tr key={b.slug} className={b.slug === top.slug ? "is-top" : ""}>
                    <td>
                      <span className="dot" style={{ background: b.couleur }} /> <strong>{b.nom}</strong>
                      {b.slug === top.slug && <span className="tag-top">N°1</span>}
                    </td>
                    <td><code>{b.codes.join(" / ")}</code></td>
                    <td>{b.accroche}</td>
                    <td>
                      <a className={`btn btn-sm ${b.slug === top.slug ? "" : "btn-ghost"}`} href={b.lien} target="_blank" rel="sponsored nofollow noopener">
                        S'inscrire
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- GAINS ---------- */}
      <section id="gains" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Tickets de la communauté 1TOP5</h2>
            <p>Clique sur une image pour l'agrandir.</p>
          </div>
          <Gallery items={gains} />
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="section section-alt">
        <div className="container narrow">
          <div className="section-head">
            <h2>Questions fréquentes</h2>
          </div>
          <div className="faq">
            {faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="section">
        <div className="container">
          <div className="cta-final">
            <h2>Prêt ? Ton code {top.nom} : <span className="accent">{site.codePrincipal}</span></h2>
            <p>Copie-le maintenant et crée ton compte en 2 minutes.</p>
            <div className="hero-actions center on-blue">
              <CopyButton code={site.codePrincipal} label="Copier" className="copy-lg" />
              <a href={top.lien} target="_blank" rel="sponsored nofollow noopener" className="btn btn-white btn-lg">
                S'inscrire sur {top.nom}
              </a>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
