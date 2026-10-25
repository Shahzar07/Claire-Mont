import { site } from '@/lib/site-config';

/**
 * Links are root-relative so the same header works on the homepage and on
 * nested pages. lib/site.js marks the link for the current URL.
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
                  <li><a className="dropdown__link" href="/services/residential-air-conditioning"><span className="dropdown__icon"><svg className="icon"><use href="#i-home" /></svg></span>Residential A/C</a></li>
                  <li><a className="dropdown__link" href="/services/commercial-air-conditioning"><span className="dropdown__icon"><svg className="icon"><use href="#i-building" /></svg></span>Commercial A/C</a></li>
                  <li><a className="dropdown__link" href="/services/air-conditioning-installation"><span className="dropdown__icon"><svg className="icon"><use href="#i-install" /></svg></span>A/C Installation</a></li>
                  <li><a className="dropdown__link" href="/services/air-conditioning-replacement"><span className="dropdown__icon"><svg className="icon"><use href="#i-refresh" /></svg></span>A/C Replacement</a></li>
                  <li><a className="dropdown__link" href="/services/air-conditioning-repair"><span className="dropdown__icon"><svg className="icon"><use href="#i-wrench" /></svg></span>A/C Repair</a></li>
                  <li><a className="dropdown__link" href="/services/air-conditioning-maintenance"><span className="dropdown__icon"><svg className="icon"><use href="#i-calendar" /></svg></span>A/C Maintenance</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="/services">View All Services <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item has-dropdown">
              <button className="nav-link nav-link--toggle" type="button" aria-expanded="false" aria-controls="dd-ac-types">
                AC Types <svg className="icon nav-chevron"><use href="#i-chevron" /></svg>
              </button>
              <div className="dropdown" id="dd-ac-types">
                <ul className="dropdown__list">
                  <li><a className="dropdown__link" href="/ac-types/wall-mount"><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Wall Mount</a></li>
                  <li><a className="dropdown__link" href="/ac-types/floor-standing"><span className="dropdown__icon"><svg className="icon"><use href="#i-floor" /></svg></span>Floor Standing</a></li>
                  <li><a className="dropdown__link" href="/ac-types/ducted"><span className="dropdown__icon"><svg className="icon"><use href="#i-ducted" /></svg></span>Ducted</a></li>
                  <li><a className="dropdown__link" href="/ac-types/cassette"><span className="dropdown__icon"><svg className="icon"><use href="#i-cassette" /></svg></span>Cassette</a></li>
                  <li><a className="dropdown__link" href="/ac-types/vrv-vrf"><span className="dropdown__icon"><svg className="icon"><use href="#i-vrv" /></svg></span>VRV/VRF</a></li>
                  <li><a className="dropdown__link" href="/ac-types/ceiling-suspended"><span className="dropdown__icon"><svg className="icon"><use href="#i-ceiling" /></svg></span>Ceiling Suspended</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="/ac-types">View All AC Types <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item has-dropdown">
              <button className="nav-link nav-link--toggle" type="button" aria-expanded="false" aria-controls="dd-brands">
                Brands <svg className="icon nav-chevron"><use href="#i-chevron" /></svg>
              </button>
              <div className="dropdown" id="dd-brands">
                <ul className="dropdown__list">
                  <li><a className="dropdown__link" href="/brands/daikin-sensira"><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Sensira</a></li>
                  <li><a className="dropdown__link" href="/brands/daikin-perfera"><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Perfera</a></li>
                  <li><a className="dropdown__link" href="/brands/daikin-perfera-floor-standing"><span className="dropdown__icon"><svg className="icon"><use href="#i-floor" /></svg></span>Daikin Perfera Floor Standing</a></li>
                  <li><a className="dropdown__link" href="/brands/daikin-stylish"><span className="dropdown__icon"><svg className="icon"><use href="#i-wall" /></svg></span>Daikin Stylish</a></li>
                  <li className="dropdown__all"><a className="dropdown__link" href="/brands">View All Brands <svg className="icon"><use href="#i-arrow" /></svg></a></li>
                </ul>
              </div>
            </li>

            <li className="nav-item"><a className="nav-link" href="/locations">Locations</a></li>
            <li className="nav-item"><a className="nav-link" href="/gallery">Gallery</a></li>
            <li className="nav-item"><a className="nav-link" href="/reviews">Reviews</a></li>
            <li className="nav-item"><a className="nav-link" href="/care-plans">Care Plans</a></li>
            <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="/refer-a-friend">Refer A Friend</a></li>
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
