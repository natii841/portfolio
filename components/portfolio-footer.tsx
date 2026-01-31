"use client"

import { motion } from "motion/react"
import { Github, Send, Instagram, Heart } from "lucide-react"
import Link from "next/link"

export function PortfolioFooter() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <span>&copy; 2026 Natanim Wondwossen</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-primary" /> using Next.js & Tailwind
            </span>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <Link
              href="https://github.com/natii841"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground hover:bg-secondary"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link
              href="https://t.me/nati10000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground hover:bg-secondary"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.instagram.com/nnat_ii/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground hover:bg-secondary"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Back to top */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-8"
        >
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer"
          >
            Back to top
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
