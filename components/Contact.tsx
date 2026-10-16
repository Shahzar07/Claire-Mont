import { site } from '@/lib/site-config';

export default function Contact() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="container contact__grid">
        <div className="contact__info">
          <div data-reveal="">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title" id="contact-title">Talk to <span className="hl">our team</span></h2>
            <p className="section-lead">Questions, quotes or a system that's playing up: call, email or send us a WhatsApp message.</p>
          </div>

          <ul className="contact-cards" data-reveal-group="">
            <li data-reveal="">
              <a className="contact-card" href={site.phoneHref}>
                <span className="contact-card__icon"><svg className="icon"><use href="#i-phone" /></svg></span>
                <span className="contact-card__text"><small>Phone</small><strong>{site.phone}</strong></span>
                <svg className="icon contact-card__arrow"><use href="#i-arrow" /></svg>
              </a>
            </li>
            <li data-reveal="">
              <a className="contact-card" href={`mailto:${site.email}`}>
                <span className="contact-card__icon"><svg className="icon"><use href="#i-mail" /></svg></span>
                <span className="contact-card__text"><small>Email</small><strong>{site.email}</strong></span>
                <svg className="icon contact-card__arrow"><use href="#i-arrow" /></svg>
              </a>
            </li>
            <li data-reveal="">
              <a className="contact-card contact-card--whatsapp" href={site.whatsappUrl} target="_blank" rel="noopener">
                <span className="contact-card__icon"><svg className="icon icon--fill"><use href="#i-whatsapp" /></svg></span>
                <span className="contact-card__text"><small>WhatsApp</small><strong>Message us, we usually reply the same day</strong></span>
                <svg className="icon contact-card__arrow"><use href="#i-arrow" /></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="survey-panel" data-reveal="">
          <img className="survey-panel__logo" src="/assets/images/logo.jpg" alt="Claremont Cooling" width="1536" height="1024" loading="lazy" decoding="async" />
          <h3 className="survey-panel__title">Check availability and book your E-Survey</h3>
          <p>Answer a few quick questions (about 90 seconds) and we'll recommend the right system for your space. We'll ask about:</p>
          <ul className="checklist">
            <li><svg className="icon"><use href="#i-check" /></svg>Your postcode</li>
            <li><svg className="icon"><use href="#i-check" /></svg>Home or business</li>
            <li><svg className="icon"><use href="#i-check" /></svg>Rooms &amp; unit types</li>
            <li><svg className="icon"><use href="#i-check" /></svg>Your contact details</li>
          </ul>
          <div className="survey-panel__actions">
            <a className="btn btn--flame" href="/#survey"><svg className="icon"><use href="#i-survey" /></svg>Start Your E-Survey</a>
            <a className="btn btn--outline" href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>Call Now</a>
          </div>
          <p className="survey-panel__note">Prefer email? Write to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
      </div>
    </section>
  );
}
