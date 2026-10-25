import type { Metadata } from 'next';
import PageShell from '@/components/pages/PageShell';
import { site } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'That page is not on the Claremont Cooling website. Head back to the homepage, browse services, or contact the team.',
  robots: { index: false, follow: true },
};

const links = [
  { href: '/', label: 'Homepage' },
  { href: '/services', label: 'Services' },
  { href: '/ac-types', label: 'AC types' },
  { href: '/brands', label: 'Brands' },
  { href: '/care-plans', label: 'Care plans' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/blog', label: 'Blog' },
  { href: '/faq', label: 'FAQs' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
  { href: '/#survey', label: 'Book an E-Survey' },
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-hero" id="top" data-hero="" aria-labelledby="not-found-title">
        <div className="container page-hero__single">
          <p className="eyebrow">404</p>
          <h1 className="page-title" id="not-found-title">That page <span className="hl">isn&apos;t on this site</span></h1>
          <p className="page-hero__lead">The address may be out of date, or the page may have moved. Pick a link below, or call {site.phone} and we will point you the right way.</p>
          <div className="page-hero__actions">
            <a className="btn btn--flame" href="/">Back to the homepage <svg className="icon" aria-hidden="true"><use href="#i-arrow" /></svg></a>
            <a className="btn btn--outline" href="/contact">Contact us</a>
            <a className="btn btn--outline" href={site.phoneHref}><svg className="icon" aria-hidden="true"><use href="#i-phone" /></svg>Call us</a>
          </div>
          <nav className="not-found__nav" aria-label="Helpful pages">
            <ul className="not-found__links">
              {links.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
