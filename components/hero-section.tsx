"use client"

import { useEffect, useState, useRef } from "react"

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
  const opacity = Math.max(0, 1 - scrollY / 300)
  const translateY = scrollY * 0.3
  const scale = Math.max(0.9, 1 - scrollY / 1000)
  const blur = Math.min(scrollY / 50, 8)

  return (
    <section
      ref={containerRef}
      className="flex-shrink-0 bg-gradient-to-br from-card via-background to-card border-b border-border px-6 lg:px-10 py-12 overflow-hidden"
      style={{
        opacity: Math.max(0.3, opacity),
      }}
    >
      <div
        className="max-w-4xl mx-auto text-center transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${translateY}px) scale(${scale})`,
          filter: `blur(${blur}px)`,
        }}
      >
        {/* Badge */}
        <div 
          className="flex items-center justify-center gap-2 mb-4"
          style={{
            opacity: Math.max(0, 1 - scrollY / 150),
            transform: `translateY(${scrollY * 0.5}px)`,
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
            opacity: Math.max(0, 1 - scrollY / 200),
            transform: `translateY(${scrollY * 0.4}px) scale(${Math.max(0.95, 1 - scrollY / 2000)})`,
          }}
        >
          Innovation Meets Design
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance mb-8"
          style={{
            opacity: Math.max(0, 1 - scrollY / 180),
            transform: `translateY(${scrollY * 0.35}px)`,
          }}
        >
          Discover cutting-edge technology crafted for creators, developers, and visionaries
        </p>

        {/* Stats */}
        <div
          className="flex items-center justify-center gap-8 lg:gap-12"
          style={{
            opacity: Math.max(0, 1 - scrollY / 250),
            transform: `translateY(${scrollY * 0.25}px)`,
          }}
        >
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">2M+</div>
            <div className="text-xs text-muted-foreground mt-1">Happy Customers</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">50+</div>
            <div className="text-xs text-muted-foreground mt-1">Countries</div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-accent">99%</div>
            <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
