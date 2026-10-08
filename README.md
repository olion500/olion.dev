# olion.dev

The website for olion, a small company that makes software for one person at a time.

Live at [olion.dev](https://olion.dev). The principles are in [PRINCIPLES.md](PRINCIPLES.md).

## Commands

```sh
make install   # install Node (mise) and npm dependencies
make build     # build dist/ from site/ and PRINCIPLES.md
make deploy    # build, then deploy dist/ to Cloudflare
```

Before your first deploy, log in once with `npx cf auth login`.

## How it fits together

| Path | What it is |
|---|---|
| `PRINCIPLES.md` | Source text for the principles. Each `## NN. Title` becomes one accordion item; a `>` line becomes the small note under it. |
| `site/index.html` | Page template. The build inserts the principles at `<!-- @principles -->`. |
| `site/fonts/` | Pretendard, cut down to Latin characters (21 KB). |
| `site/_headers` | Cache and security headers for Cloudflare. |
| `scripts/build.mjs` | Renders `PRINCIPLES.md` into the template and writes `dist/`. |
| `scripts/subset-font.sh` | Rebuilds the font. Run it if the page uses characters outside Latin, such as Korean. |
| `cloudflare.config.ts` | Worker name and domains. The site is static assets only, with no Worker code. |
| `design-spec.md` | Colors, type, spacing, and motion rules for the site. |

To change a principle, edit `PRINCIPLES.md` and run `make deploy`.

## Hosting

The site runs on Cloudflare Workers as static assets, served at `olion.dev` and `www.olion.dev`. A redirect rule in the Cloudflare dashboard, not in this repo, sends `www` to the root domain.
