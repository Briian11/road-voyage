import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { SearchBar } from "@/components/ui/search-bar"
import { VehicleCard, Vehicle } from "@/components/vehicle-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Compass, Shield, Heart, Star, Users, Zap } from "lucide-react"
import heroImage from "@/assets/hero-camper.jpg"
import camper1 from "@/assets/camper-1.jpg"
import camper2 from "@/assets/camper-2.jpg"
import camper3 from "@/assets/camper-3.jpg"

// Mock data for featured vehicles
const featuredVehicles: Vehicle[] = [
  {
    id: "1",
    name: "Volkswagen California Ocean",
    type: "van",
    location: "Barcelona, España",
    pricePerDay: 89,
    rating: 4.8,
    reviewCount: 127,
    capacity: 4,
    image: camper1,
    features: ["Cocina", "Nevera", "Cama doble", "Ducha exterior"],
    available: true
  },
  {
    id: "2", 
    name: "Hymer B-Class Modern Comfort",
    type: "motorhome",
    location: "Madrid, España",
    pricePerDay: 149,
    rating: 4.9,
    reviewCount: 89,
    capacity: 6,
    image: camper2,
    features: ["Baño completo", "Cocina", "6 plazas", "Aire acondicionado"],
    available: true
  },
  {
    id: "3",
    name: "Caravana Familiar Adria",
    type: "trailer",
    location: "Valencia, España",
    pricePerDay: 65,
    rating: 4.6,
    reviewCount: 156,
    capacity: 5,
    image: camper3,
    features: ["Literas", "Cocina", "Nevera", "Toldo"],
    available: false
  }
]

const Index = () => {
  const [searchParams, setSearchParams] = useState<{location: string, checkin: string, checkout: string} | null>(null)

  const handleSearch = (params: {location: string, checkin: string, checkout: string}) => {
    setSearchParams(params)
    console.log("Searching with:", params)
  }

  const handleVehicleSelect = (vehicle: Vehicle) => {
    console.log("Selected vehicle:", vehicle)
  }

  const features = [
    {
      icon: Shield,
      title: "Seguro incluido",
      description: "Todos nuestros vehículos incluyen seguro básico y asistencia 24h"
    },
    {
      icon: Compass,
      title: "Libertad total",
      description: "Descubre lugares únicos y vive aventuras inolvidables"
    },
    {
      icon: Heart,
      title: "Experiencias únicas",
      description: "Conecta con la naturaleza y crea recuerdos para toda la vida"
    }
  ]

  const stats = [
    { label: "Vehículos disponibles", value: "2,500+" },
    { label: "Clientes satisfechos", value: "15,000+" },
    { label: "Destinos", value: "500+" },
    { label: "Valoración media", value: "4.8", icon: Star }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Camper van adventure in mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 text-sm">
                <Zap className="w-3 h-3 mr-1" />
                Reserva instantánea disponible
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Tu próxima
                <span className="bg-gradient-hero bg-clip-text text-transparent block">
                  aventura
                </span>
                te está esperando
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Descubre la libertad de viajar con nuestras furgonetas camper, 
                autocaravanas y caravanas premium
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <SearchBar onSearch={handleSearch} />
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  {stat.icon && <stat.icon className="w-4 h-4 text-secondary" />}
                  <span className="font-semibold">{stat.value}</span>
                  <span className="text-white/70 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por qué elegir CamperGo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más que un alquiler, es el comienzo de tu próxima gran aventura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center space-y-4 group">
                  <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto shadow-adventure group-hover:shadow-glow transform group-hover:-translate-y-1 transition-bounce">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Vehículos destacados
              </h2>
              <p className="text-xl text-muted-foreground">
                Descubre nuestros campers más populares
              </p>
            </div>
            <Button variant="outline" className="hidden md:block">
              Ver todos
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard 
                key={vehicle.id} 
                vehicle={vehicle} 
                onSelect={handleVehicleSelect}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              <Compass className="w-5 h-5" />
              Explorar todos los vehículos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              ¿Listo para la aventura?
            </h2>
            <p className="text-xl text-white/90">
              Únete a miles de viajeros que ya han descubierto la libertad de viajar en camper
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                <Users className="w-5 h-5" />
                Registrarse gratis
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-dots opacity-30" />
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl">CamperGo</span>
            </div>
            <p className="text-white/70">
              Tu compañero de aventuras desde 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index