import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Search } from "lucide-react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { TrackedProductLink } from "@/components/tracked-product-link"

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

        {/* Products Grid */}
        <section className="px-6 lg:px-10 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Button variant="ghost" size="sm" className="text-accent">
                View All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-accent/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-bold">
                      ${product.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">{product.category}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <TrackedProductLink
                      href={`/product/${product.id}`}
                      productId={product.id}
                      productName={product.name}
                    />
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
