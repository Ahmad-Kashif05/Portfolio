# Ahmad Kashif — Portfolio

A responsive, single-page developer portfolio built with React + Vite.

## Sections
Home · About · Skills · Services · Projects · Experience & Education · Contact

## Design system
Colors, typography, spacing, radii, shadows, and motion timings are defined
as CSS custom properties in `src/styles/tokens.css` and consumed by every
component's CSS Module, so the whole site stays visually consistent.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
src/
  styles/tokens.css     # design tokens (colors, type scale, spacing, shadows)
  index.css              # global reset + base styles
  utils/scrollReveal.js  # lightweight scroll-in animation for sections
  Components/
    Navbar/ HeroSection/ AboutSection/ SkillSection/
    Service/ ProjectSection/ Education/ Contact/ Footer/
```

## Notes
- Update the GitHub/LinkedIn URLs in `Contact.jsx` and `Footer.jsx` with your
  real profile links (currently placeholders).
- Project card "Live Demo" / "GitHub" buttons are placeholders — wire them up
  to real project URLs when available.
