import Link from "next/link"
import { CheckCircle2, Mail, ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SuccessAnalytics } from "@/components/success-analytics"

export default function SuccessPage() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      <SuccessAnalytics />
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-accent" />
          <div>
            <div className="font-bold text-xl">NovaTech</div>
            <div className="text-xs text-muted-foreground">Premium Tech Store</div>
          </div>
        </Link>

        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>
      </header>

      {/* Success Content */}
      <main className="flex-1 flex items-center justify-center px-6 lg:px-10">
        <div className="max-w-md text-center space-y-6">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
          </div>

          {/* Thank You Message */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Thank You for Your Order!</h1>
            <p className="text-muted-foreground">
              Your order has been confirmed and is being processed.
            </p>
          </div>

          {/* Email Confirmation */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                <Mail className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="font-semibold">Check Your Email</h2>
              <p className="text-sm text-muted-foreground">
                A confirmation email with your order details and tracking information 
                will be sent to the email address you provided.
              </p>
            </div>
          </div>

          {/* Order Info */}
          <p className="text-xs text-muted-foreground">
            If you have any questions about your order, please contact our support team.
          </p>

          {/* Continue Shopping Button */}
          <Link href="/">
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
              Continue Shopping
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
