# Claude Code Configuration

This directory contains Claude Code configuration for the **Replit Supabase** monorepo.

## Files in This Directory

### `settings.json`
Project-specific Claude Code settings:
- Bash tool allowlist (pnpm, npm, node, git, tsc, etc.)
- Tool configuration and constraints
- TypeScript checking configuration

### `hooks.json`
Automation hooks for Claude Code workflows:
- Configure automated tool behaviors
- Reduce permission prompts for safe operations

## Getting Started

Before using Claude Code with this repo, read:

1. **[CLAUDE.md](../CLAUDE.md)** — Complete setup guide, quick start commands, and common workflows
2. **[replit.md](../replit.md)** — Project overview and tech stack

## Repo Structure Quick Reference

```
replit_supabase/
├── artifacts/
│   ├── api-server/           # Express 5 API (port 5000)
│   ├── supabase-user-form/   # React + Vite frontend
│   └── mockup-sandbox/       # UI design sandbox
├── lib/
│   ├── db/                   # Drizzle ORM schema (PostgreSQL)
│   ├── api-spec/             # OpenAPI spec + codegen
│   ├── api-zod/              # Generated Zod schemas (do not edit)
│   └── api-client-react/     # Generated React hooks (do not edit)
├── scripts/                  # Build and utility scripts
├── CLAUDE.md                 # Complete Claude Code guide
├── replit.md                 # Project overview
├── pnpm-workspace.yaml       # Monorepo configuration
└── .env                      # Environment variables (git-ignored)
```

## Key Commands

```bash
# Install dependencies
pnpm install

# Run development API server
pnpm --filter @workspace/api-server run dev

# Typecheck entire workspace
pnpm run typecheck

# Build all packages
pnpm run build

# Regenerate API hooks/schemas from OpenAPI spec
pnpm --filter @workspace/api-spec run codegen

# Push DB schema changes
pnpm --filter @workspace/db run push
```

## Source of Truth Files

When making changes, remember:
- **Database schema**: `lib/db/src/schema.ts` (Drizzle)
- **API contracts**: `lib/api-spec/openapi.yaml` (OpenAPI)
- **Workspace config**: `pnpm-workspace.yaml`

## Important Constraints

1. **pnpm only** — npm/yarn will fail (enforced by preinstall script)
2. **Node.js ESM** — API uses `type: "module"`, start with `--enable-source-maps`
3. **Regenerate on spec change** — OpenAPI spec changes require running codegen
4. **Do not edit generated code** — `api-zod` and `api-client-react` are auto-generated

## For Future Sessions

Claude sessions will automatically load:
- `CLAUDE.md` for quick reference
- Memory files from `~/.claude/projects/*/memory/` for context
- This configuration from `.claude/settings.json`

No need to re-explain the project structure—it's all documented!

## Questions?

1. Check **CLAUDE.md** for setup and common tasks
2. Check **replit.md** for project overview
3. Review individual package `package.json` files for package-specific scripts
