

# Fix: Blank White Page on Netlify

## Problem

Your Netlify deployment shows a blank white page because:

1. **Missing SPA Redirects** - When someone visits `/gallery` or refreshes any page, Netlify looks for a file that doesn't exist and returns nothing
2. **Missing Base Path** - The build configuration doesn't specify where to load assets from

---

## Solution

### Step 1: Create Netlify Redirects File

Create a new file `public/_redirects` with this content:

```
/*    /index.html   200
```

This tells Netlify to serve your app for all routes.

---

### Step 2: Update Vite Configuration

Add `base: "/"` to `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/",  // Add this line
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

---

## What Happens Next

1. Changes get pushed to GitHub automatically
2. Netlify detects the update and rebuilds
3. Your website will load correctly on all pages

---

## Technical Summary

| File | Action | Purpose |
|------|--------|---------|
| `public/_redirects` | Create | Enable SPA routing on Netlify |
| `vite.config.ts` | Edit | Ensure correct asset paths |

