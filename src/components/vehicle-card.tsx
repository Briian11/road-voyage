import * as React from "react"
import { Star, Users, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface Vehicle {
  id: string
  name: string
  type: "van" | "motorhome" | "trailer"
  location: string
  pricePerDay: number
  rating: number
  reviewCount: number
  capacity: number
  image: string
  features: string[]
  available: boolean
}

interface VehicleCardProps {
  vehicle: Vehicle
  onSelect?: (vehicle: Vehicle) => void
  className?: string
}

const VehicleCard = React.forwardRef<HTMLDivElement, VehicleCardProps>(
  ({ className, vehicle, onSelect }, ref) => {
    const typeLabels = {
      van: "Furgoneta",
      motorhome: "Autocaravana", 
      trailer: "Caravana"
    }

    return (
      <Card
        ref={ref}
        className={cn(
          "group overflow-hidden border-0 shadow-card hover:shadow-adventure transform hover:-translate-y-2 transition-bounce cursor-pointer",
          !vehicle.available && "opacity-75 grayscale",
          className
        )}
        onClick={() => onSelect?.(vehicle)}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
          />
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-smooth" />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/90 text-foreground">
              {typeLabels[vehicle.type]}
            </Badge>
          </div>
          <div className="absolute top-4 right-4">
            <div className="flex items-center gap-1 bg-background/90 rounded-full px-2 py-1">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              <span className="text-sm font-medium text-foreground">
                {vehicle.rating.toFixed(1)}
              </span>
            </div>
          </div>
          {!vehicle.available && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80">
              <Badge variant="outline" className="text-muted-foreground">
                No disponible
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-smooth">
                {vehicle.name}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                <MapPin className="w-4 h-4" />
                {vehicle.location}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {vehicle.capacity} personas
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                <span className="text-sm text-muted-foreground">
                  {vehicle.reviewCount} reseñas
                </span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {vehicle.features.slice(0, 3).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <span className="text-2xl font-bold text-foreground">
                  €{vehicle.pricePerDay}
                </span>
                <span className="text-muted-foreground text-sm ml-1">
                  /día
                </span>
              </div>
              <Button variant="adventure" disabled={!vehicle.available}>
                Ver detalles
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }
)

VehicleCard.displayName = "VehicleCard"

export { VehicleCard }