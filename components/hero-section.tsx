"use client"

import { useEffect, useState, useRef } from "react"
import { BadgeCheck, ShieldCheck, Truck } from "lucide-react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll")
    
    const handleScroll = () => {
      if (scrollContainer) {
        setScrollY(scrollContainer.scrollTop)
      }
    }

    scrollContainer?.addEventListener("scroll", handleScroll, { passive: true })
    return () => scrollContainer?.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate animation values based on scroll
  const opacity = Math.max(0, 1 - scrollY / 420)
  const translateY = scrollY * 0.18
  const scale = Math.max(0.96, 1 - scrollY / 1800)
  const blur = Math.min(scrollY / 140, 2.5)

  return (
    <section
      ref={containerRef}
      className="flex-shrink-0 bg-gradient-to-br from-card via-background to-card border-b border-border px-6 lg:px-10 py-12 lg:py-14 overflow-hidden"
      style={{
        opacity: Math.max(0.65, opacity),
      }}
    >
      <div
        className="max-w-5xl mx-auto text-center transition-transform duration-150 ease-out"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          filter: `blur(${blur}px)`,
        }}
      >
        {/* Badge */}
        <div 
          className="flex items-center justify-center gap-2 mb-4"
          style={{
            opacity: Math.max(0.6, 1 - scrollY / 350),
            transform: `translateY(${scrollY * 0.18}px)`,
          }}
        >
          <div className="h-1 w-8 bg-accent rounded" />
          <span className="text-xs font-bold text-accent uppercase tracking-wider">Premium Collection</span>
          <div className="h-1 w-8 bg-accent rounded" />
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl lg:text-5xl font-bold mb-4 text-balance"
          style={{
            opacity: Math.max(0.62, 1 - scrollY / 420),
            transform: `translateY(${scrollY * 0.16}px) scale(${Math.max(0.98, 1 - scrollY / 2200)})`,
          }}
        >
          Innovation Meets Design
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-7"
          style={{
            opacity: Math.max(0.68, 1 - scrollY / 420),
            transform: `translateY(${scrollY * 0.14}px)`,
          }}
        >
          Discover cutting-edge technology crafted for creators, developers, and visionaries
        </p>

        {/* Trust Strip */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl mx-auto mb-8"
          style={{
            opacity: Math.max(0.7, 1 - scrollY / 500),
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        >
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm">
            <ShieldCheck className="h-4 w-4 text-accent" />
            <span>Secure checkout protected by Stripe</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm">
            <BadgeCheck className="h-4 w-4 text-accent" />
            <span>4.9/5 verified buyer reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card/60 px-3 py-2 text-sm">
            <Truck className="h-4 w-4 text-accent" />
            <span>Fast shipping and easy returns</span>
          </div>
        </div>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 lg:gap-12"
          style={{
            opacity: Math.max(0.74, 1 - scrollY / 480),
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">2M+</div>
            <div className="text-xs text-muted-foreground mt-1">Verified Buyers</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">50+</div>
            <div className="text-xs text-muted-foreground mt-1">Global Delivery</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">99%</div>
            <div className="text-xs text-muted-foreground mt-1">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}
