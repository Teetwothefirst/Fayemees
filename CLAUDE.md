# FAYEMEES — Claude Agent Rules

## Project Identity
You are building the official website for FAYEMEES, a Nigerian multi-concept lifestyle brand.
The brand has four arms:
- FAYEMEES Etana Beauty Salon
- FAYEMEES Eddy's Barber
- FAYEMEES Market Place
- FAYEMEES Feathers, Fins & Flesh (4F's Restaurant)

Spa services are NOT part of this build. Deferred to a future version.

## Stack
- Framework: Next.js 14, App Router
- Language: TypeScript (strict — no `any`)
- Styling: Tailwind CSS utility classes only — no inline styles, no CSS modules
- Animations: Framer Motion
- Fonts: next/font — Playfair Display (headings), Inter (body)
- Icons: Lucide React
- Forms: EmailJS (no backend)
- Images: Next.js Image component always — never raw <img> tags
- Deployment: Vercel

## Brand Tokens
Colors (already in tailwind.config.ts):
- gold: #C9A84C
- charcoal: #1A1A1A
- cream: #F5F0E8
- stone: #D4B896
- mid: #4A4A4A

Fonts (via CSS variables):
- font-display → Playfair Display
- font-body → Inter

## Component Rules
- Reusable UI → src/components/ui/
- Section-specific → src/components/sections/
- Layout (Navbar, Footer) → src/components/layout/
- Never hardcode prices or service names in JSX — always import from src/data/
- Add // TODO: [CLIENT] comments wherever real client content needs to be inserted
- Every component must be typed — no implicit any, no missing prop types

## Coding Rules
- One component or one page per prompt — do not build multiple things at once
- Mobile-first always — design from 320px up
- Use Next.js Link for all internal navigation — never <a> tags
- Use next/font for all font loading — never @import in CSS
- All env variables must be prefixed NEXT_PUBLIC_ and referenced from process.env
- Never commit .env.local — it is in .gitignore
- Keep components under 150 lines — split if longer

## Booking System
Booking is handled via Cal.com embeds — no custom backend needed for this phase.

### Setup
- Create two Cal.com accounts (or one account with two event-type groups):
  - FAYEMEES Etana Beauty Salon
  - FAYEMEES Eddy's Barber
- Each service in the price list gets its own event type with correct duration
- Availability set by client in Cal.com dashboard
- Confirmations: automatic email to both customer and business (Cal.com handles this)
- Reminders: 24hr reminder email enabled in Cal.com settings
- WhatsApp notifications: enable via Cal.com + Zapier or Make.com integration

### Embed Approach
- Install Cal.com embed: `npm install @calcom/embed-react`
- Use `<Cal />` component for inline embed on /book page
- Use `<Cal />` as a modal triggered by "Book Now" buttons sitewide
- Never redirect to cal.com — keep user on site at all times

### Page Structure — /book
1. User selects arm: Etana Beauty Salon OR Eddy's Barber
2. User selects service from that arm's list
3. Cal.com embed loads with correct event type pre-selected
4. User picks available date and time slot
5. User enters name, email, phone
6. Confirmation email sent automatically by Cal.com
7. 24hr reminder sent automatically by Cal.com

### Environment Variables
NEXT_PUBLIC_CAL_SALON_LINK=     ← Cal.com link for salon
NEXT_PUBLIC_CAL_BARBER_LINK=    ← Cal.com link for barber

### Floating WhatsApp Button
Still present on all pages as a secondary contact option — not the primary booking method.

### Phone Link
Still present on contact page and footer — for users who prefer to call.

### Phase 2 — Management Interface
Cal.com exposes a full API. A custom dashboard for the FAYEMEES team
to manage bookings, block dates, and view upcoming appointments can be
built on top of it in a future version without changing the customer-facing flow.

## When You're Unsure
- Check src/data/ before creating new data
- Check src/components/ui/ before building a new primitive
- Ask before installing new packages
- If something is awaiting client content, add a // TODO: [CLIENT] comment and move on