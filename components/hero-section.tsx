"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

interface HeroSectionProps {
  onExplore: () => void
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section className="flex flex-col justify-center h-full px-6 lg:px-10">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
          <Zap className="h-3 w-3 text-accent" />
          <span className="text-xs font-medium text-accent uppercase tracking-wider">New Release</span>
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-balance">
          The future of
          <br />
          <span className="text-muted-foreground">productivity.</span>
        </h1>

        <p className="text-muted-foreground text-base lg:text-lg max-w-md leading-relaxed">
          Revolutionary hardware engineered for peak performance. Built for creators, developers, and visionaries.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button onClick={onExplore} className="bg-primary text-primary-foreground hover:bg-primary/90">
            Explore Product
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-border hover:bg-secondary bg-transparent">
            Watch Demo
          </Button>
        </div>

        <div className="flex items-center gap-8 pt-6 border-t border-border">
          <div>
            <p className="text-2xl font-bold">4.9★</p>
            <p className="text-xs text-muted-foreground">2,847 reviews</p>
          </div>
          <div>
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-xs text-muted-foreground">Units sold</p>
          </div>
          <div>
            <p className="text-2xl font-bold">2yr</p>
            <p className="text-xs text-muted-foreground">Warranty</p>
          </div>
        </div>
      </div>
    </section>
  )
}
