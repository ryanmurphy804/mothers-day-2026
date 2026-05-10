# Murphy Mother's Day 2026

A small, warm, mobile-first website with a curated list of family activities and events around Richmond and DC.

## Run Locally

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
yarn build
```

Static files are exported to the `out/` directory.

## Deploy on Render

1. Create a new **Static Site** on Render.
2. Connect the GitHub repo.
3. Set these build settings:

| Setting           | Value        |
| ----------------- | ------------ |
| Build command      | `yarn build` |
| Publish directory  | `out`        |

That's it. Render will build and serve the static files.

## Update Events

Edit `data/events.js` to add, remove, or reorder activities.

Each event has a `type` field:
- `"scheduled"` — events with a specific date (sorted by date)
- `"anytime"` — general activities (sorted by the `order` field)

## Add Images

Drop image files in `public/images/`.

Reference them in `data/events.js` as `/images/filename.jpg`.

If an image is missing, a gradient placeholder is shown automatically.

## Tech Stack

- Next.js (Pages Router, static export)
- JavaScript
- Tailwind CSS v4
- Lucide React icons
- No backend, database, or auth
