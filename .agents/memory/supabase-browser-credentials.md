---
name: Supabase browser credentials
description: Why direct Supabase browser clients need a separate publishable credential in this Replit setup
---

The Replit Supabase connector can access the database through server-side proxy credentials, but it does not automatically provide a browser-safe key to a Vite bundle. A direct `@supabase/supabase-js` client therefore needs the exact project's anon or publishable key in a `VITE_` secret.

**Why:** The connector and browser client have different credential paths; a valid project connection through MCP does not prove the frontend's key or JWT role can pass the browser request.

**How to apply:** When building a frontend-only Supabase app, verify the browser key with a real PostgREST request and keep the app's actual error visible. Never substitute a service-role key or weaken RLS to make the request pass.