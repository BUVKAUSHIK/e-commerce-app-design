import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ShoppingBag, Star } from "lucide-react"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

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
          <Link href="/" className="p-2 hover:bg-secondary rounded-lg transition-colors">
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Product Detail */}
      <main className="flex-1 overflow-y-auto px-6 lg:px-10 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                {product.category}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(128 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

              <div className="text-4xl font-bold text-accent mb-8">${product.price.toLocaleString()}</div>

              {/* Specs */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Specifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, index) => (
                    <span key={index} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="h-4 w-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buy Now Button */}
              <Link href={`/checkout/${product.id}`} className="mt-auto">
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6">
                  Buy Now - ${product.price.toLocaleString()}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
