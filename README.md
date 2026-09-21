# QSS India — Manpower Outsourcing & Security Services Website

A production-ready, multi-page marketing website for **QSS India Manpower
Outsourcing Services**, built with Next.js 14, TypeScript, Tailwind CSS,
GSAP/ScrollTrigger and a genuine Three.js (react-three-fiber) hero scene —
a cursor-interactive "security network" with a particle-built shield at
its core.

All content, statistics and compliance details are sourced directly from
the client-supplied Business Presentation and Company Profile PDFs —
nothing is fabricated. All photography is the client's own, and the logo
is the client's actual supplied logo (extracted from the CorelDraw source,
not redrawn).

---

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — custom navy/blue/white brand design system
- **three.js** + **@react-three/fiber** + **@react-three/drei** — the hero's
  interactive particle-shield scene
- **GSAP** + **ScrollTrigger** — scroll-driven reveals and the animated
  process timeline
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

Builds clean with zero TypeScript/ESLint errors — all 9 routes prerender
as static pages (see the `Route (app)` build output for bundle sizes).

---

## Site map

The site is a real multi-page Next.js app — every item in the nav is its
own route with a unique URL, its own `<title>`/meta description, and its
own page-hero banner + breadcrumb:

| Route | Page |
|---|---|
| `/` | Home — hero, stats, the "Explore QSS India" card hub, vision/mission, advantages, FAQ, CTA |
| `/about` | Company history + Compliance & Certifications table |
| `/services` | The six business verticals + Housekeeping + Hospitality |
| `/security` | Security Services detail (6 real-photo hover cards) |
| `/manpower` | Skilled & semi-skilled workforce |
| `/process` | The 9-step client-servicing timeline + mobilization framework |
| `/technology` | QSS Online Management System (dashboard mock + features) |
| `/gallery` | Filterable photo gallery + lightbox, real photos only |
| `/contact` | Validated lead form + all contact channels |

Navbar, footer, the floating WhatsApp button, back-to-top button and the
scroll-progress bar live in `src/app/layout.tsx` so they appear
automatically on every page — you never need to add them to a new route
yourself.

---

## Project structure

```
src/
  app/
    layout.tsx           — fonts, global <head>/JSON-LD, shared Navbar/Footer/etc.
    page.tsx              — Home
    about/page.tsx         — /about
    services/page.tsx       — /services
    security/page.tsx        — /security
    manpower/page.tsx         — /manpower
    process/page.tsx           — /process
    technology/page.tsx         — /technology
    gallery/page.tsx              — /gallery
    contact/page.tsx               — /contact
    globals.css                     — brand design tokens, utility classes
  components/
    three/
      HeroCanvas.tsx     — r3f <Canvas> wrapper + window-level pointer tracking
      SecurityGlobe.tsx  — the particle network, shield and physics
    PageHero.tsx          — reusable inner-page banner (breadcrumb + title)
    ExploreCards.tsx       — homepage "hub" cards linking into every page
    FAQ.tsx                 — accordion, homepage
    CTABanner.tsx            — reusable end-of-page call-to-action
    Navbar.tsx, Hero.tsx, Stats.tsx, About.tsx, VisionMission.tsx,
    BusinessVerticals.tsx, SecurityServices.tsx, Manpower.tsx,
    Housekeeping.tsx, Hospitality.tsx, Compliance.tsx, OMS.tsx,
    Process.tsx, WhyQSS.tsx, Gallery.tsx, Contact.tsx, Footer.tsx,
    WhatsAppButton.tsx, BackToTop.tsx, ScrollProgress.tsx,
    Reveal.tsx (GSAP scroll-reveal wrapper), Counter.tsx (animated stat counter)
  data/
    content.ts             — SINGLE SOURCE OF TRUTH for all site copy, stats,
                              contact details and FAQs, with inline comments
                              citing which PDF page each fact came from
  lib/
    gsap.ts                 — registers ScrollTrigger once, client-side only
public/
  images/
    logo/       — extracted real QSS logo (transparent + solid PNG)
    security/   — real security-team photographs
    hospitality/— real hospitality/resort deployment photographs
    gallery/    — team photos + the services poster/flyer
```

To change any fact, figure or contact detail, edit **`src/data/content.ts`**
— every component reads from it, so nothing needs to change in two places.
To change nav items or add a new page, add the route folder under `src/app/`
and add an entry to the `nav` array in `content.ts`.

---

## The hero's interactive particle shield

`src/components/three/SecurityGlobe.tsx` renders:

- A wireframe globe + inner sphere (static backdrop)
- A 640-particle Fibonacci-sphere "network" shell with a nearest-neighbor
  line mesh between them
- A **shield built from particles**, not an image — three nested
  particle-drawn contours plus a thin luminous outline, sitting at the
  network's core
