# sdspmusic.com

Official website for **SDSP**, a band based in San Diego, CA. The site serves as a hub for fans and industry contacts, providing information about the band, upcoming shows, music videos, and an Electronic Press Kit (EPK).

🌐 **Live site:** [www.sdspmusic.com](https://www.sdspmusic.com)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Eleventy (11ty)](https://www.11ty.dev/) | Static site generator |
| [Nunjucks](https://mozilla.github.io/nunjucks/) | HTML templating language |
| [GitHub Pages](https://pages.github.com/) | Hosting |
| [GitHub Actions](https://github.com/features/actions) | CI/CD — auto-deploys on push to `master` |

---

## Project Structure

```
sdspmusic.com/
├── src/
│   ├── _includes/
│   │   └── layouts/        # Shared Nunjucks layout templates
│   ├── assets/             # CSS, JS, images (copied to _site as-is)
│   ├── pages/              # Site pages (Nunjucks templates)
│   │   ├── index.njk       # Home page
│   │   ├── shows.njk       # Upcoming shows
│   │   ├── videos.njk      # Music videos
│   │   └── epk.njk         # Electronic Press Kit (EPK)
│   └── static/             # Static root files (favicon, CNAME, sitemap, etc.)
├── _site/                  # Build output (generated, not committed)
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions CI/CD workflow
├── .eleventy.js            # Eleventy configuration
└── package.json
```

---

## Pages

- **Home (`/`)** — Band landing page with bio, music links, and social media.
- **Shows (`/shows`)** — Upcoming and past live performances.
- **Videos (`/videos`)** — Embedded music video content.
- **EPK (`/epk`)** — Electronic Press Kit for industry contacts, press, and booking agents.

---

## Local Development

### Prerequisites

- [Node.js](https://nodejs.org/) v20+
- npm

### Setup

```bash
# Clone the repo
git clone https://github.com/jjhiew/sdspmusic.com.git
cd sdspmusic.com

# Install dependencies
npm install

# Start the local dev server (with live reload)
npm run dev
```

The site will be available at `http://localhost:8080`.

### Build

To generate a production build into the `_site/` directory:

```bash
npm run build
```

---

## Deployment

The site is automatically deployed to [GitHub Pages](https://pages.github.com/) via GitHub Actions whenever changes are pushed to the `master` branch.

**Workflow (`.github/workflows/deploy.yml`):**
1. Checks out the repository
2. Sets up Node.js v20
3. Runs `npm ci` to install dependencies
4. Builds the site with `npm run build` (outputs to `_site/`)
5. Uploads `_site/` as a GitHub Pages artifact
6. Deploys to GitHub Pages

The custom domain `www.sdspmusic.com` is configured via a `CNAME` file in `src/static/`.

---

## Contributing

This is a private band website. To suggest changes, open an issue or submit a pull request.