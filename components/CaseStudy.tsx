export default function CaseStudy() {
  return (
    <section className="section case-study" id="case-study" aria-labelledby="case-title">
      <div className="container case-study__grid">
        <div className="video-card video-card--feature" data-video="" data-video-src="" data-video-title="Featured case study" data-reveal="image">
          <img className="video-card__poster" src="/assets/images/home/video-case-study.jpg" alt="" width="1200" height="846" loading="lazy" decoding="async" />
          <button className="video-card__play" type="button" aria-label="Play video: featured case study" data-video-play="" hidden><svg className="icon"><use href="#i-play" /></svg></button>
        </div>

        <div className="case-study__content">
          <div data-reveal="">
            <p className="eyebrow">Case study</p>
            <h2 className="section-title" id="case-title">Real projects, <span className="hl">filmed before and after</span></h2>
            <p className="section-lead">We film selected installs from start to finish: the room before we arrive, the work on the day and how the system performs once it's running.</p>
          </div>
          <ul className="case-metrics" data-reveal-group="">
            <li className="case-metric" data-reveal="">
              <strong className="case-metric__value">19<small>dBA</small></strong>
              <span>Quietest indoor units in silent mode</span>
            </li>
            <li className="case-metric" data-reveal="">
              <strong className="case-metric__value">3&ndash;4<small>kW</small></strong>
              <span>Of heating or cooling per 1&nbsp;kW used</span>
            </li>
            <li className="case-metric" data-reveal="">
              <strong className="case-metric__value">2<small>in 1</small></strong>
              <span>One system that heats and cools</span>
            </li>
          </ul>
          <div className="case-study__actions" data-reveal="">
            <a className="btn btn--primary" href="/case-studies/two-room-home">Read the Case Study <svg className="icon"><use href="#i-arrow" /></svg></a>
            <a className="btn btn--outline" href="/blog/how-air-conditioning-heats-and-cools">How heating and cooling works</a>
          </div>
        </div>
      </div>
    </section>
  );
}
