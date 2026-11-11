/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 → génère un site 100 % statique dans le dossier "out"
// (pratique pour l'héberger n'importe où : Vercel, Netlify, un hébergeur classique…)
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  ...(isStatic && { output: "export", trailingSlash: true }),
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: isStatic, // l'optimisation d'images nécessite un serveur Node
  },
  poweredByHeader: false,
};

export default nextConfig;
