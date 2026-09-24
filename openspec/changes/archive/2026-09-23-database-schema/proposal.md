# Proposal: Supabase Database Schema for Portfolio Project Data

## Intent

Move portfolio project data from hardcoded TypeScript arrays into a professional Supabase PostgreSQL schema. The change keeps the current public portfolio behavior while creating a durable database foundation for future content management.

## Scope

### In Scope
- Create a Supabase/PostgreSQL schema for project data, technologies, project details, and site configuration.
- Seed the schema with the current content from `src/lib/projects.ts` and `src/lib/site.ts`.
- Add migration SQL artifacts that can be applied to Supabase after the database Human Gate is approved.
- Preserve public read access through Row Level Security policies.

### Out of Scope
- Admin UI for editing project content.
- User-facing authentication flows.
- Media/object storage migration.
- Replacing every portfolio page with dynamic database content in this first database-schema step.

## Capabilities

### New Capabilities
- `portfolio-data`: Store and read portfolio project data and site metadata from Supabase PostgreSQL.

### Modified Capabilities
- None.

## Approach

Use Supabase's PostgreSQL database directly with SQL migrations. The schema follows Supabase best practices: UUID primary keys, explicit enum types, timestamps, updated-at triggers, normalized many-to-many technology relationships, soft-delete columns, and RLS policies that allow public reads while keeping writes restricted to service-role/admin execution.

The migration is prepared locally first. Applying it to the remote Supabase database requires explicit Human Gate confirmation because it mutates an external database.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `supabase/migrations/` | New | SQL migration for Supabase PostgreSQL schema and seed data |
| `openspec/changes/database-schema/` | New | SDD artifacts for proposal, spec, design, and tasks |
| `.env` | Existing | Contains Supabase credentials; must not be read, printed, or committed |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Remote database mutation affects existing Supabase project | Medium | Stop for explicit Human Gate before applying SQL remotely |
| RLS policy accidentally blocks public portfolio reads | Medium | Include explicit `FOR SELECT USING` policies for non-deleted rows |
| Seed data duplicates on re-run | Medium | Use stable slugs/hrefs with upserts where practical |
| Credential leakage | High | Do not print, persist, commit, or repeat connection strings |

## Rollback Plan

If the remote migration must be rolled back, run a reverse SQL migration that drops the new policies, triggers, indexes, tables, and enum types created for this change. Until application code switches to database reads, the live site can continue using the current hardcoded TypeScript data.

## Dependencies

- Supabase PostgreSQL project credentials supplied by the maintainer.
- Supabase SQL execution route selected by maintainer: CLI, dashboard SQL editor, or guarded direct connection.

## Success Criteria

- [ ] Migration SQL creates schema, indexes, triggers, and RLS policies successfully.
- [ ] Seed data represents current professional and personal projects.
- [ ] Public SELECT policies allow portfolio reads for non-deleted content.
- [ ] Write access remains restricted to service role or explicit admin policy.
- [ ] No credentials are committed or printed in artifacts.
