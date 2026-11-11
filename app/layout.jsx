import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyCta from "./components/StickyCta";
import WhatsappFloat from "./components/WhatsappFloat";
import { site } from "@/lib/data";

// Poppins pour les titres et boutons, Inter pour le texte
const heading = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800"], display: "swap", variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Code promo 1TOP5 – 1xBet, Melbet, Betwinner, Paripesa",
    template: "%s | 1TOP5",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.nom,
    title: "Code promo 1TOP5 – 1xBet, Melbet, Betwinner, Paripesa",
    description: site.description,
    images: ["/images/gain-ligue-champions.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = { themeColor: "#000000" };

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${body.className} ${heading.variable}`}>
        <a href="#contenu" className="skip">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyCta />
        <WhatsappFloat />
      </body>
    </html>
  );
}
