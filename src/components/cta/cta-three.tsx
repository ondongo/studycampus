import Image from "next/image";
import CtaForm from "../form/cta-form";
import shape_1 from "@/assets/img/cta/cta-3-shape-1.png";
import shape_2 from "@/assets/img/cta/cta-3-shape-2.png";
import shape_3 from "@/assets/img/cta/cta-3-shape-3.png";

export default function CtaThree() {
  return (
    <section className="cta-area tp-cta-3-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div
              className="tp-cta-3-section text-center wow fadeInLeft"
              data-wow-delay=".3s"
            >
              <h3 className="tp-cta-3-title">
                We <br /> are <br /> better <br /> together.
              </h3>
              <div className="tp-cta-3-border"></div>
              <p>
                Drop your contact details into the form, and <br /> we’ll reach
                out to you!
              </p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="tp-cta-3-wrap wow fadeInRight" data-wow-delay=".3s">
              <div className="tp-cta-3-form">
                {/* form start */}
                <CtaForm />
                {/* form end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-cta-3-shape">
        <div className="tp-cta-3-shape-1">
          <Image src={shape_1} alt="shape" />
          <div className="tp-cta-3-shape-2">
            <Image src={shape_2} alt="shape" />
          </div>
          <div className="tp-cta-3-shape-3">
            <Image src={shape_3} alt="shape" />
          </div>
        </div>
      </div>
    </section>
  );
}
