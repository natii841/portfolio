import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsParallax, type Project } from "@/components/projects-parallax"
import { ContactSection } from "@/components/contact-section"
import { PortfolioFooter } from "@/components/portfolio-footer"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Home, User, FolderOpen, Mail } from "lucide-react"

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    name: "About",
    link: "#about",
    icon: <User className="h-4 w-4" />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FolderOpen className="h-4 w-4" />,
  },
]

// Projects array - easy to add more projects later
const projects: Project[] = [
  {
    title: "Email Subscribe",
    description: "Simple beautiful email subscription form built with Tailwind CSS",
    link: "https://github.com/natii841/Email-subscribe",
    thumbnail: "/images/project-email.jpg",
  },
  {
    title: "Speak-to-Guess Game",
    description: "Voice recognition number guessing game using JavaScript & Web Speech API",
    link: "https://github.com/natii841/Speak-to-Guess-game",
    thumbnail: "/images/project-voice-game.jpg",
  },
  {
    title: "Text-to-Voice Converter",
    description: "Real-time speech-to-text app to assist people with speech disabilities",
    link: "https://github.com/natii841/Text-to-voice-convertor",
    thumbnail: "/images/project-text-voice.jpg",
  },
  // Future project placeholders - replace with real projects
  {
    title: "Coming Soon 1",
    description: "Next exciting project in development",
    link: "#",
    thumbnail: "/images/project-coming-soon.jpg",
  },
  {
    title: "Coming Soon 2",
    description: "Another amazing project on the way",
    link: "#",
    thumbnail: "/images/project-coming-soon.jpg",
  },
  {
    title: "Coming Soon 3",
    description: "Stay tuned for more",
    link: "#",
    thumbnail: "/images/project-coming-soon.jpg",
  },
  // Add more projects here as needed
  // {
  //   title: "Your Project Name",
  //   description: "Short description of your project",
  //   link: "https://github.com/yourusername/your-repo",
  //   thumbnail: "/images/your-project-image.jpg",
  // },
]

export default function Portfolio() {
  return (
    <main className="bg-background min-h-screen">
      <FloatingNavbar navItems={navItems} />
      <HeroSection />
      <AboutSection />
      <ProjectsParallax projects={projects} />
      <ContactSection />
      <PortfolioFooter />
    </main>
  )
}
