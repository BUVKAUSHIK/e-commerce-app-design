"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductCardImageProps {
  src: string
  alt: string
  className?: string
}

export function ProductCardImage({ src, alt, className }: ProductCardImageProps) {
  const [imageSrc, setImageSrc] = useState(src)

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      onError={() => setImageSrc("/placeholder.svg")}
    />
  )
}
