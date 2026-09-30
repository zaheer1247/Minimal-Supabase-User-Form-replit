#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5000;
const VITE_PORT = process.env.VITE_PORT || 5173;
const IS_DEV = process.env.NODE_ENV !== 'production';

// Create Express app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api/healthz', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/', (req, res) => {
  res.json({ message: 'API server is running', health: '/api/healthz' });
});

// Serve static files if built
const publicDir = path.join(__dirname, 'dist', 'public');
if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));
  app.get('*', (req, res) => {
    if (!req.accepts('json')) {
      res.sendFile(path.join(publicDir, 'index.html'));
    }
  });
}

// Start API server
const server = app.listen(PORT, () => {
  console.log(`\n✅ API Server running at http://localhost:${PORT}`);
  if (IS_DEV) {
    console.log(`✅ Frontend available at http://localhost:${VITE_PORT}\n`);
  }
});

// Start Vite dev server in development
if (IS_DEV) {
  const viteProcess = spawn('npm', ['run', 'vite:dev'], {
    stdio: 'inherit',
    cwd: __dirname,
  });

  process.on('SIGINT', () => {
    viteProcess.kill();
    server.close();
    process.exit(0);
  });

  process.on('exit', () => {
    viteProcess.kill();
  });
}
