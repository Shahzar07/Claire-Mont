import { site } from '@/lib/site-config';

/**
 * Navigation note (Phase 1):
 * Links marked data-planned point at the routes planned for Phase 2. Until a page
 * exists, lib/site.js shows a "coming soon" notice instead of a 404. Once a page is
 * built, remove data-planned from every link that points to it.
 */
export default function SiteHeader() {
  return (
    <header className="site-header" data-header="">
      <div className="container site-header__inner">
        <a className="brand" href="/" aria-label="Claremont Cooling home">
          <img src="/assets/images/logo.jpg" alt="Claremont Cooling" width="1536" height="1024" />
        </a>

        <nav className="site-nav" id="site-nav" aria-label="Main navigation" data-nav="">
          <div className="site-nav__head">
            <span className="site-nav__title">Menu</span>
            <button className="icon-btn" type="button" aria-label="Close menu" data-nav-close="">
              <svg className="icon"><use href="#i-close" /></svg>
            </button>
          </div>

          <ul className="nav-list">
            <li className="nav-item has-dropdown">
              <button className="nav-link nav-link--toggle" type="button" aria-expanded="false" aria-controls="dd-services">
                Services <svg className="icon nav-chevron"><use href="#i-chevron" /></svg>
              </button>
              <div className="dropdown" id="dd-services">
                <ul className="dropdown__list">
                  <li><a className="dropdown__link" href="services/residential-air-conditioning.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-home" /></svg></span>Residential A/C</a></li>
                  <li><a className="dropdown__link" href="services/commercial-air-conditioning.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-building" /></svg></span>Commercial A/C</a></li>
                  <li><a className="dropdown__link" href="services/air-conditioning-installation.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-install" /></svg></span>A/C Installation</a></li>
                  <li><a className="dropdown__link" href="services/air-conditioning-replacement.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-refresh" /></svg></span>A/C Replacement</a></li>
                  <li><a className="dropdown__link" href="services/air-conditioning-repair.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-wrench" /></svg></span>A/C Repair</a></li>
                  <li><a className="dropdown__link" href="services/air-conditioning-maintenance.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-calendar" /></svg></span>A/C Maintenance</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="services.html" data-planned="">View All Services <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item has-dropdown">
              <button className="nav-link nav-link--toggle" type="button" aria-expanded="false" aria-controls="dd-ac-types">
                AC Types <svg className="icon nav-chevron"><use href="#i-chevron" /></svg>
              </button>
              <div className="dropdown" id="dd-ac-types">
                <ul className="dropdown__list">
                  <li><a className="dropdown__link" href="ac-types/wall-mount.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Wall Mount</a></li>
                  <li><a className="dropdown__link" href="ac-types/floor-standing.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-floor" /></svg></span>Floor Standing</a></li>
                  <li><a className="dropdown__link" href="ac-types/ducted.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-ducted" /></svg></span>Ducted</a></li>
                  <li><a className="dropdown__link" href="ac-types/cassette.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-cassette" /></svg></span>Cassette</a></li>
                  <li><a className="dropdown__link" href="ac-types/vrv-vrf.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-vrv" /></svg></span>VRV/VRF</a></li>
                  <li><a className="dropdown__link" href="ac-types/ceiling-suspended.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-ceiling" /></svg></span>Ceiling Suspended</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="ac-types.html" data-planned="">View All AC Types <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item has-dropdown">
              <button className="nav-link nav-link--toggle" type="button" aria-expanded="false" aria-controls="dd-brands">
                Brands <svg className="icon nav-chevron"><use href="#i-chevron" /></svg>
              </button>
              <div className="dropdown" id="dd-brands">
                <ul className="dropdown__list">
                  <li><a className="dropdown__link" href="brands/daikin-sensira.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Sensira</a></li>
                  <li><a className="dropdown__link" href="brands/daikin-perfera.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Perfera</a></li>
                  <li><a className="dropdown__link" href="brands/daikin-perfera-floor-standing.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-floor" /></svg></span>Daikin Perfera Floor Standing</a></li>
                  <li><a className="dropdown__link" href="brands/daikin-stylish.html" data-planned=""><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Stylish</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="brands.html" data-planned="">View All Brands <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item"><a className="nav-link" href="locations.html" data-planned="">Locations</a></li>
            <li className="nav-item"><a className="nav-link" href="gallery.html" data-planned="">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="reviews.html" data-planned="">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="care-plans.html" data-planned="">Care Plans</a></li>
            <li className="nav-item"><a className="nav-link" href="blog.html" data-planned="">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="refer-a-friend.html" data-planned="">Refer A Friend</a></li>
          </ul>

          <div className="site-nav__foot">
            <a className="btn btn--flame btn--block" href="/#survey">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
            <a className="site-nav__contact" href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a>
            <a className="site-nav__contact" href={`mailto:${site.email}`}><svg className="icon"><use href="#i-mail" /></svg>{site.email}</a>
            <a className="site-nav__contact" href={site.whatsappUrl} target="_blank" rel="noopener"><svg className="icon icon--fill"><use href="#i-whatsapp" /></svg>Message us on WhatsApp</a>
          </div>
        </nav>

        <div className="header-actions">
          <a className="header-call" href={site.phoneHref} aria-label={`Call ${site.phone}`}>
            <span className="header-call__icon"><svg className="icon"><use href="#i-phone" /></svg></span>
            <span className="header-call__text"><small>Call our team</small>{site.phone}</span>
          </a>
          <a className="btn btn--flame header-cta" href="/#survey">Book Your E-Survey</a>
          <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu" data-nav-toggle="">
            <span></span><span></span><span></span>
          </button>
        </div>

        <div className="nav-backdrop" data-nav-backdrop="" hidden></div>
      </div>
    </header>
  );
}
