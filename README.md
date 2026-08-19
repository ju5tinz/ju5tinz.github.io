# homepage

Personal site — plain static HTML, no client-side JavaScript. Built with
[Astro](https://astro.build), deployed to GitHub Pages on every push to `main`.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output to dist/
npm run preview  # serve the built site locally
```

## Adding a blog post

Drop a markdown file into `src/content/blog/`. The filename becomes the URL slug,
so `src/content/blog/why-caches-lie.md` publishes at `/blog/why-caches-lie`.

```markdown
---
title: 'Why caches lie'
date: 2026-08-11
description: 'Optional. Shown in post lists and the RSS feed.'
draft: false
---

Post body here.
```

Set `draft: true` to keep a post out of the build. Posts are sorted newest-first
on `/` and `/blog`, and flow into `/rss.xml` automatically.

## Adding audio and project files

Large binaries live in `public/`, not `src/`. Astro's asset pipeline processes
images but passes audio and `.als` files through untouched, and `public/` keeps
their URLs stable and predictable.

One folder per post, matching its slug:

```
public/media/<post-slug>/
  audio/     .mp3 / .m4a for streaming, .wav for downloads
  ableton/   zipped Ableton project folders
```

A file at `public/media/beyond-the-waveform/audio/demo.mp3` is served at
`/media/beyond-the-waveform/audio/demo.mp3`. Reference it from markdown with a
root-relative path — raw HTML works inside `.md`, no plugin needed:

```html
<figure>
  <audio controls preload="none" src="/media/beyond-the-waveform/audio/demo.mp3"></audio>
  <figcaption>Hybrid architecture, rendered stem.</figcaption>
</figure>
```

`preload="none"` matters — without it every clip on the page starts downloading
on load. For Ableton, zip the whole project folder (the `.als` alone is useless
without its `Samples/` directory) and link it:

```html
<p class="download">
  <a href="/media/beyond-the-waveform/ableton/demo-project.zip">Download the Ableton project (14 MB)</a>
</p>
```

Keep an eye on size: GitHub rejects any file over 100 MB, warns past 50 MB, and
Pages is meant for sites under 1 GB with a 100 GB/month bandwidth soft limit.
Export compressed audio for anything embedded inline, and reserve `.wav` for
files people explicitly download. If the repo starts filling up with large
sources, move them to Git LFS or host them off-repo and link out.

## Adding a project

Edit the `projects` array at the top of `src/pages/projects.astro`. Only `name`
and `blurb` are required; `href`, `tags`, and `year` are optional.

## Adding a new section (reviews, notes, etc.)

Two options depending on whether the section is a list of markdown documents or a
single hand-written page.

**A page** — create `src/pages/reviews.astro`:

```astro
---
import Base from '../layouts/Base.astro';
---

<Base title="Reviews" description="Books and papers.">
  <h1>Reviews</h1>
</Base>
```

**A markdown collection** — add a collection to `src/content.config.ts` mirroring
`blog`, create `src/content/reviews/`, then copy `src/pages/blog/index.astro` and
`src/pages/blog/[...slug].astro` into `src/pages/reviews/`, swapping the
collection name.

Either way, add the link to `NAV` in `src/consts.ts` so it appears in the header.

## Site-wide settings

`src/consts.ts` holds the site title, description, nav links, and footer links.
`astro.config.mjs` holds the deployed URL. `src/styles/global.css` is the entire
stylesheet.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes it. One-time setup: in the GitHub repo, go to
**Settings → Pages → Build and deployment** and set **Source** to
**GitHub Actions**.
