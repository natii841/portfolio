"use client"

import { motion } from "motion/react"

const companies = [
  { name: "TechCorp", logo: "TechCorp" },
  { name: "DataFlow", logo: "DataFlow" },
  { name: "CloudNine", logo: "CloudNine" },
  { name: "Innovex", logo: "Innovex" },
  { name: "ScaleAI", logo: "ScaleAI" },
]

export function TrustSection() {
  return (
    <section className="py-16 px-4 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-8"
        >
          Trusted by{" "}
          <span className="text-foreground font-semibold">4,000+ teams</span>{" "}
          worldwide
        </motion.p>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground transition-colors flex-shrink-0"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-xs font-bold">
                      {company.name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-lg font-semibold whitespace-nowrap">
                    {company.logo}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
