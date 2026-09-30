# Project Refactor Summary

## What Was Done

The project has been **completely refactored** from a complex pnpm monorepo to a **simple, single-command full-stack application**.

### Before (Complex) ❌
```bash
pnpm install
pnpm --filter @workspace/api-server run dev  # Multiple commands needed
pnpm --filter @workspace/mockup-sandbox run dev  # Separate terminals
pnpm --filter @workspace/db run push  # DB migrations
# + 30+ dependencies across lib packages
```

### After (Simple) ✅
```bash
npm install
npm run dev  # Everything in one command!
```

## What Changed

### Removed Complexity
- ❌ `pnpm-workspace.yaml` - no more workspaces
- ❌ `lib/db`, `lib/api-spec`, `lib/api-zod`, `lib/api-client-react` - unnecessary abstractions
- ❌ `scripts/` - utility scripts removed
- ❌ `tsconfig.base.json` - single config now
- ❌ Multiple `package.json` files - consolidated to one
- ❌ pnpm dependency - now using standard npm

### Added Simplicity
- ✅ `server.mjs` - unified Express + Vite orchestration
- ✅ `vite.config.ts` - frontend configuration at root
- ✅ Single `package.json` with all dependencies
- ✅ `index.html` at root for frontend entry
- ✅ Updated `CLAUDE.md` with new instructions

## File Structure Changes

### Root Level (Main App)
```
package.json          ← ALL dependencies here
server.mjs            ← Start point, orchestrates API + frontend
vite.config.ts        ← Frontend configuration
tsconfig.json         ← Single TypeScript config
index.html            ← HTML entry point
.env                  ← Environment variables
README.md             ← Getting started guide
CLAUDE.md             ← Updated setup guide
```

### Artifacts (Application Code)
```
artifacts/
├── api-server/       ← Express backend (routes, middleware, logic)
├── mockup-sandbox/   ← React frontend (components, pages, UI)
└── supabase-user-form/  ← Optional Supabase integration
```

### Removed
```
lib/                  ← Entire directory removed (db, api-spec, api-zod, api-client-react)
scripts/              ← Removed
pnpm-workspace.yaml   ← Removed
tsconfig.base.json    ← Removed
.npmrc (old)          ← Removed
```

## How to Use

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Automatically starts:
- **API Server** on http://localhost:5000
- **Frontend Dev Server** on http://localhost:5173
- Both with hot reload and source maps

### Frontend Only
```bash
npm run vite:dev  # Port 5173 only
```

### Build & Deploy
```bash
npm run build     # Builds to dist/public
npm start         # Runs production server
```

## Benefits

1. **Single Install**: `npm install` instead of `pnpm install` + workspace setup
2. **Single Command**: `npm run dev` runs everything
3. **Faster Onboarding**: No monorepo complexity to explain
4. **Simpler Debugging**: All code in one place
5. **Standard npm**: Works with any Node environment
6. **Easier Deployment**: No workspace resolution needed

## Port Assignment

- **API Server**: `5000` (Express)
- **Frontend Dev**: `5173` (Vite)

Both coordinated automatically by `server.mjs`.

## Environment Variables

Create `.env` in root:
```env
PORT=5000
NODE_ENV=development
```

Optional for Supabase:
```env
VITE_SUPABASE_URL=https://...
VITE_SUPABASE_ANON_KEY=...
```

## API Routes

Add new routes in `artifacts/api-server/src/routes/`:

```typescript
// example: artifacts/api-server/src/routes/example.ts
import { Router } from 'express';

const router = Router();

router.get('/example', (req, res) => {
  res.json({ message: 'Hello from API' });
});

export default router;
```

Then import in `artifacts/api-server/src/routes/index.ts`.

## Frontend Components

Work in `artifacts/mockup-sandbox/src/`:
- Components auto-reload via Vite
- API calls to `http://localhost:5000/api/*`
- Tailwind CSS for styling

## Key Files to Know

| File | Purpose |
|------|---------|
| `server.mjs` | Entry point, coordinates API + frontend |
| `package.json` | All dependencies and scripts |
| `vite.config.ts` | Frontend build/dev configuration |
| `artifacts/api-server/src/` | Express backend code |
| `artifacts/mockup-sandbox/src/` | React frontend code |
| `.env` | Local environment variables |

## Production Deployment

1. **Build Frontend**:
   ```bash
   npm run build
   ```
   Creates `dist/public/` with optimized frontend

2. **Run Production Server**:
   ```bash
   PORT=5000 npm start
   ```
   Serves both API and built frontend

3. **Deploy Options**:
   - Vercel (auto-detects)
   - AWS (Node.js environment)
   - Railway, Render, etc.

## Troubleshooting

### Port 5000/5173 already in use?
```bash
# Change port
PORT=3000 npm run dev
```

### Frontend not loading?
```bash
# Try vite dev only
npm run vite:dev
# Then manually hit http://localhost:5173
```

### API errors in browser?
```bash
# Check API is running
curl http://localhost:5000/api/healthz
```

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Open http://localhost:5173
4. ✅ Start building!

## Questions?

- See `README.md` for quick start
- See `CLAUDE.md` for setup guide
- Check `artifacts/api-server/` for API code
- Check `artifacts/mockup-sandbox/` for frontend code
