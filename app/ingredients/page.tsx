import { CheckCircle2, Droplets, Flower2, Leaf, Shield } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const highlights = [
  {
    icon: Droplets,
    name: "Hyaluronic Acid",
    benefit: "Helps pull water into the skin for lasting hydration and a smoother, plumper feel."
  },
  {
    icon: Leaf,
    name: "Botanical Oils",
    benefit: "Support nourishment and softness while helping the skin barrier feel comfortable."
  },
  {
    icon: Flower2,
    name: "Plant Extracts",
    benefit: "Chosen to calm, brighten, and support a balanced, healthy-looking complexion."
  },
  {
    icon: Shield,
    name: "Barrier Support",
    benefit: "We prioritize ingredients that keep skin feeling resilient, calm, and cared for."
  }
]

const standards = [
  "Hydration-forward formulas",
  "Gentle, wearable textures",
  "Plant-led support ingredients",
  "No harsh, stripping routine steps"
]

export default function IngredientsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">
                Ingredients
              </span>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Ingredient choices that feel clean, modern, and deeply skin-loving.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                SERAVIA formulas are built around comfort, hydration, and daily consistency. We focus on ingredients that support healthy-looking skin
                without turning your routine into something complicated.
              </p>
            </div>

            <div className="rounded-[2rem] bg-card p-8 boty-shadow">
              <h2 className="mb-5 font-serif text-3xl text-foreground">Our standards</h2>
              <div className="space-y-4">
                {standards.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.name} className="rounded-3xl bg-card p-6 boty-shadow">
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-3 font-serif text-2xl text-foreground">{item.name}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-card p-8 lg:grid-cols-2 lg:p-12">
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src="https://curlgvbgasphosyhfncx.supabase.co/storage/v1/object/public/images/images/projects/Seravia_ingredients.png"
                alt="Natural SERAVIA ingredients"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="mb-3 block text-sm uppercase tracking-[0.24em] text-primary">Formulation Approach</span>
              <h2 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">
                Built for balance, comfort, and daily use.
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Our ingredient philosophy is simple: choose what supports the skin, keep the routine intuitive, and make every formula elegant in use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That means hydration-first blends, plant-based support ingredients, and textures that wear beautifully in warm climates and everyday city life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
