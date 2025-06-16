"use client"

import {
  ArrowRight,
  Heart,
  Users,
  TrendingUp,
  GraduationCap,
  Smartphone,
  Lightbulb,
  UtensilsCrossed,
  Flag,
  Star,
  Phone,
  Mail,
  MapPin,
  Shield,
  Truck,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { EntreprisesLocales } from "@/components/entreprises-locales"
import { ContenuMediatique } from "@/components/contenu-mediatique"

export default function AfepanouLanding() {
  const stores = [
    {
      id: "alimentaire",
      title: "Boutique Alimentaire",
      icon: UtensilsCrossed,
      description:
        "Produits locaux haïtiens de qualité, épicerie traditionnelle et moderne, paniers ménagers complets avec livraison à domicile.",
      color: "from-green-500 to-green-600",
      features: ["Produits locaux", "Livraison à domicile", "Paniers complets"],
    },
    {
      id: "patriotique",
      title: "Boutique Patriotique",
      icon: Flag,
      description:
        "Artisanat haïtien authentique, drapeaux et symboles nationaux, vêtements à thème haïtien. 100% des profits financent la formation des jeunes.",
      color: "from-red-500 to-red-600",
      features: ["Artisanat authentique", "Impact social 100%", "Symboles nationaux"],
      special: true,
    },
    {
      id: "formation",
      title: "Centre de Formation",
      icon: GraduationCap,
      description:
        "Cours en ligne adaptés à votre rythme, sessions de coaching personnalisées, formations professionnelles certifiantes.",
      color: "from-blue-500 to-blue-600",
      features: ["Cours en ligne", "Coaching personnalisé", "Certifications"],
    },
    {
      id: "electronique",
      title: "Boutique Électronique",
      icon: Smartphone,
      description:
        "Smartphones et accessoires, gadgets technologiques, équipements informatiques. Utilisez votre pouvoir d'achat!",
      color: "from-purple-500 to-purple-600",
      features: ["Smartphones", "Gadgets tech", "Équipements IT"],
    },
    {
      id: "entrepreneurial",
      title: "Hub Entrepreneurial",
      icon: Lightbulb,
      description:
        "Services de consultation business, kits de démarrage pour entreprises, accompagnement d'innovations.",
      color: "from-orange-500 to-orange-600",
      features: ["Consultation business", "Kits de démarrage", "Innovation"],
    },
  ]

  const testimonials = [
    {
      name: "Marie-Claire Joseph",
      role: "Entrepreneure",
      content: "Grâce à Afèpanou, j'ai pu lancer mon entreprise et former 5 jeunes de ma communauté.",
      rating: 5,
      image: "/images/testimonial-1.png",
    },
    {
      name: "Jean-Baptiste Pierre",
      role: "Client fidèle",
      content: "Chaque achat que je fais contribue au développement de mon pays. C'est formidable!",
      rating: 5,
      image: "/images/testimonial-2.png",
    },
    {
      name: "Sophia Moïse",
      role: "Bénéficiaire formation",
      content: "Les formations m'ont permis de décrocher un emploi stable. Mèsi Afèpanou!",
      rating: 5,
      image: "/images/testimonial-3.png",
    },
  ]

  const stats = [
    { number: "500+", label: "Jeunes formés" },
    { number: "50K+", label: "Gourdes réinvesties" },
    { number: "100+", label: "Entrepreneurs soutenus" },
    { number: "1000+", label: "Familles bénéficiaires" },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "100% Haïtien",
      description: "Plateforme entièrement conçue et gérée par des Haïtiens pour les Haïtiens",
    },
    {
      icon: Heart,
      title: "Impact Social",
      description: "Chaque achat contribue directement au développement de la communauté",
    },
    {
      icon: Truck,
      title: "Livraison Fiable",
      description: "Service de livraison dans tout Haïti avec suivi en temps réel",
    },
    {
      icon: Award,
      title: "Qualité Garantie",
      description: "Produits sélectionnés avec soin et garantie de satisfaction",
    },
    {
      icon: Users,
      title: "Entreprises Locales",
      description: "Forum de promotion et de vente de produits et services des entreprises de toute taille",
    },
  ]

  const featuredProducts = [
    {
      name: "Panier Ménager Complet",
      price: "1,500 HTG",
      image: "/images/panier-complet.png",
      category: "Alimentaire",
    },
    {
      name: "T-shirt Patriotique",
      price: "800 HTG",
      image: "/images/tshirt-patriotique.png",
      category: "Patriotique",
    },
    {
      name: "Formation Entrepreneuriat",
      price: "2,000 HTG",
      image: "/images/formation-business.png",
      category: "Formation",
    },
    {
      name: "Smartphone Android",
      price: "15,000 HTG",
      image: "/images/smartphone-android.png",
      category: "Électronique",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-slate-900 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/logo.jpg" alt="Afèpanou Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold">Afèpanou</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#accueil" className="hover:text-orange-400 transition-colors">
                Accueil
              </a>
              <a href="#boutiques" className="hover:text-orange-400 transition-colors">
                Nos Boutiques
              </a>
              <a href="#pourquoi" className="hover:text-orange-400 transition-colors">
                Pourquoi Nous
              </a>
              <a href="#impact" className="hover:text-orange-400 transition-colors">
                Notre Impact
              </a>
              <a href="#contact" className="hover:text-orange-400 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Bannière Patriotique */}
      <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-2 text-center">
        <p className="font-semibold">🇭🇹 Fè lòt jan ak Afèpanou! Premye Boutik Elektwonik 100% Ayisyen! 🇭🇹</p>
      </div>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/haiti-landscape.png" alt="Paysage haïtien" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Bienvenue sur Afèpanou
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-gray-300">
              Des produits de qualité, des prix imbattables, pou tout moun
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
              <p className="text-lg md:text-xl italic text-orange-200">
                "Chaque achat que vous effectuez est un investissement direct dans votre communauté, votre famille et
                votre avenir."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("boutiques")?.scrollIntoView({ behavior: "smooth" })}
              >
                Découvrir nos 5 Boutiques
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Notre Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Choisir Afèpanou */}
      <section id="pourquoi" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Pourquoi Choisir Afèpanou ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plus qu'une plateforme e-commerce, nous sommes un mouvement pour le développement d'Haïti
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="text-center group px-4">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-10 w-10 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section Produits Vedettes */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Nos Produits Vedettes</h2>
            <p className="text-xl text-gray-600">Découvrez une sélection de nos meilleurs produits</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                    <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                      Acheter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contenu Médiatique */}
      <ContenuMediatique />

      {/* Section Notre Histoire */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Afèpanou est né d'une vision simple mais puissante : créer une plateforme qui permet aux Haïtiens de
                consommer local tout en contribuant au développement de leur communauté.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Fondée par des entrepreneurs haïtiens passionnés, notre plateforme réunit artisans, producteurs,
                formateurs et innovateurs sous un même toit numérique.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">2024</div>
                  <div className="text-sm text-gray-600">Année de création</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">5</div>
                  <div className="text-sm text-gray-600">Boutiques spécialisées</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/notre-histoire.png"
                alt="Notre histoire"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Narrative */}
      <section id="impact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-slate-900">
              Afèpanou : Une plateforme au service de la communauté
            </h2>

            {/* Texte de mission mis à jour */}
            <div className="bg-white p-10 rounded-lg shadow-lg mb-16">
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
                Chez <strong>Afèpanou</strong>, chaque achat que vous effectuez est bien plus qu'un simple geste
                commercial. C'est un investissement direct dans votre communauté, votre famille et votre avenir. Nous
                sommes une plateforme 100% haïtienne, pensée pour offrir des{" "}
                <strong>opportunités économiques pour tous et spécialement pour la jeunesse haïtienne</strong>.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed text-left">
                Une partie significative de nos profits est{" "}
                <strong>réinvestie dans le développement des jeunes et des entrepreneurs locaux</strong>, à travers des
                bourses, des programmes de mentorat et des formations professionnelles.
                <strong>
                  Afèpanou vous offre également l'opportunité d'exposer vos propres produits et services à un grand
                  public. Donc nous pouvons avancer et prospérer ensemble comme communauté.
                </strong>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-left">
                Utilisez votre pouvoir d'achat de façon stratégique dans une <strong>économie circulaire</strong> qui
                vous revient de droit. Quand vous achetez sur Afèpanou, vous contribuez à bâtir un Haïti plus fort, plus
                autonome et plus équitable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact Communautaire</h3>
                <p className="text-gray-600">
                  Chaque achat est un investissement direct dans votre communauté, votre famille et votre avenir.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Formation des Jeunes</h3>
                <p className="text-gray-600">
                  Une partie significative de nos profits finance des bourses et programmes de mentorat pour la
                  jeunesse.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Économie Circulaire</h3>
                <p className="text-gray-600">
                  Votre pouvoir d'achat contribue à bâtir un Haïti plus fort, plus autonome et plus équitable.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-red-600 text-white p-8 rounded-lg">
              <p className="text-xl font-semibold">Afèpanou se Afè Paw - Votre affaire, c'est notre affaire</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Boutiques */}
      <section id="boutiques" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Nos 5 Boutiques Spécialisées</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez notre écosystème complet de produits et services pensés pour la communauté haïtienne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {stores.map((store, index) => {
              const IconComponent = store.icon
              const storeImages = {
                alimentaire: "/images/panier-menager.png",
                patriotique: "/images/produits-patriotiques.png",
                formation: "/images/formation-tutorat.png",
                electronique: "/images/produits-electroniques.png",
                entrepreneurial: "/images/entrepreneuriat-innovation.png",
              }

              return (
                <Card
                  key={store.id}
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200 relative overflow-hidden"
                >
                  {store.special && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                      Impact 100%
                    </div>
                  )}

                  {/* Image de la boutique */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={storeImages[store.id as keyof typeof storeImages] || "/placeholder.svg"}
                      alt={store.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${store.color} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{store.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{store.description}</p>
                    <div className="space-y-2 mb-6">
                      {store.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${store.color} hover:opacity-90 text-white rounded-full transition-all duration-300`}
                    >
                      Accéder à la Boutique
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Nouvelle section Entreprises Locales */}
      <EntreprisesLocales />

      {/* Section Statistiques */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Notre Impact en Chiffres</h2>
            <p className="text-xl text-gray-300">Des résultats concrets pour la communauté haïtienne</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Ce que disent nos clients</h2>
            <p className="text-xl text-gray-600">Des témoignages authentiques de notre communauté</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez le Mouvement Afèpanou</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faites partie de la révolution du commerce électronique haïtien et contribuez au développement de votre
            communauté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-semibold"
            >
              Commencer à Acheter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg rounded-full"
            >
              Devenir Partenaire
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/logo.jpg" alt="Afèpanou Logo" width={40} height={40} className="rounded-full" />
                <span className="text-xl font-bold">Afèpanou</span>
              </div>
              <p className="text-gray-400 mb-4">
                La première plateforme de commerce électronique 100% haïtienne qui révolutionne la façon d'acheter en
                ligne.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Nos Boutiques</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Boutique Alimentaire
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Boutique Patriotique
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Centre de Formation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Boutique Électronique
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400 transition-colors">
                    Hub Entrepreneurial
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+509 XXXX-XXXX</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@afepanou.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Port-au-Prince, Haïti</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Rejoignez-nous</h4>
              <p className="text-gray-400 mb-4">Restez informé de nos nouveautés et de notre impact communautaire.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-orange-400"
                />
                <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-r-lg">S'inscrire</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Afèpanou.com - Tout dwa rezève. | Afèpanou se Afè Paw</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
