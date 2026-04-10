# Calvin Documentation Website – CLAUDE.md

## Project Overview
Jekyll-based documentation site for the Calvin self-balancing robot. Deployed to
GitHub Pages / Netlify as static HTML.

## Tech Stack
- **Jekyll 4.x** (plain, not via `github-pages` gem) with `jekyll-paginate`, `jekyll-seo-tag`, `jekyll-sitemap`
- **Tailwind CSS** (v3, standalone CLI) — compiled to `assets/css/tailwind.css` and committed
- **custom.css** — hand-written overrides in `assets/css/custom.css`
- **Lucide icons** — loaded via CDN in the footer only

## File Structure
```
calvin/
├── CLAUDE.md
├── Gemfile / Gemfile.lock              ← Ruby deps (github-pages)
├── package.json / package-lock.json    ← Node deps (tailwindcss CLI)
├── tailwind.config.js                  ← Tailwind content paths
├── tailwind.src.css                    ← @tailwind directives (input)
├── _config.yml                         ← Jekyll config
├── _layouts/
│   ├── default.html                    ← Shell: <head>, nav, footer
│   ├── page.html                       ← Passthrough for top-level pages
│   └── post.html                       ← Build-log post wrapper
├── _includes/
│   ├── build_entry.html                ← Single post card
│   ├── photo_placeholder.html
│   └── video_placeholder.html
├── _posts/                             ← Build-log markdown entries
├── index.html                          ← Home
├── mechanical.html / hardware.html / software.html / gallery.html
├── build-log/index.html                ← Paginated build log
└── assets/
    ├── images/                         ← Photos (ignored by Claude)
    └── css/
        ├── tailwind.css                ← Built output (committed)
        └── custom.css
```

## Building Tailwind CSS
Whenever you change HTML class names, rebuild:
```bash
npm run build:css       # one-shot, minified
npm run watch:css       # watches and rebuilds on change
```
The output `assets/css/tailwind.css` is **committed** — GitHub Pages does not run
a Node build step. If you edit class names and forget to rebuild, the new classes
will be missing from production CSS.

## Local Development
```bash
bundle exec jekyll serve
# http://localhost:4000
```
Run `npm run watch:css` in a second terminal if you are editing class names.

## Navigation Pattern
The nav lives in `_layouts/default.html`. Active-link styling is driven by
`page.url` matching — no per-page edits required. Each link also sets
`aria-current="page"` when active.

## Related GitHub Repositories
| Repo | Description |
|------|-------------|
| `github.com/fungus-wine/calvin_instinctus` | Teensy 4.1 real-time firmware (balance + CAN) |
| `github.com/fungus-wine/calvin_cogitator` | Jetson Orin Nano AI / vision / LLM layer |
| `github.com/fungus-wine/calvin_explorator` | Electron + Vue 3 desktop monitoring app |
| `github.com/fungus-wine/librarius` | Shared Arduino library (InstinctusKit) |

## How to Add a Build Log Post
1. Create `_posts/YYYY-MM-DD-slug.md` with front matter:
   ```yaml
   ---
   title: My Post Title
   date: YYYY-MM-DD HH:MM:SS -0700
   tag: firmware, mechanical
   ---
   ```
2. Body is Markdown. Images go in `assets/images/` and are referenced via
   `{{ '/assets/images/foo.webp' | relative_url }}`.

Permalink is `/build-log/:year-:month-:day-:slug/`.

## How to Add a Gallery Image
1. Drop image into `assets/images/`
2. Open `gallery.html` — replace one `{% include photo_placeholder.html %}`
   call with a proper `<figure>` block containing `<img src="{{ '/assets/images/X' | relative_url }}">`
3. Rebuild Tailwind if you add new utility classes.

## How to Add a YouTube Embed
In `gallery.html`, replace a `{% include video_placeholder.html %}` call with a
real `<figure>` containing an `<iframe src="https://www.youtube.com/embed/VIDEO_ID">`.

## Deployment
Site is deployed to Cloudflare Workers Static Assets. Config lives in
`wrangler.jsonc` (pointing `assets.directory` at `./_site/`). Every push to
`main` triggers a Cloudflare build: `bundle exec jekyll build` → `npx wrangler deploy`.
Required env vars in the Cloudflare dashboard: `JEKYLL_ENV=production`,
`RUBY_VERSION=3.4.4`.

## Things to Watch
- **Never reintroduce the Tailwind CDN** — it's a dev-only tool and was replaced
  with a prebuilt, minified CSS file.
- **Remember to rebuild CSS** after class changes. Consider running
  `npm run build:css` as part of your pre-commit flow.
- `_site/`, `node_modules/`, and `.jekyll-cache/` are gitignored.
