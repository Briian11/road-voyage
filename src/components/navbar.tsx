import * as React from "react"
import { Menu, X, User, Heart, Car } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ className, ...props }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const navItems = [
      { label: "Explorar", href: "/search", icon: Car },
      { label: "Mis viajes", href: "/bookings", icon: Heart },
      { label: "Mi cuenta", href: "/dashboard", icon: User },
    ]

    return (
      <nav
        ref={ref}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
        {...props}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">
                CamperGo
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" size="sm">
              Iniciar sesión
            </Button>
            <Button variant="hero" size="sm">
              Registrarse
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
                <div className="border-t border-border pt-4 space-y-2">
                  <Button variant="outline" className="w-full">
                    Iniciar sesión
                  </Button>
                  <Button variant="hero" className="w-full">
                    Registrarse
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    )
  }
)

Navbar.displayName = "Navbar"

export { Navbar }