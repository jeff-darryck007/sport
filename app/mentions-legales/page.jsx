import { site } from "@/lib/data";

export const metadata = {
  title: "Mentions légales",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <section className="section">
      <div className="container narrow prose">
        <h1>Mentions légales</h1>

        <h2>Éditeur du site</h2>
        {/* ⚠️ À compléter avec tes vraies informations */}
        <p>
          Nom / raison sociale : <em>à compléter</em><br />
          Pays : <em>à compléter</em><br />
          Contact : {site.contact.email || <em>à compléter</em>}
        </p>

        <h2>Hébergement</h2>
        <p><em>À compléter (ex. Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis).</em></p>

        <h2>Affiliation</h2>
        <p>
          {site.nom} est un site affilié. Certains liens sont des liens d'affiliation : nous pouvons percevoir une
          commission lorsqu'un utilisateur s'inscrit chez un opérateur via ces liens. Cela n'entraîne aucun coût
          supplémentaire pour l'utilisateur. {site.nom} n'est pas un opérateur de paris et ne prend aucune mise.
        </p>

        <h2>Responsabilité</h2>
        <p>
          Les offres, bonus et conditions sont définis par les opérateurs et peuvent changer à tout moment.
          Il appartient à chaque utilisateur de vérifier que les paris en ligne sont autorisés dans son pays.
          Les captures de tickets présentées sur le site illustrent des résultats passés et ne garantissent aucun
          gain futur.
        </p>

        <h2>Données personnelles</h2>
        <p>
          Ce site ne collecte pas de données personnelles.
        </p>
      </div>
    </section>
  );
}
