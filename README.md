# My Portfolio Website — Editing Guide

This is your personal portfolio site, live at **https://maskn123.github.io**.
Almost everything you need to change lives in **one file: `index.html`**.

## How to edit (directly on GitHub — easiest)

1. Go to your repository: https://github.com/MASKN123/MASKN123.github.io
2. Click on `index.html`, then click the **pencil icon** (✏️, top right of the file view).
3. Press **Ctrl+F** and search for the marker: **✏️ EDIT** — every place you
   should change something has a comment like `<!-- ✏️ EDIT: ... -->` telling
   you exactly what goes there.
4. Replace the placeholder text (things like `Your Name`, `Your City`,
   `Project One`, `your.email@example.com`) with your real information.
5. Click the green **Commit changes** button. Your live site updates itself
   about a minute later — just refresh it.

## The checklist

Work through these in order — the site is "done" when all are ticked:

- [ ] **Title & description** (top of `index.html`) — shows up in Google
- [ ] **Navigation bar** — your name
- [ ] **Hero** — your name, intro sentence, and the three stats
- [ ] **Rotating job titles** — edit the `ROLES` list at the very top of `main.js`
- [ ] **About** — your bio (3 short paragraphs) and the quick facts
- [ ] **Your photo** — upload a square photo named `profile.jpg` to the
      repository (Add file → Upload files), then in the About section of
      `index.html` replace the `<svg>…</svg>` placeholder block with:
      `<img src="profile.jpg" alt="Your Name">`
- [ ] **Skills** — keep only the tools you actually use; add your own
- [ ] **Projects** — 3 cards: title, description, result line, tech tags, links
- [ ] **Experience** — your jobs and education, most recent first
- [ ] **Writing** — links to your Medium / LinkedIn articles
- [ ] **Contact** — your email address (in the `mailto:` link) and social URLs
- [ ] **Everywhere**: replace `YOURPROFILE` with your LinkedIn / Medium
      profile names (your GitHub links are already set to MASKN123)
- [ ] **Footer** — your name

## Tips for good content

- **Numbers beat adjectives.** "Improved forecast accuracy by 23%" is stronger
  than "greatly improved forecasting".
- **Pick 3 projects that show range** — e.g. one ML model, one data pipeline,
  one dashboard or LLM app.
- **Write for two readers at once**: plain enough for a recruiter, precise
  enough for an engineer.

## Extras

- **Light/dark mode**: the site has both — the moon/sun button in the top right
  switches them. Dark is the default.
- **Changing colors**: open `style.css` — the colors are all defined in the
  first 40 lines, with comments.
- **Adding a project or article**: copy an entire `<article>…</article>` (or
  `<a class="writing-card">…</a>`) block in `index.html` and paste it below the
  last one, then edit its text.
