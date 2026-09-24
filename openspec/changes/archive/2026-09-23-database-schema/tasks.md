# Tasks: Supabase Portfolio Database Schema

## 1. SDD planning artifacts

- [x] 1.1 Create proposal for Supabase-backed portfolio data.
- [x] 1.2 Create delta spec for portfolio data storage.
- [x] 1.3 Create technical design for schema, RLS, indexes, and migration strategy.

## 2. Local migration artifacts

- [x] 2.1 Create Supabase migration SQL for tables, enum types, indexes, triggers, and RLS policies.
- [x] 2.2 Add seed data matching current `src/lib/projects.ts` and `src/lib/site.ts` content.
- [x] 2.3 Check SQL for idempotent-safe object creation where practical.

## 3. Remote Supabase application

- [x] 3.1 Stop for explicit Human Gate before using the provided remote connection string.
- [x] 3.2 Apply migration to Supabase only after confirmation.
- [x] 3.3 Verify schema exists and seeded rows are present without printing secrets.

## 4. Follow-up application integration

- [x] 4.1 Add typed Supabase REST data access layer without new dependencies.
- [x] 4.2 Replace hardcoded project reads with database reads and safe fallback data.
- [x] 4.3 Run available checks (`npm run lint`, `npm run build`).

## 5. Test personal project entry

- [x] 5.1 Receive Human Gate approval for remote Supabase test insert.
- [x] 5.2 Add `Orca-Gentle-AI Control Plane` as a personal project in Supabase.
- [x] 5.3 Add local fallback data and detail page for the new personal project.

## Review Workload Forecast

- Estimated changed lines: under 400 for schema-only migration; may exceed 400 if full app integration is included.
- 400-line budget risk: Medium.
- Chained PRs recommended: No for schema-only; ask again before full app integration if scope expands.
- Decision needed before apply: Yes — remote database Human Gate required.
