"use client"

import { motion } from "motion/react"
import {
  Workflow,
  Users,
  Zap,
  UserCheck,
  BarChart3,
  Plug,
} from "lucide-react"

const features = [
  {
    title: "Autonomous Workflows",
    description:
      "Design self-running processes that handle complex tasks without constant supervision.",
    icon: Workflow,
  },
  {
    title: "Multi-Agent Collaboration",
    description:
      "Deploy teams of specialized agents that work together to achieve your goals.",
    icon: Users,
  },
  {
    title: "Instant Deployment",
    description:
      "Go from idea to production in minutes with one-click deployment and scaling.",
    icon: Zap,
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Maintain oversight with approval workflows and intervention points when needed.",
    icon: UserCheck,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track agent performance, costs, and outcomes with real-time insights.",
    icon: BarChart3,
  },
  {
    title: "100+ Integrations",
    description:
      "Connect to your existing tools—CRMs, databases, APIs, and more.",
    icon: Plug,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              automate
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Build sophisticated AI agents with our powerful, yet simple-to-use
            platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
