export default function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow eyebrow--center" data-reveal="">Services</p>
          <h2 className="section-title" id="services-title" data-reveal="">Air conditioning for <span className="hl">homes and businesses</span></h2>
          <p className="section-lead" data-reveal="">New installations, quick repairs and planned maintenance, carried out by our own engineers.</p>
        </div>

        <div className="service-grid" data-reveal-group="">
          <article className="service-card" data-reveal="">
            <div className="service-card__media">
              <img src="/assets/images/home/service-installation.jpg" alt="Engineers installing commercial air conditioning condenser units on a rooftop" width="960" height="640" loading="lazy" decoding="async" />
            </div>
            <div className="service-card__body">
              <span className="service-card__icon"><svg className="icon"><use href="#i-install" /></svg></span>
              <h3 className="service-card__title"><a href="services/air-conditioning-installation.html" data-planned="">Air Conditioning Installation</a></h3>
              <p>Efficient wall, floor, ducted and cassette systems, sized for the room and fitted neatly.</p>
              <span className="link-arrow" aria-hidden="true">Explore Service <svg className="icon"><use href="#i-arrow" /></svg></span>
            </div>
          </article>

          <article className="service-card" data-reveal="">
            <div className="service-card__media">
              <img src="/assets/images/home/service-repairs.jpg" alt="Engineer wearing a tool belt arriving for a repair job" width="960" height="640" loading="lazy" decoding="async" />
            </div>
            <div className="service-card__body">
              <span className="service-card__icon"><svg className="icon"><use href="#i-wrench" /></svg></span>
              <h3 className="service-card__title"><a href="services/air-conditioning-repair.html" data-planned="">Air Conditioning Repairs</a></h3>
              <p>Fault finding and repairs on most makes, with the price agreed before any work starts.</p>
              <span className="link-arrow" aria-hidden="true">Explore Service <svg className="icon"><use href="#i-arrow" /></svg></span>
            </div>
          </article>

          <article className="service-card" data-reveal="">
            <div className="service-card__media">
              <img src="/assets/images/home/service-maintenance.jpg" alt="Close-up of a wall-mounted air conditioning unit set to 22 degrees" width="960" height="640" loading="lazy" decoding="async" />
            </div>
            <div className="service-card__body">
              <span className="service-card__icon"><svg className="icon"><use href="#i-calendar" /></svg></span>
              <h3 className="service-card__title"><a href="services/air-conditioning-maintenance.html" data-planned="">Air Conditioning Maintenance</a></h3>
              <p>Annual servicing that keeps filters clean, running costs down and the warranty intact.</p>
              <span className="link-arrow" aria-hidden="true">Explore Service <svg className="icon"><use href="#i-arrow" /></svg></span>
            </div>
          </article>
        </div>

        <div className="careplan" data-reveal="">
          <span className="careplan__icon"><svg className="icon"><use href="#i-calendar" /></svg></span>
          <p className="careplan__text"><strong>Already have air conditioning?</strong> Our <a className="text-link" href="care-plans.html" data-planned="">Care Plans</a> cover planned annual servicing, with every visit kept on record.</p>
          <a className="btn btn--flame" href="/#survey">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
        </div>
      </div>
    </section>
  );
}
