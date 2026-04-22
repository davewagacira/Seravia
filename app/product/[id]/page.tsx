"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ChevronLeft, Minus, Plus, ChevronDown, Leaf, Heart, Award, Recycle, Star, Check } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const formatPrice = (price: number) => `KSh ${price.toLocaleString("en-KE")}`

const products: Record<string, {
  id: string
  name: string
  tagline: string
  description: string
  price: number
  originalPrice: number | null
  image: string
  sizes: string[]
  details: string
  howToUse: string
  ingredients: string
  delivery: string
}> = {
  "radiance-serum": {
    id: "radiance-serum",
    name: "Radiance Serum",
    tagline: "Illuminate your natural glow",
    description: "A lightweight, fast-absorbing serum infused with Vitamin C and botanical extracts. Designed to brighten, even skin tone, and reveal your skin's natural radiance.",
    price: 6800,
    originalPrice: null,
    image: "https://curlgvbgasphosyhfncx.supabase.co/storage/v1/object/public/images/images/projects/seravia_radiance.png",
    sizes: ["30ml", "50ml"],
    details: "Our Radiance Serum combines 15% stabilized Vitamin C with rosehip seed oil and sea buckthorn extract. The formula is designed to penetrate deep into the skin, targeting dark spots and uneven tone while protecting against environmental stressors. Suitable for all skin types, this serum is your daily dose of luminosity.",
    howToUse: "Apply 3-4 drops to cleansed face and neck morning and evening. Gently pat into skin until absorbed. Follow with your favorite Seravia moisturizer. For best results, use consistently for 4-6 weeks.",
    ingredients: "Aqua, Ascorbic Acid (Vitamin C), Rosa Canina Seed Oil, Hippophae Rhamnoides Oil, Glycerin, Niacinamide, Tocopherol (Vitamin E), Ferulic Acid, Aloe Barbadensis Leaf Juice, Citrus Aurantium Dulcis Peel Oil, Lavandula Angustifolia Oil.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "hydrating-serum": {
    id: "hydrating-serum",
    name: "Hydrating Serum",
    tagline: "Deep hydration, weightless finish",
    description: "A moisture-boosting serum that floods the skin with hydration while keeping the finish light, fresh, and comfortable through the day.",
    price: 6200,
    originalPrice: null,
    image: "/images/products/hydrating-serum.jpg",
    sizes: ["30ml", "50ml"],
    details: "Hydrating Serum is powered by hyaluronic acid, glycerin, and soothing botanical support ingredients to help skin feel plump, calm, and replenished. It layers beautifully under moisturizer and makeup without feeling sticky.",
    howToUse: "Apply 3-4 drops to clean, slightly damp skin. Gently press into the face and neck, then follow with moisturizer to seal in hydration.",
    ingredients: "Aqua, Sodium Hyaluronate, Glycerin, Panthenol, Aloe Barbadensis Leaf Juice, Betaine, Niacinamide, Chamomilla Recutita Extract, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "age-defense-serum": {
    id: "age-defense-serum",
    name: "Age Defense Serum",
    tagline: "Smooth, renew, and support",
    description: "An advanced serum designed to support smoother-looking skin with a refined blend of retinol-inspired renewal care and peptide support.",
    price: 7800,
    originalPrice: null,
    image: "/images/products/age-defense-serum.jpg",
    sizes: ["30ml", "50ml"],
    details: "Age Defense Serum helps improve the appearance of texture, dullness, and visible fatigue. Its balanced formula supports skin renewal while maintaining a comfortable, elegant feel on the skin.",
    howToUse: "Apply in the evening after cleansing. Start with 2-3 drops, then follow with moisturizer. Use sunscreen daily when using renewal-focused products.",
    ingredients: "Aqua, Retinol, Peptide Complex, Niacinamide, Squalane, Glycerin, Centella Asiatica Extract, Tocopherol, Allantoin.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "glow-serum": {
    id: "glow-serum",
    name: "Glow Serum",
    tagline: "Brighten softly, glow daily",
    description: "A radiance-focused serum that helps the skin look brighter, smoother, and more even while keeping the routine gentle and wearable.",
    price: 5800,
    originalPrice: 6800,
    image: "/images/products/glow-serum.jpg",
    sizes: ["30ml", "50ml"],
    details: "Glow Serum pairs niacinamide with hydration support and botanical extracts to help revive dull-looking skin. The result is a fresh, luminous finish that works beautifully in both morning and evening routines.",
    howToUse: "Apply 3-4 drops after cleansing and before moisturizer. Use morning or evening, and pair with SPF during the day.",
    ingredients: "Aqua, Niacinamide, Glycerin, Sodium Hyaluronate, Licorice Root Extract, Aloe Barbadensis Leaf Juice, Tocopherol, Panthenol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "hydra-cream": {
    id: "hydra-cream",
    name: "Hydra Cream",
    tagline: "Deep moisture, lasting comfort",
    description: "A rich yet lightweight moisturizer that delivers intense hydration without heaviness. Formulated with hyaluronic acid and botanical butters for all-day nourishment.",
    price: 5400,
    originalPrice: null,
    image: "https://curlgvbgasphosyhfncx.supabase.co/storage/v1/object/public/images/images/projects/Seravia_Cream.png",
    sizes: ["50ml", "100ml"],
    details: "Hydra Cream features multi-weight hyaluronic acid to hydrate at every level of the skin. Shea butter and jojoba oil lock in moisture while squalane provides a silky, non-greasy finish. Perfect for normal to dry skin seeking lasting comfort.",
    howToUse: "After cleansing and serum, apply a small amount to face and neck. Massage gently in upward motions. Use morning and evening as the final step of your skincare routine.",
    ingredients: "Aqua, Butyrospermum Parkii Butter, Simmondsia Chinensis Seed Oil, Sodium Hyaluronate, Squalane, Glycerin, Cetearyl Alcohol, Calendula Officinalis Extract, Chamomilla Recutita Extract, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "night-cream": {
    id: "night-cream",
    name: "Night Cream",
    tagline: "Restore while you rest",
    description: "A comforting overnight cream that wraps the skin in moisture and nourishment to support a softer, rested morning look.",
    price: 6400,
    originalPrice: null,
    image: "/images/products/night-cream.jpg",
    sizes: ["50ml", "100ml"],
    details: "Night Cream is formulated to deeply cushion the skin through the night with rich hydration, barrier support, and a soft, silky finish that never feels greasy.",
    howToUse: "Apply as the final step of your evening routine. Smooth over face and neck with upward strokes and leave on overnight.",
    ingredients: "Aqua, Shea Butter, Squalane, Jojoba Oil, Sodium Hyaluronate, Ceramide Blend, Calendula Extract, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "day-cream-spf": {
    id: "day-cream-spf",
    name: "Day Cream SPF 30",
    tagline: "Daily hydration with protection",
    description: "A daytime cream that combines lightweight hydration with SPF 30 protection for a smooth, comfortable everyday finish.",
    price: 5800,
    originalPrice: null,
    image: "/images/products/day-cream-spf.jpg",
    sizes: ["50ml"],
    details: "Day Cream SPF 30 helps hydrate and shield the skin in one easy step. It wears well under makeup and leaves the complexion balanced, soft, and protected throughout the day.",
    howToUse: "Apply generously every morning as the last step in your skincare routine before sun exposure. Reapply as needed during the day.",
    ingredients: "Aqua, Zinc Oxide, Squalane, Glycerin, Sodium Hyaluronate, Aloe Vera, Niacinamide, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "gentle-cleanser": {
    id: "gentle-cleanser",
    name: "Gentle Cleanser",
    tagline: "Cleanse without compromise",
    description: "A soothing botanical wash that removes impurities while respecting your skin's natural balance. Perfect for sensitive skin and daily use.",
    price: 3800,
    originalPrice: 4800,
    image: "/images/products/cleanser.jpg",
    sizes: ["150ml", "250ml"],
    details: "Our Gentle Cleanser uses coconut-derived surfactants that cleanse effectively without stripping. Enriched with chamomile, oat extract, and aloe vera, it calms and soothes as it cleanses. pH-balanced and dermatologist tested for sensitive skin.",
    howToUse: "Wet face with lukewarm water. Apply a small amount to fingertips and massage onto face in circular motions. Rinse thoroughly. Use morning and evening.",
    ingredients: "Aqua, Coco-Glucoside, Glycerin, Avena Sativa Kernel Extract, Aloe Barbadensis Leaf Juice, Chamomilla Recutita Extract, Panthenol, Allantoin, Citric Acid, Benzyl Alcohol, Potassium Sorbate.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "renewal-oil": {
    id: "renewal-oil",
    name: "Renewal Oil",
    tagline: "Nourish deeply, glow eternally",
    description: "A luxurious blend of precious botanical oils that deeply nourish and restore skin overnight. Wake up to softer, more supple skin.",
    price: 7200,
    originalPrice: null,
    image: "/images/products/oil.jpg",
    sizes: ["30ml", "50ml"],
    details: "Renewal Oil combines argan, rosehip, and marula oils with vitamin E for intensive overnight nourishment. This dry oil absorbs quickly, leaving skin soft without residue. Ideal for mature or dehydrated skin seeking restoration.",
    howToUse: "Apply 4-6 drops to palms and warm between hands. Press gently onto face and neck as the final step of your evening routine. Can also be mixed with moisturizer for added hydration.",
    ingredients: "Argania Spinosa Kernel Oil, Rosa Canina Seed Oil, Sclerocarya Birrea Seed Oil, Tocopherol, Rosa Damascena Flower Oil, Lavandula Angustifolia Oil, Helianthus Annuus Seed Oil, Limonene, Linalool.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "rosehip-oil": {
    id: "rosehip-oil",
    name: "Rosehip Oil",
    tagline: "Pure nourishment, radiant softness",
    description: "A lightweight facial oil made to nourish, soften, and support a smoother-looking complexion without heaviness.",
    price: 4800,
    originalPrice: null,
    image: "/images/products/jojoba-oil.jpg",
    sizes: ["30ml", "50ml"],
    details: "Rosehip Oil is rich in nourishing fatty acids and antioxidant support, making it an ideal finishing step for skin that feels dry, tired, or in need of extra comfort.",
    howToUse: "Warm 2-4 drops between palms and press into the skin after serum or moisturizer, morning or evening.",
    ingredients: "Rosa Canina Seed Oil, Tocopherol, Helianthus Annuus Seed Oil.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "jojoba-oil": {
    id: "jojoba-oil",
    name: "Jojoba Oil",
    tagline: "Balance with a featherlight touch",
    description: "A balancing facial oil with a naturally lightweight feel, designed to soften and support the skin without leaving a heavy residue.",
    price: 4200,
    originalPrice: null,
    image: "/images/products/jojoba-oil.jpg",
    sizes: ["30ml", "50ml"],
    details: "Jojoba Oil helps maintain softness and comfort while mimicking the skin’s natural feel. It is ideal for those who want nourishment with a clean, breathable finish.",
    howToUse: "Apply 2-3 drops after moisturizer or blend a drop into cream for extra nourishment.",
    ingredients: "Simmondsia Chinensis Seed Oil, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "argan-oil": {
    id: "argan-oil",
    name: "Argan Oil",
    tagline: "Moroccan nourishment, daily glow",
    description: "A rich yet elegant facial oil that helps replenish moisture and leave the skin feeling silky, supple, and cared for.",
    price: 5600,
    originalPrice: null,
    image: "/images/products/argan-oil.jpg",
    sizes: ["30ml", "50ml"],
    details: "Argan Oil delivers a luxurious veil of nourishment with a smooth finish that works beautifully for dry, mature, or comfort-seeking skin.",
    howToUse: "Use 2-4 drops as the final step in your routine, or mix with moisturizer for added richness.",
    ingredients: "Argania Spinosa Kernel Oil, Tocopherol.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "glow-mask": {
    id: "glow-mask",
    name: "Glow Mask",
    tagline: "Weekly radiance reset",
    description: "A treatment mask designed to revive dull skin, boost glow, and leave the complexion feeling soft and refreshed.",
    price: 4500,
    originalPrice: null,
    image: "/images/products/mask.jpg",
    sizes: ["75ml"],
    details: "Glow Mask offers a weekly reset for skin that looks tired or uneven. Its creamy texture helps smooth the surface and restore a bright, polished appearance.",
    howToUse: "Apply a generous layer to clean skin, leave on for 10-15 minutes, then rinse thoroughly. Use 1-2 times weekly.",
    ingredients: "Aqua, Kaolin, Glycerin, Niacinamide, Aloe Vera, Papaya Enzyme, Vitamin E, Chamomile Extract.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  },
  "balance-toner": {
    id: "balance-toner",
    name: "Balance Toner",
    tagline: "Refresh, prep, and rebalance",
    description: "A lightweight facial mist that helps rebalance the skin after cleansing while adding a fresh layer of hydration.",
    price: 3200,
    originalPrice: null,
    image: "/images/products/toner.jpg",
    sizes: ["120ml", "200ml"],
    details: "Balance Toner helps restore comfort after cleansing and prep the skin for the next steps in your routine. The mist-like feel keeps it light, refreshing, and easy to use daily.",
    howToUse: "Apply with hands or a cotton pad after cleansing, then follow with serum and moisturizer.",
    ingredients: "Aqua, Rose Water, Glycerin, Aloe Vera, Panthenol, Chamomile Extract, Sodium PCA.",
    delivery: "Free standard shipping across Kenya on orders over KSh 5,000. Nairobi same-day options and countrywide express delivery are available at checkout. Orders ship within 1-3 business days. Returns are accepted within 30 days if the product is unused and sealed."
  }
}

const benefits = [
  { icon: Leaf, label: "100% Natural" },
  { icon: Heart, label: "Cruelty-Free" },
  { icon: Recycle, label: "Eco-Friendly" },
  { icon: Award, label: "Expert Approved" }
]

type AccordionSection = "details" | "howToUse" | "ingredients" | "delivery"

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products[productId] || products["radiance-serum"]

  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>("details")
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedSize(product.sizes[0])
    setQuantity(1)
    setOpenAccordion("details")
    setIsAdded(false)
  }, [productId])

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const accordionItems: { key: AccordionSection; title: string; content: string }[] = [
    { key: "details", title: "Details", content: product.details },
    { key: "howToUse", title: "How to Use", content: product.howToUse },
    { key: "ingredients", title: "Ingredients", content: product.ingredients },
    { key: "delivery", title: "Delivery & Returns", content: product.delivery }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground boty-transition mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card boty-shadow">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              {/* Header */}
              <div className="mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-primary mb-2 block">
                  Seravia Essentials
                </span>
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground italic mb-4">
                  {product.tagline}
                </p>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(128 reviews)</span>
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl font-medium text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Size Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium text-foreground mb-3 block">Size</label>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-full text-sm boty-transition boty-shadow ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground"
                          : "bg-card text-foreground hover:bg-card/80"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="text-sm font-medium text-foreground mb-3 block">Quantity</label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 boty-shadow">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-8 text-center font-medium text-foreground">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm tracking-wide boty-transition boty-shadow ${
                    isAdded
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      Added to Cart
                    </>
                  ) : (
                    "Add to Cart"
                  )}
                </button>
                <button
                  type="button"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-foreground/5"
                >
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.label}
                    className="flex flex-col items-center gap-2 p-4 boty-shadow bg-transparent shadow-none rounded-md"
                  >
                    <benefit.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs text-muted-foreground text-center">{benefit.label}</span>
                  </div>
                ))}
              </div>

              {/* Accordion */}
              <div className="border-t border-border/50">
                {accordionItems.map((item) => (
                  <div key={item.key} className="border-b border-border/50">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(item.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-medium text-foreground">{item.title}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground boty-transition ${
                          openAccordion === item.key ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden boty-transition ${
                        openAccordion === item.key ? "max-h-96 pb-5" : "max-h-0"
                      }`}
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
