# Portfolio App

A simplified, single-command full-stack application with Express API backend and React frontend.

## Quick Start

```bash
# Install dependencies
npm install

# Run everything in one command
npm run dev
```

That's it! This starts:
- **API Server**: http://localhost:5000
- **Frontend Dev Server**: http://localhost:5173

## Project Structure

```
.
├── server.mjs                    # Express server + Vite dev server orchestration
├── vite.config.ts               # Vite configuration
├── index.html                   # HTML entry point
├── tsconfig.json                # TypeScript config
├── package.json                 # All dependencies in one place
│
├── artifacts/
│   ├── api-server/             # Old Express server (kept for reference)
│   ├── mockup-sandbox/         # React frontend components
│   └── supabase-user-form/     # Supabase integration (optional)
│
└── .env                         # Environment variables
```

## Available Scripts

```bash
# Development - runs both API and frontend
npm run dev

# Frontend only (Vite dev server)
npm run vite:dev

# Build frontend for production
npm run build

# Run production server
npm start
```

## Environment Variables

Create a `.env` file in the root:

```env
PORT=5000
NODE_ENV=development
VITE_API_URL=http://localhost:5000
```

## What Changed

### Before (Complex)
- Multiple pnpm workspaces with separate `package.json` files
- Required running multiple commands: `pnpm --filter @workspace/api-server run dev`
- Complex dependency management across lib packages
- Separate ports and coordination issues

### Now (Simple)
- ✅ Single `npm install`
- ✅ Single `npm run dev` command
- ✅ All dependencies in one `package.json`
- ✅ Automatic port management
- ✅ No pnpm required - use standard npm

## Tech Stack

- **Backend**: Express.js 5
- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Language**: TypeScript
- **Package Manager**: npm (no pnpm required)

## Development Tips

- **Hot Reload**: Frontend changes auto-reload via Vite
- **API Testing**: Use `curl http://localhost:5000/api/healthz`
- **Debug Mode**: Logs include source maps for easier debugging

## Production Build

```bash
npm run build     # Builds frontend to dist/public
npm start         # Runs server in production mode
```

## Notes

- The old monorepo structure (lib/db, lib/api-spec, etc.) can be removed or archived
- Database integration (if needed) can be added to the Express server directly
- All workspace packages are now consolidated into the main application
