// ============================================================
//  Toutes les données du site sont ici : modifie ce fichier
//  pour changer les codes, les liens, les textes ou les contacts.
// ============================================================

export const site = {
  nom: "1TOP5",
  // ⚠️ Remplace par ton vrai nom de domaine avant la mise en ligne
  url: "https://www.1top5.com",
  codePrincipal: "1TOP5",
  description:
    "Codes promo 1TOP5 pour 1xBet, Melbet, Betwinner et Paripesa : liens d'inscription officiels, guides pas à pas et conseils de jeu responsable.",
  // Laisse vide ("") ce que tu n'as pas : la ligne ne s'affichera pas
  contact: {
    email: "",
    telegram: "", // ex. "https://t.me/tonpseudo"
    whatsapp: "", // ex. "https://wa.me/221770000000"
  },
};

// Chaîne WhatsApp
export const whatsapp = {
  nom: "STATX",
  lien: "https://whatsapp.com/channel/0029Vb7Z8YF5q08Ww09yRg3o",
  abonnes: "5 700", // mets à jour quand ta chaîne grandit
  image: "/images/chaine-whatsapp.jpg",
  titre: "Rejoins la team STATX sur WhatsApp",
  texte:
    "Plus de 5 700 parieurs nous suivent déjà. Chaque jour, reçois gratuitement nos analyses et nos pronos, directement sur ton téléphone.",
  points: [
    "⚽ Analyses détaillées des grands matchs",
    "📊 Pronostics du jour basés sur les stats",
    "💡 Astuces et bons plans pour parier malin",
    "🎁 Les nouvelles offres et le code 1TOP5 en premier",
  ],
  bouton: "Rejoindre la chaîne gratuitement",
};

export const bookmakers = [
  {
    slug: "1xbet",
    nom: "1xBet",
    couleur: "#1a6fd1",
    lien: "https://reffpa.com/L?tag=d_2432747m_97c_&site=2432747&ad=97",
    image: "/images/bk-1xbet.jpg",
    codes: ["1TOP5", "guul1234"],
    accroche: "Le plus grand choix de marchés et de paris en direct.",
    points: [
      "Très large choix de sports et de marchés",
      "Paris en direct et cash-out",
      "Dépôts et retraits par Mobile Money (selon le pays)",
      "Application Android et iOS",
    ],
  },
  {
    slug: "melbet",
    nom: "Melbet",
    couleur: "#f2b705",
    lien: "https://refpa3665.com/L?tag=d_5142192m_45415c_&site=5142192&ad=45415",
    image: "/images/bk-melbet.jpg",
    codes: ["1TOP5"],
    accroche: "Une interface simple, idéale pour débuter.",
    points: [
      "Interface claire, facile à prendre en main",
      "Nombreuses compétitions africaines et européennes",
      "Paiements mobiles disponibles (selon le pays)",
      "Application mobile légère",
    ],
  },
  {
    slug: "betwinner",
    nom: "Betwinner",
    couleur: "#1fa45b",
    lien: "https://bwredir.com/1nAB",
    image: "/images/bk-betwinner.jpg",
    codes: ["1TOP5"],
    accroche: "Des cotes compétitives sur le football.",
    points: [
      "Cotes compétitives sur les grands championnats",
      "Statistiques et suivi des matchs en direct",
      "Plusieurs méthodes de paiement locales",
      "Application mobile complète",
    ],
  },
  {
    slug: "paripesa",
    nom: "Paripesa",
    couleur: "#e2483d",
    lien: "https://combodef.com/L?tag=d_1098253m_45533c_&site=1098253&ad=45533",
    image: "/images/bk-paripesa.jpg",
    codes: ["1TOP5"],
    accroche: "Une alternative rapide, pensée pour le mobile.",
    points: [
      "Site rapide, optimisé pour le mobile",
      "Inscription en quelques minutes",
      "Paris sportifs et paris en direct",
      "Dépôts par Mobile Money (selon le pays)",
    ],
  },
];

export const getBookmaker = (slug) => bookmakers.find((b) => b.slug === slug);

export const etapes = [
  {
    titre: "Choisis ton bookmaker",
    texte: "Clique sur « S'inscrire » : tu arrives directement sur la page d'inscription officielle.",
  },
  {
    titre: "Entre le code 1TOP5",
    texte: "Dans le champ « Code promo » du formulaire, saisis 1TOP5 (copie-le en un clic ici).",
  },
  {
    titre: "Vérifie et dépose",
    texte: "Confirme ton compte (téléphone ou e-mail), puis fais ton premier dépôt pour activer l'offre de bienvenue.",
  },
];

export const gains = [
  {
    src: "/images/gain-ligue-champions.jpg",
    titre: "Ligue des champions",
    detail: "Combiné 2 matchs · cote 2,04 · mise 1 000 000 F → 2 044 900 F",
    date: "11/03/2026",
  },
  {
    src: "/images/gain-score-exact.jpg",
    titre: "Score exact (FIFA FC 25)",
    detail: "Combiné 2 matchs · cote 198 · mise 10 000 F → 1 980 000 F",
    date: "03/03/2026",
  },
  {
    src: "/images/gain-premier-league.jpg",
    titre: "Premier League",
    detail: "Combiné 3 matchs · cote 5,83 · mise 250 000 F → 1 458 753 F",
    date: "01/03/2026",
  },
  {
    src: "/images/gain-mi-temps.jpg",
    titre: "Buts en 1re mi-temps",
    detail: "Combiné 2 matchs · cote 2,63 · mise 100 000 F → 263 577 F",
    date: "01/03/2026",
  },
  {
    src: "/images/gain-coupe-de-france.jpg",
    titre: "Coupe de France + Premier League",
    detail: "Combiné 2 matchs · cote 1,87 · mise 100 000 F → 186 825 F",
    date: "05/03/2026",
  },
  {
    src: "/images/historique-compte.jpg",
    titre: "Historique du compte",
    detail: "Historique des paris de février 2026",
    date: "16/02/2026",
  },
];

export const faq = [
  {
    q: "Comment utiliser le code promo 1TOP5 ?",
    r: "Clique sur le bouton « S'inscrire » du bookmaker choisi, remplis le formulaire et saisis 1TOP5 dans le champ « Code promo » avant de valider. Le code doit être saisi au moment de l'inscription.",
  },
  {
    q: "Puis-je ajouter le code après mon inscription ?",
    r: "En général non : le code promo s'applique uniquement lors de la création du compte. Pense à le copier avant de commencer.",
  },
  {
    q: "Quel est le bonus de bienvenue ?",
    r: "Le montant et les conditions du bonus sont fixés par chaque bookmaker et peuvent varier selon ton pays et la période. Consulte toujours les conditions affichées sur leur site avant de déposer.",
  },
  {
    q: "Pour 1xBet, quel code choisir : 1TOP5 ou guul1234 ?",
    r: "Les deux codes fonctionnent sur 1xBet. Utilise-en un seul lors de ton inscription.",
  },
  {
    q: "Comment déposer de l'argent ?",
    r: "La plupart des bookmakers acceptent le Mobile Money (Orange Money, MTN, Wave, Moov… selon le pays), les cartes bancaires et d'autres méthodes locales. Les options exactes apparaissent dans la rubrique « Dépôt » de ton compte.",
  },
  {
    q: "Est-ce légal dans mon pays ?",
    r: "Les règles sur les paris en ligne varient d'un pays à l'autre. Vérifie la réglementation de ton pays avant de t'inscrire. Les paris sont strictement réservés aux personnes majeures (18 ans et plus).",
  },
];
