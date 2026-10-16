import { site } from '@/lib/site-config';

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title" data-hero="">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow" data-reveal="">Cooling &amp; heating for homes and businesses</p>
          <h1 className="hero__title" id="hero-title" data-reveal="">Live Better, Work Better, <span className="hl">Sleep Deeper.</span></h1>
          <p className="hero__lead" data-reveal="">Enjoy ultra-quiet air conditioning for homes and businesses, seamless installation, spotless cleanup and reliable maintenance.</p>

          <ul className="hero__features" data-reveal="">
            <li><span className="hero__feature-icon"><svg className="icon"><use href="#i-quiet" /></svg></span>Ultra-quiet systems</li>
            <li><span className="hero__feature-icon"><svg className="icon"><use href="#i-install" /></svg></span>Seamless installation</li>
            <li><span className="hero__feature-icon"><svg className="icon"><use href="#i-sparkle" /></svg></span>Spotless clean-up</li>
          </ul>

          <div className="hero__actions" data-reveal="">
            <a className="btn btn--flame btn--lg" href="/#survey">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
            <a className="btn btn--outline btn--lg" href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a>
          </div>
        </div>

        <div className="hero__media">

          <figure className="hero__frame" data-reveal="image">
            <img src="/assets/images/home/hero-bedroom-ac.jpg" alt="Calm bedroom with navy walls and a wall-mounted air conditioning unit above the bed" width="1600" height="1067" fetchPriority="high" decoding="async" />
          </figure>

          <div className="hero-card" data-reveal="">
            <span className="hero-card__icon"><svg className="icon"><use href="#i-support" /></svg></span>
            <div>
              <p className="hero-card__label">Talk to our team</p>
              <a className="hero-card__link hero-card__link--strong" href={site.phoneHref}>{site.phone}</a>
              <a className="hero-card__link" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
