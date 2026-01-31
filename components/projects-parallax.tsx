"use client"

import * as React from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react"
import Image from "next/image"
import Link from "next/link"

export type Project = {
  title: string
  description?: string
  link: string
  thumbnail: string
}

export const ProjectsParallax = ({
  projects,
}: {
  projects: Project[]
}) => {
  const firstRow = projects.slice(0, 3)
  const secondRow = projects.slice(3, 6)
  const thirdRow = projects.slice(6, 9)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 800]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -800]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )

  return (
    <section
      id="projects"
      ref={ref}
      className="h-[280vh] py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <ProjectsHeader />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-16 mb-16">
          {firstRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 space-x-16">
          {secondRow.map((project) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        {thirdRow.length > 0 && (
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-16">
            {thirdRow.map((project) => (
              <ProjectCard
                project={project}
                translate={translateX}
                key={project.title}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

const ProjectsHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-32 px-4 w-full left-0 top-0">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm uppercase tracking-widest text-primary mb-4"
      >
        Portfolio
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-bold text-foreground"
      >
        What I&apos;ve{" "}
        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Built
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl text-base md:text-lg mt-6 text-muted-foreground"
      >
        A collection of projects that showcase my journey as a developer.
        <br className="hidden md:block" />
        Each one represents a problem I wanted to solve or an idea I wanted to bring to life.
      </motion.p>
    </div>
  )
}

const ProjectCard = ({
  project,
  translate,
}: {
  project: Project
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={project.title}
      className="group/product h-80 w-[26rem] relative flex-shrink-0"
    >
      <Link
        href={project.link}
        target={project.link.startsWith("http") ? "_blank" : undefined}
        rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block group-hover/product:shadow-2xl group-hover/product:shadow-primary/20"
      >
        <Image
          src={project.thumbnail || "/placeholder.svg"}
          height={500}
          width={500}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-xl border border-border"
          alt={project.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none rounded-xl transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300">
        <h3 className="text-foreground font-semibold text-lg">{project.title}</h3>
        {project.description && (
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {project.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
