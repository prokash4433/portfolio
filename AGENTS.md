# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- Next.js `16.4.3` (App Router), React `19.3.0`, TypeScript, Tailwind CSS v4.
- Non-default flags in `next.config.ts`: `cacheComponents: true`, `partialPrefetching: true`, `reactCompiler: true`, plus a turbopack rule that loads `@tailwindcss/turbopack` for `*.css`. This is a canary-style Next build — check the bundled docs for deprecations before assuming stock Next 16 behavior.
- Tailwind v4 is configured **entirely in CSS** (`src/app/globals.css`): `@import "tailwindcss"` + `tw-animate-css` + `shadcn/tailwind.css`. There is **no** `tailwind.config.*`. Add custom theme via `@theme`, not JS config.
- shadcn/ui with style `base-nova` (uses `@base-ui/react`, not Radix) — see `components.json`. Icons: both `lucide-react` and `react-icons` are used across sections.
- Path alias `@/*` → `./src/*` (tsconfig + shadcn aliases).

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint` (eslint only; **no** separate typecheck script — use `npx tsc --noEmit`)
- No test suite, formatter, or pre-commit hooks are configured.

## Known noise (not caused by your changes — don't "fix" unless asked)

- `npm run lint` fails on 3 pre-existing errors in committed files: `react-hooks/set-state-in-effect` in `src/hooks/use-mobile.ts:14` (shadcn-generated hook) and `src/app/ThemeProvider.tsx:29`; `react/no-unescaped-entities` in `src/app/portfolio/Banner.tsx:40`. Just ensure you add no new lint errors.
- `npx tsc --noEmit` can fail with errors under `.next/types/**` (e.g. validator.ts referencing a deleted route). Those are stale generated build artifacts, not source errors — regenerate via `npm run build`, don't try to edit them.
- `next build` warns that it ignores `package-lock.json` in the parent `C:\Projects` dir (outside the git repo). Set `turbopack.root` only if asked.

## Fonts & theme

- Fonts load in `src/app/layout.tsx` via `next/font/google`: **Josefin Sans** (default body) and **Lora** (exposed as CSS var `--font-display`, use `font-[family-name:var(--font-display)]`).
- Light/dark theming: `ThemeProvider` (client component, `src/app/ThemeProvider.tsx`) sets `data-theme="dark"|"light"` on `<html>`, persisted in `localStorage`, default dark. Colors are CSS custom properties in `globals.css` keyed off `:root[data-theme=...]` (`--accent-color`, `--section-bg`, `--text-color`, ...). Prefer `var(--...)` tokens; note some components also hard-code accent hexes/gradients inline.

## Structure

- All routes live in `src/app`. Root `/` (`src/app/page.tsx`) **is the portfolio page** — it composes the sections `Banner`, `AboutMe`, `Skills`, `Education`, `SelfEmployed`, `Projects`. There is **no** `/portfolio` route; `src/app/portfolio/` is only a folder of section components.
- `layout.tsx` wraps every page in `ThemeProvider` and renders `Navbar` globally — don't re-add either inside pages.
- Sections are RSC (server components). Add `"use client"` only when a section actually needs hooks/event state.
- Projects data (copy, links, features) lives in `src/lib/projects.ts` — `Projects.tsx` (card grid) and the `/projects/[slug]` details route both consume it; add new projects there, not in the components.
- Details route: `src/app/projects/[slug]/page.tsx` renders `portfolio/ProjectsDetails.tsx`; it `generateStaticParams`es from the data file and `notFound()`s on unknown slugs.
- `public/images/projects/*.svg` are hand-drawn SVG placeholders (fruit basket, bike, cat) — replace with real screenshots when assets are provided. The Banner portrait is likewise an inline placeholder pending `public/images/prokash.jpg`.
