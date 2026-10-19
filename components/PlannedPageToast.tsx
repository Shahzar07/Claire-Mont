import { site } from '@/lib/site-config';

/**
 * Contact options for pages without a published route
 */
export default function PlannedPageToast() {
  return (
    <>
      <div className="toast" data-toast="" hidden>
        <span className="toast__icon"><svg className="icon"><use href="#i-calendar" /></svg></span>
        <div className="toast__body">
          <p className="toast__title" data-toast-title="">Speak to our team</p>
          <p className="toast__text">For details, call <a href={site.phoneHref}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
        </div>
        <button className="toast__close" type="button" aria-label="Dismiss notice" data-toast-close=""><svg className="icon"><use href="#i-close" /></svg></button>
      </div>
      <p className="sr-only" role="status" aria-live="polite" data-toast-live=""></p>
    </>
  );
}
