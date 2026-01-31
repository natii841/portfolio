"use client"

import { motion } from "motion/react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-cyan-500/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to automate
            <br />
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              your business?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of teams using AgentFlow to build AI-powered
            workflows. Start for free, no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 px-10 text-base font-medium text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
            >
              Start Building Free
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="#"
              className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-secondary/50 px-10 text-base font-medium text-foreground transition-all duration-300 hover:bg-secondary hover:border-primary/50"
            >
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
