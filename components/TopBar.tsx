import { site } from '@/lib/site-config';

export default function TopBar() {
  return (
    <div className="topbar" data-topbar="">
      <div className="container topbar__inner">
        <p className="topbar__services">
          <svg className="icon"><use href="#i-snowflake" /></svg>
          <span>Air Conditioning</span><span className="topbar__dot" aria-hidden="true"></span>
          <span>Heating</span><span className="topbar__dot" aria-hidden="true"></span>
          <span>Indoor Air Quality</span><span className="topbar__dot" aria-hidden="true"></span>
          <span>HVAC Service</span>
        </p>
        <ul className="topbar__contact">
          <li><a href={`mailto:${site.email}`}><svg className="icon"><use href="#i-mail" /></svg>{site.email}</a></li>
          <li><a href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a></li>
        </ul>
      </div>
    </div>
  );
}
