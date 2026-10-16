export default function WhyChooseUs() {
  return (
    <section className="section why on-dark" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div data-reveal="">
            <p className="eyebrow eyebrow--light">Why us</p>
            <h2 className="section-title" id="why-title">Why people choose <span className="hl">Claremont Cooling</span></h2>
          </div>
          <a className="btn btn--flame" href="/#survey" data-reveal="">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
        </div>

        <div className="why__grid" data-reveal-group="">
          <article className="why-card why-card--a" data-reveal="">
            <span className="why-card__icon"><svg className="icon"><use href="#i-building" /></svg></span>
            <h3 className="why-card__title">Homes &amp; Businesses</h3>
            <p>Residential and commercial systems, from a single bedroom to a whole office floor.</p>
          </article>

          <figure className="why__img why__img--1" data-reveal="image">
            <img src="/assets/images/home/why-residential.jpg" alt="Modern living room with a wall-mounted air conditioning unit" width="800" height="1107" loading="lazy" decoding="async" />
          </figure>

          <article className="why-card why-card--b" data-reveal="">
            <span className="why-card__icon"><svg className="icon"><use href="#i-thermo" /></svg></span>
            <h3 className="why-card__title">Heating &amp; Cooling</h3>
            <p>Modern systems heat as well as cool, which makes them one of the most efficient ways to keep a room comfortable all year.</p>
          </article>

          <article className="why-card why-card--c" data-reveal="">
            <span className="why-card__icon"><svg className="icon"><use href="#i-quiet" /></svg></span>
            <h3 className="why-card__title">Ultra-Quiet Comfort</h3>
            <p>The quietest indoor units run at just 19 dBA in silent mode, so you can live, work and sleep undisturbed.</p>
          </article>

          <figure className="why__img why__img--2" data-reveal="image">
            <img src="/assets/images/home/why-commercial.jpg" alt="Engineer on a platform fitting ceiling services in a commercial building" width="900" height="600" loading="lazy" decoding="async" />
          </figure>

          <article className="why-card why-card--d" data-reveal="">
            <span className="why-card__icon"><svg className="icon"><use href="#i-sparkle" /></svg></span>
            <h3 className="why-card__title">Spotless, Seamless Installs</h3>
            <p>Seamless installation and a spotless clean-up, with a full handover before we leave.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
