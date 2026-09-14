# ANTIGRAVITY MASTER PROMPT — DHASVIKA TRAVELS

You are building the production frontend for **Dhasvika Travels**. The approved design is already finalized. Your job is **not to reinterpret it** and not to create a different aesthetic. Your job is to reproduce the approved reference as faithfully as possible in a real, responsive, maintainable website.

## 0. Non-negotiable mission

Recreate the approved homepage so that, at the desktop reference viewport, the finished site is visually almost indistinguishable from:

`/public/assets/dhasvika/00_reference/final_homepage_reference.png`

Treat that file as the **single source of visual truth** for layout, proportions, spacing, hierarchy, imagery placement, gradients, radius, glass effects, density, and overall visual balance.

Do not simplify the design. Do not replace the approved look with a generic template. Do not add random sections. Do not use a different color system. Do not introduce unrelated animations. Do not rasterize the entire page as one image.

Build the page as real semantic HTML/React components and use the provided local assets for imagery.

If the repository already contains code, first inspect it and preserve anything that is already useful. Do not delete working code blindly. Do not ask for permission for normal implementation steps; proceed, verify, and report clearly at the end.

---

## 1. Assets — use these exact local files

Assume the asset pack has been copied to:

`/public/assets/dhasvika/`

### Visual reference only

- `00_reference/final_homepage_reference.png` — full approved reference; never show this directly as the webpage.
- `00_reference/hero_section_reference.png`
- `00_reference/booking_panel_reference.png`
- `00_reference/metrics_reference.png`
- `00_reference/why_fleet_reference.png`
- `00_reference/routes_reference.png`
- `00_reference/reviews_reference.png`
- `00_reference/footer_reference.png`

Use the section crops during implementation to compare spacing and alignment.

### Brand

- `brand/dhasvika_logo_original.png`
- `brand/dhasvika_logo_original_transparent.png`
- `brand/dhasvika_logo_nav.png`
- `brand/dhasvika_logo_nav_transparent.png`
- `brand/dhasvika_mark.png`
- `brand/dhasvika_mark_transparent.png`

Use `dhasvika_logo_nav_transparent.png` in the header. Use `dhasvika_mark_transparent.png` for favicon/app icon where appropriate.

### Hero

- `hero/hero_scenery_car.jpg`
- `hero/hero_scenery_car_wide.jpg`

Use the wide file as the primary desktop hero artwork. It already contains the approved scenic road/car composition and the decorative handwritten copy from the concept. Do not duplicate baked-in decorative text over it.

### Fleet

- `fleet/toyota_etios.png`
- `fleet/honda_amaze.png`
- `fleet/maruti_dzire.png`

### Popular route cards

- `routes/coimbatore_ooty.png`
- `routes/coimbatore_chennai.png`
- `routes/coimbatore_bangalore.png`
- `routes/coimbatore_trichy.png`
- `routes/coimbatore_madurai.png`

These route images were extracted from the approved design and already contain their route/time treatment. Use them as the visual/media content of the route cards and do not duplicate the baked-in route labels on top of them.

### Review avatars

- `reviews/arun_kumar.png`
- `reviews/priya_menon.png`
- `reviews/karthik_raj.png`

### CTA artwork

- `cta/ready_for_next_journey.png`

### Design token helper

- `docs/design_tokens.json`

Use it as an initial token source, but always visually compare against the approved reference and tune if needed.

---

## 2. Required business facts — these must remain correct everywhere

- Brand: **DHASVIKA TRAVELS**
- Tagline: **Journeys Beyond Boundaries**
- Fleet: **5+ Sedans**
- Rate: **₹15 / km**
- Minimum trip: **130 km**

Never write “₹130 minimum fare.” The correct rule is **Minimum Trip 130 km**.

Use the reference phone number only as temporary demo data unless a real number already exists in the project. Put all contact/business values in a single config object so they can be replaced later without editing components.

---

## 3. Architecture — use the VibeCoding stack intelligently, not all at once

This is a premium animated marketing site. Use a layered ownership model.

### Core framework

Prefer:
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui as the structural/accessibility foundation

If the repo already uses Vite/React instead of Next.js, do not rewrite the whole project just for framework preference. Keep the existing framework and apply the same architecture principles.

### UI ownership

Use **shadcn/ui** for structural primitives: buttons, fields, dialogs/sheets, tabs where suitable, and accessibility behavior.

