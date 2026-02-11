"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { usePostHog } from "posthog-js/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Tag, Check } from "lucide-react"
import {
  trackCheckoutInitiated,
  trackPaymentFailed,
  trackPaymentSubmitted,
} from "@/lib/analytics"

interface CheckoutFormProps {
  productId: string
  productName: string
  total: number
}

export function CheckoutForm({ productId, productName, total }: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [discountCode, setDiscountCode] = useState("")
  const [discountApplied, setDiscountApplied] = useState(false)
  const posthog = usePostHog()
  const variant = posthog?.getFeatureFlag("checkout-button-variant")
  const isTestVariant = variant === "test"
  const searchParams = useSearchParams()
  const hasTrackedInitiated = useRef(false)
  const hasTrackedCancelled = useRef(false)

  useEffect(() => {
    if (hasTrackedInitiated.current) {
      return
    }
    trackCheckoutInitiated(productId, productName)
    hasTrackedInitiated.current = true
  }, [productId, productName])

  useEffect(() => {
    if (hasTrackedCancelled.current) {
      return
    }
    if (searchParams.get("status") === "cancelled") {
      trackPaymentFailed("cancelled", productId)
      hasTrackedCancelled.current = true
    }
  }, [productId, searchParams])

  const handleCheckout = async () => {
    setIsLoading(true)
    setError(null)
    trackPaymentSubmitted(productId)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          quantity: 1,
          discountCode: discountCode.trim() || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to create checkout session")
      }

      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL returned")
      }
    } catch (err) {
      trackPaymentFailed("api_or_network_error", productId)
      setError(err instanceof Error ? err.message : "Something went wrong")
      setIsLoading(false)
    }
  }

  const handleApplyCode = () => {
    if (discountCode.trim()) {
      setDiscountApplied(true)
    }
  }

  return (
    <div className="space-y-6">
      {/* Discount Code */}
      <div className="space-y-4">
        <h2 className="font-semibold flex items-center gap-2">
          <Tag className="h-4 w-4" />
          Discount Code
        </h2>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              id="discountCode"
              placeholder="Enter code (e.g., SAVE10)"
              value={discountCode}
              onChange={(e) => {
                setDiscountCode(e.target.value.toUpperCase())
                setDiscountApplied(false)
              }}
              className="uppercase"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={handleApplyCode}
            disabled={!discountCode.trim()}
            className="shrink-0"
          >
            {discountApplied ? (
              <>
                <Check className="h-4 w-4 mr-1" />
                Applied
              </>
            ) : (
              "Apply"
            )}
          </Button>
        </div>
        {discountApplied && (
          <p className="text-sm text-accent">
            Code "{discountCode}" will be applied at checkout
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          Try: SAVE10 for 10% off or WELCOME20 for 20% off
        </p>
      </div>

      {/* Submit Button */}
      <div className="space-y-2">
        <Button
          size="lg"
          className={`w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6${
            isTestVariant ? " shadow-lg" : ""
          }`}
          onClick={handleCheckout}
          disabled={isLoading}
          aria-label={`Order total $${total.toLocaleString()}`}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing...
            </>
          ) : (
            isTestVariant ? "Complete Purchase" : "Place Order"
          )}
        </Button>
        {error && (
          <p className="text-sm text-destructive text-center">{error}</p>
        )}
      </div>
    </div>
  )
}
