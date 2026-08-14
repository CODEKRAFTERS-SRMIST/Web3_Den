# Web3 Den - Project Context

## Overview
**Web3 Den** is a web application created by the **CodeKrafters** club. It is designed to be a one-stop resource for learning and exploring Web3 development, specifically aimed at helping new recruits understand our mission and what we are building. The platform aims to onboard users into the decentralized web by providing clear educational roadmaps, curated resources, and an engaging community-driven experience.

## Technology Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utility classes.
- **UI Components**: Shadcn UI (Radix UI primitives).
- **Routing**: React Router v6 (`react-router-dom`).
- **Icons**: Lucide React.
- **State/Query Management**: TanStack React Query.

## Key Directories & Files
- `package.json`: Manages dependencies including standard React libraries, Radix UI components for Shadcn, and Tailwind plugins.
- `vite.config.ts` & `tsconfig.json`: Configuration for Vite bundler and TypeScript compiler.
- `tailwind.config.ts`: Defines the design system, custom colors (primary/accent), animations (fade-in, slide-up, glow-pulse, float), and standardizes the theme for a "cyber" aesthetic.

## Application Architecture
- `src/main.tsx`: The React entry point.
- `src/App.tsx`: Manages the global providers (`QueryClientProvider`, `TooltipProvider`, `Toaster`) and defines the application routes using `react-router-dom`.

## Main Pages
- `src/pages/Index.tsx`: The primary landing page. It acts as a wrapper that sequentially renders the navigation, hero, team, gallery, and roadmap components over a global space-themed background.
- `src/pages/NotFound.tsx`: A standard 404 fallback page for unmatched routes.

## Core Components (`src/components/`)
- **`Hero.tsx`**: The top-of-the-fold welcome screen. It features animated floating particles, glowing elements, and a main Call-To-Action (CTA) button that opens the `CTAModal.tsx`.
- **`TeamSection.tsx`**: Highlights the "Visionary Builders" behind Web3 Den. It displays the team's mission statement and key statistics (e.g., 50+ Web3 solutions deployed, 100K+ onboarded).
- **`PhotoGallery.tsx`**: An automated, interactive image carousel showcasing the CK Core Team and their vision. It features a progress loading bar and thumbnail navigation.
- **`Roadmap.tsx`**: A vertically aligned, interactive timeline detailing four phases of the Web3 learning journey:
  - **Phase 01: Foundation** (Currently active)
  - **Phase 02: Expansion** (Locked)
  - **Phase 03: Evolution** (Locked)
  - **Phase 04: Transcendence** (Locked)
- **`Phase1Modal.tsx`**: A detailed modal triggered from the Roadmap's Phase 1. It provides specific learning resources and external links to Cyfrin Updraft courses (Blockchain Basics, Solidity Basics, Chainlink Fundamentals).
- **`Navigation.tsx`**: The top navigation bar.
- **`ScrollAnimations.tsx`**: A utility component that uses an `IntersectionObserver` to trigger fade-in animations as elements scroll into view.

## Design Aesthetic
The site is built with a **Cyberpunk / Web3 theme**:
- **Glassmorphism**: Heavy use of translucent cards with backdrop blurs (`glass-morphism` class).
- **Glow Effects**: Neon glows around buttons and UI elements (`gaming-glow`, `animate-glow-pulse`).
- **Animations**: Smooth transitions, floating particles, and scroll-triggered fade-ins.
- **Color Palette**: Dark mode by default, featuring vibrant primary and accent gradients (`text-gradient-primary`, `text-gradient-accent`).
