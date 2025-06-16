"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Store, ArrowRight, Plus } from "lucide-react"
import Image from "next/image"

export function EntreprisesLocales() {
  const entreprises = [
    {
      nom: "Artisanat Ayiti",
      categorie: "Artisanat",
      description: "Créations artisanales authentiques faites à la main",
      image: "/images/artisanat-local.png",
      produits: "15 produits",
    },
    {
      nom: "Tech Solutions HT",
      categorie: "Services IT",
      description: "Solutions technologiques pour entreprises haïtiennes",
      image: "/images/tech-local.png",
      produits: "8 services",
    },
    {
      nom: "Cuisine Lakay",
      categorie: "Alimentaire",
      description: "Spécialités culinaires haïtiennes traditionnelles",
      image: "/images/cuisine-local.png",
      produits: "25 produits",
    },
    {
      nom: "Mode Kreyòl",
      categorie: "Mode",
      description: "Vêtements et accessoires inspirés de la culture haïtienne",
      image: "/images/mode-local.png",
      produits: "30 produits",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Entreprises Locales Partenaires</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez et soutenez les entreprises haïtiennes de toute taille qui font la richesse de notre économie
            locale
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {entreprises.map((entreprise, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200"
            >
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <Image
                  src={entreprise.image || "/placeholder.svg"}
                  alt={entreprise.nom}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {entreprise.categorie}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-slate-900 mb-2">{entreprise.nom}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{entreprise.description}</p>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-orange-600 font-semibold">{entreprise.produits}</span>
                  <div className="flex items-center text-xs text-gray-500">
                    <Store className="h-3 w-3 mr-1" />
                    Local
                  </div>
                </div>
                <Button size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Voir les produits
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section CTA pour les entreprises */}
        <div className="bg-gradient-to-r from-blue-50 to-red-50 p-10 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">Vous êtes une entreprise haïtienne ?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'entrepreneurs et exposez vos produits et services à des milliers de clients
            potentiels
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3">
              <Plus className="mr-2 h-4 w-4" />
              Ajouter mon entreprise
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
