import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"
import { products } from "@/lib/products"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productId, quantity = 1 } = body

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      )
    }

    // Look up product price SERVER-SIDE - never trust frontend prices
    const product = products.find((p) => p.id === productId)

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      )
    }

    // Get the origin for redirect URLs
    const origin = request.headers.get("origin") || "http://localhost:3000"

    // Create Stripe checkout session with SERVER-SIDE price
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: product.name,
              description: product.description,
              images: product.image ? [`${origin}${product.image}`] : [],
            },
            // Price is in cents - use SERVER-SIDE price only
            unit_amount: Math.round(product.price * 100),
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/${productId}`,
      metadata: {
        productId: product.id,
        productName: product.name,
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
