export default function Standards() {
  return (
    <section className="section standards" aria-labelledby="standards-title">
      <div className="container">
        <div className="standards__intro">
          <div data-reveal="">
            <p className="eyebrow">What we cover</p>
            <h2 className="section-title" id="standards-title">Cooling, heating and servicing, <span className="hl">one team</span> start to finish</h2>
          </div>
          <p className="standards__text" data-reveal="">We survey the space, recommend a system that suits it, fit it cleanly and look after it afterwards. The same team from your first call to your annual service.</p>
        </div>

        <ul className="pillars" data-reveal-group="">
          <li className="pillar pillar--cool" data-reveal="">
            <span className="pillar__icon"><svg className="icon"><use href="#i-snowflake" /></svg></span>
            <h3 className="pillar__title">Air Conditioning</h3>
            <p className="pillar__tags"><span>Installation</span><span>Repair</span><span>Maintenance</span></p>
          </li>
          <li className="pillar pillar--heat" data-reveal="">
            <span className="pillar__icon"><svg className="icon"><use href="#i-flame" /></svg></span>
            <h3 className="pillar__title">Heating</h3>
            <p className="pillar__tags"><span>Installation</span><span>Repair</span><span>Maintenance</span></p>
          </li>
          <li className="pillar pillar--air" data-reveal="">
            <span className="pillar__icon"><svg className="icon"><use href="#i-wind" /></svg></span>
            <h3 className="pillar__title">Indoor Air Quality</h3>
            <p className="pillar__tags"><span>Cleaner Air</span><span>Healthier Homes</span></p>
          </li>
          <li className="pillar pillar--service" data-reveal="">
            <span className="pillar__icon"><svg className="icon"><use href="#i-wrench" /></svg></span>
            <h3 className="pillar__title">HVAC Service</h3>
            <p className="pillar__tags"><span>Preventative Care</span><span>Repairs</span><span>Tune-Ups</span></p>
          </li>
        </ul>
      </div>
    </section>
  );
}
