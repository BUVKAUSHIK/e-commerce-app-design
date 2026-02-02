import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(request: Request) {
  try {
    // Get raw body as text (not JSON parsed)
    const body = await request.text()

    // Get stripe-signature header
    const signature = request.headers.get("stripe-signature")

    if (!signature) {
      console.error("Missing stripe-signature header")
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    // Verify signature using stripe.webhooks.constructEvent()
    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Stripe signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    // Only process the event if verification succeeds
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session
      console.log("Stripe checkout.session.completed:", {
        id: event.id,
        created: event.created,
        sessionId: session.id,
        customerEmail: session.customer_details?.email,
        amountTotal: session.amount_total,
        paymentStatus: session.payment_status,
        metadata: session.metadata,
      })
    }

    return NextResponse.json({ received: true }, { status: 200 })
  } catch (error) {
    console.error("Stripe webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
