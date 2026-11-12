# Eduardo Fernandes Bueno — Professional Portfolio 2027

A static, accessible, English-language professional portfolio for Data Engineering, Data Architecture, Machine Learning, Data Governance, and R&D.

## Status

**Local preview only. Not deployed.** The production URL (`https://eduardofernandesbueno.github.io/`) is the intended target and must be verified after publishing.

## Architecture

- `index.html` — semantic one-page site, Schema.org Person JSON-LD, Open Graph metadata.
- `styles.css` — responsive styles, light/dark themes and reduced-motion support.
- `script.js` — theme toggle, mobile navigation, filterable work cards.
- `assets/favicon.svg` — original typographic favicon.
- `robots.txt`, `sitemap.xml` — indexing support after publication.
- `.nojekyll` — bypass Jekyll on GitHub Pages for direct static assets.

No build process, package manager, third-party JavaScript, cookies, analytics or remote fonts are required.

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/`.

## Intended GitHub Pages repository

`eduardofernandesbueno/eduardofernandesbueno.github.io`

This is a **different repository** from the GitHub special profile README repository `eduardofernandesbueno/EduardoFernandesBueno`.

## Publication checklist (approval required)

1. Verify account login and whether the Pages repository already exists.
2. Review the content, links, university/project descriptions, and public-safe institutional statements.
3. Run accessibility, responsive and link validation.
4. Explicitly approve creating/updating the GitHub Pages repository.
5. Upload the files to the repository, then configure GitHub Pages to deploy from `main` `/ (root)`.
6. Verify the public URL, canonical URL, metadata, and sitemap.
7. Only after the site is live, update the account's main Website field to the new Pages URL.

## Provenance and limitations

- The featured research artifact, AppEvasão, and TCC links were publicly inspected on November 12, 2026.
- Projects with unresolved security issues are intentionally not featured.
- UNIDATA institutional code, endpoints, datasets and internal architecture are not included.
- The SBIE publication is credited as coauthored research; the UNIVESP TCC is explicitly described as collaborative.
- The site intentionally does not claim quantitative impact metrics, senior job titles, production MLOps experience or deployed systems without validated evidence.
