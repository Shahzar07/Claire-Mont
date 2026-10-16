import { site } from '@/lib/site-config';

/**
 * SAMPLE REVIEWS: replace before the site goes live.
 * The names, quotes and 5.0 rating below were written to show the layout only.
 * Publishing invented reviews is unlawful in the UK (DMCC Act 2024), so swap each
 * <figure class="tm-slide"> for a genuine customer review (and its avatar button
 * in .tm__people), and set the rating badge to match the Google Business profile.
 * Add or remove slides freely; lib/site.js (initTestimonials) adapts to any count.
 */
export default function Testimonials() {
  return (
    <section className="section testimonials" id="reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div data-reveal="">
            <p className="eyebrow">Reviews</p>
            <h2 className="section-title" id="reviews-title">What our <span className="hl">customers say</span></h2>
          </div>
          <div className="tm-rating" data-reveal="">
            <svg className="tm-rating__g" viewBox="0 0 48 48" aria-hidden="true" focusable="false"><path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" /><path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.5 2.4-7.2 2.4-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" /></svg>
            <div>
              <p className="tm-rating__score"><strong>5.0</strong><span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span></p>
              <p className="tm-rating__label">Average rating on Google</p>
            </div>
          </div>
        </div>

        <div className="tm" data-reveal="">
          <div className="tm__stage on-dark" data-testimonials="" role="region" aria-roledescription="carousel" aria-label="Customer reviews">
            <svg className="icon tm__mark" aria-hidden="true"><use href="#i-quote" /></svg>

            <div className="tm__slides" data-tm-slides="" aria-live="off">
              <figure className="tm-slide is-active" data-tm-slide="" role="group" aria-roledescription="slide" aria-label="Review 1 of 5">
                <span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span>
                <blockquote className="tm-slide__quote"><p>The E-Survey took about twenty minutes on a video call and the quote matched it to the penny. Two engineers fitted units in our bedroom and office in a single day and hoovered up before they left. At night you honestly can't hear it.</p></blockquote>
                <figcaption className="tm-slide__author"><span className="tm-avatar">SM</span><span><strong>Sarah M.</strong>Home installation, two rooms</span></figcaption>
              </figure>
              <figure className="tm-slide" data-tm-slide="" role="group" aria-roledescription="slide" aria-label="Review 2 of 5">
                <span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span>
                <blockquote className="tm-slide__quote"><p>Our comms room overheated every summer. They worked out the old unit was undersized, replaced it over a weekend so we had no downtime, and put us on a service plan. Not a single alarm since.</p></blockquote>
                <figcaption className="tm-slide__author"><span className="tm-avatar tm-avatar--warm">DO</span><span><strong>Daniel O.</strong>Office manager, commercial A/C</span></figcaption>
              </figure>
              <figure className="tm-slide" data-tm-slide="" role="group" aria-roledescription="slide" aria-label="Review 3 of 5">
                <span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span>
                <blockquote className="tm-slide__quote"><p>Our system stopped cooling halfway through a heatwave. They came out the next morning, traced a slow leak to one pipe joint and had it re-gassed and running by lunchtime. Clear price up front, no surprises.</p></blockquote>
                <figcaption className="tm-slide__author"><span className="tm-avatar tm-avatar--leaf">PK</span><span><strong>Priya K.</strong>Air conditioning repair</span></figcaption>
              </figure>
              <figure className="tm-slide" data-tm-slide="" role="group" aria-roledescription="slide" aria-label="Review 4 of 5">
                <span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span>
                <blockquote className="tm-slide__quote"><p>Booked the annual service for three units. The engineer turned up on time, cleaned the filters and coils, and emailed photos and a short report the same afternoon. Easy to deal with.</p></blockquote>
                <figcaption className="tm-slide__author"><span className="tm-avatar">MT</span><span><strong>Mark T.</strong>Annual maintenance</span></figcaption>
              </figure>
              <figure className="tm-slide" data-tm-slide="" role="group" aria-roledescription="slide" aria-label="Review 5 of 5">
                <span className="tm-stars" role="img" aria-label="Rated 5 out of 5"><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg><svg className="icon"><use href="#i-star" /></svg></span>
                <blockquote className="tm-slide__quote"><p>We got it for the summer but now use it for heating most of the year. The garden room is finally usable in January and it costs less to run than the old electric heaters did.</p></blockquote>
                <figcaption className="tm-slide__author"><span className="tm-avatar tm-avatar--warm">HR</span><span><strong>Helen R.</strong>Heating &amp; cooling, garden room</span></figcaption>
              </figure>
            </div>

            <div className="tm__footer">
              <div className="tm__people" data-tm-people="">
                <button className="tm-person is-active" type="button" data-tm-go="0" aria-label="Show review from Sarah M." aria-current="true"><span className="tm-avatar">SM</span></button>
                <button className="tm-person" type="button" data-tm-go="1" aria-label="Show review from Daniel O."><span className="tm-avatar tm-avatar--warm">DO</span></button>
                <button className="tm-person" type="button" data-tm-go="2" aria-label="Show review from Priya K."><span className="tm-avatar tm-avatar--leaf">PK</span></button>
                <button className="tm-person" type="button" data-tm-go="3" aria-label="Show review from Mark T."><span className="tm-avatar">MT</span></button>
                <button className="tm-person" type="button" data-tm-go="4" aria-label="Show review from Helen R."><span className="tm-avatar tm-avatar--warm">HR</span></button>
              </div>
              <div className="tm__controls">
                <span className="tm__count" data-tm-count="" aria-hidden="true">01 / 05</span>
                <button className="tm__btn" type="button" aria-label="Pause automatic slideshow" data-tm-toggle=""><svg className="icon"><use href="#i-pause" /></svg></button>
                <button className="tm__btn" type="button" aria-label="Previous review" data-tm-prev=""><svg className="icon"><use href="#i-arrow-left" /></svg></button>
                <button className="tm__btn" type="button" aria-label="Next review" data-tm-next=""><svg className="icon"><use href="#i-arrow" /></svg></button>
              </div>
            </div>
            <div className="tm__progress" aria-hidden="true"><span data-tm-progress=""></span></div>
          </div>

          <aside className="tm__aside" aria-label="Leave a review">
            <figure className="tm__photo">
              <img src="/assets/images/home/why-residential.jpg" alt="Living room with a wall-mounted air conditioning unit fitted by our team" width="800" height="1107" loading="lazy" decoding="async" />
            </figure>
            <div className="tm__invite">
              <p className="tm__invite-title">Had work done by us?</p>
              <p>A couple of lines about how it went helps other people choose with confidence.</p>
              <a className="btn btn--flame" href={`mailto:${site.email}?subject=My%20Claremont%20Cooling%20review`}>Leave a Review <svg className="icon"><use href="#i-arrow" /></svg></a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
