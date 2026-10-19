# Claremont Cooling website

Next.js (App Router) site for Claremont Cooling. It renders to a fully static page, so it deploys to Vercel with no configuration.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New → Project**, import the repository and press **Deploy**. Vercel detects Next.js automatically; no settings or environment variables are required.
3. Optional: once a custom domain is connected, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://www.example.co.uk`) so social-share images use that domain.

## Where things live

| Path | What it is |
| --- | --- |
| `app/layout.tsx` | `<html>` shell, page title/description/social metadata, fonts, global CSS |
| `app/page.tsx` | The home page, assembled from the section components |
| `app/icon.svg` | Browser tab icon |
| `components/` | One component per page section (`Hero`, `SurveySection`, `Testimonials`, `SiteFooter`, …) |
| `components/SiteBehaviour.tsx` | Starts the interactive behaviour once the page has loaded |
| `lib/site.js` | All interactivity: menus, survey form, accordions, carousels, testimonial slider, scroll reveals |
| `lib/site-config.ts` | Phone number, email and WhatsApp link used across the site; change them here |
| `styles/style.css`, `styles/home.css` | All styling |
| `public/assets/images/` | Logo and photography |

## Before launch

- **Reviews are samples.** The quotes, names and 5.0 Google rating in `components/Testimonials.tsx` were written to show the layout. Replace them with genuine reviews: publishing invented reviews is unlawful in the UK (DMCC Act 2024).
- **Videos:** add a YouTube link or `.mp4` path to `data-video-src` on any video card (`CustomerStories`, `CaseStudy`, `BehindTheScenes`) and its play button appears automatically.
- **Planned pages:** links marked `data-planned` show contact options instead of a 404. Remove the attribute once the page exists.

## Photography

Stock photos (Unsplash licence, https://unsplash.com/license); replace with Claremont's own photos when available.

| File | Source |
| --- | --- |
| `home/hero-bedroom-ac.jpg` | images.unsplash.com/photo-1634207523205-cf9ef97a31d1 |
| `home/process-home.jpg` | images.unsplash.com/photo-1776348065117-02285a905b0b |
| `home/service-installation.jpg` | images.unsplash.com/photo-1642749776312-aa42ce20c9f5 |
| `home/service-repairs.jpg` | images.unsplash.com/photo-1625148230889-8195e85aae6b |
| `home/service-maintenance.jpg` | images.unsplash.com/photo-1762341123870-d706f257a12e |
| `home/why-residential.jpg` | images.unsplash.com/photo-1761330440311-16e160cad236 |
| `home/why-commercial.jpg` | images.unsplash.com/photo-1785682118449-21da8825754d |
| `home/faq-thermostat.jpg` | images.unsplash.com/photo-1770625467384-304e461ef1be |
| `home/video-story-home.jpg` | images.unsplash.com/photo-1776860155275-eee24bfb1dee |
| `home/video-story-business.jpg` | images.unsplash.com/photo-1504297050568-910d24c426d3 |
| `home/video-case-study.jpg` | images.unsplash.com/photo-1759772238012-9d5ad59ae637 |
| `home/bts-installations.jpg` | images.unsplash.com/photo-1705579605238-24a90c8799c5 |
| `home/bts-repairs.jpg` | images.unsplash.com/photo-1758101755915-462eddc23f57 |
| `home/bts-servicing.jpg` | images.unsplash.com/photo-1545649311-24d0ac00ae82 |
| `home/bts-commercial.jpg` | images.unsplash.com/photo-1667983453881-4992fe86ab1b |
| `home/bts-outdoor-units.jpg` | images.unsplash.com/photo-1698479603408-1a66a6d9e80f |

Powered by Eagle Studio.
