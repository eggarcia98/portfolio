-- FEAT-001: Portfolio data schema for Supabase PostgreSQL
-- This migration is designed for Supabase and enables public read access
-- while preserving write access for trusted service-role/database-owner paths.

BEGIN;

-- Extensions available in Supabase projects.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Enum types. DO blocks keep this migration safer if replayed in a partially
-- prepared database during development.
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'project_type') THEN
    CREATE TYPE public.project_type AS ENUM ('professional', 'personal');
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'technology_category') THEN
    CREATE TYPE public.technology_category AS ENUM (
      'language',
      'framework',
      'database',
      'cloud',
      'tool',
      'integration',
      'infrastructure',
      'business',
      'other'
    );
  END IF;
END $$;

-- Shared updated_at trigger function.
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TABLE IF NOT EXISTS public.site_config (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  title text NOT NULL,
  description text NOT NULL,
  url text NOT NULL,
  locale text NOT NULL DEFAULT 'en_AU',
  twitter_handle text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  CONSTRAINT site_config_url_not_blank CHECK (length(trim(url)) > 0),
  CONSTRAINT site_config_name_not_blank CHECK (length(trim(name)) > 0)
);

CREATE UNIQUE INDEX IF NOT EXISTS site_config_single_active_row
  ON public.site_config ((true))
  WHERE deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS public.projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  type public.project_type NOT NULL,
  slug text NOT NULL,
  title text NOT NULL,
  summary text NOT NULL,
  impact text,
  href text NOT NULL,
  tags jsonb NOT NULL DEFAULT '[]'::jsonb,
  display_order integer NOT NULL DEFAULT 0,
  is_featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  deleted_at timestamptz,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  CONSTRAINT projects_slug_not_blank CHECK (length(trim(slug)) > 0),
  CONSTRAINT projects_title_not_blank CHECK (length(trim(title)) > 0),
  CONSTRAINT projects_summary_not_blank CHECK (length(trim(summary)) > 0),
  CONSTRAINT projects_href_starts_with_slash CHECK (href LIKE '/%'),
  CONSTRAINT projects_tags_is_array CHECK (jsonb_typeof(tags) = 'array')
);

CREATE UNIQUE INDEX IF NOT EXISTS projects_slug_unique_active
  ON public.projects (slug)
  WHERE deleted_at IS NULL;

CREATE UNIQUE INDEX IF NOT EXISTS projects_href_unique_active
  ON public.projects (href)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS projects_type_order_idx
  ON public.projects (type, display_order, created_at DESC)
  WHERE deleted_at IS NULL;

CREATE INDEX IF NOT EXISTS projects_featured_order_idx
  ON public.projects (display_order, created_at DESC)
  WHERE deleted_at IS NULL AND is_featured = true;

CREATE INDEX IF NOT EXISTS projects_tags_gin_idx
  ON public.projects USING gin (tags);

CREATE TABLE IF NOT EXISTS public.project_details (
  project_id uuid PRIMARY KEY REFERENCES public.projects(id) ON DELETE CASCADE,
  subtitle text,
  challenge text,
  solution text,
  results text,
  content jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT project_details_content_is_object CHECK (jsonb_typeof(content) = 'object')
);

CREATE TABLE IF NOT EXISTS public.technologies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category public.technology_category NOT NULL DEFAULT 'other',
  description text,
  icon_name text,
  color_hex text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT technologies_name_not_blank CHECK (length(trim(name)) > 0),
  CONSTRAINT technologies_color_hex_format CHECK (color_hex IS NULL OR color_hex ~ '^#[0-9A-Fa-f]{6}$')
);

CREATE UNIQUE INDEX IF NOT EXISTS technologies_name_unique
  ON public.technologies (lower(name));

