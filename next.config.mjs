/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration pour Railway
  output: 'standalone',

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuration des images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blob.v0.dev',
      }
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  
  // Désactiver la télémétrie
  telemetry: {
    disabled: true
  }
}

export default nextConfig
