"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock } from "lucide-react"

export function CheckoutSection() {
  return (
    <section className="flex flex-col h-full p-6 lg:p-8 overflow-auto">
      <div className="space-y-1 mb-6">
        <h2 className="text-xl font-bold">Checkout</h2>
        <p className="text-sm text-muted-foreground">Complete your purchase</p>
      </div>

      <div className="space-y-4 flex-1">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="firstName" className="text-xs">
                First Name
              </Label>
              <Input id="firstName" placeholder="Jane" className="h-9 bg-input border-border" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="lastName" className="text-xs">
                Last Name
              </Label>
              <Input id="lastName" placeholder="Doe" className="h-9 bg-input border-border" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="text-xs">
              Email
            </Label>
            <Input id="email" type="email" placeholder="jane@example.com" className="h-9 bg-input border-border" />
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Payment Details</span>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="card" className="text-xs">
              Card Number
            </Label>
            <Input id="card" placeholder="4242 4242 4242 4242" className="h-9 bg-input border-border font-mono" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="expiry" className="text-xs">
                Expiry
              </Label>
              <Input id="expiry" placeholder="MM/YY" className="h-9 bg-input border-border" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cvc" className="text-xs">
                CVC
              </Label>
              <Input id="cvc" placeholder="123" className="h-9 bg-input border-border" />
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>$2,499.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span className="text-accent">Free</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>$224.91</span>
          </div>
          <Separator className="bg-border" />
          <div className="flex justify-between font-bold text-base">
            <span>Total</span>
            <span>$2,723.91</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-4">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
          <Lock className="mr-2 h-4 w-4" />
          Pay $2,723.91
        </Button>

        <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
          <Lock className="h-3 w-3" />
          Stripe placeholder • Secure checkout
        </p>
      </div>
    </section>
  )
}
