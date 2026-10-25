import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InnerPage from '@/components/pages/InnerPage';
import { getPage, pages } from '@/lib/pages';
import { getSiteUrl } from '@/lib/site-url';

type Props = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return pages.map((page) => ({ slug: page.path.split('/').filter(Boolean) }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: 'Page not found', robots: { index: false, follow: true } };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: 'website',
      url: page.path,
      title: `${page.title} | Claremont Cooling`,
      description: page.description,
      images: [page.image?.src ?? '/assets/images/logo.jpg'],
    },
  };
}

export default async function InnerRoute({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const base = getSiteUrl();
  const crumbs = [{ href: '/', label: 'Home' }, ...page.crumbs];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: `${base}${page.path}`,
    isPartOf: { '@type': 'WebSite', name: 'Claremont Cooling', url: base },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.label,
        item: crumb.href ? `${base}${crumb.href}` : `${base}${page.path}`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InnerPage page={page} />
    </>
  );
}
