# Claude Code Setup Guide

This is a TypeScript monorepo using pnpm workspaces for a full-stack web application with Express API, PostgreSQL database, and React frontend.

## Quick Start

```bash
# Install dependencies
pnpm install

# Run the API server (localhost:5000)
pnpm --filter @workspace/api-server run dev

# Typecheck entire workspace
pnpm run typecheck

# Build all packages
pnpm run build

# Push DB schema changes (development only)
pnpm --filter @workspace/db run push

# Regenerate API hooks and Zod schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen
```

## Project Structure

### Monorepo Packages

- **`artifacts/api-server`** — Express 5 HTTP API (port 5000), Node.js ESM, esbuild bundle
  - Routes, middleware, TypeScript strict mode
  - Source: `src/`, builds to `dist/index.mjs`

- **`artifacts/supabase-user-form`** — React frontend (Vite)
  - User form UI, calls the API via generated hooks
  - Source: `src/`, builds to `dist/`

- **`artifacts/mockup-sandbox`** — UI prototyping/design sandbox
  - Figma imports, component library
  - Vite + React

- **`lib/db`** — PostgreSQL schema and migrations (Drizzle ORM)
  - Source: `src/`, schema in `schema.ts`
  - Drizzle schema is source-of-truth for DB

- **`lib/api-spec`** — OpenAPI spec and codegen
  - Defines API contracts, regenerates client hooks and Zod schemas
  - Source: `openapi.yaml`
  - Generates: `lib/api-zod` (Zod + TS), `lib/api-client-react` (React hooks)

- **`lib/api-zod`** — Generated Zod schemas and TypeScript types
  - **Do not edit directly** — regenerate from OpenAPI spec via `pnpm --filter @workspace/api-spec run codegen`
  - Imported by API server for request/response validation

- **`lib/api-client-react`** — Generated React hooks
  - **Do not edit directly** — regenerate from OpenAPI spec via `pnpm --filter @workspace/api-spec run codegen`
  - Imported by frontends to call the API

- **`scripts/`** — Utility scripts (build, migrations, setup, etc.)
  - Node.js, TypeScript

## Env Setup

Required environment variables (`.env` file in repo root):

```
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
# Add others as needed (Supabase, API keys, etc.)
```

See `.env` in git status for current values (add to `.gitignore` if it isn't already).

## Common Tasks

### Add a new API route
1. Add endpoint to `artifacts/api-server/src/routes/` (Express handler)
2. Update OpenAPI spec: `lib/api-spec/openapi.yaml`
3. Run `pnpm --filter @workspace/api-spec run codegen` to regenerate hooks/schemas
4. Import generated schemas in your route for validation

### Update the database schema
1. Edit Drizzle schema: `lib/db/src/schema.ts`
2. Run `pnpm --filter @workspace/db run push` to generate migration
3. Deploy migration to dev/prod (handled by Vercel/deployment platform)

### Type-check everything
```bash
pnpm run typecheck
# Or check only workspace libs:
pnpm run typecheck:libs
```

### Update dependencies
```bash
pnpm add package-name
# Locked versions in pnpm-lock.yaml
```

## Key Files

- **`pnpm-workspace.yaml`** — Workspace config, package paths, catalog (dependency versions)
- **`tsconfig.base.json`** — Shared TypeScript config
- **`tsconfig.json`** — Root config, extends base
- **`.npmrc`** — pnpm/npm config (prefer pnpm)
- **`.replit`** — Replit deployment config
- **`.env`** — Environment variables (git-ignored, add to `.gitignore` if missing)

## Build & Deploy

- API builds to CommonJS bundle via esbuild: `artifacts/api-server/dist/index.mjs`
- Run on Node.js 24 with `--enable-source-maps` for debugging
- Frontend builds via Vite
- Deployable to Vercel, AWS, or any Node.js + static hosting

## Testing & CI

- No test setup yet (add as project grows)
- Pre-commit hooks: none configured yet
- CI/CD: handled by Vercel or configured separately

## Known Constraints & Gotchas

- **pnpm only** — repo enforces pnpm in `preinstall` script; npm/yarn will fail
- **Node ESM only** — API server uses `type: "module"`, `--enable-source-maps` required on start
- **Drizzle schema is source-of-truth** — don't write SQL directly
- **OpenAPI spec is source-of-truth** — regenerate client code after spec changes
- **Use workspace references** — import from lib packages via `@workspace/package-name`
- **No .gitignore override** — `.cursor/rules/` and `.github/instructions/` are .gitignored

## IDE Setup (VSCode)

Recommended extensions:
- Prettier (format on save)
- TypeScript (built-in)
- ESLint (if added)
- Drizzle ORM (if using extension)

Recommended settings in `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## Debugging

Enable source maps:
- API: `node --enable-source-maps ./dist/index.mjs`
- Check `artifacts/api-server/dist/index.mjs.map` exists after build

## Questions?

Refer to:
- `replit.md` — project overview and stack
- Individual package `package.json` files for scripts
- `pnpm-workspace.yaml` for workspace structure
