# Sector Vale Racing

Sector Vale Racing GT3 / GT4 iRacing league website. Recovered from the existing Vercel deployment and rebranded in October 2026.

## Development

Install the locked dependencies with `npm ci`, then run `npm run dev`. Build with `npm run build`.

The existing Vercel project supplies `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` and `VITE_SUPABASE_EDGE_ANON_KEY`. Keep environment files out of version control. Never add a Supabase service-role key to this frontend.

## Registration

Pre-registration creates a driver profile and records category preference for league review. It does not reserve a grid place or confirm race entry. Driver approval, championship membership and session attendance remain separate existing workflows.

The redesign makes no database migrations or changes to authentication, roles, registration requests, race management or policy storage. The public brand name is Sector Vale Racing; historical league settings and user data remain intact.

Original racing-image attribution is retained on the Image credits page. SVR brand assets are in public/branding. Original deployment source did not include the test suite referenced by its package script.
