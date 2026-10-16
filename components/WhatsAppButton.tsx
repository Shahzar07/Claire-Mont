import { site } from '@/lib/site-config';

/**
 * Floating WhatsApp button
 */
export default function WhatsAppButton() {
  return (
    <a className="wa-float" href={site.whatsappUrl} target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp">
      <svg className="icon icon--fill" aria-hidden="true"><use href="#i-whatsapp" /></svg>
      <span className="wa-float__label" aria-hidden="true">Chat on WhatsApp</span>
    </a>
  );
}
