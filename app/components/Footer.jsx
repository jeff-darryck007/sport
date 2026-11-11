import Link from "next/link";
import { bookmakers, site, whatsapp as wa } from "@/lib/data";

export default function Footer() {
  const { email, telegram, whatsapp } = site.contact;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="logo"><span className="logo-mark">1</span>TOP<b>5</b></p>
          <p className="muted">
            Codes promo et guides d'inscription pour les bookmakers en ligne. Site affilié : nous pouvons
            percevoir une commission lorsque tu t'inscris via nos liens, sans coût supplémentaire pour toi.
          </p>
        </div>
        <div>
          <h4>Bookmakers</h4>
          {bookmakers.map((b) => (
            <Link key={b.slug} href={`/bookmakers/${b.slug}`}>Code promo {b.nom}</Link>
          ))}
        </div>
        <div>
          <h4>Infos</h4>
          <Link href="/jeu-responsable">Jeu responsable</Link>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/#faq">FAQ</Link>
          <a href={wa.lien} target="_blank" rel="noopener">Chaîne WhatsApp {wa.nom}</a>
          {email && <a href={`mailto:${email}`}>{email}</a>}
          {telegram && <a href={telegram} target="_blank" rel="noopener">Telegram</a>}
          {whatsapp && <a href={whatsapp} target="_blank" rel="noopener">WhatsApp</a>}
        </div>
      </div>
      <div className="container footer-bottom">
        <span className="badge-18 sm">18+</span>
        <p>
          Les paris sportifs sont réservés aux personnes majeures. Jouer comporte des risques : endettement,
          isolement, dépendance. Aucun gain n'est garanti. Ne mise que ce que tu peux te permettre de perdre.
        </p>
        <p className="muted">© {new Date().getFullYear()} {site.nom}</p>
      </div>
    </footer>
  );
}
