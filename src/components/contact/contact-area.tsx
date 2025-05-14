import ContactForm from "../form/contact-form";


export default function ContactArea() {
  return (
    <section className="tp-contact-area tp-contact-p fix p-relative pt-150 pb-125">
      <div className="tp-contact-bg" style={{ backgroundImage: "url(/assets/img/live/contact-bg.png)" }}></div>
      <div className="tp-contact-shape">
        <span>
          <svg width="1920" height="559" viewBox="0 0 1920 559" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1958.7 6.55286C1332.03 310.106 2369.35 119.238 2232.58 220.873C2018.48 379.976 692.5 607.75 254.5 538.145C-27.1058 493.393 1387 130.595 -280 395.595" stroke="url(#paint0_linear_2756_1168)" strokeWidth="14" />
            <defs>
              <linearGradient id="paint0_linear_2756_1168" x1="92.1912" y1="171.542" x2="1827.4" y2="294.717" gradientUnits="userSpaceOnUse">
              </linearGradient>
            </defs>
          </svg>
        </span>
      </div>
      <div className="tp-contact-shape-2">
        {/* <img src="/assets/img/live/contact-shape-2.svg" alt="shape" /> */}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tp-contact-wrap p-relative">
              <div className="tp-contact-heading text-center">
                <h3 className="tp-contact-title">Get in Touch</h3>
                <p>We are here to answer any question you may have.</p>
              </div>
              <div className="tp-contact-from-box">
                <h3 className="tp-contact-from-title">Send a Message 👍🏻</h3>

                {/* form start */}
                <ContactForm />
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
