import { posthog } from "@/instrumentation-client"

type PaymentFailedReason = "cancelled" | "api_or_network_error"

function captureEvent(event: string, properties: Record<string, string>) {
  if (typeof window === "undefined") {
    return
  }
  posthog.capture(event, properties)
}

export function trackPageViewLanding(pageName: string) {
  captureEvent("page_view_landing", { page_name: pageName })
}

export function trackClickedProduct(productId: string, productName: string) {
  captureEvent("clicked_product", {
    product_id: productId,
    product_name: productName,
  })
}

export function trackCheckoutInitiated(productId: string, productName: string) {
  captureEvent("checkout_initiated", {
    product_id: productId,
    product_name: productName,
  })
}

export function trackPaymentSubmitted(productId: string) {
  captureEvent("payment_submitted", { product_id: productId })
}

export function trackPaymentSucceeded(productId?: string) {
  const properties: Record<string, string> = {}
  if (productId) {
    properties.product_id = productId
  }
  captureEvent("payment_succeeded", properties)
}

export function trackPaymentFailed(reason: PaymentFailedReason, productId?: string) {
  const properties: Record<string, string> = { reason }
  if (productId) {
    properties.product_id = productId
  }
  captureEvent("payment_failed", properties)
}
