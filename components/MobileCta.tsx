import { site } from '@/lib/site-config';

/**
 * Mobile quick actions (shown after the hero on small screens)
 */
export default function MobileCta() {
  return (
    <div className="mobile-cta" data-mobile-cta="">
      <a className="mobile-cta__btn" href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>Call Us</a>
      <a className="mobile-cta__btn mobile-cta__btn--primary" href="/#survey"><svg className="icon"><use href="#i-survey" /></svg>Book E-Survey</a>
    </div>
  );
}
