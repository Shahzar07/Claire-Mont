import type { ReactNode } from 'react';
import PageShell from '@/components/pages/PageShell';
import LocationFinder from '@/components/pages/LocationFinder';
import { areaCount, areaGroups } from '@/lib/areas';
import { site } from '@/lib/site-config';
import type { Action, Card, ImageRef, Page, Section } from '@/lib/pages';

const TOKEN = /(\*\*([^*]+)\*\*)|\[([^\]]+)\]\(([^)\s]+)\)/g;

function Rich({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let index = 0;

  for (const match of text.matchAll(TOKEN)) {
    const at = match.index ?? 0;
    if (at > last) nodes.push(text.slice(last, at));

    if (match[2]) {
      nodes.push(<strong key={index}>{match[2]}</strong>);
    } else if (match[3] && match[4]) {
      const href = match[4];
      const safe = href.startsWith('/') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('https://');
      if (safe) {
        const external = href.startsWith('https://');
        nodes.push(
          <a
            key={index}
            className="text-link"
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {match[3]}
          </a>,
        );
      } else {
        nodes.push(match[3]);
      }
    }

    last = at + match[0].length;
    index += 1;
  }

  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

function Highlight({ text, as: Tag, className, id }: { text: string; as: 'h1' | 'h2' | 'h3'; className?: string; id?: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/);
  return (
    <Tag className={className} id={id}>
      {parts.map((part, i) => (i % 2 === 1 ? <span className="hl" key={i}>{part}</span> : <span key={i}>{part}</span>))}
    </Tag>
  );
}

function Icon({ name, className }: { name: string; className?: string }) {
  const classes = ['icon', name === 'i-whatsapp' ? 'icon--fill' : '', className].filter(Boolean).join(' ');
  return (
    <svg className={classes} aria-hidden="true" focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}

function Button({ action }: { action: Action }) {
  const variant = action.variant ?? 'flame';
  const icon = action.icon;
  return (
    <a className={`btn btn--${variant}`} href={action.href}>
      {icon && icon !== 'i-arrow' ? <Icon name={icon} /> : null}
      {action.label}
      {icon === 'i-arrow' ? <Icon name="i-arrow" /> : null}
    </a>
  );
}

function Photo({ image, className }: { image: ImageRef; className?: string }) {
  return (
    <img
      className={className}
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading="lazy"
      decoding="async"
    />
  );
}

function SectionIntro({ heading, intro }: { heading?: string; intro?: string }) {
  if (!heading && !intro) return null;
  return (
    <div className="section-head">
      {heading ? <Highlight as="h2" className="section-title" text={heading} /> : null}
      {intro ? <p className="section-lead"><Rich text={intro} /></p> : null}
    </div>
  );
}

const bookAction: Action = { href: '/#survey', label: 'Book Your E-Survey', variant: 'flame', icon: 'i-arrow' };
const callAction: Action = { href: site.phoneHref, label: 'Call us', variant: 'outline', icon: 'i-phone' };

function LinkCard({ card }: { card: Card }) {
  if (card.image) {
    return (
      <article className="service-card">
        <div className="service-card__media">
          <Photo image={card.image} />
        </div>
        <div className="service-card__body">
          {card.icon ? (
            <span className="service-card__icon"><Icon name={card.icon} /></span>
          ) : null}
          <h3 className="service-card__title"><a href={card.href}>{card.title}</a></h3>
          <p><Rich text={card.text} /></p>
          <span className="link-arrow" aria-hidden="true">Read more <Icon name="i-arrow" /></span>
        </div>
      </article>
    );
  }

  return (
    <article className="text-card">
      {card.icon ? <span className="text-card__icon"><Icon name={card.icon} /></span> : null}
      <h3 className="text-card__title"><a href={card.href}>{card.title}</a></h3>
      <p><Rich text={card.text} /></p>
      <span className="link-arrow" aria-hidden="true">Read more <Icon name="i-arrow" /></span>
    </article>
  );
}

const sampleSlots = [
  'A home installation',
  'A commercial project',
  'A repair',
  'An annual service',
  'Heating and cooling through the year',
];

function ReviewsBlock() {
  return (
    <div className="review-grid">
      {sampleSlots.map((slot) => (
        <article className="review-card review-card--placeholder" key={slot}>
          <div className="review-card__top">
            <span className="tag">Review</span>
            <span className="review-card__stars" aria-hidden="true">
              <Icon name="i-star" /><Icon name="i-star" /><Icon name="i-star" /><Icon name="i-star" /><Icon name="i-star" />
            </span>
          </div>
          <p className="review-card__text">A review of {slot.toLowerCase()}.</p>
          <p className="review-card__author">
            <span className="review-card__avatar" aria-hidden="true"><Icon name="i-user" /></span>
            <span><strong>Your name</strong>{slot}</span>
          </p>
        </article>
      ))}
    </div>
  );
}

function ContactBlock() {
  return (
    <div className="contact-layout">
      <div>
        <h2 className="section-title">Call, email or <span className="hl">WhatsApp</span></h2>
        <p className="section-lead contact-layout__lead">Questions, quotes or a system that is playing up. We usually reply the same day.</p>
        <ul className="contact-cards">
          <li>
            <a className="contact-card" href={site.phoneHref}>
              <span className="contact-card__icon"><Icon name="i-phone" /></span>
              <span className="contact-card__text"><small>Phone</small><strong>{site.phone}</strong></span>
              <Icon name="i-arrow" className="contact-card__arrow" />
            </a>
          </li>
          <li>
            <a className="contact-card" href={`mailto:${site.email}`}>
              <span className="contact-card__icon"><Icon name="i-mail" /></span>
              <span className="contact-card__text"><small>Email</small><strong>{site.email}</strong></span>
              <Icon name="i-arrow" className="contact-card__arrow" />
            </a>
          </li>
          <li>
            <a className="contact-card contact-card--whatsapp" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <span className="contact-card__icon"><Icon name="i-whatsapp" /></span>
              <span className="contact-card__text"><small>WhatsApp</small><strong>Message us, we usually reply the same day</strong></span>
              <Icon name="i-arrow" className="contact-card__arrow" />
            </a>
          </li>
        </ul>
      </div>

      <div className="survey-card">
        <h2 className="enquiry-title">Send a message</h2>
        <p className="enquiry-intro">Tell us what you need. For a system recommendation, the <a className="text-link" href="/#survey">E-Survey</a> is the quicker route.</p>
        <form
          className="enquiry-form"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
          data-enquiry-form=""
          data-enquiry-email={site.email}
          data-enquiry-subject="Website enquiry"
        >
          <div className="form-grid">
            <div className="field">
              <label className="field__label" htmlFor="ct-name">Your name</label>
              <input className="field__input" id="ct-name" name="Name" type="text" autoComplete="name" required minLength={2} />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="ct-email">Email</label>
              <input className="field__input" id="ct-email" name="Email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="ct-phone">Phone</label>
              <input className="field__input" id="ct-phone" name="Phone" type="tel" autoComplete="tel" required pattern="[0-9\s+\(\)\-]{7,20}" data-error="Please enter a valid phone number." placeholder="e.g. 07764 936622" />
            </div>
            <div className="field">
              <label className="field__label" htmlFor="ct-postcode">Postcode <span className="field__optional">Optional</span></label>
              <input className="field__input" id="ct-postcode" name="Postcode" type="text" autoComplete="postal-code" autoCapitalize="characters" pattern="\s*[A-Za-z]{1,2}[0-9][A-Za-z0-9]?\s*[0-9][A-Za-z]{2}\s*" data-error="Please enter a valid UK postcode." data-uppercase="" placeholder="e.g. SW1A 1AA" />
            </div>
            <div className="field field--full">
              <label className="field__label" htmlFor="ct-topic">What is this about?</label>
              <select className="field__input" id="ct-topic" name="Topic" required defaultValue="">
                <option value="" disabled>Choose a topic</option>
                <option>New installation</option>
                <option>Replacement</option>
                <option>Repair</option>
                <option>Maintenance or a care plan</option>
                <option>Commercial project</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="field field--full">
              <label className="field__label" htmlFor="ct-message">Message</label>
              <textarea className="field__input" id="ct-message" name="Message" rows={5} required minLength={10} data-error="Please write at least a short message." placeholder="The rooms, the system you have, or the question you want answered." />
            </div>
            <div className="field field--full">
              <label className="choice choice--check">
                <input type="checkbox" name="Consent" value="Agreed" required />
                <span className="choice__box">I am happy for Claremont Cooling to contact me about this message.</span>
              </label>
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn--flame" type="submit">Send message <Icon name="i-arrow" /></button>
          </div>
          <p className="survey-form__note">Sending opens your email app with this message addressed to {site.email}. Nothing leaves your device until you press send there.</p>
          <EnquiryDone email={site.email} />
        </form>
      </div>
    </div>
  );
}

function ReferBlock() {
  return (
    <div className="survey-card enquiry-card">
      <h2 className="enquiry-title">Pass on a name</h2>
      <p className="enquiry-intro">We will contact your friend only about the introduction, and we will confirm any thank-you in writing.</p>
      <form
        className="enquiry-form"
        action={`mailto:${site.email}`}
        method="post"
        encType="text/plain"
        data-enquiry-form=""
        data-enquiry-email={site.email}
        data-enquiry-subject="Refer a friend"
      >
        <div className="form-grid">
          <div className="field">
            <label className="field__label" htmlFor="rf-name">Your name</label>
            <input className="field__input" id="rf-name" name="Your name" type="text" autoComplete="name" required minLength={2} />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rf-email">Your email</label>
            <input className="field__input" id="rf-email" name="Your email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rf-phone">Your phone</label>
            <input className="field__input" id="rf-phone" name="Your phone" type="tel" autoComplete="tel" required pattern="[0-9\s+\(\)\-]{7,20}" data-error="Please enter a valid phone number." />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rf-friend">Friend&apos;s name</label>
            <input className="field__input" id="rf-friend" name="Friend name" type="text" autoComplete="off" required minLength={2} />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rf-friend-email">Friend&apos;s email</label>
            <input className="field__input" id="rf-friend-email" name="Friend email" type="email" autoComplete="off" required />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="rf-friend-phone">Friend&apos;s phone <span className="field__optional">Optional</span></label>
            <input className="field__input" id="rf-friend-phone" name="Friend phone" type="tel" autoComplete="off" pattern="[0-9\s+\(\)\-]{7,20}" data-error="Please enter a valid phone number." />
          </div>
          <div className="field field--full">
            <label className="field__label" htmlFor="rf-note">Anything we should know? <span className="field__optional">Optional</span></label>
            <textarea className="field__input" id="rf-note" name="Note" rows={4} placeholder="For example, they want cooling in a bedroom and a home office." />
          </div>
          <div className="field field--full">
            <label className="choice choice--check">
              <input type="checkbox" name="Consent" value="Agreed" required />
              <span className="choice__box">My friend is happy for me to pass these details to Claremont Cooling, and I am happy for you to contact me about this referral.</span>
            </label>
          </div>
        </div>
        <div className="form-actions">
          <button className="btn btn--flame" type="submit">Send referral <Icon name="i-arrow" /></button>
        </div>
        <p className="survey-form__note">Sending opens your email app addressed to {site.email}. We only see the referral after you press send.</p>
        <EnquiryDone email={site.email} />
      </form>
    </div>
  );
}

function EnquiryDone({ email }: { email: string }) {
  return (
    <div className="survey-done" data-enquiry-done="" hidden>
      <span className="survey-done__icon"><Icon name="i-mail" /></span>
      <h3 className="survey-done__title" tabIndex={-1}>Your email is ready to send</h3>
      <p>We&apos;ve opened your email app with your message addressed to <a className="text-link" href={`mailto:${email}`}>{email}</a>. <strong>Press send</strong> and we will come back to you.</p>
      <label className="field__label" htmlFor="enquiry-summary">Email app didn&apos;t open? Copy your message and email it to us:</label>
      <textarea className="field__input survey-done__summary" id="enquiry-summary" rows={5} readOnly data-enquiry-summary="" />
      <div className="survey-done__actions">
        <button className="btn btn--primary" type="button" data-enquiry-copy=""><Icon name="i-copy" /><span data-enquiry-copy-label="">Copy message</span></button>
        <button className="btn btn--outline" type="button" data-enquiry-edit="">Edit message</button>
      </div>
    </div>
  );
}

function FaqList({ items, idBase }: { items: { q: string; a: string }[]; idBase: string }) {
  return (
    <div className="accordion" data-accordion="" data-accordion-single="">
      {items.map((item, i) => {
        const id = `${idBase}-q${i}`;
        const open = i === 0;
        return (
          <div className={open ? 'acc-item is-open' : 'acc-item'} data-accordion-item="" key={id}>
            <h3 className="acc-heading">
              <button className="acc-trigger" type="button" id={`${id}-btn`} aria-expanded={open} aria-controls={id} data-accordion-trigger="">
                {item.q}<span className="acc-icon" aria-hidden="true" />
              </button>
            </h3>
            <div className="acc-panel" id={id} role="region" aria-labelledby={`${id}-btn`}>
              <div className="acc-panel__inner"><p><Rich text={item.a} /></p></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function renderSection(section: Section, index: number, page: Page) {
  const idBase = page.path.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'page';
  const band = section.type === 'features' || section.type === 'cards' || section.type === 'plans' || section.type === 'gallery' || section.type === 'reviews' || section.type === 'stats' || section.type === 'areas';

  let body: ReactNode = null;

  switch (section.type) {
    case 'prose':
      body = (
        <div className="prose">
          {section.paragraphs.map((paragraph) => <p key={paragraph}><Rich text={paragraph} /></p>)}
        </div>
      );
      break;
    case 'features':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <ul className="feature-grid">
            {section.items.map((item) => (
              <li className="feature-card" key={item.title}>
                <span className="feature-card__icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p><Rich text={item.text} /></p>
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case 'cards':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <div className={section.items.some((item) => item.image) ? `service-grid${section.columns === 2 ? ' service-grid--pair' : ''}` : `card-grid${section.columns === 2 ? ' card-grid--2' : ''}`}>
            {section.items.map((card) => <LinkCard card={card} key={card.href} />)}
          </div>
        </>
      );
      break;
    case 'steps':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <ol className="page-steps">
            {section.items.map((item, step) => (
              <li key={item.title}>
                <span className="page-steps__num">{String(step + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p><Rich text={item.text} /></p>
                </div>
              </li>
            ))}
          </ol>
        </>
      );
      break;
    case 'checklist':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <ul className="tick-list">
            {section.items.map((item) => (
              <li key={item}><Icon name="i-check" /><span><Rich text={item} /></span></li>
            ))}
          </ul>
        </>
      );
      break;
    case 'areas':
      body = <LocationFinder groups={areaGroups} total={areaCount} />;
      break;
    case 'note':
      body = (
        <p className="placeholder-note">
          <Icon name="i-clock" />
          <span><Rich text={section.text} /></span>
        </p>
      );
      break;
    case 'faq':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <FaqList items={section.items} idBase={`${idBase}-${index}`} />
        </>
      );
      break;
    case 'gallery':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <ul className="gallery-grid">
            {section.items.map((item) => (
              <li key={item.src}>
                <figure className="gallery-card">
                  <div className="media-frame gallery-card__frame">
                    <Photo image={item} />
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </>
      );
      break;
    case 'reviews':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <ReviewsBlock />
        </>
      );
      break;
    case 'contact':
      body = <ContactBlock />;
      break;
    case 'refer':
      body = <ReferBlock />;
      break;
    case 'stats':
      body = (
        <ul className="stat-grid">
          {section.items.map((item) => (
            <li className="case-metric" key={item.label}>
              <strong className="case-metric__value">{item.value}{item.unit ? <small>{item.unit}</small> : null}</strong>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      );
      break;
    case 'split':
      body = (
        <div className="split">
          <figure className="media-frame split__media">
            <Photo image={section.image} />
          </figure>
          <div className="prose">
            {section.heading ? <Highlight as="h2" className="section-title" text={section.heading} /> : null}
            {section.paragraphs.map((paragraph) => <p key={paragraph}><Rich text={paragraph} /></p>)}
          </div>
        </div>
      );
      break;
    case 'plans':
      body = (
        <>
          <SectionIntro heading={section.heading} intro={section.intro} />
          <div className="plan-grid">
            {section.items.map((plan) => (
              <article className={plan.featured ? 'plan plan--featured' : 'plan'} key={plan.name}>
                {plan.featured ? <span className="tag">Most homes start here</span> : null}
                <h3>{plan.name}</h3>
                <p className="plan__for">{plan.forWho}</p>
                <ul className="tick-list">
                  {plan.points.map((point) => (
                    <li key={point}><Icon name="i-check" /><span>{point}</span></li>
                  ))}
                </ul>
                <a className="btn btn--flame" href={plan.href}>{plan.cta} <Icon name="i-arrow" /></a>
              </article>
            ))}
          </div>
        </>
      );
      break;
    case 'legal':
      body = (
        <div className="legal">
          {section.blocks.map((block) => (
            <section key={block.heading}>
              <h2>{block.heading}</h2>
              {block.paragraphs.map((paragraph) => <p key={paragraph}><Rich text={paragraph} /></p>)}
            </section>
          ))}
        </div>
      );
      break;
    default: {
      const unreachable: never = section;
      return unreachable;
    }
  }

  const tone = section.type === 'note' ? 'section section--note' : band ? 'section page-band' : 'section';

  return (
    <section className={tone} key={`${section.type}-${index}`}>
      <div className="container">{body}</div>
    </section>
  );
}

export default function InnerPage({ page }: { page: Page }) {
  const crumbs = [{ href: '/', label: 'Home' }, ...page.crumbs];
  const actions = page.actions ?? [bookAction, callAction];
  const cta = page.cta === null ? null : (page.cta ?? {
    eyebrow: 'Next step',
    title: 'Book your **E-Survey**',
    text: 'Tell us about the space and we will recommend a system. The form takes about 90 seconds, then we prepare a quotation.',
    actions: [bookAction, { ...callAction, variant: 'ghost-light' }],
  });

  return (
    <PageShell>
      <header className="page-hero" id="top" data-hero="">
        <div className={page.image ? 'container page-hero__grid page-hero__grid--media' : 'container page-hero__grid'}>
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <ol>
                {crumbs.map((crumb, index) => {
                  const last = index === crumbs.length - 1;
                  return (
                    <li key={`${crumb.label}-${index}`}>
                      {!last && crumb.href ? <a href={crumb.href}>{crumb.label}</a> : <span aria-current="page">{crumb.label}</span>}
                    </li>
                  );
                })}
              </ol>
            </nav>
            <p className="eyebrow">{page.eyebrow}</p>
            <Highlight as="h1" className="page-title" text={page.heading} />
            <p className="page-hero__lead">{page.lead}</p>
            {actions.length > 0 ? (
              <div className="page-hero__actions">
                {actions.map((action) => <Button action={action} key={action.href + action.label} />)}
              </div>
            ) : null}
          </div>
          {page.image ? (
            <figure className="media-frame page-hero__frame">
              <img
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width}
                height={page.image.height}
                fetchPriority="high"
                decoding="async"
              />
            </figure>
          ) : null}
        </div>
      </header>

      {page.sections.map((section, index) => renderSection(section, index, page))}

      {cta ? (
        <section className="page-cta on-dark" aria-labelledby="page-cta-title">
          <div className="container page-cta__inner">
            <div>
              <p className="eyebrow eyebrow--light">{cta.eyebrow ?? 'Next step'}</p>
              <Highlight as="h2" className="section-title" id="page-cta-title" text={cta.title} />
              <p className="section-lead">{cta.text}</p>
            </div>
            <div className="page-cta__actions">
              {(cta.actions ?? [bookAction, { ...callAction, variant: 'ghost-light' }]).map((action) => (
                <Button action={action} key={action.href + action.label} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </PageShell>
  );
}