You may borrow **at most 1–3 high-value components** from Kokonut UI, Lightswind UI, or Originkit if they materially help match the approved design. If you do, normalize them to this site’s tokens. Do not create a patchwork of multiple visual systems.

### Icons

Use **Iconsax** consistently, primarily one outline/linear style. Import only the icons actually used. Let icons inherit `currentColor`.

Suggested icon mappings:
- shield/security
- profile/people/driver
- car
- location
- calendar
- user/passenger
- airplane
- swap arrows
- search
- rupee/wallet
- phone
- messages/WhatsApp equivalent
- clock
- route/map

### Motion

Use **Motion** as the default React animation layer for:
- hover states
- button press feedback
- tab pill transitions
- card hover/enter
- section reveal
- small shared-layout transitions

Use **GSAP + ScrollTrigger** only for one coordinated high-value timeline, preferably the hero/booking entrance and maybe one scroll-linked reveal cluster. Do not use GSAP for every button/card.

Use **Lenis as the only smooth-scroll owner**. If GSAP ScrollTrigger is used, synchronize it with Lenis correctly. Never add another smooth-scroll library.

### Anime.js

Do not install/use Anime.js unless one isolated text/SVG effect is genuinely simpler with it. There is no default requirement for it here.

### Lottie / Rive / SVGator / Jitter

This approved design does not require a large vector runtime. Do not add Lottie and Rive just because they are available. A tiny brand flourish is allowed only if it improves the exact design without altering the composition.

SVGator/Jitter are authoring/export tools, not runtime requirements.

### 3D

Do **not** add Three.js, React Three Fiber, Drei, Babylon.js, PlayCanvas, or Spline to this website unless there is a specific visual requirement that cannot be achieved with the approved raster hero artwork. The approved design is 2D/glassmorphism and does not need a heavy 3D runtime.

The priority is visual fidelity, responsiveness, loading speed, and maintainability.

---

## 4. Global design system

Build CSS variables/tokens first.

Suggested starting palette:

```css
:root {
  --dt-navy: #063f6b;
  --dt-blue: #075b8f;
  --dt-blue-2: #0b4f7d;
  --dt-teal: #0b9e9a;
  --dt-green: #2aaa45;
  --dt-lime: #66c83d;
  --dt-mint: #dff7ef;
  --dt-ice: #eef8fb;
  --dt-white: #ffffff;
  --dt-text: #083a67;
  --dt-muted: #5e7690;
}
```

Core visual language:
- white/light-ice page background
- deep blue text
- blue → teal → green gradients
- rounded glass panels
- subtle thin white borders
- soft teal/navy shadows
- large pill CTAs
- rounded cards, usually 18–28 px radius
- generous horizontal spacing but compact vertical rhythm
- light scenic image texture inside key cards

Typography:
- Main UI/headlines: prefer `Manrope` or `Inter`, with 700–800 weights.
- Body: `Inter`/`DM Sans`.
- Decorative handwritten copy only: `Caveat` or similar handwritten font.
- Do not overuse the script font.

At desktop, the page should feel compact, premium and dense like the approved screenshot—not oversized with huge empty gaps.

---

## 5. Exact desktop composition

The approved image is 1122 × 1402. Treat it as a proportional reference. The implementation should be optimized around a 1440 px desktop viewport and scale responsively.

Use a main content width around 1360–1400 px with narrow outer gutters on desktop.

### A. Header / navigation

Visual behavior:
- white header
- approximately 72–82 px high at 1440 desktop
- logo at left
- nav centered
- phone block and gradient CTA at right
- small active green underline on Home
- no thick borders

Links:
- Home
- About
- Our Fleet
- Routes
- Reviews
- Contact

Right side:
- phone icon
- phone number + “Call Now”
- pill gradient button “Book a Ride →”

Use the transparent nav logo asset and keep its aspect ratio.

Header should become sticky after scroll, with a mild backdrop blur and a subtle shadow; it should not jump in height.

### B. Hero

Match the approved composition closely.

Desktop hero height: approximately 400–440 px.

Use `hero_scenery_car_wide.jpg` as the large scenic artwork layer. Keep the car strongly visible on the right side. Use `object-position` / background positioning so the sedan remains dominant on desktop and tablet.

Add a left-to-right overlay so the left text stays readable:
- deep navy/teal overlay on left
- fade to transparent toward right

Hero copy on left:

Small eyebrow:
`TRAVEL MORE • EXPLORE FURTHER`

Main heading:
`JOURNEYS BEYOND`
`BOUNDARIES`

