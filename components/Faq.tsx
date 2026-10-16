import { site } from '@/lib/site-config';

export default function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <div className="faq__aside">
          <div data-reveal="">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title" id="faq-title">Common <span className="hl">questions</span></h2>
          </div>
          <figure className="faq__media" data-reveal="image">
            <img src="/assets/images/home/faq-thermostat.jpg" alt="Hand adjusting a modern wall-mounted climate control panel" width="900" height="600" loading="lazy" decoding="async" />
            <figcaption className="faq__callout">
              <span>Still have a question?</span>
              <a href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a>
            </figcaption>
          </figure>
        </div>

        <div className="faq__main">
          <div className="accordion" data-accordion="" data-accordion-single="" data-reveal-group="">
            <div className="acc-item is-open" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-1-btn" aria-expanded="true" aria-controls="faq-1" data-accordion-trigger="">
                  What does Claremont Cooling do?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-1" role="region" aria-labelledby="faq-1-btn">
                <div className="acc-panel__inner"><p>Claremont Cooling provides air conditioning installation, repair and maintenance for homes and businesses, alongside heating, indoor air quality and preventative HVAC servicing.</p></div>
              </div>
            </div>
            <div className="acc-item" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-2-btn" aria-expanded="false" aria-controls="faq-2" data-accordion-trigger="">
                  How does air conditioning work?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-2" role="region" aria-labelledby="faq-2-btn">
                <div className="acc-panel__inner"><p>An air conditioning system absorbs heat from inside the room through the indoor unit and releases it outside through the outdoor unit, much like a fridge. In heating mode the process runs in reverse, absorbing heat from outdoors and releasing it into the room, just like an air source heat pump.</p></div>
              </div>
            </div>
            <div className="acc-item" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-3-btn" aria-expanded="false" aria-controls="faq-3" data-accordion-trigger="">
                  Can air conditioning provide heating?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-3" role="region" aria-labelledby="faq-3-btn">
                <div className="acc-panel__inner"><p>Yes. Modern air conditioning systems can both heat and cool. Units that heat are known as heat pumps, and they are one of the most efficient ways to heat a room.</p></div>
              </div>
            </div>
            <div className="acc-item" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-4-btn" aria-expanded="false" aria-controls="faq-4" data-accordion-trigger="">
                  Is air conditioning expensive to run?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-4" role="region" aria-labelledby="faq-4-btn">
                <div className="acc-panel__inner"><p>Modern systems are very economical. For every 1kW of electricity used, an air conditioning system provides approximately 3–4kW of heating or cooling. Exact running costs depend on room size, insulation and energy prices, but as a rough guide a small-capacity unit can cost around 10–15p per hour to run.</p></div>
              </div>
            </div>
            <div className="acc-item" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-5-btn" aria-expanded="false" aria-controls="faq-5" data-accordion-trigger="">
                  Are air conditioning systems noisy?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-5" role="region" aria-labelledby="faq-5-btn">
                <div className="acc-panel__inner"><p>No. Modern indoor units are very quiet: the quietest models run as low as 19 dBA in silent mode, and outdoor units typically run at around 46–49 dBA.</p></div>
              </div>
            </div>
            <div className="acc-item" data-accordion-item="" data-reveal="">
              <h3 className="acc-heading">
                <button className="acc-trigger" type="button" id="faq-6-btn" aria-expanded="false" aria-controls="faq-6" data-accordion-trigger="">
                  How can I contact Claremont Cooling?<span className="acc-icon" aria-hidden="true"></span>
                </button>
              </h3>
              <div className="acc-panel" id="faq-6" role="region" aria-labelledby="faq-6-btn">
                <div className="acc-panel__inner"><p>Call us on <a className="text-link" href={site.phoneHref}>{site.phone}</a> email <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a> or <a className="text-link" href={site.whatsappUrl} target="_blank" rel="noopener">message us on WhatsApp</a>. We're happy to answer questions and arrange your E-Survey.</p></div>
              </div>
            </div>
          </div>

          <a className="btn btn--flame faq__cta" href="/#survey" data-reveal="">Book Your E-Survey <svg className="icon"><use href="#i-arrow" /></svg></a>
        </div>
      </div>
    </section>
  );
}
