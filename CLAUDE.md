# AIU-WORLD — Claude Code Instructions

## Project Overview
Campus portal for Albukhary International University. Next.js 16 (App Router) + React 19 + Tailwind CSS 4 + Supabase.

## Commands
- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint
- `npx tsc --noEmit` — type check without emitting

## Architecture
- `src/app/` — App Router pages (home, countries, events, sports, admin)
- `src/components/` — shared UI components (Navbar, Hero, Stats, etc.)
- `src/lib/supabase.ts` — Supabase client singleton
- `public/` — static assets (logos, campus images)

## Next.js 16 Conventions (IMPORTANT)
- This is Next.js 16 — APIs and conventions may differ from older versions. Read `node_modules/next/dist/docs/` before writing new code if unsure.
- Server Components are the default. Only add `'use client'` when the component needs interactivity (useState, onClick, etc.).
- Do not use Pages Router patterns (`getServerSideProps`, `getStaticProps`).
- API routes go in `app/api/<route>/route.ts`.

## Styling
- Tailwind CSS 4 utility classes only. No inline styles, no CSS Modules.
- Extract repeated Tailwind patterns into components, not `@apply`.

## Supabase
- Import the client from `@/lib/supabase` — never instantiate a new client elsewhere.
- Environment variables live in `.env.local`: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Never commit `.env.local`.

## Code Style
- TypeScript strict mode. No `any`.
- Use named exports for components (except page.tsx which uses default).
- Props interfaces named `<Component>Props`.
- One component per file, filename matches component name.

## Do NOT
- Do not add `'use client'` to components that don't need browser APIs.
- Do not use the Pages Router.
- Do not commit `node_modules/`, `.next/`, or `.env.local`.
- Do not use `any` — define proper types.

## Git
- Conventional commits: `feat:`, `fix:`, `chore:`, `refactor:`.
- Always run `npm run lint` and `npx tsc --noEmit` before committing.
