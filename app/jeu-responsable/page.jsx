export const metadata = {
  title: "Jeu responsable",
  description: "Conseils pour parier de façon responsable et ressources d'aide en cas de problème de jeu.",
  alternates: { canonical: "/jeu-responsable" },
};

export default function JeuResponsable() {
  return (
    <section className="section">
      <div className="container narrow prose">
        <h1>Jeu responsable</h1>
        <p className="lead">
          Les paris sportifs doivent rester un divertissement. Ils ne sont pas un moyen de gagner sa vie ni de
          rembourser des dettes.
        </p>

        <h2>Nos conseils</h2>
        <ul className="checklist">
          <li>Fixe-toi un budget mensuel et ne le dépasse jamais.</li>
          <li>Ne cherche pas à « te refaire » après une perte.</li>
          <li>Ne parie jamais l'argent du loyer, de la nourriture ou de l'école.</li>
          <li>Ne joue pas sous l'effet de l'alcool, du stress ou de la colère.</li>
          <li>Utilise les outils de limites de dépôt et d'auto-exclusion proposés par les bookmakers.</li>
          <li>Fais des pauses régulières.</li>
        </ul>

        <h2>Les signes d'alerte</h2>
        <ul>
          <li>Tu mises plus que prévu, ou de plus en plus souvent.</li>
          <li>Tu empruntes de l'argent pour jouer.</li>
          <li>Tu caches tes paris à tes proches.</li>
          <li>Le jeu te cause de l'anxiété ou des conflits.</li>
        </ul>

        <h2>Se faire aider</h2>
        <p>
          Si tu reconnais un de ces signes, parles-en à un proche ou à un professionnel de santé. Tous les
          bookmakers proposent une auto-exclusion depuis les paramètres de ton compte. En France et pour
          les francophones : <a href="https://www.joueurs-info-service.fr" target="_blank" rel="noopener">Joueurs Info Service</a>.
        </p>

        <div className="note">Les paris sont strictement interdits aux mineurs (moins de 18 ans).</div>
      </div>
    </section>
  );
}
