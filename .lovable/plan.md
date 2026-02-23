

# Homepage Polish & Full Site Improvements

## Overview
This plan covers a comprehensive polish of the homepage plus improvements across all pages, focusing on visual refinement, better user flow, and fixing issues spotted in the current build.

---

## Part 1: Homepage Polish (100% Overhaul)

### 1a. Hero Section Refinements
- Reduce slideshow speed from 3s to 4s (less frantic)
- Add a Ken Burns (slow zoom) effect on each slide for a more cinematic feel
- Add a subtle gradient overlay from bottom to improve text readability
- Make the quote form card have a slight glow/shadow animation to draw the eye
- Add "Responding Now" live dot indicator next to the response time text

### 1b. Services Section Improvements
- Add service cards with hover lift effect and coloured top-border accent
- Make the "Learn More" links use `<Link>` (React Router) instead of `<a>` tags (currently broken -- uses `<a href>` which causes full page reloads)
- Add a "Most Popular" badge to Steel Fabrication and Structural Steel cards
- Add service icons with background circles for a cleaner look

### 1c. Residential & Commercial Cards
- Add animated arrow on hover
- Add a subtle count ("50+ projects this year") on each card

### 1d. Reviews Section
- Truncate long reviews with "Read more" expand functionality so cards are equal height
- Add reviewer initial avatar circles (coloured) for visual interest

### 1e. Recent Projects Section
- Add a hover overlay with "View Project" text on each card
- Stagger the fade-in animation for each project card

### 1f. Why Choose Us Section
- Add animated number counters inline (e.g. "20+ years" next to the text)
- Add a subtle background pattern/texture

### 1g. Homepage Flow Reorder
- Move the certifications section higher (after Trust Bar) to establish credibility early
- Remove the duplicate CraneServicesSection (overlaps with services section content)
- Add a "How It Works" mini-preview (3 steps condensed) between services and reviews

### 1h. Footer Polish
- Add hover underline animations on links
- Make the copyright year dynamic (2025 -> current year automatically)

---

## Part 2: Inner Page Polish

### 2a. All Service Pages
- Add a consistent hero banner pattern: dark background with breadcrumbs, page title, and a quick-stats row (response time, rating, projects)
- Ensure all pages have `pb-16 md:pb-0` on the wrapper div to account for the mobile sticky bar

### 2b. Contact Page
- The form currently doesn't use `name` attributes on inputs, so `FormData` extraction returns empty. Fix all input `name` attributes so the form actually submits data.

### 2c. How It Works Page
- Add a connecting line/timeline between the 4 steps for visual continuity
- Add project photos alongside each step

### 2d. Free Site Survey Page
- Add a FAQ section addressing common concerns ("Is it really free?", "How long does it take?")

### 2e. Gallery Page
- Add a lightbox/modal view when clicking on photos
- Improve the filter buttons with active state styling

---

## Part 3: Global Design Improvements

### 3a. Animations
- Add staggered fade-up animations to all card grids using CSS animation-delay
- Add smooth scroll behaviour to the html element
- Add a subtle parallax effect on hero backgrounds

### 3b. Typography & Spacing
- Increase line-height on body text for better readability
- Add consistent section padding (py-20 everywhere)

### 3c. Mobile Optimisations
- Ensure no horizontal overflow on any page
- Test and fix the sticky call bar z-index against dropdown menus
- Add bottom padding to all pages to prevent content hiding behind the sticky bar

---

## Part 4: Technical Fixes

### 4a. Fix ServicesSection Links
- Change `<a href={service.link}>` to `<Link to={service.link}>` to prevent full page reloads

### 4b. Contact Form Fix
- Add missing `name` attributes to all form inputs so data actually submits
- Wire up the form submission to save to the database properly

### 4c. CSS Improvements
- Add `scroll-behavior: smooth` to html
- Add staggered animation delay utility classes

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/NewHeroSection.tsx` | Slower slideshow, Ken Burns effect, glow on form card, live dot indicator |
| `src/components/ServicesSection.tsx` | Fix Link imports, add Popular badges, card hover improvements |
| `src/components/GoogleReviews.tsx` | Truncate reviews, avatar initials, equal-height cards |
| `src/pages/Index.tsx` | Reorder sections, remove CraneServicesSection, add mini How It Works, move certs up |
| `src/components/Footer.tsx` | Dynamic year, hover animations |
| `src/index.css` | Smooth scroll, stagger animations, Ken Burns keyframes |
| `src/pages/Contact.tsx` | Fix form name attributes for proper submission |
| `src/pages/HowItWorks.tsx` | Add timeline connector, photos |
| `src/pages/FreeSiteSurvey.tsx` | Add FAQ section |
| `src/components/TeamSection.tsx` | Polish cards, add team photos |
| `src/components/TrustBar.tsx` | Subtle background pattern, improved spacing |
| All service pages (~20 files) | Add `pb-16 md:pb-0` wrapper padding for mobile sticky bar |

Total: ~30 files modified for a thorough, professional polish across the entire site.

