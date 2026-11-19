<p align="center">
  <img src="public/assets/dhasvika/brand/dhasvika_logo_original_transparent.png" alt="Dhasvika Travels logo" width="220">
</p>

<h1 align="center">Dhasvika Travels</h1>

<p align="center">
  <i>Journeys Beyond Boundaries</i> — a modern taxi booking website built for <b>Dhasvika Travels</b>, a sedan rental service in Coimbatore, Tamil Nadu.
</p>

<p align="center">
  <a href="https://dhasvika-travels.vercel.app"><img alt="Live demo" src="https://img.shields.io/badge/Live_Demo-dhasvika--travels.vercel.app-70a5fd?style=for-the-badge&logo=vercel&logoColor=white&labelColor=1a1b27"></a>
</p>

<p align="center">
  <img alt="Next.js 14" src="https://img.shields.io/badge/Next.js-14-70a5fd?style=for-the-badge&logo=nextdotjs&logoColor=white&labelColor=1a1b27">
  <img alt="React 18" src="https://img.shields.io/badge/React-18-bf91f3?style=for-the-badge&logo=react&logoColor=white&labelColor=1a1b27">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-70a5fd?style=for-the-badge&logo=typescript&logoColor=white&labelColor=1a1b27">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-bf91f3?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=1a1b27">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-11-70a5fd?style=for-the-badge&logo=framer&logoColor=white&labelColor=1a1b27">
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Author](#author)

---

## Overview

A single-page marketing and booking site for **Dhasvika Travels**, an outstation and local sedan taxi service based in Coimbatore. Visitors can explore the fleet and popular routes, read the pricing rules, and send a pre-filled booking enquiry to the business on WhatsApp in a couple of taps.

---

## Features

- **Cinematic hero** with an overlapping glass **booking panel** — choose One Way, Round Trip or Airport Transfer, pickup, drop, date and passengers.
- **Booking & quote modal** — pre-filled from the booking panel, a route card or any CTA, and sends a formatted enquiry to WhatsApp.
- **Transparent fare estimate** — flat ₹15/km with a 130 km minimum trip; an estimate is shown only when the visitor enters a distance.
- **Metric strip** highlighting the rate per km, minimum trip rule and fleet.
- **Why choose us + fleet showcase** — Toyota Etios, Honda Amaze and Maruti Dzire (4-seater, AC).
- **Popular routes** from Coimbatore to Ooty, Chennai, Bangalore, Trichy and Madurai with duration and distance; selecting a route opens a pre-filled enquiry.
- **Reviews and journey CTA** section, plus a full footer with quick links.
- **Smooth scrolling** with Lenis and animated navigation with Framer Motion.
- **Responsive layout** with a mobile navigation menu.

---

## Tech Stack

| Area | Tools |
| --- | --- |
| **Framework** | Next.js 14 (App Router), React 18 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3, PostCSS, `tailwind-merge`, `clsx`, `class-variance-authority` |
| **Motion** | Framer Motion, Lenis smooth scroll |
| **Icons** | `iconsax-react` |
| **Fonts** | Plus Jakarta Sans, Inter, Caveat via `next/font` |
| **Hosting** | Vercel |

---

## Project Structure

```text
dhasvika-travels/
├── public/assets/dhasvika/     # Brand, hero, fleet, route, review and CTA images
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Fonts, metadata, viewport
│   │   ├── page.tsx            # Home page and booking-modal state
│   │   └── globals.css
│   ├── components/dhasvika/    # Header, Hero, BookingPanel, BookingModal, MetricStrip,
│   │                           # WhyFleetSection, PopularRoutes, ReviewsCtaSection, Footer, SmoothScroll
│   ├── config/site.ts          # Business details, routes, fleet, reviews, pricing rules
│   └── lib/utils.ts            # Class-name helper
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev

# Production build and start
npm run build
npm run start

# Lint
npm run lint
```

No environment variables are required.

---

## Configuration

All business content lives in [`src/config/site.ts`](src/config/site.ts): brand name and tagline, contact details, navigation links, routes, fleet, reviews, the per-km rate (`ratePerKm`) and the minimum trip distance (`minimumTripKm`). Update this file to change what the site shows.

> **Note:** the contact phone/WhatsApp number in `site.ts` is marked as placeholder data, and `BookingModal.tsx` currently uses its own hard-coded WhatsApp number. Both need the business's real number before launch.

---

## Author

Built by **Aadithya G** — [@aadithya5675-collab](https://github.com/aadithya5675-collab) — for Dhasvika Travels, Coimbatore.
