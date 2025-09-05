# ProofPath Security — Static Site (GitHub Pages)

Professional, accessible, one‑page‑per‑section site for **GitHub Pages**.

## Quick deploy (classic Pages)
1. Create a GitHub repo (e.g., `proofpath-site`).
2. Upload all files in this folder to the repo root.
3. In **Settings → Pages**, set **Deploy from branch** → `main` / `/ (root)`.
4. Wait for the green check, then visit `https://<your-username>.github.io/<repo>/`.

## Custom domain
- Add your domain (e.g., `proofpath.com`) under **Settings → Pages**.
- Create `A`/`AAAA`/`CNAME` DNS records per GitHub’s instructions.
- Update the `CNAME` file in this folder to your domain if you want GitHub to manage it.

## Notes
- All styles are in `assets/css/styles.css`.
- Update the booking link in `contact.html` and the footer as needed.
- The Trust Pack overview lives in `assets/docs/ProofPath_Trust_Pack_Overview.pdf`.
