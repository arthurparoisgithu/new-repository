const path = require('path');

/**
 * Deux modes de construction :
 *  - par défaut, l'application Next classique (serveur, routes API, base) ;
 *  - avec NEXT_OUTPUT_MODE=export, un site entièrement statique, celui que
 *    GitHub Pages sert. NEXT_PUBLIC_BASE_PATH porte alors le sous-chemin du
 *    dépôt (/mon-depot) ; laissez-le vide pour un domaine dédié.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: process.env.NEXT_OUTPUT_MODE,
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  experimental: {
    outputFileTracingRoot: path.join(__dirname, '../'),
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.filename = 'static/chunks/[name]-[contenthash:8].js';
      config.output.chunkFilename = 'static/chunks/[contenthash:16].js';
    }
    return config;
  },
};

module.exports = nextConfig;
