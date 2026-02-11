"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProductImageGalleryProps {
  images: string[]
  productName: string
  category: string
}

export function ProductImageGallery({ images, productName, category }: ProductImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())

  // Fallback to placeholder if no images
  const displayImages = images.length > 0 ? images : ["/placeholder.svg"]

  // Handle image load error by tracking failed indices
  const handleImageError = (index: number) => {
    setFailedImages(prev => new Set(prev).add(index))
  }

  // Get actual src, using placeholder for failed images
  const getImageSrc = (index: number) => {
    return failedImages.has(index) ? "/placeholder.svg" : displayImages[index]
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border">
        <Image
          src={getImageSrc(selectedIndex)}
          alt={`${productName} - View ${selectedIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          onError={() => handleImageError(selectedIndex)}
        />
        <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
          {category}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {displayImages.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {displayImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200",
                selectedIndex === index
                  ? "border-accent ring-2 ring-accent/30"
                  : "border-border hover:border-muted-foreground"
              )}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={getImageSrc(index)}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                onError={() => handleImageError(index)}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
