"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { trackClickedBuyNow } from "@/lib/analytics"

interface TrackedBuyNowLinkProps {
  href: string
  productId: string
  productName: string
  label: string
}

export function TrackedBuyNowLink({ href, productId, productName, label }: TrackedBuyNowLinkProps) {
  return (
    <Link
      href={href}
      className="mt-auto"
      onClick={() => {
        trackClickedBuyNow(productId, productName)
      }}
    >
      <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
        {label}
      </Button>
    </Link>
  )
}
