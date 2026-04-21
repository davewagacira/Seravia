"use client"

import Link from "next/link"
import { Code, Instagram, Facebook, Twitter } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Serums", href: "/shop?category=serums" },
    { name: "Moisturizers", href: "/shop?category=moisturizers" },
    { name: "Cleansers", href: "/shop?category=cleansers" },
    { name: "Gift Sets", href: "/shop" }
  ],
  about: [
    { name: "Our Story", href: "/" },
    { name: "Ingredients", href: "/" },
    { name: "Sustainability", href: "/" },
    { name: "Press", href: "/" }
  ],
  support: [
    { name: "Contact Us", href: "/" },
    { name: "FAQ", href: "/" },
    { name: "Shipping", href: "/" },
    { name: "Returns", href: "/" }
  ]
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-card pt-16 pb-8 sm:pt-20 sm:pb-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-2 z-0 hidden justify-center select-none sm:bottom-0 md:flex">
        <span className="font-serif text-[96px] font-bold leading-none whitespace-nowrap text-white/10 sm:text-[150px] md:text-[260px] lg:text-[320px]">
          Seravia
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-1">
            <h2 className="mb-4 font-serif text-3xl text-foreground">Seravia</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Natural skincare for those who believe beauty should feel as good as it looks.
            </p>
            <div className="flex justify-center gap-4 sm:justify-start">
              <a
                href="https://x.com/Kerroudjm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Kerroudjm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Kerroudjm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              {"\u00A9"} {new Date().getFullYear()} Seravia. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                Terms of Service
              </Link>
              <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                <Code className="h-4 w-4 text-red-500" />
                <span>Developed by</span>
                <a
                  href="https://codeverseke.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text font-bold text-transparent transition-opacity hover:opacity-80"
                >
                  CodeVerse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
