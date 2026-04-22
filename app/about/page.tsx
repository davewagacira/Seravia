import { Heart, Leaf, Sparkles, Sun } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const values = [
  {
    icon: Leaf,
    title: "Botanical First",
    description: "We start with plant-led ingredients that feel gentle, elegant, and effective in real daily routines."
  },
  {
    icon: Heart,
    title: "Made To Feel Good",
    description: "Every SERAVIA product is designed to make skincare feel calming, simple, and easy to stay consistent with."
  },
  {
    icon: Sparkles,
    title: "Modern Essentials",
    description: "We focus on refined essentials instead of overcomplicating the ritual with unnecessary steps."
  },
  {
    icon: Sun,
    title: "Inspired By Kenya",
    description: "Warm light, calm rituals, and modern urban living shape the mood and direction of the brand."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-primary">
                About SERAVIA
              </span>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-foreground md:text-6xl">
                Skincare shaped by calm rituals, botanical care, and everyday beauty.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                SERAVIA exists to make skincare feel grounded and beautiful. We create products that are soft on the skin,
                clear in purpose, and easy to build into a daily ritual that actually feels sustainable.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-card boty-shadow">
              <img
                src="https://curlgvbgasphosyhfncx.supabase.co/storage/v1/object/public/images/images/projects/Seravia_brand_image.png"
                alt="SERAVIA brand story"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl bg-card p-6 boty-shadow">
                <value.icon className="mb-4 h-8 w-8 text-primary" />
                <h2 className="mb-3 font-serif text-2xl text-foreground">{value.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] bg-card p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <span className="mb-3 block text-sm uppercase tracking-[0.24em] text-primary">Our Philosophy</span>
              <h2 className="mb-4 font-serif text-3xl text-foreground md:text-4xl">
                Fewer steps. Better textures. A routine you can enjoy every day.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe skincare should support your life, not complicate it. That means elegant formulas,
                clear product roles, and rituals that feel luxurious without becoming heavy or confusing.
              </p>
            </div>
            <div className="space-y-5">
              <div className="rounded-2xl bg-background p-5">
                <h3 className="mb-2 font-medium text-foreground">What we care about</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Gentle cleansing, lasting hydration, comfortable finishes, and formulas that fit naturally into both morning and evening routines.
                </p>
              </div>
              <div className="rounded-2xl bg-background p-5">
                <h3 className="mb-2 font-medium text-foreground">Who we make it for</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  People who want skincare that looks refined, feels calming, and delivers a polished daily ritual without excess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
