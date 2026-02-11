"use client"

import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import { trackPaymentSucceeded } from "@/lib/analytics"

export function SuccessAnalytics() {
  const searchParams = useSearchParams()
  const hasTracked = useRef(false)

  useEffect(() => {
    if (hasTracked.current) {
      return
    }
    const productId = searchParams.get("productId") ?? undefined
    trackPaymentSucceeded(productId)
    hasTracked.current = true
  }, [searchParams])

  return null
}
