# Specification: Portfolio Data Storage

## ADDED Requirements

### Requirement: Store site configuration

The system MUST store portfolio-wide site configuration in Supabase PostgreSQL.

#### Scenario: Public site configuration read
- **Given** a site configuration row exists and `deleted_at` is null
- **When** the portfolio reads site metadata
- **Then** the database MUST return name, title, description, URL, locale, and optional social handle fields

#### Scenario: Singleton active configuration
- **Given** an active site configuration row already exists
- **When** another active site configuration row is inserted
- **Then** the database MUST reject it to preserve a single active site configuration

### Requirement: Store portfolio projects

The system MUST store portfolio projects with enough metadata to replace the current hardcoded project arrays.

#### Scenario: Professional and personal project separation
- **Given** projects exist with type `professional` or `personal`
- **When** the portfolio queries projects by type
- **Then** the database MUST return only active projects of the requested type ordered by `display_order`

#### Scenario: Public project read
- **Given** a project row exists and `deleted_at` is null
- **When** an anonymous visitor reads portfolio project data
- **Then** Row Level Security MUST allow the read

#### Scenario: Soft-deleted project hidden
- **Given** a project row has `deleted_at` set
- **When** public project queries run
- **Then** Row Level Security and query conventions MUST exclude that project

### Requirement: Store technology metadata

The system MUST store technology names as normalized metadata associated with projects.

#### Scenario: Project technology relationships
- **Given** a project uses one or more technologies
- **When** technology metadata is queried for the project
- **Then** the database MUST return the associated technology rows through a join table

#### Scenario: Unique technology names
- **Given** a technology named `PostgreSQL` exists
- **When** another technology with the same name is inserted
- **Then** the database MUST prevent duplication

### Requirement: Protect writes

The system MUST restrict database writes to trusted server-side execution paths.

#### Scenario: Anonymous write attempt
- **Given** an anonymous client has the public anon role
- **When** it attempts to insert, update, or delete portfolio data
- **Then** Row Level Security MUST reject the write

#### Scenario: Service-role migration or seed
- **Given** SQL is executed through the Supabase service role or database owner
- **When** migration and seed scripts run
- **Then** the database MUST allow schema creation and seed writes
