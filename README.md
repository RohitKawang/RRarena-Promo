# RR Arena — Promotional Website

This is a small static promotional website for the `RR Arena` gym management app. It highlights features and includes a placeholder QR to replace with your app's download QR.

Files added:
- `index.html` — landing page
- `css/style.css` — styles
- `js/main.js` — small script to set the year
- `assets/qr-placeholder.svg` — replace this with your QR code image (PNG/SVG)

How to run:
1. Open `d:/ProjectPromo/index.html` in your browser (double-click or `Open With` > browser).
2. Replace `assets/qr-placeholder.svg` with your actual QR image (keep the name or update the `index.html` `src`).

If you'd like, I can:
- Add a production-ready build (Netlify/Vercel) config
- Add meta tags for better share previews
- Generate a high-resolution QR for a download link

Deploy instructions

- Netlify: drag & drop the project root in Netlify or connect the repository. The included `netlify.toml` publishes the repository root and adds an SPA redirect to `index.html`.

- GitHub Pages: push the repository to GitHub on branch `main` (or `master`). The workflow in `.github/workflows/deploy.yml` uploads the repository root to GitHub Pages automatically. Ensure Pages are enabled in your repository settings if needed.

Notes about animation & tilt

- You can fine-tune animation timing and easing in `css/style.css` by editing these variables at the top of the file in the `:root` selector:
	- `--anim-duration`
	- `--anim-easing`
	- `--anim-delay-step`

- The hero mock and feature cards include subtle tilt/parallax behavior provided by `js/main.js`. If you want the effect removed on mobile, I can add a toggle.
