# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the WRI 2026 Heavy Haul Conference website built with Next.js 13.5.4, configured for static site generation and deployed on Netlify. The site focuses on the 31st Annual Wheel Rail Interaction Conference in Dallas, Texas.

## Common Commands

```bash
# Development
npm run dev         # Start development server on http://localhost:3000

# Build & Production
npm run build       # Build static site (outputs to /out directory)
npm run start       # Start production server

# Code Quality
npm run lint        # Run Next.js linting
```

## Architecture

### Static Site Generation
- Configured with `output: 'export'` in next.config.js for static builds
- Deployed via Netlify using the `out` directory
- Uses `@netlify/plugin-nextjs` for optimized deployment

### Page Structure
- **Pages** use Next.js file-based routing in `/src/pages/`
- **Static Props**: Pages use `getStaticProps` to pass metadata (title, description, socialImage)
- **Layout**: Centralized layout component wraps all pages with Header/Footer

### Component Organization
Key component directories in `/src/components/`:
- **banner/**: Conference banners with Rive animations (wri26HH.js, etc.)
- **speakers/**: Speaker cards and feature speakers for different tracks (HH, RT, PC)
- **sponsors/**: Sponsor displays, CTAs, and package information
- **buttons/**: Specialized registration buttons by sponsor tier
- **infozone/**: InfoZone section components
- **pricing-*/**: Various pricing tier components

### Styling
- **Tailwind CSS**: Primary styling framework with custom configuration
- **Custom Colors**: WRI brand colors defined (wri-blue, wri-red, etc.)
- **Fonts**: Custom fonts (Ronnia, Montserrat) in `/public/fonts/`
- **Animations**: Custom keyframes for marquee and fade effects

### External Integrations
- **Cvent**: Registration widget integration (CventWidget.js)
- **Plausible Analytics**: Privacy-focused analytics
- **Storyblok**: CMS client configured (not actively used in current pages)
- **Rive**: Animation library for banner animations

### API & Functions
- Netlify Function: `/netlify/functions/fetch-rss.js` for RSS feed handling

### Key Patterns
1. **Component Props**: Pages pass metadata through `getStaticProps`
2. **Smooth Scrolling**: Custom implementation in `_app.js` for hash navigation
3. **Dynamic Heights**: CventWidget uses postMessage for iframe height adjustment
4. **Image Optimization**: Disabled for Netlify compatibility (`unoptimized: true`)

## Development Notes
- The site supports multiple conference tracks: Heavy Haul (HH), Rail Transit (RT), and Principles Course (PC)
- Most components have variations for different conference types
- Social images are conference-specific (e.g., wri2026-hh-social.png)