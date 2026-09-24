# Apply Progress: Supabase Portfolio Database Schema

## Status

Complete for the current database-schema apply scope — database schema migration is applied to remote Supabase and project listings now read through Supabase REST with safe local fallback data.

## Completed

- Created OpenSpec change structure for `database-schema`.
- Created proposal, spec, design, and tasks artifacts.
- Created local Supabase migration at `supabase/migrations/20260923120000_portfolio_data_schema.sql`.
- Included schema, indexes, triggers, RLS policies, and seed data for current portfolio content.
- Verified no supplied database secret was written into repository files.
- Verified native SDD status now sees proposal/spec/design/tasks and reports apply as ready.
- Received explicit Human Gate confirmation to apply the remote Supabase migration.
- Applied migration to remote Supabase PostgreSQL.
- Verified remote row counts: 1 site config, 6 projects, 31 technologies, 38 project/technology links.
- Added typed Supabase REST project data access in `src/lib/projects.ts` using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Preserved hardcoded project data as fallback when Supabase environment variables are missing or the REST request fails.
- Updated project listing pages to await async project getters while preserving the existing `Project` shape used by `ProjectCard`.
- Added the `Orca-Gentle-AI Control Plane` test personal project to remote Supabase after explicit Human Gate confirmation.
- Added local fallback data and a matching detail route at `/projects/personal/orca-gentle-ai-control-plane`.
- Verified the remote test insert: personal project count is 3, the inserted project count is 1, and it has 6 technology links.

## Pending

- No pending items for this apply scope.

## Work Unit Evidence

| Evidence | Result |
|---|---|
| Dependency installation | `npm install --no-package-lock` installed local dependencies without creating a package-lock. npm reported 3 audit vulnerabilities (2 high, 1 critical). |
| Focused test command and exact result | `npm run lint` ran after dependency installation and failed with 4 errors / 11 warnings in pre-existing unrelated files (`src/app/about/page.tsx`, `src/components/scroll-reveal.tsx`, `src/components/theme-toggle.tsx`, plus warnings). No lint errors were reported in the modified Supabase integration files. |
| Runtime harness command/scenario and exact result | `npm run build` passed after dependency installation. Next.js 16.1.2 compiled successfully, ran TypeScript, collected page data, and generated 17 static pages. |
| Rollback boundary | Revert `src/lib/projects.ts`, `src/app/projects/page.tsx`, `src/app/projects/professional/page.tsx`, `src/app/projects/personal/page.tsx`, and this OpenSpec progress/task update to restore hardcoded-array reads. |

## Verification

- `gentle-ai sdd-status database-schema --cwd /home/orca/worktrees/FEAT-001-implementation --json`: proposal/spec/design/tasks detected; apply ready.
- Secret scan for the supplied connection string fragments in repository files: no files found.
- `psql --version`: unavailable locally, so SQL parser validation was not run in this environment.
- Remote migration execution: applied successfully through a temporary PostgreSQL client without printing credentials.
- `npm run lint`: failed with pre-existing unrelated lint errors outside the modified integration files.
- `npm run build`: passed after `npm install --no-package-lock`.
- Remote test insert verification: personal project count is 3, the new project count is 1, and it has 6 technology links.
- `npm run build`: completed successfully and generated 18 static pages, including `/projects/personal/orca-gentle-ai-control-plane`. Next.js emitted lockfile patch warnings because the local `pnpm` corepack installation is broken.
- `npm run lint`: still fails on pre-existing unrelated lint errors outside this new project page and fallback data change.
- Secret scan after the test insert and local route update: no supplied connection string fragments found in repository files.
