import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow" style={{ textAlign: "center" }}>
        <h1>Page introuvable</h1>
        <p className="lead">Cette page n'existe pas ou a été déplacée.</p>
        <Link href="/" className="btn">Retour à l'accueil</Link>
      </div>
    </section>
  );
}
