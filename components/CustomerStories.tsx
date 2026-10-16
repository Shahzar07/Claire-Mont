/**
 * Video cards stay in a "coming soon" state until data-video-src is filled in with a
 * YouTube link/ID or an .mp4 path; lib/site.js then shows the play button and loads the
 * video on click. No reference-company videos are used.
 */
export default function CustomerStories() {
  return (
    <section className="section stories" id="stories" aria-labelledby="stories-title">
      <div className="container">
        <div className="section-head section-head--split">
          <div data-reveal="">
            <p className="eyebrow">Customer stories</p>
            <h2 className="section-title" id="stories-title">Hear it from the <span className="hl">people we've fitted</span></h2>
          </div>
          <div data-reveal="">
            <p className="section-lead">Short films from homes and businesses we've worked in: what they needed, what we installed and how it's been since.</p>
          </div>
        </div>

        <div className="stories__videos" data-reveal-group="">
          <div className="video-card" data-video="" data-video-src="" data-video-title="Customer story: home installation" data-reveal="">
            <img className="video-card__poster" src="/assets/images/home/video-story-home.jpg" alt="" width="1000" height="667" loading="lazy" decoding="async" />
            <button className="video-card__play" type="button" aria-label="Play video: customer story, home installation" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
            <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Video coming soon</span>
            <div className="video-card__caption"><strong>Home installation</strong><span>Customer story</span></div>
          </div>
          <div className="video-card" data-video="" data-video-src="" data-video-title="Customer story: business installation" data-reveal="">
            <img className="video-card__poster" src="/assets/images/home/video-story-business.jpg" alt="" width="1000" height="1500" loading="lazy" decoding="async" />
            <button className="video-card__play" type="button" aria-label="Play video: customer story, business installation" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
            <span className="video-card__soon"><span className="video-card__soon-icon"><svg className="icon"><use href="#i-video" /></svg></span>Video coming soon</span>
            <div className="video-card__caption"><strong>Business installation</strong><span>Customer story</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
