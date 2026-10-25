import type { ReactNode } from 'react';
import IconSprite from '@/components/IconSprite';
import TopBar from '@/components/TopBar';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileCta from '@/components/MobileCta';
import WhatsAppButton from '@/components/WhatsAppButton';
import PlannedPageToast from '@/components/PlannedPageToast';
import SiteBehaviour from '@/components/SiteBehaviour';

/** Shared chrome for every page after the homepage. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <IconSprite />
      <a className="skip-link" href="#main">Skip to main content</a>
      <TopBar />
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
      <MobileCta />
      <WhatsAppButton />
      <PlannedPageToast />
      <SiteBehaviour />
    </>
  );
}
