"use client"

import { motion } from "motion/react"

const skills = [
  { name: "HTML", level: "proficient" },
  { name: "CSS", level: "proficient" },
  { name: "JavaScript", level: "proficient" },
  { name: "Tailwind CSS", level: "proficient" },
  { name: "React", level: "learning" },
  { name: "Next.js", level: "learning" },
  { name: "TypeScript", level: "learning" },
  { name: "Node.js", level: "learning" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full blur-2xl opacity-30 scale-110" />
              {/* Avatar circle with initials */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-cyan-500 p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    NW
                  </span>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 border border-border/50 rounded-full" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building with{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Passion
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a self-taught developer from Ethiopia with a deep passion for
                creating user-friendly digital experiences. My journey started with
                curiosity and has grown into a commitment to building products that
                truly help people.
              </p>
              <p>
                I believe in the power of technology to make a difference. One of my
                proudest projects is a text-to-voice converter designed to assist
                people with speech disabilities - because everyone deserves to be heard.
              </p>
              <p>
                Currently focused on mastering web development, accessibility best
                practices, and creating impactful solutions. Always learning, always
                building.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            Technologies & Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`px-5 py-2.5 rounded-full border transition-all duration-300 ${
                  skill.level === "proficient"
                    ? "bg-gradient-to-r from-violet-600/20 to-cyan-500/20 border-primary/50 text-foreground"
                    : "bg-secondary/50 border-border text-muted-foreground"
                }`}
              >
                <span className="text-sm font-medium">{skill.name}</span>
                {skill.level === "learning" && (
                  <span className="ml-2 text-xs text-primary">Learning</span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
