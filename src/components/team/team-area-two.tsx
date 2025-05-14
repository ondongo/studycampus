import Link from "next/link";
import TeamSliderTwo from "./slider/team-slider-two";

export default function TeamAreaTwo() {
  return (
    <section
      className="trainer-area pb-110 pt-110"
      style={{backgroundColor:"#FAF6F3"}}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div
              className="tp-trainer-5-wrapper mb-40 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="tp-section-5 mb-30">
                <h5 className="tp-section-5-subtitle mb-5">
                  Professional trainers
                </h5>
                <h3 className="tp-section-5-title">
                  Our team of personal trainers
                </h3>
                <p>
                  Alienum phaedrum torquatos nec eu, vis detraxitssa <br />{" "}
                  ericuliser ex, nihil expetendis in mei.
                </p>
              </div>
              <div className="tp-trainer-5-btn">
                <Link className="tp-btn-4" href="/university-leadership">
                  Get started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="tp-trainer-5-wrap wow fadeInUp"
              data-wow-delay=".5s"
            >
              {/* team slider */}
              <TeamSliderTwo />
              {/* team slider */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
