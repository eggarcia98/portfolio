# Exploration: Supabase Portfolio Database Schema

## Context

The portfolio currently stores project list data in `src/lib/projects.ts` and site metadata in `src/lib/site.ts`. The maintainer confirmed Supabase will be the persistence layer.

## Findings

- The application is a Next.js 16 / React 19 / TypeScript project.
- No database or ORM dependency is currently installed.
- No test runner is configured; checks available today are lint/build/type validation through existing scripts and framework tooling.
- Existing portfolio data includes professional projects, personal projects, display tags, project URLs, summaries, and optional impact statements.
- Supabase/PostgreSQL is suitable because it supports public read content, RLS, future Auth/admin workflows, and normalized relational project metadata.

## Recommendation

Use direct Supabase PostgreSQL SQL migrations for the first schema implementation. Keep application integration as a follow-up step so the database mutation can be reviewed and applied independently.

## Key Design Implications

- Public portfolio reads should be allowed for non-deleted content.
- Writes should remain service-role/admin only until an authenticated admin UI exists.
- Use normalized technologies plus a JSONB `tags` copy for simple rendering compatibility.
- Store optional long-form project detail content separately from lightweight project list rows.
