import * as React from "react"
import { Search, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface SearchBarProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (params: { location: string; checkin: string; checkout: string }) => void
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ className, onSearch, ...props }, ref) => {
    const [location, setLocation] = React.useState("")
    const [checkin, setCheckin] = React.useState("")
    const [checkout, setCheckout] = React.useState("")

    const handleSearch = () => {
      onSearch?.({ location, checkin, checkout })
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col md:flex-row items-stretch gap-4 p-6 bg-card rounded-2xl shadow-card backdrop-blur-sm border border-border/50",
          className
        )}
        {...props}
      >
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="¿Dónde quieres ir?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-14 text-base border-0 bg-muted/30 focus:bg-background transition-smooth"
          />
        </div>
        
        <div className="flex-1 relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="date"
            placeholder="Fecha de recogida"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
            className="pl-10 h-14 text-base border-0 bg-muted/30 focus:bg-background transition-smooth"
          />
        </div>
        
        <div className="flex-1 relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            type="date"
            placeholder="Fecha de devolución"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="pl-10 h-14 text-base border-0 bg-muted/30 focus:bg-background transition-smooth"
          />
        </div>
        
        <Button 
          size="lg" 
          variant="hero" 
          onClick={handleSearch}
          className="md:w-auto w-full h-14 px-8"
        >
          <Search className="w-5 h-5" />
          Buscar
        </Button>
      </div>
    )
  }
)

SearchBar.displayName = "SearchBar"

export { SearchBar }