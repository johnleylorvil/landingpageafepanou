"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface ContenuMediatiqueItem {
  id: string
  titre: string
  description: string
  image: string
  lien?: string
  type: "actualite" | "promotion" | "evenement" | "formation"
}

export function ContenuMediatique() {
  // Cette section pourrait être alimentée dynamiquement depuis une API
  const contenus: ContenuMediatiqueItem[] = [
    {
      id: "1",
      titre: "Nouvelle Formation en Entrepreneuriat",
      description: "Lancez votre entreprise avec notre programme de formation complet de 8 semaines",
      image: "/images/formation-entrepreneuriat.png",
      type: "formation",
      lien: "#formation",
    },
    {
      id: "2",
      titre: "Promotion Spéciale - Produits Patriotiques",
      description: "20% de réduction sur tous les produits patriotiques ce mois-ci. Chaque achat forme un jeune !",
      image: "/images/promo-patriotique.png",
      type: "promotion",
      lien: "#patriotique",
    },
    {
      id: "3",
      titre: "Événement : Salon des Entrepreneurs Haïtiens",
      description: "Rencontrez les entrepreneurs locaux et découvrez leurs innovations le 15 février",
      image: "/images/salon-entrepreneurs.png",
      type: "evenement",
      lien: "#evenement",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "formation":
        return "bg-blue-500"
      case "promotion":
        return "bg-red-500"
      case "evenement":
        return "bg-green-500"
      default:
        return "bg-orange-500"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "formation":
        return "Formation"
      case "promotion":
        return "Promotion"
      case "evenement":
        return "Événement"
      default:
        return "Actualité"
    }
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Actualités & Promotions</h2>
          <p className="text-xl text-gray-600">
            Restez informé de nos dernières nouvelles, formations et offres spéciales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {contenus.map((contenu) => (
            <Card key={contenu.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={contenu.image || "/placeholder.svg"}
                  alt={contenu.titre}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className={`absolute top-4 left-4 ${getTypeColor(contenu.type)} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                >
                  {getTypeLabel(contenu.type)}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors">
                  {contenu.titre}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{contenu.description}</p>
                <Button variant="outline" className="w-full border-orange-500 text-orange-600 hover:bg-orange-50">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