Make BOUNDARIES blue-green or green-forward exactly like the reference.

Subheading:
`Comfortable Rides. Memorable Journeys.`

Paragraph:
`At DHASVIKA TRAVELS, we make every journey a pleasant experience. Safe rides, transparent pricing and reliable sedans for your every destination.`

Trust row:
- Safe & Secure
  - Your safety, our priority
- Professional Drivers
  - Polite, experienced & trusted
- Clean & Comfortable
  - Well-maintained sedans

Each trust item uses a small circular green/teal glass icon.

Do not add extra hero buttons; the dominant booking action is in the booking panel below.

### C. Booking glass panel

This is the signature UI element. Match it carefully.

The panel should overlap/attach to the lower hero edge, with a smooth blue/teal/mint glass gradient.

Desktop styling:
- radius around 24–28 px
- `backdrop-filter: blur(18px)`
- translucent white/teal gradient
- 1 px white/teal border
- strong but soft shadow
- inner spacing around 18–22 px

Top tabs:
- One Way — selected in white pill
- Round Trip
- Airport Transfer

Animate the selected pill with Motion `layoutId`.

Fields in one horizontal row:
- From
- swap control
- To
- Travel Date
- Passengers
- Search Rides button

Fields are white/very-light glass cards with Iconsax icons.

Button:
- large green → teal → deep-blue gradient
- search icon
- `Search Rides →`

Under fields show route chips:
- Coimbatore → Ooty
- Coimbatore → Chennai
- Coimbatore → Bangalore
- Coimbatore → Trichy
- Coimbatore → Madurai
- More Routes →

Clicking a route chip may prefill the route fields or scroll to the routes section.

### D. Three key metric cards

Immediately below booking, exactly three equal cards:

1. `5+ Sedans`
   `Premium. Spacious. Always Ready.`

2. `₹15 / km`
   `Transparent & Affordable`

3. `Minimum Trip`
   `130 km`
   `Plan Longer. Explore More.`

Styling:
- scenic tinted background or subtle use of hero artwork
- glass blue/mint overlay
- big circular gradient icon on left
- compact, bold hierarchy
- optional small circular chevron on far right
- no excessive height

### E. Why Choose Us + Fleet

One desktop row split approximately 48 / 52 or 45 / 55.

#### Why Choose Us card

Eyebrow:
`WHY CHOOSE US`

Heading:
`More Than Just a Ride,`
`A Better Way to Travel.`

Body:
`DHASVIKA TRAVELS is built on trust, comfort and commitment. We go the extra mile to make your journey smooth, safe and memorable.`

CTA:
`Get a Quote →`

Feature list beside/within the card:
- Transparent Pricing — No hidden charges
- Well-Maintained Sedans — Clean, comfortable & reliable
- Experienced Drivers — Polite, professional & local experts
- 24/7 Customer Support — We’re always here for you

Use compact circular Iconsax icons and clear alignment.

#### Fleet card

Eyebrow:
`OUR FLEET`

Heading:
`Premium Sedans for Every Journey`

Top right:
`View All Fleet →`

Show 3 fleet tiles using the provided PNGs:
- Toyota Etios — 4 Seater · AC · Spacious
- Honda Amaze — 4 Seater · AC · Comfortable
- Maruti Dzire — 4 Seater · AC · Fuel Efficient

The brand has 5+ sedans in total, but the preview intentionally shows three model cards like the approved design.

### F. Popular Routes

Heading line:
`POPULAR ROUTES`
`Explore Top Destinations with DHASVIKA TRAVELS`

Right:
`View All Routes →`

Desktop: five compact cards in one row, matching the reference density.

Use the provided route PNGs directly as the media artwork. Because these images already include approved route/time labels, do not overlay duplicate titles. Wrap each in a link/card with a subtle hover elevation and micro-scale only.

Order:
1. Coimbatore → Ooty
2. Coimbatore → Chennai
3. Coimbatore → Bangalore
4. Coimbatore → Trichy
5. Coimbatore → Madurai

### G. Customer Reviews + side CTA

Heading:
`CUSTOMER REVIEWS`

Small text:
`Real People. Real Journeys.`

Use three review cards:

**Arun Kumar — Coimbatore — 12 Jan 2025**
`Excellent service! The car was clean, the driver was very polite and we reached on time. Highly recommended!`

**Priya Menon — Chennai — 3 Feb 2025**
`Very transparent pricing and comfortable ride. DHASVIKA TRAVELS made our Ooty trip memorable!`

