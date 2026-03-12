# FAYEMEES — Project Context

## The Business
FAYEMEES is a premium Nigerian lifestyle brand operating four arms under one roof:

| Arm | Full Name | Status |
|-----|-----------|--------|
| Salon | FAYEMEES Etana Beauty Salon | Active — price list pending |
| Barber | FAYEMEES Eddy's Barber | Active — price list complete |
| Marketplace | FAYEMEES Market Place | Active — products TBD |
| Restaurant | FAYEMEES Feathers, Fins & Flesh (4F's) | Active — menu TBD |

Spa is explicitly excluded from this build phase.

## Client Questionnaire Summary
- Business name: FAYEMEES (four sub-brands listed above)
- Logo: None yet — using typographic logo (Playfair Display)
- Brand colors: None provided — dev team proposing palette
- Photos: Client has real photos — pending delivery
- Booking: WhatsApp + Phone + Online form
- Pricing: Visible on site
- Salon services: Awaiting
- Spa: Not included in this phase

## Site Structure
| Page | Route | Notes |
|------|-------|-------|
| Home | / | Hero + 4-arm overview + booking CTA |
| Salon | /salon | Services, pricing, team, booking |
| Barber | /barber | Services, pricing, booking |
| Marketplace | /marketplace | Product grid or coming soon |
| Restaurant | /restaurant | Atmosphere, menu overview, reservation |
| Book Now | /book | WhatsApp + Phone + EmailJS form |
| Contact | /contact | Address, maps, hours, socials |

## Eddy's Barber — Full Price List
| Service | Price (₦) |
|---------|-----------|
| Men's Haircut | 3,000 |
| Women's Haircut | 4,000 |
| Kids' Haircut | 1,500 |
| Shaving | 1,500 |
| Caving | 1,500 |
| Dandruff Treatment | 3,000 |
| Hair Treatment | 2,500 |
| Hair Dying | 3,000 |
| Color Dye | 12,000 |
| Washing of Hair | 1,000 |
| Spotiwave | 6,000 |
| Texturizer | 3,000 |
| Pedicure | 10,000 |
| Manicure | 2,000 |
| Organic Pedicure | 13,000 |
| Facial Scrub | 8,000 |
| Brightening Facial | 20,000 |
| Whitening Facial | 15,000 |

## Salon Price List
// TODO: [CLIENT] Awaiting submission from client


## Booking System — Cal.com

### Tool: Cal.com (not Calendly)
- Free tier sufficient for this phase
- Supports multiple event types per account
- Real-time slot availability — no double bookings
- Auto email confirmations to customer and business
- 24hr reminders built in
- Embeddable in Next.js via @calcom/embed-react
- Has API for future management dashboard build

### Arms with Booking
- Etana Beauty Salon ✓
- Eddy's Barber ✓
- Marketplace ✗ (no booking needed)
- 4F's Restaurant ✗ (no booking this phase — contact only)

### Client Setup Required (before step 12)
- [ ] Client creates Cal.com account
- [ ] Create event type for each salon service (name, duration, buffer time)
- [ ] Create event type for each barber service (name, duration, buffer time)  
- [ ] Set weekly availability for both arms
- [ ] Enable email confirmations in Cal.com settings
- [ ] Enable 24hr reminders in Cal.com settings
- [ ] Share Cal.com event links with dev for env variables

### Additional Environment Variables
```
NEXT_PUBLIC_CAL_SALON_LINK=
NEXT_PUBLIC_CAL_BARBER_LINK=
```

### Step 12 — 



## Outstanding Client Items
- [ ] Etana Salon service and price list
- [ ] Real photos (salon, barber, restaurant, team)
- [ ] WhatsApp number and phone number
- [ ] Email address for form submissions
- [ ] Restaurant menu or food categories
- [ ] Marketplace product list or coming soon decision
- [ ] Social media handles
- [ ] Physical address and operating hours

## Environment Variables Required
```
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE_NUMBER=
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

## Build Sequence (work through in order)
- [ ] 1. Tailwind config — brand tokens and font variables
- [ ] 2. Root layout.tsx — fonts, metadata, Navbar/Footer slots
- [ ] 3. Navbar — mobile hamburger, all page links, gold active state
- [ ] 4. Footer — links, contact, WhatsApp button, hours
- [ ] 5. Homepage hero — full viewport, brand name, tagline, two CTAs
- [ ] 6. Homepage 4-arm section — grid cards linking to each arm
- [ ] 7. PriceTable component — renders from data file, filterable by category
- [ ] 8. Barber page — uses PriceTable with barberServices.ts
- [ ] 9. Salon page — placeholder structure, ready for data
- [ ] 10. Restaurant page — atmospheric, editorial layout
- [ ] 11. Marketplace page — coming soon or product grid placeholder
- [ ] 12. Book Now page — Updated (Book Now page)
    - Build /book page with:
    - Arm selector: Etana Beauty Salon / Eddy's Barber (styled toggle)
    - Service selector: dropdown populated from src/data/ for selected arm
    - Cal.com embed loads below with correct event type pre-selected
    - Inline embed — never redirect to cal.com
    - Mobile responsive — Cal.com embed scales correctly on all screen sizes
    - Fallback: WhatsApp button visible below embed for users who prefer it

    ### Future Phase — Management Interface
    Cal.com API base URL: https://api.cal.com/v1
    The team dashboard will allow FAYEMEES staff to:
    - View all upcoming appointments
    - Block off dates and holidays
    - Manage service durations and availability
    - Without ever touching Cal.com directly

- [ ] 13. Contact page — maps embed, hours, social links
- [ ] 14. Framer Motion animations — entrance animations on headings and cards
- [ ] 15. Mobile responsiveness audit — all breakpoints
- [ ] 16. Vercel deploy — env variables set, custom domain connected