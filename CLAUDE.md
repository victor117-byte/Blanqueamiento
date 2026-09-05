# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Landing page for a dental clinic ("Dental Center CDMX", blanqueamiento/odontología estética) built with Vite + React + TypeScript + shadcn/ui + Tailwind. It's a marketing site tuned for Google Ads campaigns (SEO, GTM tracking, legal pages) rather than an app with a backend — there is no API layer or database in this repo.

## Commands

- `npm run dev` — start the Vite dev server (port 8080).
- `npm run build` / `npm run build:dev` — production / development-mode build.
- `npm run preview` — serve the built output.
- `npm run lint` — ESLint over the whole repo.
- `npm run test` — run the Vitest suite once; `npm run test:watch` for watch mode.
- Run a single test file: `npx vitest run src/path/to/file.test.ts`.
- E2E: Playwright is configured (`playwright.config.ts`) against `./e2e`, auto-starting `npm run preview` on port 4173. The `e2e/` directory does not exist yet — create it before writing Playwright specs, importing `test`/`expect` from `playwright-fixture.ts`.

Both `package-lock.json` and `bun.lock`/`bun.lockb` are checked in; confirm with whoever touched dependencies last which one is authoritative before running an install that could rewrite the other.

## Architecture

- `src/App.tsx` defines all routing. Only `/` (`Index`) is eagerly loaded; `/privacidad`, `/aviso-legal`, and the catch-all `NotFound` are lazy-loaded specifically to keep the initial bundle small for Ads landing-page quality score (LCP). New routes should go above the catch-all `*` route and follow the same lazy-loading pattern unless they're on the critical landing path.
- `src/pages/Index.tsx` composes the entire home page as a stack of section components from `src/components/dental/` (Navbar, HeroSection, AboutSection, ServicesSection, TestimonialsSection, GoogleReviewsSection, GallerySection, FAQSection, ContactSection, Footer, WhatsAppButton). Section order in that file is the page's visual order.
- `src/components/ui/` is the shadcn/ui component set (managed via `components.json`, aliases `@/components`, `@/lib`, `@/hooks`, `@/lib/utils`) — treat these as generated primitives, put dental-site-specific UI in `src/components/dental/` instead.
- `src/lib/booking.ts` exports the single `BOOKING_URL` constant (currently a Notion Calendar link) that every "Agendar cita" button in the site reads from — change it there rather than hardcoding URLs in components.
- `src/lib/analytics.ts` wraps `window.dataLayer` for GTM event tracking (`trackEvent(event, params)`); GTM itself is wired in `index.html`.
- Path alias `@/*` → `src/*` (see `vite.config.ts`, `vitest.config.ts`, `tsconfig.json`).

## Git history note

An embedded Cal.com booking system (with its own modal, `use-cal-booking` hook, and a $500/$150 MXN deposit flow) was built on `feature/sistema-citas-cal`, merged to `main`, and then reverted back to the Notion Calendar booking link. If you see references to Cal.com, deposits, or booking modals in old commits/PRs, that functionality is intentionally not present in the current codebase.
