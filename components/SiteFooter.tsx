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
            <li><a href="team.html" data-planned="">Team</a></li>
            <li><a href="case-studies.html" data-planned="">Case Studies</a></li>
            <li><a href="reviews.html" data-planned="">Reviews &amp; Projects</a></li>
            <li><a href="gallery.html" data-planned="">Gallery</a></li>
            <li><a href="blog.html" data-planned="">Blog</a></li>
            <li><a href="/#faq">FAQs</a></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Service links">
          <h2 className="footer__heading">Services</h2>
          <ul>
            <li><a href="services/air-conditioning-installation.html" data-planned="">Air Conditioning Installation</a></li>
            <li><a href="services/air-conditioning-repair.html" data-planned="">Air Conditioning Repairs</a></li>
            <li><a href="services/air-conditioning-maintenance.html" data-planned="">Air Conditioning Maintenance</a></li>
            <li><a href="care-plans.html" data-planned="">Care Plans</a></li>
            <li><a href="services/commercial-air-conditioning.html" data-planned="">Commercial Air Conditioning</a></li>
            <li><a href="services/residential-air-conditioning.html" data-planned="">Domestic Air Conditioning</a></li>
            <li><a href="comparing-ac-quotes.html" data-planned="">Comparing Air Conditioning Quotes</a></li>
            <li><a href="brands.html" data-planned="">Brands We Trust</a></li>
            <li><a href="installation-day.html" data-planned="">Installation Day Experience</a></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Information links">
          <h2 className="footer__heading">Information</h2>
          <ul>
            <li><a href="/#contact">Contact Us</a></li>
            <li><a href="privacy-policy.html" data-planned="">Privacy Policy</a></li>
            <li><a href="terms-and-conditions.html" data-planned="">Terms &amp; Conditions</a></li>
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
