# Design: Supabase Portfolio Database Schema

## Summary

This design stores portfolio data in Supabase PostgreSQL with a schema that is stable enough for current static content and extensible enough for future admin editing. It avoids application-specific secrets in artifacts and treats remote database mutation as a Human Gate.

## Architecture

```text
Next.js portfolio
  ├─ server components / data layer (future implementation)
  │    └─ Supabase client using anon key for public reads
  └─ admin/server maintenance scripts (future implementation)
       └─ Supabase service role or direct SQL for trusted writes

Supabase PostgreSQL
  ├─ public.site_config
  ├─ public.projects
  ├─ public.project_details
  ├─ public.technologies
  └─ public.project_technologies
```

## Data Model

### `site_config`

Stores the active site metadata currently represented by `src/lib/site.ts`.

Important constraints:
- UUID primary key.
- One active row enforced by a partial unique index.
- Public reads allowed only for rows where `deleted_at IS NULL`.

### `projects`

Stores professional and personal project summaries currently represented by `src/lib/projects.ts`.

Important fields:
- `type`: `professional` or `personal`.
- `slug`: stable human-readable identifier.
- `href`: current URL path; unique for routing compatibility.
- `summary`, `impact`, `display_order`, `is_featured`.
- `tags`: JSONB copy of display tags for simple reads and compatibility.

### `project_details`

Stores optional long-form content per project page. This keeps summary lists lightweight while allowing future database-backed case studies.

Important fields:
- `project_id`: one-to-one with `projects`.
- `subtitle`, `challenge`, `solution`, `results`, `content` JSONB.

### `technologies`

Normalized technology catalog for filtering and future analytics.

Important fields:
- Unique `name`.
- `category`: language, framework, database, cloud, tool, integration, infrastructure, business, or other.

### `project_technologies`

Many-to-many relationship between projects and technologies.

## Security and RLS

All public tables enable RLS.

Read policies:
- Anonymous/public reads are allowed for active rows only.
- Join table reads require the referenced project to be active.

Write policies:
- Service-role writes are allowed.
- Anonymous writes are not allowed.

Rationale: this portfolio is public read content, but edits should only happen through trusted maintenance paths until a proper admin UI/auth model exists.

## Indexing Strategy

- `projects(type, display_order)` for listing pages.
- `projects(href)` and `projects(slug)` for detail routing.
- `projects(tags)` GIN index for future tag filtering.
- `technologies(name)` unique index for lookup/upsert.
- `project_technologies(technology_id)` for reverse lookups.

## Migration Strategy

1. Create enum types.
2. Create tables and constraints.
3. Create indexes.
4. Enable RLS and policies.
5. Create `updated_at` trigger function and triggers.
6. Seed current portfolio data.

## Operations Boundary

The maintainer provided a remote Supabase connection string, but it is a secret and must not be repeated or persisted. Applying the migration to Supabase is a protected database mutation and requires explicit confirmation immediately before execution.

## Future Extensions

- Admin UI using Supabase Auth.
- Storage bucket for project images.
- Full-text search with `pg_trgm` or `tsvector`.
- Draft/published workflow.
- Audit log table for content changes.
