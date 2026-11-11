import { whatsapp } from "@/lib/data";
import { WhatsappIcon } from "./WhatsappSection";

// Bouton WhatsApp flottant, visible sur toutes les pages
export default function WhatsappFloat() {
  return (
    <a
      href={whatsapp.lien}
      target="_blank"
      rel="noopener"
      className="wa-float"
      aria-label={`Rejoindre la chaîne WhatsApp ${whatsapp.nom}`}
    >
      <WhatsappIcon size={30} />
      <span className="wa-float-label">Rejoins la chaîne</span>
    </a>
  );
}
