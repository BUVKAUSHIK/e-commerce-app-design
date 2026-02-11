import Link from "next/link"
import { ShoppingBag, Search, ShieldCheck, RotateCcw, Headphones, BadgeCheck, Star } from "lucide-react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { TrackedProductLink } from "@/components/tracked-product-link"
import { TrackedProductImageLink } from "@/components/tracked-product-image-link"
import { ProductCardImage } from "@/components/product-card-image"

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-10 h-16 border-b border-border bg-card/50 backdrop-blur-sm flex-shrink-0">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded bg-accent" />
          <div>
            <div className="font-bold text-xl">NovaTech</div>
            <div className="text-xs text-muted-foreground">Premium Tech Store</div>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <main id="main-scroll" className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust Band */}
        <section className="px-6 lg:px-10 pt-6 pb-4 border-b border-border/60 bg-card/20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Secure Payments</div>
                <div className="text-xs text-muted-foreground">Encrypted checkout with Stripe protection</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <RotateCcw className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">30-Day Returns</div>
                <div className="text-xs text-muted-foreground">Hassle-free returns on eligible products</div>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
              <Headphones className="h-5 w-5 text-accent" />
              <div>
                <div className="text-sm font-semibold">Expert Support</div>
                <div className="text-xs text-muted-foreground">Fast response from our product specialists</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-6 lg:px-10 py-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Best-selling picks trusted by creators and professionals
                </p>
              </div>
              <Button variant="ghost" size="sm" className="text-accent">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent/60 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                >
                  <TrackedProductImageLink
                    href={`/product/${product.id}`}
                    productId={product.id}
                    productName={product.name}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                      <ProductCardImage
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 bg-background/85 backdrop-blur-sm text-xs px-2 py-1 rounded-full border border-border flex items-center gap-1">
                        <BadgeCheck className="h-3 w-3 text-accent" />
                        Official Warranty
                      </div>
                      <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                        ${product.price.toLocaleString()}
                      </div>
                    </div>
                  </TrackedProductImageLink>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3.5 w-3.5 text-accent fill-accent" />
                        4.9 (1.2k)
                      </span>
                    </div>
                    <h3 className="font-bold text-lg leading-tight mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 min-h-10">{product.description}</p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {product.specs.slice(0, 3).map((spec) => (
                        <span
                          key={spec}
                          className="text-[11px] bg-muted text-muted-foreground px-2 py-1 rounded-full border border-border/70"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      <TrackedProductLink
                        href={`/product/${product.id}`}
                        productId={product.id}
                        productName={product.name}
                      />
                      <Link
                        href={`/product/${product.id}`}
                        className="block text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        See key specs and buyer reviews
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
