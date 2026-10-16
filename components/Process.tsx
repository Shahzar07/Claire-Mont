export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <div className="section-head section-head--split">
          <h2 className="section-title" id="process-title" data-reveal="">Comfortable in <span className="hl">three steps</span></h2>
          <p className="section-lead" data-reveal="">From your first message to a working system, here is how it goes.</p>
        </div>

        <div className="process__grid">
          <div className="process__steps">
            <div className="steps" data-accordion="" data-accordion-single="" data-accordion-keep="" data-reveal-group="">
              <div className="step is-open" data-accordion-item="" data-reveal="">
                <h3 className="step__heading">
                  <button className="step__trigger" type="button" id="step-1-btn" aria-expanded="true" aria-controls="step-1" data-accordion-trigger="">
                    <span className="step__num">01</span>
                    <span className="step__title">Tell Us About Your Space</span>
                    <svg className="icon step__chevron"><use href="#i-chevron" /></svg>
                  </button>
                </h3>
                <div className="acc-panel" id="step-1" role="region" aria-labelledby="step-1-btn">
                  <div className="acc-panel__inner"><p>Fill in the short survey form with a few details about your property and the rooms you want cooled.</p></div>
                </div>
              </div>
              <div className="step" data-accordion-item="" data-reveal="">
                <h3 className="step__heading">
                  <button className="step__trigger" type="button" id="step-2-btn" aria-expanded="false" aria-controls="step-2" data-accordion-trigger="">
                    <span className="step__num">02</span>
                    <span className="step__title">Pick the Right System</span>
                    <svg className="icon step__chevron"><use href="#i-chevron" /></svg>
                  </button>
                </h3>
                <div className="acc-panel" id="step-2" role="region" aria-labelledby="step-2-btn">
                  <div className="acc-panel__inner"><p>We go through your space with you and recommend a system that fits the rooms, the budget and how you use them.</p></div>
                </div>
              </div>
              <div className="step" data-accordion-item="" data-reveal="">
                <h3 className="step__heading">
                  <button className="step__trigger" type="button" id="step-3-btn" aria-expanded="false" aria-controls="step-3" data-accordion-trigger="">
                    <span className="step__num">03</span>
                    <span className="step__title">We Fit It, You Enjoy It</span>
                    <svg className="icon step__chevron"><use href="#i-chevron" /></svg>
                  </button>
                </h3>
                <div className="acc-panel" id="step-3" role="region" aria-labelledby="step-3-btn">
                  <div className="acc-panel__inner"><p>We install it cleanly, show you how everything works and stay on hand for servicing and support.</p></div>
                </div>
              </div>
            </div>

            <a className="btn btn--flame process__cta" href="/#survey" data-reveal="">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
          </div>

          <div className="process__media">
            <figure className="media-frame process__frame" data-reveal="image">
              <img src="/assets/images/home/process-home.jpg" alt="Bright modern bedroom and study with a wall-mounted air conditioning unit" width="1100" height="733" loading="lazy" decoding="async" />
            </figure>
            <ul className="badges" data-reveal-group="">
              <li className="badge" data-reveal="">
                <span className="badge__icon"><svg className="icon"><use href="#i-survey" /></svg></span>
                <span><strong>Survey First</strong>The right system for your space</span>
              </li>
              <li className="badge" data-reveal="">
                <span className="badge__icon"><svg className="icon"><use href="#i-thermo" /></svg></span>
                <span><strong>Heating &amp; Cooling</strong>Year-round comfort from one system</span>
              </li>
              <li className="badge" data-reveal="">
                <span className="badge__icon"><svg className="icon"><use href="#i-support" /></svg></span>
                <span><strong>Full Handover</strong>Aftercare support once installed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