- **Cursor physics**: particles spring away from the pointer with a soft
  repulsion field and spring back smoothly when it moves away; nearby
  connecting lines collapse to invisible near the cursor and reconnect on
  release; the shield's own particles part around the cursor too, and its
  outline/fill glow and pulse faster on direct hover
- A continuous idle "heartbeat" — the whole network gently pulses even
  when the cursor is elsewhere, so it never looks static
- Subtle multi-depth mouse parallax (shield moves slightly differently
  from the outer shell, for a sense of depth)
- Full `prefers-reduced-motion` support (fully static) and `pointer: fine`
  gating (touch devices get ambient motion only, no repulsion physics, to
  keep things light)

The pointer is tracked via a `window`-level `pointermove` listener rather
than enabling pointer-events on the canvas, so the hero's existing
`pointer-events-none` layout never had to change.

---

## What was built (multi-page pass)

1. **Nine real routes** replacing the original single scrolling page —
   each with its own SEO title/description, breadcrumb, and page-hero banner.
2. **"Explore QSS India" card hub** on the homepage — 8 cards, each with an
   icon, a one-line description and a stat tag, linking into every inner page.
3. **FAQ accordion** — 6 real questions drawn from the supplied PDFs (PSARA
   licensing, branch cities, training hours, government vs. private clients,
   the OMS, and typical mobilization time).
4. **CTA banner** reused at the bottom of every inner page.
5. Removed duplicate headings/paragraphs that existed briefly during
   development, where an inner section repeated text its page-hero banner
   already said — every page now reads as one continuous narrative rather
   than two overlapping intros.
6. Shared chrome (Navbar/Footer/WhatsApp button/back-to-top/scroll-progress)
   consolidated into the root layout so it's automatically present on every
   page, with the navbar correctly highlighting the active route via
   `usePathname()`.

## Where your original photographs are used

| File area | Photo used |
|---|---|
| Hero background | `security/team-outdoor-01.jpg` |
| About page | `security/team-lineup-01.jpg` |
| Security page cards (×6) | all 6 real security/event/residential photos |
| Manpower page | `security/team-lineup-02.jpg` |
| Services page (Housekeeping) | `hospitality/resort-team-01.jpg` |
| Services page (Hospitality) | `hospitality/hotel-deployment-01.jpg` |
| Gallery page (9 images, filterable) | all 10 supplied photos except the flyer graphic, included as "Team Moments" |

## Where the real logo is used

`public/images/logo/qss-logo.png` (transparent) is used in the navbar and
footer; `qss-logo-solid.png` is available for any placement needing a solid
background. Both were extracted directly from the embedded preview raster
inside your supplied `QSS_LOGO_NEW_cdr.zip` — cropped and upscaled, never
redrawn or regenerated. If you have a higher-resolution export of the CDR
(PNG/SVG/AI), drop it into `public/images/logo/` and swap the filename in
`Navbar.tsx`/`Footer.tsx` for a sharper result — the embedded CDR preview
is capped at 181×256px source resolution.

## Things that still need your input before this goes live

- **PSARA / GST / ESI / EPF numbers** are displayed publicly on the
  About → Compliance section — confirm you're comfortable with these being
  public (common practice for licensed security firms in India, but flagging it).
- **Contact form backend** — currently client-side only (shows a success
  state but sends nothing). Wire `src/components/Contact.tsx`'s
  `handleSubmit` to Formspree, Resend, a custom API route, or a WhatsApp
  Business API flow.
- **Domain / canonical URL** — `src/app/layout.tsx` uses a placeholder
  `https://www.qssindia.example`; replace with your real domain before deploying.
- **Financial turnover figures** (₹10.7–12.5 Cr across AY 2023-26) were in
  the Profile PDF but were **not** placed on the public site, since
  publishing revenue is a business decision, not a design one — say the
  word if you'd like a "Financial Overview" section added.
- **Company Profile PDF download** was intentionally not added, since your
  supplied PDF's filename referenced a password — tell me which exact PDF
  should be the public-facing download and I'll add the CTA.

## Deployment

This is a standard Next.js app — deploys as-is to Vercel, Netlify, or any
Node host. Run `npm run build && npm run start`, or point your platform's
Next.js build command at this repo.

---

## Latest update: pure-particle hero, popup quote form, homepage imagery, SEO/AEO/GEO

### Hero visual — simplified to pure particles
Removed the wireframe globe, both scanning rings, and every connecting
line. The hero is now exactly two glowing dot clouds — an ambient outer
field and a shield built entirely from particles — both with the idle
heartbeat pulse and cursor-repulsion physics from before. Nothing else in
the hero (text, buttons, layout) changed.

