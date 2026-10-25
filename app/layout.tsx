import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/lib/site-config';
import { getSiteUrl } from '@/lib/site-url';
import '@/styles/style.css';
import '@/styles/home.css';
import '@/styles/pages.css';

// Absolute base for social images. On Vercel this is the production domain;
// set NEXT_PUBLIC_SITE_URL to override (e.g. once a custom domain is live).
const siteUrl = getSiteUrl();

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HVACBusiness',
  name: site.name,
  url: siteUrl,
  telephone: '+447764936622',
  email: site.email,
  image: `${siteUrl}/assets/images/logo.jpg`,
  areaServed: 'United Kingdom',
  description:
    'Air conditioning installation, repair and maintenance for homes and businesses, plus heating, indoor air quality and HVAC servicing.',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Claremont Cooling | Air Conditioning Installation, Repair & Maintenance',
    template: '%s | Claremont Cooling',
  },
  description: `Claremont Cooling provides ultra-quiet air conditioning for homes and businesses, with seamless installation, spotless clean-up and reliable maintenance. Call ${site.phone}.`,
  openGraph: {
    type: 'website',
    title: 'Claremont Cooling | Air Conditioning for Homes & Businesses',
    description: 'Air conditioning installation, repair and maintenance, plus heating, indoor air quality and HVAC servicing.',
    images: ['/assets/images/logo.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#041a42',
};

/* Enables reveal animations only when JS runs. If the site script never
   initialises, the fallback class makes all content visible after 2.5s. */
const jsFlag =
  "document.documentElement.classList.add('js');" +
  "setTimeout(function(){if(!window.__revealReady)document.documentElement.classList.add('js-fallback');},2500);";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // The inline script adds classes to <html> before hydration.
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
        />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
