# AGENTS.md

## Cursor Cloud specific instructions

This repo (`efero-web`) is a single Next.js 15 (App Router, React 19, TypeScript, Tailwind) marketing website for "Efero", plus a small public quote viewer and a contact-form API route. It is deployed to Cloudflare Workers via OpenNext, but plain Next.js is all you need for development. It is not a monorepo. Requires Node 22 (matches CI).

### Running / building / checking
- Standard scripts live in `package.json`. Dev server: `npm run dev` (Next.js on `http://localhost:3000`).
- There is no `lint` script and no ESLint config in this repo. Type-check with `npx tsc --noEmit`. `npm run build` (`next build`) also runs type validation.
- `npm run preview` / `npm run deploy` use OpenNext + Wrangler to emulate/ship the Cloudflare Workers runtime. These are only needed for prod parity or deploying, and require `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID`. Not needed for normal development.

### Gotchas
- Do NOT run `next build` (`npm run build`) while `npm run dev` is running. Both write to `.next`, and building concurrently corrupts the dev server's cache so it starts returning HTTP 500. If this happens, stop dev, `rm -rf .next`, and restart `npm run dev`.
- The app is designed to run and build with NO external services. `lib/supabase.ts` falls back to placeholder Supabase credentials, so pages render/build without secrets.

### Optional external services (app runs fully without them)
- `RESEND_API_KEY` — powers only the contact form (`app/api/contact/route.ts`). Without it, submitting the contact form returns a handled 500 ("E-postkonfigurasjon mangler") and the UI shows an error message. This is expected in dev.
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — back only the public quote viewer (`/tilbud/[id]`), which calls Supabase RPCs (`get_public_quote`, `respond_to_quote`). Without a real Supabase project these routes show "not found"; the rest of the site is unaffected.
