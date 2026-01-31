"use client"

import { motion } from "motion/react"
import { Github, Send, Instagram, Mail } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/natii841",
    icon: Github,
    description: "Check out my code",
  },
  {
    name: "Telegram",
    href: "https://t.me/nati10000",
    icon: Send,
    description: "DM me directly",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nnat_ii/",
    icon: Instagram,
    description: "Follow my journey",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-violet-600/10 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            I&apos;m always excited to collaborate on interesting projects or just chat
            about tech. Feel free to reach out!
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Link
            href="https://t.me/nati10000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 rounded-full text-lg font-semibold text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40"
          >
            <Send className="w-5 h-5" />
            <span>DM me on Telegram @nati10000</span>
          </Link>
        </motion.div>

        {/* Social links grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/50 hover:bg-card"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <link.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{link.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
