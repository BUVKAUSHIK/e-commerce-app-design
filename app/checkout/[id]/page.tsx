import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CreditCard, Lock, ShieldCheck } from "lucide-react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckoutButton } from "@/components/checkout-button"

interface CheckoutPageProps {
  params: Promise<{ id: string }>
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  const subtotal = product.price
  const tax = Math.round(subtotal * 0.08)
  const total = subtotal + tax

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-accent" />
          <div>
            <div className="font-bold text-xl">NovaTech</div>
            <div className="text-xs text-muted-foreground">Secure Checkout</div>
          </div>
        </Link>

        <div className="flex items-center gap-2 text-muted-foreground">
          <Lock className="h-4 w-4" />
          <span className="text-sm">Secure Checkout</span>
        </div>
      </header>

      {/* Checkout Content */}
      <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            href={`/product/${product.id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Product
          </Link>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Payment Form */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-2">Checkout</h1>
                <p className="text-muted-foreground">Complete your purchase</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="font-semibold">Contact Information</h2>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Payment Details</h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    Powered by Stripe
                  </div>
                </div>

                {/* Stripe Placeholder - Replace with actual Stripe Elements when integrating */}
                <div className="border-2 border-dashed border-accent/50 rounded-lg p-5 bg-accent/5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm font-medium text-accent">
                      <CreditCard className="h-4 w-4" />
                      Stripe Payment Element Placeholder
                    </div>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 bg-background rounded text-xs font-mono">VISA</div>
                      <div className="px-2 py-1 bg-background rounded text-xs font-mono">MC</div>
                    </div>
                  </div>

                  {/* Simulated Card Input Fields */}
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label className="text-xs text-muted-foreground">Card Number</Label>
                      <Input disabled placeholder="4242 4242 4242 4242" className="bg-background/50 font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label className="text-xs text-muted-foreground">Expiry Date</Label>
                        <Input disabled placeholder="MM / YY" className="bg-background/50 font-mono" />
                      </div>
                      <div className="grid gap-2">
                        <Label className="text-xs text-muted-foreground">CVC</Label>
                        <Input disabled placeholder="123" className="bg-background/50 font-mono" />
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-accent/80 pt-2 border-t border-accent/20 flex items-center gap-2">
                    <Lock className="h-3 w-3" />
                    This is a placeholder. Integrate Stripe Elements here.
                  </div>
                </div>
                {/* End Stripe Placeholder */}
              </div>

              {/* Shipping Address */}
              <div className="space-y-4">
                <h2 className="font-semibold">Shipping Address</h2>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" placeholder="San Francisco" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" placeholder="94102" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <CheckoutButton productId={product.id} total={total} />
            </div>

            {/* Order Summary */}
            <div className="lg:pl-10 lg:border-l border-border">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-0">
                <h2 className="font-semibold mb-4">Order Summary</h2>

                {/* Product */}
                <div className="flex gap-4 pb-4 border-b border-border">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{product.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">{product.description}</p>
                    <div className="text-accent font-bold mt-1">${product.price.toLocaleString()}</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-3 py-4 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="text-accent">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between pt-4">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-lg text-accent">${total.toLocaleString()}</span>
                </div>

                {/* Trust Badges */}
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="h-4 w-4" />
                      Secure
                    </div>
                    <div className="flex items-center gap-1">
                      <Lock className="h-4 w-4" />
                      Encrypted
                    </div>
                    <div className="flex items-center gap-1">
                      <CreditCard className="h-4 w-4" />
                      Stripe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