CREATE TABLE IF NOT EXISTS public.project_technologies (
  project_id uuid NOT NULL REFERENCES public.projects(id) ON DELETE CASCADE,
  technology_id uuid NOT NULL REFERENCES public.technologies(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (project_id, technology_id)
);

CREATE INDEX IF NOT EXISTS project_technologies_technology_idx
  ON public.project_technologies (technology_id);

-- Triggers.
DROP TRIGGER IF EXISTS site_config_set_updated_at ON public.site_config;
CREATE TRIGGER site_config_set_updated_at
  BEFORE UPDATE ON public.site_config
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS projects_set_updated_at ON public.projects;
CREATE TRIGGER projects_set_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS project_details_set_updated_at ON public.project_details;
CREATE TRIGGER project_details_set_updated_at
  BEFORE UPDATE ON public.project_details
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS technologies_set_updated_at ON public.technologies;
CREATE TRIGGER technologies_set_updated_at
  BEFORE UPDATE ON public.technologies
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Row Level Security.
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_technologies ENABLE ROW LEVEL SECURITY;

-- Public read policies for active portfolio content.
DROP POLICY IF EXISTS "Public read active site config" ON public.site_config;
CREATE POLICY "Public read active site config"
  ON public.site_config
  FOR SELECT
  TO anon, authenticated
  USING (deleted_at IS NULL);

DROP POLICY IF EXISTS "Public read active projects" ON public.projects;
CREATE POLICY "Public read active projects"
  ON public.projects
  FOR SELECT
  TO anon, authenticated
  USING (deleted_at IS NULL);

DROP POLICY IF EXISTS "Public read active project details" ON public.project_details;
CREATE POLICY "Public read active project details"
  ON public.project_details
  FOR SELECT
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = project_details.project_id
        AND p.deleted_at IS NULL
    )
  );

DROP POLICY IF EXISTS "Public read technologies" ON public.technologies;
CREATE POLICY "Public read technologies"
  ON public.technologies
  FOR SELECT
  TO anon, authenticated
  USING (true);

DROP POLICY IF EXISTS "Public read active project technologies" ON public.project_technologies;
CREATE POLICY "Public read active project technologies"
  ON public.project_technologies
  FOR SELECT
  TO anon, authenticated
  USING (
    EXISTS (
      SELECT 1
      FROM public.projects p
      WHERE p.id = project_technologies.project_id
        AND p.deleted_at IS NULL
    )
  );

-- Trusted write policies. In Supabase, service_role bypasses RLS, but these
-- policies document and support trusted API write paths if needed.
DROP POLICY IF EXISTS "Service role write site config" ON public.site_config;
CREATE POLICY "Service role write site config"
  ON public.site_config
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Service role write projects" ON public.projects;
CREATE POLICY "Service role write projects"
  ON public.projects
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Service role write project details" ON public.project_details;
CREATE POLICY "Service role write project details"
  ON public.project_details
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Service role write technologies" ON public.technologies;
CREATE POLICY "Service role write technologies"
  ON public.technologies
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "Service role write project technologies" ON public.project_technologies;
CREATE POLICY "Service role write project technologies"
  ON public.project_technologies
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Seed site configuration.
INSERT INTO public.site_config (name, title, description, url, locale, twitter_handle)
VALUES (
  'Erick Garcia',
  'Erick Garcia | Software Engineer',
  'Software Engineer with Cloud & Networking foundations. I build reliable web systems and deploy them with modern cloud practices.',
  'https://portfolio.byerick.dev',
  'en_AU',
  NULL
)
ON CONFLICT ((true)) WHERE deleted_at IS NULL
DO UPDATE SET
  name = EXCLUDED.name,
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  url = EXCLUDED.url,
  locale = EXCLUDED.locale,
  twitter_handle = EXCLUDED.twitter_handle,
  updated_at = now();

