

# Full Website Conversion Rate Overhaul - AK Steel Services

This is a comprehensive redesign and improvement plan to dramatically increase calls, quote requests, and overall conversions. The changes span design improvements, new pages, better CTAs, trust signals, and user experience enhancements.

---

## 1. Sticky Call-to-Action Bar (Mobile + Desktop)

Add a persistent bottom bar on mobile and top banner on desktop with the phone number and "Get Quote" button always visible. Currently, the phone number disappears as users scroll. This is the single biggest conversion killer.

- Mobile: fixed bottom bar with "Call Now" and "Get Quote" buttons
- Desktop: ensure the header CTA buttons are more prominent with pulsing/attention-grabbing styling

---

## 2. Homepage Hero Section Overhaul

The current hero is decent but lacks urgency and a strong value proposition. Changes:

- Add a **countdown/urgency element**: "Free Site Survey This Week" or "Book Before March - 10% Off"
- Make the phone number **much larger** and more prominent in the hero
- Add a **mini inline quote form** (just Name + Phone + Service) directly in the hero instead of forcing users to scroll down
- Add a **"Trusted by 1,000+ customers"** social proof line with Google rating stars right in the hero

---

## 3. "Click-to-Call" Phone Number Everywhere

Currently some phone numbers are plain text. Every single phone number on the site should be a tappable/clickable link with tracking. Add phone number CTAs:

- After every section on the homepage
- In service page content (mid-page CTAs)
- Floating call button alongside WhatsApp button

---

## 4. Simplified Quick Quote Form

The current quote form has too many fields (name, phone, email, service, location, description, file upload, contact method, timeline). This creates friction. Changes:

- Create a **new compact "Quick Quote" component** with just 3 fields: Name, Phone, Brief Description
- Use this compact form in the hero section and mid-page CTAs
- Keep the full detailed form on the Contact page only

---

## 5. New Pages to Add

### a. "How It Works" Page (`/how-it-works`)
A simple 3-4 step process page showing:
1. Get in touch / Request quote
2. Free site survey
3. We fabricate and deliver
4. Installation complete

This reduces anxiety for first-time customers who don't know what to expect.

### b. "Free Site Survey" Landing Page (`/free-site-survey`)
A dedicated page focused entirely on getting people to book a free site visit. Strong CTA, minimal distractions, trust signals.

### c. "Residential Services" Page (`/residential-steel-services`)
Many homeowners searching for loft conversions, extensions, RSJ beams etc. A dedicated residential page groups these together with relatable language (not industrial jargon).

### d. "Commercial & Industrial" Page (`/commercial-steel-services`)
Separate page for commercial clients with different messaging, bigger project examples, and B2B trust signals.

---

## 6. Trust & Social Proof Improvements

- Add a **"As Seen On" / "Trusted By"** section showing builder logos or partner companies
- Add **project counter** that animates on scroll (e.g., "1,247 Projects Completed")
- Add **response time guarantee**: "We respond to all enquiries within 2 hours"
- Move Google Reviews higher on the homepage (currently below services)
- Add a **video testimonial section** placeholder (even just a "Watch Our Work" section with project photos in a more dynamic layout)

---

## 7. Urgency & Scarcity Elements

- Add a banner: "Limited Availability - Book Your Free Survey Today"
- Add "Popular This Month" badges to top services
- Show "X quotes requested this week" (can be a reasonable static number)

---

## 8. Footer Improvements

- Add a **mini quote form** in the footer
- Make the phone number much larger and more prominent
- Add "Open Now" / "Closed" live indicator based on business hours
- Add Google Maps embed or link to directions

---

## 9. Design & Visual Improvements

- Add **subtle animations** on scroll (fade-in for sections)
- Improve card hover effects with slight lift/shadow
- Add **gradient backgrounds** between sections for visual flow
- Make all CTA buttons larger and with more contrast
- Add **icon badges** next to the phone number (phone icon pulse animation)

---

## 10. Service Pages - Mid-Page CTAs

Every service page should have a CTA break in the middle of content, not just at the top and bottom. Add a styled "banner" component that appears mid-page:

> "Need [Service Name]? Call us now on 01474 550531 or get a free quote in 60 seconds"

---

## Technical Implementation Summary

| Change | Files Affected |
|--------|---------------|
| Sticky mobile CTA bar | New component `StickyCallBar.tsx`, add to `Index.tsx` and all pages |
| Quick quote mini form | New component `QuickQuoteForm.tsx` |
| Hero redesign | `NewHeroSection.tsx` |
| How It Works page | New `src/pages/HowItWorks.tsx`, update `App.tsx` routes |
| Free Site Survey page | New `src/pages/FreeSiteSurvey.tsx`, update `App.tsx` routes |
| Residential Services page | New `src/pages/ResidentialSteelServices.tsx`, update `App.tsx` routes |
| Commercial Services page | New `src/pages/CommercialSteelServices.tsx`, update `App.tsx` routes |
| Trust bar / social proof | New component `TrustBar.tsx` |
| Urgency banner | New component `UrgencyBanner.tsx` |
| Mid-page CTA banner | New component `MidPageCTA.tsx` |
| Footer mini form + improvements | Update `Footer.tsx` |
| Service page CTAs | Update all service pages |
| Scroll animations | Update `index.css` with animation classes |
| Header nav updates | Update `Header.tsx` with new pages in navigation |
| Open/Closed indicator | New component `OpenClosedBadge.tsx` |

This is approximately **8 new files** and **15+ file modifications** - a significant amount of visible work that will make a real difference to conversion rates.

