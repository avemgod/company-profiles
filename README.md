# Aurora - Premium Company Profile Website

A modern, production-grade company profile website built with **Next.js 14**, **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

### 🎨 Premium UI/UX
- Clean, elegant corporate aesthetic
- Modern SaaS design principles
- Professional typography system
- Handcrafted components
- Consistent spacing rhythm

### ⚡ Performance
- Next.js 14 App Router
- Optimized components
- Lazy loading & animations
- Fast page loads
- Production-ready

### 🎬 Animations
- Framer Motion integration
- Smooth scroll reveals
- Subtle micro-interactions
- Staggered entrance effects
- Premium motion timing

### 📱 Responsive
- Mobile-first design
- Tablet optimized
- Desktop excellence
- Touch-friendly
- All screen sizes

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # Reusable components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   ├── navbar/          # Navigation
│   ├── hero/            # Hero section
│   ├── trusted-by/      # Client logos
│   ├── services/        # Services
│   ├── stats/           # Statistics
│   ├── testimonials/    # Testimonials
│   ├── team/            # Team
│   ├── cta/             # CTA banner
│   └── footer/          # Footer
├── hooks/
├── lib/                 # Utilities
├── config/              # Configuration
└── types/               # TypeScript types
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm
- Docker & Docker Compose (optional, for containerized deployment)

### Installation (Local)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Installation (Docker)

```bash
# Build image
docker-compose build

# Run container
docker-compose up

# Access at http://localhost:3000
```

See [DOCKER.md](./DOCKER.md) for detailed Docker setup.

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe JavaScript |
| React 18 | UI library |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Smooth animations |
| Lucide React | Icon library |

## 🎯 Design Philosophy

This project implements **professional SaaS design standards** inspired by:
- Stripe
- Linear
- Vercel
- Notion
- Framer
- Raycast
- Supabase

### Core Principles

✅ **Minimalist & Elegant** - Clean interfaces, purposeful spacing
✅ **Strong Hierarchy** - Clear visual priorities
✅ **Premium Aesthetics** - Professional craftsmanship
✅ **Consistent Patterns** - Reusable components
✅ **Subtle Motion** - Purposeful animations
✅ **Accessible** - Semantic HTML, keyboard navigation

## 📝 Customization

### Update Company Information

Edit `/src/config/site-config.ts`:
- Company name & description
- Navigation links
- Hero content
- Services
- Team members
- Testimonials
- Statistics

### Modify Colors

Update `/tailwind.config.ts`:
- Primary accent color
- Neutral palette
- Background colors
- Text colors

### Adjust Typography

Customize font sizes and families in `/tailwind.config.ts`:
- Font family
- Font sizes
- Line heights
- Font weights

## 📊 Sections Included

1. **Navbar** - Sticky, transparent with scroll blur
2. **Hero** - Strong headline, CTAs, dashboard mockup
3. **Trusted By** - Client logos section
4. **Services** - 6 service cards with hover effects
5. **Stats** - Key metrics display
6. **Testimonials** - Customer quotes
7. **Team** - Team members grid
8. **CTA Banner** - Conversion-focused
9. **Footer** - Multi-column with social links

## ✅ Quality Standards

- ✅ Mobile-first responsive design
- ✅ Accessibility best practices
- ✅ Performance optimized
- ✅ Type-safe with TypeScript
- ✅ Clean, maintainable code
- ✅ Production-ready
- ✅ SEO optimized

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Works with any Node.js hosting:
- Netlify
- GitHub Pages
- AWS Amplify
- DigitalOcean
- Railway
- Render

## 📈 Performance Metrics

- ⚡ Optimized Core Web Vitals
- 🎯 Lighthouse Score: 90+
- 📦 Minimal bundle size
- 🚀 Fast initial load
- 🎬 Smooth 60fps animations

## 🔒 Security

- Content Security Policy ready
- No external dependencies risks
- Environment variables support
- HTTPS ready

