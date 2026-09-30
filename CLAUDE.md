# Claude Code Setup Guide

A simplified full-stack application with Express API backend and React frontend. Everything runs with a single command.

## Quick Start

```bash
# Install dependencies (npm, not pnpm)
npm install

# Run everything in one command
npm run dev
```

That's it! 🎉 This starts:
- **API Server**: http://localhost:5000
- **Frontend Dev Server**: http://localhost:5173

## Project Structure

```
.
├── server.mjs                    # Express server + orchestration
├── vite.config.ts               # Vite configuration
├── index.html                   # HTML entry point
├── tsconfig.json                # TypeScript config
├── package.json                 # All dependencies
│
├── artifacts/
│   ├── api-server/             # Express server source
│   ├── mockup-sandbox/         # React frontend components
│   └── supabase-user-form/     # Supabase forms
│
└── .env                         # Environment variables
```

## Available Scripts

```bash
# Development - runs both API and frontend with hot reload
npm run dev

# Frontend only (Vite dev server on port 5173)
npm run vite:dev

# Build frontend for production
npm run build

# Run production server
npm start
```

## Environment Setup

Create `.env` file in root:

```env
PORT=5000
NODE_ENV=development
```

Optional for Supabase:
```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

## Common Tasks

### Add a new API route
1. Edit: `artifacts/api-server/src/routes/`
2. Test: `curl http://localhost:5000/api/your-route`

### Frontend changes
1. Edit: `artifacts/mockup-sandbox/src/`
2. Auto-reload on save via Vite

### Update dependencies
```bash
npm install package-name
```

## Tech Stack

- **Backend**: Express.js 5, Node.js ESM
- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **UI**: Radix UI components
- **Language**: TypeScript 5.9
- **Package Manager**: npm (standard, no pnpm needed)

## Key Features

- ✅ Single `npm install` + `npm run dev`
- ✅ Hot reload for both frontend and API
- ✅ No monorepo complexity
- ✅ TypeScript strict mode
- ✅ Source maps for debugging
- ✅ Production-ready build

## Debugging

API logs include full request/response info:
```bash
npm run dev  # See structured logs from Pino
```

Check source maps:
```bash
# Built with --enable-source-maps flag
node --enable-source-maps server.mjs
```

## Production

```bash
npm run build    # Builds frontend to dist/public
PORT=5000 npm start  # Runs in production mode
```

## Notes

- Old lib packages (lib/db, lib/api-spec) removed for simplicity
- Add database integration directly to Express server if needed
- All production-ready configurations included
