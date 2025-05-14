import { RightArrowSeven } from "../svg";

export default function ScheduleForm() {
  return (
    <form id="contact-form">
      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>First name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>Last name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <div className="tp-contact-input schedule p-relative">
              <label>Email address</label>
              <input type="email" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>Zip code</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input schedule p-relative">
              <label>Phone number</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-12 col-lg-12">
            <div className="tp-contact-input schedule p-relative">
              <label>When would you like to visit?</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input schedule p-relative">
              <label>Additional information</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="tp-contact-input-remeber schedule">
              <input id="remeber" type="checkbox" />
              <label htmlFor="remeber">
                By submitting this form, you agree to the Acadia University
                privacy notice.
              </label>
            </div>
          </div>
          <div className="tp-schedule-btn">
            <button className="tp-btn">
              Submit{" "}
              <span>
                <RightArrowSeven/>
              </span>
            </button>
            <p className="ajax-response"></p>
          </div>
        </div>
      </div>
    </form>
  );
}
