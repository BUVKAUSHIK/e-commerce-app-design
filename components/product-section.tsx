"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShoppingCart } from "lucide-react"

interface ProductSectionProps {
  onBuyNow: () => void
}

export function ProductSection({ onBuyNow }: ProductSectionProps) {
  const features = ["M4 Pro Chip", "32GB Unified Memory", "1TB SSD Storage", "18-hour battery life"]

  return (
    <section className="flex flex-col h-full bg-card border-x border-border">
      <div className="flex-1 flex items-center justify-center p-6 bg-secondary/30">
        <div className="relative">
          <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl bg-muted/50 flex items-center justify-center">
            <img
              src="/minimalist-laptop-product-photo-on-dark-background.jpg"
              alt="NovaTech Pro Laptop"
              className="w-40 h-40 lg:w-48 lg:h-48 object-contain"
            />
          </div>
          <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">New</Badge>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">NovaTech</p>
          <h2 className="text-xl lg:text-2xl font-bold">Pro Workstation 16"</h2>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-2xl lg:text-3xl font-bold">$2,499</span>
          <span className="text-sm text-muted-foreground line-through">$2,999</span>
          <Badge variant="secondary" className="ml-2">
            Save $500
          </Badge>
        </div>

        <div className="space-y-2">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm">
              <Check className="h-4 w-4 text-accent" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <Button onClick={onBuyNow} className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Buy Now
        </Button>

        <p className="text-xs text-center text-muted-foreground">Free shipping • 30-day returns</p>
      </div>
    </section>
  )
}
