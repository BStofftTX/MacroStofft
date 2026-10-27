# MacroStofft homepage conversion prototype

This directory is a private, static redesign prototype. It is **not** connected
to MacroStofft.com, WordPress, DNS, analytics, email, forms, or any production
service.

## Run locally

```bash
python3 -m http.server 8877 --bind 127.0.0.1 --directory prototype
```

Open `http://127.0.0.1:8877/` locally.

## Contents

- `index.html`, `styles.css`, and `script.js` — responsive static prototype.
- `assets/quant-ai-*.png` — actual screenshots from the Quant-AI research
  demonstration, labeled by stage and boundary in the page.
- `assets/homepage-*.png` — local browser-rendered before-approval review
  screenshots of this prototype.
- `CHANGELOG.md` — verified before/after conversion changes and safety limits.

## Approval gates

Before any production implementation, approve the copy, screenshots, project
claims, inquiry destination, privacy/retention policy, and the WordPress
implementation path. The prototype form intentionally prevents submission and
does not retain data.
