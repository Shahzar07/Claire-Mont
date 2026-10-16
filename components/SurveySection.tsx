import { site } from '@/lib/site-config';

/**
 * Mirrors the reference's multi-step survey enquiry. With no backend yet, the final
 * step opens the visitor's email app with their answers (nothing is sent until they
 * press send). Phase 2: point "Book Your E-Survey" links at e-survey.html and swap
 * the email hand-off in lib/site.js (initSurveyForm) for a POST to the booking system.
 */
export default function SurveySection() {
  return (
    <section className="survey" id="survey" aria-labelledby="survey-title">
      <div className="container">
        <div className="survey__panel on-dark" data-reveal="">
          <div className="survey__intro">
            <p className="eyebrow eyebrow--light">Check availability · About 90 seconds</p>
            <h2 className="section-title" id="survey-title">Book Your <span className="hl">Survey</span></h2>
            <p className="survey__lead">Speak with one of our air conditioning specialists from the comfort of your home. We'll assess your requirements, recommend the most suitable options and answer any questions before preparing your quotation.</p>
            <ol className="survey__steps">
              <li><span className="survey__step-num">1</span><span><strong>Tell us about your space</strong>Your postcode, property and the rooms you'd like cooled.</span></li>
              <li><span className="survey__step-num">2</span><span><strong>Your E-Survey</strong>We review your requirements and recommend the right system.</span></li>
              <li><span className="survey__step-num">3</span><span><strong>Your quotation</strong>A clear quotation, prepared after your E-Survey.</span></li>
            </ol>
            <p className="survey__alt">Prefer to talk it through? <a href={site.phoneHref}><svg className="icon"><use href="#i-phone" /></svg>{site.phone}</a></p>
          </div>

          <div className="survey-card">
            <form className="survey-form is-first" action={`mailto:${site.email}`} method="post" encType="text/plain" noValidate data-survey-form="" data-survey-email={site.email}>
              <div className="survey-form__meta">
                <span data-survey-count="" aria-live="polite">Step 1 of 5</span>
                <span className="survey-form__time"><svg className="icon"><use href="#i-clock" /></svg>About 90 seconds</span>
              </div>
              <div className="survey-form__progress" aria-hidden="true"><span data-survey-bar=""></span></div>

              {/* Step 1 */}
              <fieldset className="survey-step is-active" data-survey-step="1">
                <legend className="survey-step__title" tabIndex={-1}>Where are we installing?</legend>
                <div className="field">
                  <label className="field__label" htmlFor="sv-postcode">Postcode</label>
                  <input className="field__input" id="sv-postcode" name="Postcode" type="text" autoComplete="postal-code" autoCapitalize="characters" placeholder="e.g. SW1A 1AA" required pattern="\s*[A-Za-z]{1,2}[0-9][A-Za-z0-9]?\s*[0-9][A-Za-z]{2}\s*" aria-describedby="sv-postcode-hint" data-error="Please enter a valid UK postcode." data-uppercase="" />
                  <p className="field__hint" id="sv-postcode-hint">We'll confirm we cover your area.</p>
                </div>
                <div className="field" role="radiogroup" aria-labelledby="sv-use-label">
                  <p className="field__label" id="sv-use-label">Is this for a home or a business?</p>
                  <div className="choices">
                    <label className="choice"><input type="radio" name="Property use" value="Home" required data-survey-branch="" /><span className="choice__box"><svg className="icon"><use href="#i-home" /></svg>Home</span></label>
                    <label className="choice"><input type="radio" name="Property use" value="Business" data-survey-branch="" /><span className="choice__box"><svg className="icon"><use href="#i-building" /></svg>Business</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 2 (home) */}
              <fieldset className="survey-step" data-survey-step="2" data-survey-when="Home">
                <legend className="survey-step__title" tabIndex={-1}>What type of property is it?</legend>
                <div className="field" role="radiogroup" aria-label="Property type">
                  <div className="choices">
                    <label className="choice"><input type="radio" name="Property type" value="Detached house" required /><span className="choice__box">Detached house</span></label>
                    <label className="choice"><input type="radio" name="Property type" value="Semi-detached / end of terrace" /><span className="choice__box">Semi-detached / end of terrace</span></label>
                    <label className="choice"><input type="radio" name="Property type" value="Mid-terrace" /><span className="choice__box">Mid-terrace</span></label>
                    <label className="choice"><input type="radio" name="Property type" value="Flat" /><span className="choice__box">Flat</span></label>
                    <label className="choice"><input type="radio" name="Property type" value="Maisonette" /><span className="choice__box">Maisonette</span></label>
                    <label className="choice"><input type="radio" name="Property type" value="Bungalow" /><span className="choice__box">Bungalow</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 2 (business) */}
              <fieldset className="survey-step" data-survey-step="2" data-survey-when="Business">
                <legend className="survey-step__title" tabIndex={-1}>What kind of premises?</legend>
                <div className="field" role="radiogroup" aria-label="Premises">
                  <div className="choices">
                    <label className="choice"><input type="radio" name="Premises" value="Office" required /><span className="choice__box">Office</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Retail / shop" /><span className="choice__box">Retail / shop</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Restaurant, café or bar" /><span className="choice__box">Restaurant, café or bar</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Gym or studio" /><span className="choice__box">Gym or studio</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Salon or clinic" /><span className="choice__box">Salon or clinic</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Server or comms room" /><span className="choice__box">Server or comms room</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Warehouse or industrial" /><span className="choice__box">Warehouse or industrial</span></label>
                    <label className="choice"><input type="radio" name="Premises" value="Something else" /><span className="choice__box">Something else</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 3 (home) */}
              <fieldset className="survey-step" data-survey-step="3" data-survey-when="Home">
                <legend className="survey-step__title" tabIndex={-1}>How many rooms would you like air conditioning in?</legend>
                <div className="field" role="radiogroup" aria-label="Number of rooms">
                  <div className="choices choices--count">
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="1" required /><span className="choice__box">1</span></label>
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="2" /><span className="choice__box">2</span></label>
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="3" /><span className="choice__box">3</span></label>
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="4" /><span className="choice__box">4</span></label>
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="5" /><span className="choice__box">5</span></label>
                    <label className="choice choice--center"><input type="radio" name="Rooms" value="6+" /><span className="choice__box">6+</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 3 (business) */}
              <fieldset className="survey-step" data-survey-step="3" data-survey-when="Business">
                <legend className="survey-step__title" tabIndex={-1}>How many rooms or zones need cooling?</legend>
                <div className="field" role="radiogroup" aria-label="Rooms or zones">
                  <div className="choices">
                    <label className="choice"><input type="radio" name="Rooms or zones" value="One room or zone" required /><span className="choice__box">One room or zone</span></label>
                    <label className="choice"><input type="radio" name="Rooms or zones" value="2–3" /><span className="choice__box">2–3</span></label>
                    <label className="choice"><input type="radio" name="Rooms or zones" value="4–6" /><span className="choice__box">4–6</span></label>
                    <label className="choice"><input type="radio" name="Rooms or zones" value="More than 6" /><span className="choice__box">More than 6</span></label>
                    <label className="choice choice--wide"><input type="radio" name="Rooms or zones" value="Whole building, not sure yet" /><span className="choice__box">Whole building, not sure yet</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 4 */}
              <fieldset className="survey-step" data-survey-step="4">
                <legend className="survey-step__title" tabIndex={-1}>What are you looking for?</legend>
                <div className="field" role="group" aria-labelledby="sv-units-label" data-min-checked="1">
                  <p className="field__label" id="sv-units-label">Which unit types are you considering? <span className="field__optional">Choose all that apply</span></p>
                  <div className="choices">
                    <label className="choice choice--check"><input type="checkbox" name="Unit types" value="Wall-mounted" /><span className="choice__box"><svg className="icon"><use href="#i-wall" /></svg>Wall-mounted</span></label>
                    <label className="choice choice--check"><input type="checkbox" name="Unit types" value="Floor-standing" /><span className="choice__box"><svg className="icon"><use href="#i-floor" /></svg>Floor-standing</span></label>
                    <label className="choice choice--check"><input type="checkbox" name="Unit types" value="Ducted or concealed" /><span className="choice__box"><svg className="icon"><use href="#i-ducted" /></svg>Ducted or concealed</span></label>
                    <label className="choice choice--check"><input type="checkbox" name="Unit types" value="Not sure yet" /><span className="choice__box"><svg className="icon"><use href="#i-survey" /></svg>Not sure yet</span></label>
                  </div>
                </div>
                <div className="field" role="radiogroup" aria-labelledby="sv-time-label">
                  <p className="field__label" id="sv-time-label">When would you like this installed?</p>
                  <div className="choices">
                    <label className="choice"><input type="radio" name="Timeframe" value="As soon as possible" required /><span className="choice__box">As soon as possible</span></label>
                    <label className="choice"><input type="radio" name="Timeframe" value="Within 1 month" /><span className="choice__box">Within 1 month</span></label>
                    <label className="choice"><input type="radio" name="Timeframe" value="Within 3–6 months" /><span className="choice__box">Within 3–6 months</span></label>
                    <label className="choice"><input type="radio" name="Timeframe" value="Just researching for now" /><span className="choice__box">Just researching</span></label>
                  </div>
                </div>
              </fieldset>

              {/* Step 5 */}
              <fieldset className="survey-step" data-survey-step="5">
                <legend className="survey-step__title" tabIndex={-1}>Your contact details</legend>
                <div className="form-grid">
                  <div className="field">
                    <label className="field__label" htmlFor="sv-first">First name</label>
                    <input className="field__input" id="sv-first" name="First name" type="text" autoComplete="given-name" required />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sv-last">Last name</label>
                    <input className="field__input" id="sv-last" name="Last name" type="text" autoComplete="family-name" required />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sv-email">Email</label>
                    <input className="field__input" id="sv-email" name="Email" type="email" autoComplete="email" required />
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sv-phone">Phone number</label>
                    <input className="field__input" id="sv-phone" name="Phone" type="tel" autoComplete="tel" placeholder="e.g. 07490 123456" required pattern="[0-9\s+\(\)\-]{7,20}" data-error="Please enter a valid phone number." />
                  </div>
                  <div className="field field--full">
                    <label className="field__label" htmlFor="sv-spaces">Tell us about the spaces you need cooled <span className="field__optional">Optional</span></label>
                    <textarea className="field__input" id="sv-spaces" name="Spaces and requirements" rows={2} placeholder="e.g. the main bedroom and home office, outdoor unit on the side wall"></textarea>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sv-when">Preferred E-Survey time <span className="field__optional">Optional</span></label>
                    <select className="field__input" id="sv-when" name="Preferred E-Survey time">
                      <option value="">No preference</option>
                      <option>Weekday morning</option>
                      <option>Weekday afternoon</option>
                      <option>Weekday evening</option>
                      <option>Weekend</option>
                    </select>
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="sv-source">How did you hear about us? <span className="field__optional">Optional</span></label>
                    <select className="field__input" id="sv-source" name="Heard about us via">
                      <option value="">Select</option>
                      <option>Google</option>
                      <option>Website</option>
                      <option>Referral</option>
                      <option>AI search</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </fieldset>

              <div className="survey-form__nav">
                <button className="btn btn--outline" type="button" data-survey-back=""><svg className="icon"><use href="#i-arrow-left" /></svg>Back</button>
                <button className="btn btn--flame" type="button" data-survey-next="">Continue <svg className="icon"><use href="#i-arrow" /></svg></button>
                <button className="btn btn--flame" type="submit" data-survey-submit="">Send My Request <svg className="icon"><use href="#i-arrow" /></svg></button>
              </div>
              <p className="survey-form__note">Sending opens your email app with your answers filled in, so nothing goes anywhere until you press send.</p>

              <div className="survey-done" data-survey-done="" hidden>
                <span className="survey-done__icon"><svg className="icon"><use href="#i-mail" /></svg></span>
                <h3 className="survey-done__title" tabIndex={-1}>Your email is ready to send</h3>
                <p>We've opened your email app with your answers addressed to <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>. <strong>Press send</strong> and we'll be in touch to arrange your E-Survey.</p>
                <label className="field__label" htmlFor="sv-summary">Email app didn't open? Copy your answers and email them to us:</label>
                <textarea className="field__input survey-done__summary" id="sv-summary" rows={5} readOnly data-survey-summary=""></textarea>
                <div className="survey-done__actions">
                  <button className="btn btn--primary" type="button" data-survey-copy=""><svg className="icon"><use href="#i-copy" /></svg><span data-survey-copy-label="">Copy Answers</span></button>
                  <button className="btn btn--outline" type="button" data-survey-edit="">Edit Answers</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
