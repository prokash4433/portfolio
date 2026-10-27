# AGENTS.md

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

- Next.js `16.4.3` (App Router), React `19.3.0`, TypeScript, Tailwind CSS v4.
- Non-default flags in `next.config.ts`: `cacheComponents: true`, `partialPrefetching: true`, `reactCompiler: true`. This is a canary-style Next build — check the bundled docs for deprecations before assuming stock Next 16 behavior.
- Tailwind v4 is configured **entirely in CSS** (`src/app/globals.css`): `@import "tailwindcss"` + `tw-animate-css` + `shadcn/tailwind.css`. There is **no** `tailwind.config.*`. Add custom theme via `@theme`, not JS config.
- shadcn/ui with style `base-nova` (uses `@base-ui/react`, not Radix) — see `components.json`. Icons via `lucide-react`.
- Path alias `@/*` → `./src/*` (tsconfig + shadcn aliases).

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint` (eslint only; **no** separate typecheck script — use `npx tsc --noEmit`)
- No test suite, formatter, or pre-commit hooks are configured.

Known noise (not caused by your changes):
- `npm run lint` fails on a pre-existing `react-hooks/set-state-in-effect` error in `src/hooks/use-mobile.ts` (shadcn-generated hook). Don't "fix" it unless asked; just ensure you add no new lint errors.
- `next build` warns that it ignores `package-lock.json` in the parent `C:\Projects` dir (outside the git repo). Set `turbopack.root` only if asked.

## Fonts & theme

- Fonts load in `src/app/layout.tsx` via `next/font/google`: **Josefin Sans** (default body) and **Lora** (exposed as CSS var `--font-display`, use `font-[family-name:var(--font-display)]`).
- Dark portfolio theme. Brand purple is `#6c5ce7` / `#7c6cf6` (hard-coded in components, not theme tokens).

## Structure

- All routes live in `src/app`. Root `/` (`src/app/page.tsx`) is an empty placeholder.
- Portfolio page at `src/app/portfolio/page.tsx` (route `/portfolio`, static). Sections are colocated components: `Navbar.tsx`, `Banner.tsx` — imported by `page.tsx` only.
- Sections are RSC (server components). Add `"use client"` only when a section actually needs hooks/event state.
- `public/` holds only default create-next-app SVGs. The Banner portrait is an inline SVG placeholder — swap for a real image (e.g. `public/images/...` + `next/image`) when an asset is provided.
