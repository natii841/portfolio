"use client"

import React, { useState } from "react"
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface FloatingNavbarProps {
  navItems: NavItem[]
  className?: string
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
          setMobileMenuOpen(false)
        }
      }
    }
  })

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "fixed top-6 inset-x-0 mx-auto z-[5000] flex max-w-fit items-center justify-center gap-2 rounded-full border border-border/40 bg-background/80 px-4 py-2.5 shadow-lg shadow-primary/5 backdrop-blur-md",
            className
          )}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((navItem, idx) => (
              <Link
                key={`nav-${navItem.name}-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                )}
              >
                <span>{navItem.name}</span>
              </Link>
            ))}
            <Link
              href="#contact"
              className="relative rounded-full border border-primary/50 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-2 text-foreground"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Brand/Logo */}
          <span className="md:hidden text-sm font-semibold text-foreground px-2">
            NW
          </span>
        </motion.nav>
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && visible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-20 inset-x-4 z-[4999] md:hidden"
          >
            <div className="rounded-2xl border border-border/40 bg-background/95 backdrop-blur-lg shadow-xl overflow-hidden">
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`mobile-nav-${navItem.name}-${idx}`}
                    href={navItem.link}
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/50"
                  >
                    {navItem.icon && (
                      <span className="text-primary">{navItem.icon}</span>
                    )}
                    <span>{navItem.name}</span>
                  </Link>
                ))}
                <div className="my-2 h-px bg-border/50" />
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="flex items-center justify-center rounded-xl border border-primary/50 bg-primary/10 px-4 py-3 text-base font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[4998] bg-background/60 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  )
}
