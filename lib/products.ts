export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  images: string[]
  specs: string[]
  features: string[]
}

export const products: Product[] = [
  {
    id: "1",
    name: "NovaPro X1",
    description: "Revolutionary AI-powered laptop with neural processing",
    price: 2499,
    category: "Laptops",
    images: [
      "/products/novapro-x1/main.jpg",
      "/products/novapro-x1/angle.jpg",
      "/products/novapro-x1/keyboard.jpg",
      "/products/novapro-x1/lifestyle.jpg",
    ],
    specs: ["M3 Pro Chip", "32GB RAM", "1TB SSD", '16" Display'],
    features: ["AI-enhanced performance", "All-day battery life", "Retina XDR display", "Advanced thermal design"],
  },
  {
    id: "2",
    name: "NovaBook Air",
    description: "Ultra-portable powerhouse for creators on the go",
    price: 1899,
    category: "Laptops",
    images: [
      "/products/novabook-air/main.jpg",
      "/products/novabook-air/side.jpg",
      "/products/novabook-air/ports.jpg",
      "/products/novabook-air/lifestyle.jpg",
    ],
    specs: ["M2 Chip", "16GB RAM", "512GB SSD", '13" Display'],
    features: ["Featherweight design", "18-hour battery", "True Tone display", "Fanless cooling"],
  },
  {
    id: "3",
    name: "NovaPods Pro",
    description: "Wireless earbuds with adaptive audio technology",
    price: 299,
    category: "Audio",
    images: [
      "/products/novapods-pro/main.jpg",
      "/products/novapods-pro/case-open.jpg",
      "/products/novapods-pro/earbud-detail.jpg",
      "/products/novapods-pro/lifestyle.jpg",
    ],
    specs: ["Active Noise Cancellation", "30hr Battery", "Spatial Audio", "USB-C"],
    features: ["Adaptive EQ", "Transparency mode", "Water resistant", "Fast charging"],
  },
  {
    id: "4",
    name: "NovaDisplay 4K",
    description: "Professional-grade monitor for creative workflows",
    price: 1499,
    category: "Displays",
    images: [
      "/products/novadisplay-4k/main.jpg",
      "/products/novadisplay-4k/side.jpg",
      "/products/novadisplay-4k/ports.jpg",
      "/products/novadisplay-4k/lifestyle.jpg",
    ],
    specs: ['27" 4K', "HDR1000", "120Hz", "Thunderbolt 4"],
    features: ["P3 wide color", "True color accuracy", "Height adjustable", "USB-C hub"],
  },
  {
    id: "5",
    name: "NovaKeyboard",
    description: "Mechanical keyboard with customizable RGB lighting",
    price: 199,
    category: "Accessories",
    images: [
      "/products/novakeyboard/main.jpg",
      "/products/novakeyboard/angle.jpg",
      "/products/novakeyboard/keys-detail.jpg",
      "/products/novakeyboard/rgb-lighting.jpg",
    ],
    specs: ["Mechanical Switches", "RGB Backlit", "Wireless", "Aluminum Body"],
    features: ["Hot-swappable keys", "3-device pairing", "Rechargeable", "Ergonomic design"],
  },
  {
    id: "6",
    name: "NovaMouse Elite",
    description: "Precision mouse with ergonomic design for all-day comfort",
    price: 129,
    category: "Accessories",
    images: [
      "/products/novamouse-elite/main.jpg",
      "/products/novamouse-elite/side.jpg",
      "/products/novamouse-elite/bottom.jpg",
      "/products/novamouse-elite/lifestyle.jpg",
    ],
    specs: ["8000 DPI", "Wireless", "USB-C", "Multi-device"],
    features: ["Ergonomic grip", "Silent clicks", "Precision tracking", "70-day battery"],
  },
]
