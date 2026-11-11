import CopyButton from "./CopyButton";
import { getBookmaker, site } from "@/lib/data";

// Barre fixe en bas de l'écran, visible uniquement sur mobile : envoie directement vers 1xBet
export default function StickyCta() {
  const top = getBookmaker("1xbet");
  return (
    <div className="sticky-cta">
      <CopyButton code={site.codePrincipal} />
      <a href={top.lien} target="_blank" rel="sponsored nofollow noopener" className="btn btn-sm">
        S'inscrire {top.nom}
      </a>
    </div>
  );
}
