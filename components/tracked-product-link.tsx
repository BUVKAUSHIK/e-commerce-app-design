"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackClickedProduct } from "@/lib/analytics"

interface TrackedProductLinkProps {
  href: string
  productId: string
  productName: string
}

export function TrackedProductLink({ href, productId, productName }: TrackedProductLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        trackClickedProduct(productId, productName)
      }}
    >
      <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">View Details</Button>
    </Link>
  )
}
