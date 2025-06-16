import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Afèpanou - Première plateforme e-commerce 100% haïtienne",
  description:
    "Découvrez Afèpanou, la première plateforme de commerce électronique 100% haïtienne. Des produits de qualité, un impact social mesurable pour le développement d'Haïti.",
  keywords: "Afèpanou, e-commerce Haïti, boutique haïtienne, produits locaux, économie circulaire, formation jeunesse",
  authors: [{ name: "Afèpanou Team" }],
  creator: "Afèpanou",
  publisher: "Afèpanou",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_HT",
    url: "https://afepanou.com",
    title: "Afèpanou - Première plateforme e-commerce 100% haïtienne",
    description: "Découvrez Afèpanou, la première plateforme de commerce électronique 100% haïtienne.",
    siteName: "Afèpanou",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afèpanou - Première plateforme e-commerce 100% haïtienne",
    description: "Découvrez Afèpanou, la première plateforme de commerce électronique 100% haïtienne.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
