/**
 * Add an .mp4 path (or YouTube link) to data-video-src to activate each clip.
 */
export default function BehindTheScenes() {
  return (
    <section className="section bts" id="behind-the-scenes" aria-labelledby="bts-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div data-reveal="">
            <p className="eyebrow">On the job</p>
            <h2 className="section-title" id="bts-title">Behind <span className="hl">the scenes</span></h2>
          </div>
          <p className="section-lead" data-reveal="">Installs, repairs and servicing, filmed by our engineers on site.</p>
        </div>

        <div className="carousel bts__carousel" data-carousel="" data-reveal="">
          <div className="carousel__track" data-carousel-track="" tabIndex={0} role="region" aria-label="Behind-the-scenes videos">
            <div className="video-card video-card--portrait carousel__slide" data-video="" data-video-src="" data-video-title="Behind the scenes: installations">
              <img className="video-card__poster" src="/assets/images/home/bts-installations.jpg" alt="" width="720" height="480" loading="lazy" decoding="async" />
              <button className="video-card__play" type="button" aria-label="Play video: installations" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
              <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Coming soon</span>
              <div className="video-card__caption"><strong>Installations</strong><span>On site</span></div>
            </div>
            <div className="video-card video-card--portrait carousel__slide" data-video="" data-video-src="" data-video-title="Behind the scenes: repairs and diagnostics">
              <img className="video-card__poster" src="/assets/images/home/bts-repairs.jpg" alt="" width="720" height="540" loading="lazy" decoding="async" />
              <button className="video-card__play" type="button" aria-label="Play video: repairs and diagnostics" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
              <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Coming soon</span>
              <div className="video-card__caption"><strong>Repairs</strong><span>Diagnostics</span></div>
            </div>
            <div className="video-card video-card--portrait carousel__slide" data-video="" data-video-src="" data-video-title="Behind the scenes: servicing">
              <img className="video-card__poster" src="/assets/images/home/bts-servicing.jpg" alt="" width="720" height="1081" loading="lazy" decoding="async" />
              <button className="video-card__play" type="button" aria-label="Play video: servicing" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
              <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Coming soon</span>
              <div className="video-card__caption"><strong>Servicing</strong><span>Maintenance</span></div>
            </div>
            <div className="video-card video-card--portrait carousel__slide" data-video="" data-video-src="" data-video-title="Behind the scenes: commercial projects">
              <img className="video-card__poster" src="/assets/images/home/bts-commercial.jpg" alt="" width="720" height="480" loading="lazy" decoding="async" />
              <button className="video-card__play" type="button" aria-label="Play video: commercial projects" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
              <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Coming soon</span>
              <div className="video-card__caption"><strong>Commercial</strong><span>Projects</span></div>
            </div>
            <div className="video-card video-card--portrait carousel__slide" data-video="" data-video-src="" data-video-title="Behind the scenes: outdoor units">
              <img className="video-card__poster" src="/assets/images/home/bts-outdoor-units.jpg" alt="" width="720" height="1080" loading="lazy" decoding="async" />
              <button className="video-card__play" type="button" aria-label="Play video: outdoor units" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
              <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Coming soon</span>
              <div className="video-card__caption"><strong>Outdoor units</strong><span>Plant &amp; pipework</span></div>
            </div>
          </div>
          <div className="carousel__controls">
            <button className="carousel__btn" type="button" aria-label="Previous videos" data-carousel-prev=""><svg className="icon"><use href="#i-arrow-left" /></svg></button>
            <div className="carousel__dots" data-carousel-dots=""></div>
            <button className="carousel__btn" type="button" aria-label="Next videos" data-carousel-next=""><svg className="icon"><use href="#i-arrow" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
}
