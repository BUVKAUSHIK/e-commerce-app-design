"use client"

import type React from "react"
import Link from "next/link"
import { trackClickedProduct } from "@/lib/analytics"

interface TrackedProductImageLinkProps {
  href: string
  productId: string
  productName: string
  children: React.ReactNode
}

export function TrackedProductImageLink({ href, productId, productName, children }: TrackedProductImageLinkProps) {
  return (
    <Link
      href={href}
      className="block cursor-pointer"
      onClick={() => {
        trackClickedProduct(productId, productName)
      }}
    >
      {children}
    </Link>
  )
}
