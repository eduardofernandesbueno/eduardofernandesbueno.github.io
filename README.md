# Eduardo Fernandes Bueno — Professional Portfolio

Published at https://eduardofernandesbueno.github.io/ through GitHub Pages, from the root of `main`.

## Pages and languages

| Language | Homepage | Professional Profile |
| --- | --- | --- |
| English | `/` | `/profile/` |
| Brazilian Portuguese | `/pt/` | `/pt/profile/` |
| Spanish | `/es/` | `/es/profile/` |

Each page contains static localized HTML, a self-referencing canonical URL, reciprocal language alternatives and structured data. Profile pages use `ProfilePage` and reference the same `Person` entity as the homepages. The sitemap contains these six routes.

## Professional information architecture

Six canonical pillars connect homepage focus links, expertise cards, profile evidence and the two conceptual diagrams:

1. R&D & Research Engineering
2. Data Engineering & Architecture
3. Technical Project Management
4. Technical Leadership & Software Engineering
5. Applied Data Science & Machine Learning
6. Data Governance & Responsible AI

They describe areas of contribution, not formal appointments or measured proficiency. The profile retains fourteen sections, the twenty-area capability inventory, priority and complementary roles, and project-specific evidence and limits. Eleven selected-work projects retain their attribution, ordering and filters.

## Static architecture

- `index.html`, `pt/index.html`, `es/index.html`: localized homepages.
- `profile/index.html`, `pt/profile/index.html`, `es/profile/index.html`: detailed professional profiles.
- `styles.css`: shared visual system.
- `assets/profile/profile.css`: scoped profile, navigation integration and pillar styles.
- `script.js`: shared project filters, language/hash navigation, menu and persistent theme preference.
- `.nojekyll`, `robots.txt`, `sitemap.xml`: GitHub Pages and discovery configuration.

Native HTML, CSS and JavaScript; no framework, external runtime dependency or build step.

## Local preview

Run from the repository root:

```bash
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080/ and the other five routes. Stop the server with Ctrl+C.

## Review and publication

Use Simple → Clarify → Surgical → Verify. Compare against the published baseline; check all languages, internal anchors, project destinations, filters, menu, keyboard operation, persisted light/dark themes, metadata and structured data. Review layouts at 320, 375, 390, 768, 1024, 1440 and 1920 px. HTTP success alone does not establish visual or accessibility correctness. Record PASS, FAIL, BLOCKED or NOT RUN for each check.

Run `git diff --check` and review the exact changed paths and staging contents. Commit, push and deployment require the owner's express approval after review.

## Evidence and privacy

Public pages summarize relevant verified facts and link to public artifacts. Academic marks retain the original 0–10 scale; reported scientific benchmarks retain their experimental limitations. Private transcripts, diplomas, contracts, recommendation letters, signatures, personal identifiers, protected datasets and institutional implementation are never repository assets. Retain private evidence and source/page review records physically outside every Git working tree. Do not add local-document links, symlinks, credentials or `.DS_Store` to publication.

Academic prototypes and institutional MVPs are distinguished from production deployment. Historical Paió repositories require security and IP review before reuse or deployment. No secret rotation or history remediation is implied by this portfolio update.
