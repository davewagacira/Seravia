"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden" style={{ backgroundColor: '#e3e1e2' }}>
      {/* Background Video */}
      <div className="absolute inset-0" style={{ backgroundColor: '#e3e1e2' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="pointer-events-none"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            objectFit: 'cover',
            animation: 'none',
            transition: 'none'
          }}
        >
          <source src="https://curlgvbgasphosyhfncx.supabase.co/storage/v1/object/public/images/images/projects/Skincare_Cream_Application_Video_Generation.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(247,242,235,0.72)] via-[rgba(247,242,235,0.28)] to-transparent" />
        {/* Bottom fade gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 pb-20 pt-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto w-full max-w-[22rem] text-center sm:max-w-[28rem] lg:mx-0 lg:max-w-xl lg:text-left">
            <span className="text-sm uppercase mb-6 block text-[#2f2520] animate-blur-in opacity-0 tracking-[0.22em]" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Kenyan Botanical Skincare
            </span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance text-[#201714] [text-shadow:0_3px_18px_rgba(255,248,240,0.35)]">
              <span className="block animate-blur-in opacity-0 font-semibold" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>Glow gently.</span>
              <span className="block animate-blur-in opacity-0 font-semibold xl:text-9xl text-7xl" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>Naturally you.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md mx-auto lg:mx-0 text-[#322721] animate-blur-in opacity-0 [text-shadow:0_2px_12px_rgba(255,248,240,0.28)]" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              Discover skincare inspired by Kenya's calm, sunlit rituals. Pure ingredients, gentle routines, radiant results.
            </p>
            <div className="flex flex-col justify-center gap-4 animate-blur-in opacity-0 sm:flex-row lg:justify-start" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Link
                href="/shop"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground boty-transition boty-shadow hover:bg-primary/90 sm:w-auto"
              >
                Shop Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
