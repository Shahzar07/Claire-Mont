import { site } from '@/lib/site-config';

export default function SiteFooter() {
  return (
    <footer className="site-footer on-dark">
      <div className="container footer__top">
        <div className="footer__brand">
          <a className="footer__logo" href="/" aria-label="Claremont Cooling home">
            <img src="/assets/images/logo.jpg" alt="Claremont Cooling" width="1536" height="1024" loading="lazy" decoding="async" />
          </a>
          <p>Air conditioning installation, repair and maintenance for homes and businesses, plus heating, indoor air quality and HVAC servicing.</p>
          <ul className="footer__contact">
            <li><a href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}><svg className="icon"><use href="#i-mail" /></svg>{site.email}</a></li>
            <li><a href={site.whatsappUrl} target="_blank" rel="noopener"><svg className="icon icon--fill"><use href="#i-whatsapp" /></svg>WhatsApp</a></li>
          </ul>
        </div>

        <nav className="footer__col" aria-label="Company links">
          <h2 className="footer__heading">Company</h2>
          <ul>
            <li><a href="/#why-us">Why Choose Us</a></li>
            <li><a href="/#process">Our Process</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/reviews">Reviews &amp; Projects</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Service links">
          <h2 className="footer__heading">Services</h2>
          <ul>
            <li><a href="/services/air-conditioning-installation">Air Conditioning Installation</a></li>
            <li><a href="/services/air-conditioning-repair">Air Conditioning Repairs</a></li>
            <li><a href="/services/air-conditioning-maintenance">Air Conditioning Maintenance</a></li>
            <li><a href="/care-plans">Care Plans</a></li>
            <li><a href="/services/commercial-air-conditioning">Commercial Air Conditioning</a></li>
            <li><a href="/services/residential-air-conditioning">Domestic Air Conditioning</a></li>
            <li><a href="/comparing-ac-quotes">Comparing Air Conditioning Quotes</a></li>
            <li><a href="/brands">Brands We Trust</a></li>
            <li><a href="/installation-day">Installation Day Experience</a></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Information links">
          <h2 className="footer__heading">Information</h2>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms &amp; Conditions</a></li>
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p>&copy; <span data-year="">2026</span> Claremont Cooling. All rights reserved.</p>
        <p className="footer__credit">Powered by <strong>Eagle Studio</strong></p>
        <a className="back-top" href="#top">Back to top <svg className="icon"><use href="#i-arrow-up" /></svg></a>
      </div>
    </footer>
  );
}
