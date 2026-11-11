import Link from "next/link";
import { notFound } from "next/navigation";
import CopyButton from "@/app/components/CopyButton";
import { bookmakers, getBookmaker } from "@/lib/data";

export function generateStaticParams() {
  return bookmakers.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const b = getBookmaker(slug);
  if (!b) return {};
  return {
    title: `Code promo ${b.nom} ${b.codes[0]} : inscription pas à pas`,
    description: `Utilise le code promo ${b.codes.join(" ou ")} pour t'inscrire sur ${b.nom}. Lien d'inscription officiel et guide étape par étape.`,
    alternates: { canonical: `/bookmakers/${b.slug}` },
  };
}

export default async function BookmakerPage({ params }) {
  const { slug } = await params;
  const b = getBookmaker(slug);
  if (!b) notFound();

  const autres = bookmakers.filter((x) => x.slug !== b.slug);
  const top = getBookmaker("1xbet");

  return (
    <>
      <section className="page-hero" style={{ "--bk": b.couleur }}>
        <div className="container narrow">
          <nav className="breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link> › <span>{b.nom}</span>
          </nav>
          <h1>Code promo {b.nom} : <span className="accent">{b.codes[0]}</span></h1>
          <p className="lead">{b.accroche}</p>
          <div className="hero-actions">
            {b.codes.map((c) => <CopyButton key={c} code={c} className="copy-lg" />)}
          </div>
          <a className="btn btn-lg" href={b.lien} target="_blank" rel="sponsored nofollow noopener">
            S'inscrire sur {b.nom} →
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container narrow prose">
          <h2>Comment s'inscrire sur {b.nom} avec le code {b.codes[0]}</h2>
          <ol className="steps-list">
            <li>
              <strong>Copie le code</strong> {b.codes.map((c, i) => <span key={c}>{i > 0 && " ou "}<code>{c}</code></span>)} avec
              le bouton ci-dessus.
            </li>
            <li>
              <strong>Ouvre la page d'inscription</strong> en cliquant sur{" "}
              <a href={b.lien} target="_blank" rel="sponsored nofollow noopener">S'inscrire sur {b.nom}</a>.
            </li>
            <li><strong>Choisis ta méthode</strong> : en un clic, par téléphone ou par e-mail.</li>
            <li><strong>Sélectionne ton pays et ta devise</strong> (par exemple XOF / XAF). Attention : la devise ne peut généralement plus être changée ensuite.</li>
            <li><strong>Colle le code promo</strong> dans le champ « Code promo » avant de valider.</li>
            <li><strong>Confirme ton compte</strong> (SMS ou e-mail) et complète ton profil.</li>
            <li><strong>Fais ton premier dépôt</strong> depuis la rubrique « Dépôt » (Mobile Money, carte…).</li>
          </ol>

          <h2>Pourquoi choisir {b.nom} ?</h2>
          <ul className="checklist">
            {b.points.map((p) => <li key={p}>{p}</li>)}
          </ul>

          <div className="note">
            Les bonus, les méthodes de paiement et les conditions dépendent de {b.nom} et de ton pays. Lis
            toujours les conditions sur le site officiel avant de déposer. Réservé aux 18 ans et plus.
          </div>

          <a className="btn btn-lg btn-block" href={b.lien} target="_blank" rel="sponsored nofollow noopener">
            Créer mon compte {b.nom} avec le code {b.codes[0]}
          </a>

          {b.slug !== top.slug && (
            <div className="promo-1xbet">
              <div>
                <strong>★ Notre choix n°1 : {top.nom}</strong>
                <p className="muted" style={{ margin: 0 }}>{top.accroche} Code : {top.codes.join(" ou ")}</p>
              </div>
              <a className="btn btn-sm" href={top.lien} target="_blank" rel="sponsored nofollow noopener">
                Essayer {top.nom}
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head"><h2>Les autres bookmakers</h2></div>
          <div className="mini-grid">
            {autres.map((x) => (
              <Link key={x.slug} href={`/bookmakers/${x.slug}`} className="mini-card" style={{ "--bk": x.couleur }}>
                <span className="bk-avatar">{x.nom.slice(0, 2)}</span>
                <strong>{x.nom}</strong>
                <code>{x.codes[0]}</code>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
