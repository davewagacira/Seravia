"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ShoppingBag, SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const formatPrice = (price: number) => `KSh ${price.toLocaleString("en-KE")}`

const products = [
  // Serums
  {
    id: "radiance-serum",
    name: "Radiance Serum",
    description: "Vitamin C brightening formula",
    price: 6800,
    originalPrice: null,
    image: "/images/products/radiance-serum.jpg",
    badge: "Bestseller",
    category: "serums"
  },
  {
    id: "hydrating-serum",
    name: "Hydrating Serum",
    description: "Hyaluronic acid moisture boost",
    price: 6200,
    originalPrice: null,
    image: "/images/products/hydrating-serum.jpg",
    badge: null,
    category: "serums"
  },
  {
    id: "age-defense-serum",
    name: "Age Defense Serum",
    description: "Retinol & peptide complex",
    price: 7800,
    originalPrice: null,
    image: "/images/products/age-defense-serum.jpg",
    badge: "New",
    category: "serums"
  },
  {
    id: "glow-serum",
    name: "Glow Serum",
    description: "Niacinamide brightening boost",
    price: 5800,
    originalPrice: 6800,
    image: "/images/products/glow-serum.jpg",
    badge: "Sale",
    category: "serums"
  },
  // Creams
  {
    id: "hydra-cream",
    name: "Hydra Cream",
    description: "Deep moisture with hyaluronic acid",
    price: 5400,
    originalPrice: null,
    image: "/images/products/cream-jars-colored.png",
    badge: null,
    category: "moisturizers"
  },
  {
    id: "gentle-cleanser",
    name: "Gentle Cleanser",
    description: "Soothing botanical wash",
    price: 3800,
    originalPrice: 4800,
    image: "/images/products/cleanser.jpg",
    badge: "Sale",
    category: "cleansers"
  },
  {
    id: "night-cream",
    name: "Night Cream",
    description: "Restorative overnight treatment",
    price: 6400,
    originalPrice: null,
    image: "/images/products/night-cream.jpg",
    badge: "Bestseller",
    category: "moisturizers"
  },
  {
    id: "day-cream-spf",
    name: "Day Cream SPF 30",
    description: "Protection & hydration",
    price: 5800,
    originalPrice: null,
    image: "/images/products/day-cream-spf.jpg",
    badge: null,
    category: "moisturizers"
  },
  // Oils
  {
    id: "renewal-oil",
    name: "Renewal Oil",
    description: "Nourishing facial oil blend",
    price: 7200,
    originalPrice: null,
    image: "/images/products/argan-oil.jpg",
    badge: "New",
    category: "oils"
  },
  {
    id: "rosehip-oil",
    name: "Rosehip Oil",
    description: "Pure organic rosehip extract",
    price: 4800,
    originalPrice: null,
    image: "/images/products/jojoba-oil.jpg",
    badge: null,
    category: "oils"
  },
  {
    id: "jojoba-oil",
    name: "Jojoba Oil",
    description: "Balancing & lightweight",
    price: 4200,
    originalPrice: null,
    image: "/images/products/jojoba-oil.jpg",
    badge: null,
    category: "oils"
  },
  {
    id: "argan-oil",
    name: "Argan Oil",
    description: "Moroccan beauty elixir",
    price: 5600,
    originalPrice: null,
    image: "/images/products/argan-oil.jpg",
    badge: "Bestseller",
    category: "oils"
  },
  // Masks & Toners (original products)
  {
    id: "glow-mask",
    name: "Glow Mask",
    description: "Weekly brightening treatment",
    price: 4500,
    originalPrice: null,
    image: "/images/products/mask.jpg",
    badge: null,
    category: "masks"
  },
  {
    id: "balance-toner",
    name: "Balance Toner",
    description: "pH restoring mist",
    price: 3200,
    originalPrice: null,
    image: "/images/products/toner.jpg",
    badge: "New",
    category: "toners"
  }
]

const categories = ["all", "serums", "moisturizers", "cleansers", "oils", "masks", "toners"]

export default function ShopPage() {
  const searchParams = useSearchParams()
  const requestedCategory = searchParams.get("category")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory)
  const productsPerPage = 10
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)

  useEffect(() => {
    if (requestedCategory && categories.includes(requestedCategory)) {
      setSelectedCategory(requestedCategory)
    }
  }, [requestedCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current)
      }
    }
  }, [])

  // Reset animation when category changes
  useEffect(() => {
    setIsVisible(false)
    setCurrentPage(1)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.3em] uppercase text-primary mb-4 block">
              Our Collection
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">
              Shop All Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Discover our complete range of natural skincare essentials
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-border/50">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden inline-flex items-center gap-2 text-sm text-foreground"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop Categories */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm capitalize boty-transition bg-popover ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/70 hover:text-foreground boty-shadow"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <span className="text-right text-sm text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </span>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl text-foreground">Filters</h2>
                  <button
                    type="button"
                    onClick={() => setShowFilters(false)}
                    className="p-2 text-foreground/70 hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category)
                        setShowFilters(false)
                      }}
                      className={`w-full px-6 py-4 rounded-2xl text-left capitalize boty-transition ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground boty-shadow"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div 
            ref={gridRef}
            className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
          >
            {paginatedProducts.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground boty-transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground boty-transition disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ProductCard({ 
  product, 
  index, 
  isVisible 
}: { 
  product: typeof products[0]
  index: number
  isVisible: boolean
}) {
  return (
    <Link
      href={`/product/${product.id}`}
      className={`group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="bg-card rounded-3xl overflow-hidden boty-shadow boty-transition group-hover:scale-[1.02]">
        {/* Image */}
        <div className="relative aspect-square bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover boty-transition group-hover:scale-105"
          />
          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs tracking-wide ${
                product.badge === "Sale"
                  ? "bg-destructive/10 text-destructive"
                  : product.badge === "New"
                  ? "bg-primary/10 text-primary"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              {product.badge}
            </span>
          )}
          {/* Quick add button */}
          <button
            type="button"
            className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm opacity-100 boty-transition boty-shadow sm:bottom-4 sm:right-4 sm:h-12 sm:w-12 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100"
            onClick={(e) => {
              e.preventDefault()
            }}
            aria-label="Add to cart"
          >
            <ShoppingBag className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-6">
          <h3 className="font-serif text-base text-foreground mb-1 sm:text-xl">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-3 sm:mb-4 sm:text-sm">{product.description}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground sm:text-lg">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through sm:text-sm">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