**Karthik Raj — Bangalore — 18 Feb 2025**
`Professional service, safe driving and great communication. Will definitely book again!`

Use five small orange/yellow stars, large faint quote marks, and the provided avatars.

On the right, use `cta/ready_for_next_journey.png` as the approved visual CTA card. Make the full card clickable. Do not duplicate the baked-in text over the image.

### H. Footer

White/light footer with:
- small Dhasvika logo left
- navigation links center
- handwritten line `Making Every Mile Meaningful.` with green underline feeling
- social icon row right
- copyright line below
- `Journeys Beyond Boundaries.` at far right

Keep it short like the reference. Do not create a giant multi-column footer.

---

## 6. Interaction requirements

All interaction should feel refined, not flashy.

### Motion rules

Use Motion for:
- buttons: scale 0.98 on press, 1.02 max on hover
- cards: translateY around -4 to -7 px, subtle shadow increase
- tabs: shared `layoutId` pill
- section enter: opacity 0 → 1 and y 14–22 px → 0
- image hover: scale 1.015–1.025 max

Durations:
- micro: 160–220 ms
- card: 220–320 ms
- section reveal: 450–650 ms

Use spring motion sparingly. No bouncy cartoon feel.

### GSAP

Create one main hero timeline:
1. hero background opacity/scale settles in
2. eyebrow fades
3. heading lines reveal staggered
4. trust row appears
5. booking panel rises into place
6. metric cards reveal in a short stagger

Use ScrollTrigger only for major section reveal choreography if needed. Avoid dozens of independent triggers.

### Lenis

Use one Lenis instance globally. Integrate it with GSAP ScrollTrigger if GSAP is active. Destroy cleanly on unmount/HMR.

### Reduced motion

Respect `prefers-reduced-motion`. Disable smooth scroll and heavy timeline motion when reduced motion is requested. The page must remain fully usable.

---

## 7. Functional behavior

The approved design is a marketing/booking frontend. Implement basic usable interactions.

Create a single config file, e.g.:

`src/config/site.ts`

Store:
- business name
- phone
- WhatsApp number
- price per km
- minimum trip km
- route data
- social URLs

Booking form:
- One Way / Round Trip / Airport Transfer state works
- fields are keyboard accessible
- Search Rides validates required fields
- then either opens a booking dialog/sheet or builds a WhatsApp inquiry message

Use a safe placeholder phone/WhatsApp value from the design only if no real business value exists in the project. Add a clear TODO comment in config.

Call button should use `tel:`.

WhatsApp/contact actions should be actual links, not dead buttons.

---

## 8. Responsive behavior

The desktop version is the priority because it must match the approved design exactly.

### Desktop ≥ 1200

Match the screenshot composition as closely as possible.
- five route cards in one row
- why/fleet side by side
- booking fields in one line
- three metrics in one row
- reviews + CTA in one row

### Tablet 768–1199

- hero remains image-driven
- booking panel wraps into 2 rows
- metrics stay 3 columns if possible, otherwise 2 + 1
- why/fleet stack or use 5/7 grid if comfortable
- route cards become horizontal scroll or 2/3-column grid
- preserve visual hierarchy

### Mobile < 768

- header becomes compact with sheet menu
- logo remains prominent
- hero text stacks above/over the scenic artwork
- do not hide the business facts
- booking fields stack vertically
- metric cards stack
- fleet cards horizontal scroll or single column
- routes horizontal snap carousel
- reviews stack
- footer simplified

Do not attempt to shrink the desktop page until text becomes unreadable.

---

## 9. Image handling and performance

Use Next/Image or the project’s optimized image component.

Priority/preload only:
- nav logo
- primary hero artwork

Lazy-load below-fold:
- fleet images
- route cards
- review avatars
- CTA card

Always provide dimensions/aspect ratio to prevent layout shift.

Do not recompress PNG logos destructively.

Use the JPG hero asset as-is or generate a local WebP derivative if the build pipeline supports it without changing appearance.

---

## 10. Accessibility

- semantic `header`, `nav`, `main`, `section`, `footer`
- one H1 only
- correct heading order
- keyboard-focus visible but elegant
- all form fields have labels
- sufficient contrast
- meaningful alt text
- route card link names available to screen readers even if visual text is baked into image
- buttons and tabs usable without mouse
- reduced motion supported

---

## 11. SEO / metadata without changing the design