-- Seed projects from src/lib/projects.ts.
WITH seed_projects(type, slug, title, summary, impact, href, tags, display_order, is_featured) AS (
  VALUES
    ('professional'::public.project_type, 'hl7-proxy', 'HL7 Data Proxy & Cloud Run Integration', 'Stateless TypeScript service that transforms HL7 analyzer output into JSON for ingestion, deployed as a Docker container on Cloud Run.', '~50% faster onboarding', '/projects/hl7-proxy', '["TypeScript","Fastify","Docker","GCP Cloud Run","PostgreSQL","HL7"]'::jsonb, 10, true),
    ('professional'::public.project_type, 'cloudflare-tunnel', 'Publishing a Next.js App Behind CGNAT (Cloudflare Tunnel)', 'Exposed a local Next.js app securely without port forwarding, using Cloudflare Tunnel + DNS for public HTTPS access.', 'Public HTTPS without public IP', '/projects/cloudflare-tunnel', '["Cloudflare","Tunnels","Next.js","DNS","Networking","Security"]'::jsonb, 20, true),
    ('professional'::public.project_type, 'db-migration', 'Live Database Migration: MySQL → PostgreSQL', 'Automated a live production migration with validation gates and rollback planning to minimize risk and avoid downtime.', 'Live cutover with integrity checks', '/projects/db-migration', '["Python","SQL","Bash","MySQL","PostgreSQL","Reliability"]'::jsonb, 30, true),
    ('professional'::public.project_type, 'odoo-middleware', 'Odoo ERP Middleware — Scheduled Synchronization', 'Built scheduled sync jobs that improved ERP data consistency and reduced manual accounting work via defensive validation and idempotent operations.', '~40% fewer sync errors', '/projects/odoo-middleware', '["TypeScript","REST APIs","Linux","Cron","Automation","Integration"]'::jsonb, 40, false),
    ('personal'::public.project_type, 'home-server', 'Home Server Infrastructure', 'Self-hosted unified platform running Portainer for container orchestration, Nextcloud for file storage/sync, Collabora for real-time document collaboration, and custom authentication service with Supabase. All services exposed securely via Cloudflare Tunnel.', NULL, '/projects/personal/home-server', '["Docker","Portainer","Nextcloud","Collabora","Supabase","Cloudflare Tunnel","Authentication","Self-hosted"]'::jsonb, 10, true),
    ('personal'::public.project_type, 'los-guayacos', 'Los Guayacos — Restaurant Business', 'Restaurant web presence built with Next.js and deployed on Cloudflare Pages. Integrates with custom authentication service (powered by Supabase) running on the home server infrastructure for seamless account management.', NULL, '/projects/personal/los-guayacos', '["Next.js","Cloudflare Pages","Supabase","Authentication","TypeScript","Business"]'::jsonb, 20, true)
)
INSERT INTO public.projects (type, slug, title, summary, impact, href, tags, display_order, is_featured)
SELECT type, slug, title, summary, impact, href, tags, display_order, is_featured
FROM seed_projects
ON CONFLICT (href) WHERE deleted_at IS NULL
DO UPDATE SET
  type = EXCLUDED.type,
  slug = EXCLUDED.slug,
  title = EXCLUDED.title,
  summary = EXCLUDED.summary,
  impact = EXCLUDED.impact,
  tags = EXCLUDED.tags,
  display_order = EXCLUDED.display_order,
  is_featured = EXCLUDED.is_featured,
  updated_at = now();

-- Seed technologies from the current project tags.
WITH seed_technologies(name, category) AS (
  VALUES
    ('TypeScript', 'language'::public.technology_category),
    ('Fastify', 'framework'::public.technology_category),
    ('Docker', 'infrastructure'::public.technology_category),
    ('GCP Cloud Run', 'cloud'::public.technology_category),
    ('PostgreSQL', 'database'::public.technology_category),
    ('HL7', 'integration'::public.technology_category),
    ('Cloudflare', 'cloud'::public.technology_category),
    ('Tunnels', 'infrastructure'::public.technology_category),
    ('Next.js', 'framework'::public.technology_category),
    ('DNS', 'infrastructure'::public.technology_category),
    ('Networking', 'infrastructure'::public.technology_category),
    ('Security', 'other'::public.technology_category),
    ('Python', 'language'::public.technology_category),
    ('SQL', 'language'::public.technology_category),
    ('Bash', 'language'::public.technology_category),
    ('MySQL', 'database'::public.technology_category),
    ('Reliability', 'other'::public.technology_category),
    ('REST APIs', 'integration'::public.technology_category),
    ('Linux', 'infrastructure'::public.technology_category),
    ('Cron', 'tool'::public.technology_category),
    ('Automation', 'tool'::public.technology_category),
    ('Integration', 'integration'::public.technology_category),
    ('Portainer', 'tool'::public.technology_category),
    ('Nextcloud', 'tool'::public.technology_category),
    ('Collabora', 'tool'::public.technology_category),
    ('Supabase', 'database'::public.technology_category),
    ('Cloudflare Tunnel', 'infrastructure'::public.technology_category),
    ('Authentication', 'other'::public.technology_category),
    ('Self-hosted', 'infrastructure'::public.technology_category),
    ('Cloudflare Pages', 'cloud'::public.technology_category),
    ('Business', 'business'::public.technology_category)
)
INSERT INTO public.technologies (name, category)
SELECT name, category
FROM seed_technologies
ON CONFLICT (lower(name))
DO UPDATE SET
  category = EXCLUDED.category,
  updated_at = now();

-- Link projects to technologies based on JSONB tag arrays.
INSERT INTO public.project_technologies (project_id, technology_id)
SELECT p.id, t.id
FROM public.projects p
CROSS JOIN LATERAL jsonb_array_elements_text(p.tags) AS tag(name)
JOIN public.technologies t ON lower(t.name) = lower(tag.name)
WHERE p.deleted_at IS NULL
ON CONFLICT DO NOTHING;

COMMIT;
