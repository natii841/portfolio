# Natanim Wondwossen - Personal Portfolio

A modern, animated personal portfolio website built with Next.js 16, featuring smooth parallax effects, responsive design, and stunning UI components.

## Features

- **Animated Hero Section** - Eye-catching introduction with gradient text and animated background elements
- **Projects Parallax** - Aceternity UI-inspired parallax scroll effect showcasing projects with 3D rotation
- **Floating Navbar** - Smart navigation that hides/shows based on scroll direction with mobile hamburger menu
- **About Section** - Skills grid with learning progress indicators
- **Contact Section** - Direct links to social profiles and messaging
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Dark Theme** - Beautiful dark mode design with violet/cyan accent colors

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui + Radix UI
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── about-section.tsx    # About me with skills grid
│   ├── contact-section.tsx  # Contact information and CTAs
│   ├── floating-navbar.tsx  # Responsive floating navigation
│   ├── hero-section.tsx     # Hero with animated gradients
│   ├── portfolio-footer.tsx # Footer with social links
│   ├── projects-parallax.tsx # Parallax project showcase
│   └── ui/                  # shadcn/ui components
├── public/
│   └── images/              # Project thumbnails
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Projects array with your own projects
- Social media links

Edit `components/hero-section.tsx` to update:
- Your name and tagline
- Social profile URLs

Edit `components/about-section.tsx` to update:
- Bio description
- Skills and technologies

### Change Theme Colors

Modify the design tokens in `app/globals.css`:
- `--primary` - Primary accent color
- `--accent` - Secondary accent color
- `--background` - Background color
- `--foreground` - Text color

## Deployment

Deploy easily with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or build for production:
```bash
npm run build
npm run start
```

## License

MIT License - feel free to use this template for your own portfolio.

## Contact

- **Telegram:** [@NatiG](https://t.me/NatiG)
- **GitHub:** [natanim](https://github.com/natanim)
- **Instagram:** [@nati_mekonen](https://instagram.com/nati_mekonen)

---

Built with Next.js and Tailwind CSS
