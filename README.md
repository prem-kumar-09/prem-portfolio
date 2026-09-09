# Prem Kumar - Personal Portfolio

A world-class personal portfolio website built with Next.js 15+, TypeScript, ShadCN/UI, Tailwind CSS, and Framer Motion. Designed with a premium, modern aesthetic inspired by Stripe, Linear, Vercel, Apple, and Framer.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **UI Components**: ShadCN/UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Dark/Light Mode with next-themes

## Features

### Design
- Glassmorphism effects
- Smooth micro-interactions
- Elegant animations
- Modern gradients
- Floating elements
- Soft shadows
- Professional typography
- Perfect spacing system
- Mobile-first responsive design
- Smooth page transitions
- Premium hover effects

### Sections
1. **Hero Section** - Stunning introduction with animated background, floating tech icons, and statistics
2. **About Me** - Professional summary, career journey, education timeline, and core strengths
3. **Skills** - Interactive skill cards categorized by Frontend, Backend, Database, Tools, and Testing
4. **Experience** - Enterprise-grade timeline with animated scroll effects
5. **Projects** - Premium project cards with tech stack badges and hover effects
6. **Services** - Modern service cards showcasing offerings
7. **Certifications & Learning** - Learning journey and professional development
8. **Testimonials** - Beautiful testimonial cards with ratings
9. **Contact** - Premium contact form with validation
10. **Footer** - Modern footer with social links and navigation

### Premium Features
- Dark/Light Theme Toggle
- Custom Cursor
- Scroll Progress Indicator
- Back To Top Button
- Animated Background Grid
- Professional Loading Screen
- SEO Optimized
- Accessible (WCAG standards)

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and custom utilities
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── about.tsx
│   │   ├── skills.tsx
│   │   ├── experience.tsx
│   │   ├── projects.tsx
│   │   ├── services.tsx
│   │   ├── certifications.tsx
│   │   ├── testimonials.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   ├── ui/                 # ShadCN/UI components
│   ├── theme-provider.tsx  # Theme context provider
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   ├── navigation.tsx      # Navigation component
│   ├── custom-cursor.tsx   # Custom cursor effect
│   ├── scroll-progress.tsx # Scroll progress indicator
│   └── loading-screen.tsx  # Loading animation
├── lib/
│   ├── utils.ts            # Utility functions
│   └── animations.ts       # Framer Motion animations
├── types/
│   └── index.ts            # TypeScript type definitions
└── data/
    └── portfolio.ts        # Portfolio data
```

## Performance Optimization

- Lighthouse Score > 95
- SEO Score > 95
- Accessibility > 95
- Performance > 95

Optimizations include:
- Image optimization
- Font optimization
- Bundle size optimization
- Lazy loading
- Code splitting

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new):

```bash
vercel deploy
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.ts` to update:
- Skills and technologies
- Experience details
- Project information
- Services offered
- Certifications
- Testimonials
- Personal contact information

### Update Styling

Edit `src/app/globals.css` to customize:
- Color schemes
- Custom utilities
- Animation keyframes

### Update Metadata

Edit `src/app/layout.tsx` to update:
- SEO metadata
- Open Graph tags
- Twitter card settings

## License

This project is open source and available under the MIT License.