Add metadata such as:
- title: `Dhasvika Travels | Comfortable & Reliable Cab Service`
- description mentioning outstation, local rides, 5+ sedans, transparent ₹15/km pricing, and minimum trip 130 km
- Open Graph metadata
- favicon from the provided brand mark

Add LocalBusiness/TaxiService structured data only with values that actually exist in `siteConfig`. Do not invent an address or real phone number.

---

## 12. Pixel-fidelity workflow — mandatory

Do not stop after the first implementation.

Use this loop:

1. Build the page.
2. Run it locally.
3. Capture a desktop screenshot at a viewport proportional to the reference, ideally **1440 × 1800** or exactly **1122 × 1402** if your screenshot tooling allows.
4. Compare side-by-side against:
   `00_reference/final_homepage_reference.png`
5. Correct:
   - section heights
   - horizontal alignment
   - logo scale
   - hero crop/position
   - heading size/line-height
   - booking panel overlap
   - card radius
   - card gap
   - icon scale
   - route card density
   - review/CTA proportions
   - footer height
   - blue/green gradient balance
6. Repeat until the visual hierarchy and geometry are strongly matched.

A rough resemblance is not enough. The client approved this exact concept.

---

## 13. Do not do these things

- Do not change 130 km into ₹130.
- Do not change 5+ sedans into 3 sedans as the company fact. The preview can show 3 fleet model cards, but the stated fleet count is 5+.
- Do not use a random stock color palette.
- Do not replace the provided imagery with unrelated stock images.
- Do not add a huge footer.
- Do not add a dark mode toggle to the visible UI.
- Do not add unnecessary 3D.
- Do not load Babylon.js and Three.js together.
- Do not install several icon libraries.
- Do not use several smooth-scroll libraries.
- Do not make every element autoplay or float continuously.
- Do not use GSAP for trivial button hovers.
- Do not make the page depend on motion to be understandable.
- Do not make route cards taller/larger than the approved reference.
- Do not add generic sections such as blog/news/gallery unless the approved reference contains them.
- Do not change the approved copy unless needed for accessibility or functional labels.

---

## 14. Suggested component tree

```text
app/
  page.tsx
components/dhasvika/
  Header.tsx
  Hero.tsx
  BookingPanel.tsx
  MetricStrip.tsx
  WhyChooseUs.tsx
  FleetShowcase.tsx
  PopularRoutes.tsx
  ReviewsSection.tsx
  JourneyCta.tsx
  Footer.tsx
  SectionHeading.tsx
  GlassCard.tsx
  GradientButton.tsx
config/
  site.ts
lib/
  motion.ts
  lenis.ts
```

Keep data arrays separate from JSX when possible.

---

## 15. Visual acceptance checklist

Before declaring completion, verify all of the following:

- [ ] Header visually matches the approved compact white nav.
- [ ] Dhasvika logo uses the supplied asset, not text recreation.
- [ ] Hero keeps the car on the right and heading on the left.
- [ ] Hero feels cinematic, blue/green and premium, not generic.
- [ ] Booking glass panel is the strongest UI element after the hero.
- [ ] One Way / Round Trip / Airport Transfer tabs work.
- [ ] Business metrics read exactly: 5+ Sedans / ₹15 per km / Minimum Trip 130 km.
- [ ] Why Choose Us + Fleet proportions match reference.
- [ ] Three fleet preview cards are visible with supplied car images.
- [ ] Five route cards appear in one compact row on desktop.
- [ ] Reviews are compact and use supplied avatars.
- [ ] Right-side review CTA uses the supplied CTA asset.
- [ ] Footer remains short and elegant.
- [ ] No visual section feels like it came from a different design system.
- [ ] No horizontal overflow at common viewport sizes.
- [ ] No console errors/warnings from animation lifecycle.
- [ ] Reduced-motion mode remains usable.
- [ ] Images lazy-load correctly below the fold.
- [ ] The desktop screenshot has been visually compared against the approved reference and tuned.

---

## 16. Final delivery behavior

When you finish:

1. Run build/typecheck/lint where available.
2. Fix errors and major warnings.
3. Confirm no dead image paths.
4. Confirm all supplied assets resolve locally.
5. Give a concise summary of files changed, dependencies added, and any real business data still needed from the owner.
6. Do not say “done” if the visual comparison still has obvious layout mismatches.

The objective is a **production-quality, responsive implementation of the approved Dhasvika Travels homepage with near-pixel-level desktop fidelity**, not a redesign.