### Popup quote form
A new global quick-enquiry modal (`src/components/QuoteModal.tsx` +
`QuoteModalContext.tsx`) opens from the Navbar's "Request a Quote" button
(desktop and mobile), both Hero CTA buttons, and the CTABanner button used
at the bottom of every page. It's a compact 3-field form (name, phone,
service) with call/WhatsApp fallback links. The full detailed form on
`/contact` was **not** touched — it remains the deep-dive contact option.

### Homepage imagery
- New `AboutTeaser` section (photo + stats + link to `/about`) between the
  stats bar and the Explore cards.
- Every card in `ExploreCards` now has a real photo banner instead of just
  an icon, for a richer, more "alive" homepage.

### SEO / AEO / GEO
- `src/app/sitemap.ts` and `src/app/robots.ts` — auto-generated
  `/sitemap.xml` and `/robots.txt`, with explicit allow-rules for AI
  crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `public/llms.txt` — a GEO-oriented plain-text summary of the company,
  key facts and every page URL, for AI answer engines to cite accurately
- Enriched JSON-LD in the root layout: an `Organization` + `ProfessionalService`
  `@graph` with logo, address, contact point and a `makesOffer` list of services
- `FAQPage` structured data on the homepage FAQ section
- `BreadcrumbList` structured data on every inner page (via `PageHero`)
- Per-page canonical URLs and a proper title template (`Page Title | QSS India`)
  across all 9 routes

---

## Production pass — config, analytics, lead capture, accessibility

### Centralized configuration
- `src/config/site.ts` — canonical URL, phone, GSC verification placeholder
- `src/config/analytics.ts` — GA4/GTM/Meta Pixel/LinkedIn/Google Ads placeholders
  + `trackEvent()` helper
- `src/config/contact.ts` — lead-form webhook endpoint + `submitLead()` helper
- `.env.example` — every configurable value documented in one file

`layout.tsx`, `sitemap.ts`, `robots.ts` and `PageHero.tsx` now all read the
site URL from `siteConfig.url` instead of four separate hardcoded strings.

### Lead capture
- `QuoteModal` (popup) gained a Company field, Indian-mobile validation, a
  real submit flow through `submitLead()`, loading/error states, and no
  longer claims data was sent when no backend is configured
- `/contact` page form got the same treatment for consistency
- New `ExitIntentPrompt` — desktop-only, fires once per session
  (sessionStorage-gated), reuses the same QuoteModal rather than a second
  popup component
- Event tracking (name only, never form contents) wired into every CTA:
  quote buttons, phone links, WhatsApp button, both forms' open/submit/
  success/error

### Accessibility
- Mobile menu: `aria-expanded`, `aria-controls`, click-outside-to-close,
  Escape-to-close (none of this existed before)

### New pages
- `src/app/not-found.tsx` — branded 404 page

---

## INTEGRATION CHECKLIST

| # | Item | File | Where to paste |
|---|---|---|---|
| 1 | Production domain | `.env.local` | `NEXT_PUBLIC_SITE_URL=https://yourdomain.com` |
| 2 | Google Search Console verification | `.env.local` | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=` (paste only the `content="..."` value from Search Console's HTML tag) |
| 3 | Google Analytics (GA4) | `.env.local` | `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` |
| 4 | Google Tag Manager | `.env.local` | `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX` |
| 5 | Meta (Facebook) Pixel | `.env.local` | `NEXT_PUBLIC_META_PIXEL_ID=` |
| 6 | LinkedIn Insight Tag | `.env.local` | `NEXT_PUBLIC_LINKEDIN_INSIGHT_ID=` |
| 7 | Google Ads conversion ID | `.env.local` | `NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXX` |
| 8 | Lead form API/webhook (Formspree, custom API route, Zapier, CRM webhook) | `.env.local` | `NEXT_PUBLIC_LEAD_FORM_ENDPOINT=https://...` |
| 9 | Social profile links (once real, active accounts exist) | `src/config/site.ts` | `social: { facebook, instagram, linkedin }`, then add to `sameAs` in `layout.tsx`'s JSON-LD |

Copy `.env.example` → `.env.local`, fill in only what you're ready to use,
redeploy. Every item above works with a blank value — nothing breaks, the
related feature just stays in its current "not yet connected" state.

### What this pass did NOT do (flagging honestly rather than silently skipping)
- Did not manually pixel-test all 15 breakpoints listed in the brief —
  relied on Tailwind's responsive utilities (already used throughout) plus
  spot-checks at common device widths (375/390/768/1440/1920). If you spot
  a specific breakpoint issue, tell me the width and I'll fix it directly.
- Did not add per-service `Service` JSON-LD schema on every service page —
  the site-wide `ProfessionalService` schema's `makesOffer` list already
  covers this at the entity level; dedicated per-page Service schema would
  be a reasonable follow-up if you want deeper AEO/GEO granularity.
- Did not convert images to AVIF — `next/image` already serves optimized
  WebP automatically at request time, which covers most of the practical
  benefit without a manual conversion pipeline.
